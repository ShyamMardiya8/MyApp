// http://192.168.29.185:3000/api/user

import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";

const ApiOperation = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const [fetchDataApi, setFetchDataApi] = useState([]);
  const [toggle, setToggle] = useState(false)
  const [selectedId, setSelectedId] = useState("")

  const handleSubmit = async () => {
    const body = { ...data };
    alert(
      `Submitted: ${data.firstName} ${data.lastName} ${data.email} ${data.phoneNumber}`
    );
    if (!toggle) {
      try {
        await axios.post("http://192.168.29.185:3000/api/user", body);
        alert("Data Posted Successfully!");
        fetchData();
        setData({ firstName: "", lastName: "", phoneNumber: "", email: "" }); 
        handleClear()
      } catch (err) {
        console.log(err.message);
        alert(err.message);
      }
    }
      else {
        try {
          const res = await axios.put(
            `http://192.168.29.185:3000/api/user/${selectedId}`,
            body
          );
          if (res.status === 201) {
            alert("data updated");
            handleClear()
            fetchData()
            setToggle(false)
          }
        } catch (err) {
          console.log(err.message);
        }
      }
  };

  const handleClear = () => {
    setData({
      firstName : "",
      lastName : "",
      email : "",
      phoneNumber : ""
    })
    setToggle(false)
  }
  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.29.185:3000/api/user");
      setFetchDataApi(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleUpdate = (id) => {
    setToggle(true)
    setSelectedId(id)
    const findUpdateId = fetchDataApi.find(i => i._id === id )
    setData({
      firstName :  findUpdateId.firstName,
      lastName: findUpdateId.lastName,
      email : findUpdateId.email,
      phoneNumber: findUpdateId.phoneNumber
    })
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://192.168.29.185:3000/api/user/${id}`);
      if (response.status === 200) {
        alert('deleted successfully')
        fetchData()
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  const renderHeader = () => (
    <View style={[styles.row, styles.header]}>
      <Text style={[styles.cell, styles.headerText, { flex: 1 }]}>First</Text>
      <Text style={[styles.cell, styles.headerText, { flex: 1 }]}>Last</Text>
      <Text style={[styles.cell, styles.headerText, { flex: 2 }]}>Email</Text>
      <Text style={[styles.cell, styles.headerText, { flex: 1 }]}>Phone</Text>
      <Text style={[styles.cell, styles.headerText, { flex: 1 }]}>Action</Text>
    </View>
  );

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.row,
        { backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff" },
      ]}
    >
      <Text style={[styles.cell, { flex: 1 }]}>{item.firstName}</Text>
      <Text style={[styles.cell, { flex: 1 }]}>{item.lastName}</Text>
      <Text style={[styles.cell, { flex: 2 }]}>{item.email}</Text>
      <Text style={[styles.cell, { flex: 1 }]}>{item.phoneNumber}</Text>
      <TouchableOpacity style={[styles.actionButton]} onPress={() => handleUpdate(item._id)}>
        <Text style={styles.actionText}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionButtonRed]} onPress={() => handleDelete(item._id)}>
        <Text style={styles.actionText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerTitle}>Fill This Form</Text>

        {/* FORM */}
        {["firstName", "lastName", "phoneNumber", "email"].map((field, index) => (
          <View style={styles.innerContainer} key={index}>
            <Text style={styles.label}>
              {field === "firstName"
                ? "First Name"
                : field === "lastName"
                ? "Last Name"
                : field === "phoneNumber"
                ? "Phone Number"
                : "Email Address"}
            </Text>
            <TextInput
              style={styles.input}
              placeholder={`Enter your ${field.replace(/([A-Z])/g, " $1")}`}
              placeholderTextColor="#aaa"
              value={data[field]}
              keyboardType={
                field === "phoneNumber"
                  ? "number-pad"
                  : field === "email"
                  ? "email-address"
                  : "default"
              }
              onChangeText={(text) => setData({ ...data, [field]: text })}
            />
          </View>
        ))}

        {/* Submit Button */}
        <View style={{flex : 1, flexDirection: "row", justifyContent: "space-around"}}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>{toggle ? "Update" : "submit"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.clearButton}
            activeOpacity={0.8}
            onPress={handleClear}
          >
            <Text style={styles.buttonText}>Clear Data</Text>
          </TouchableOpacity>
        </View>
        </View>

        {/* User List Table */}
        <Text style={styles.tableTitle}>User List</Text>

        <ScrollView horizontal style={styles.tableWrapper}>
          <View style={{ minWidth: 700 }}>
            {renderHeader()}
            <FlatList
              data={fetchDataApi}
              keyExtractor={(item) => item._id}
              renderItem={renderItem}
            />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  headerTitle: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333",
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
    fontWeight: "600",
    marginLeft: 20,
  },
  innerContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: "#e0e0e0",
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  clearButton: {
    backgroundColor: "red",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
    textAlign: "center",
  },
  tableWrapper: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#4a90e2",
    paddingVertical: 10,
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e6e6e6",
    paddingVertical: 12,
    paddingHorizontal: 5,
    alignItems: "center",
  },
  cell: {
    textAlign: "center",
    fontSize: 14,
    paddingHorizontal: 5,
  },
  actionButton: {
    backgroundColor: "#28a745",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "center",
  },
    actionButtonRed: {
    backgroundColor: "red",
    marginLeft: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "center",
  },
  actionText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default ApiOperation;
