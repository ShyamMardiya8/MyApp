import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { user } from '../constant/constant';

const { width } = Dimensions.get('window');
const numColumns = 3; // Number of columns in the grid
const itemSize = (width - 60) / numColumns; // Adjust 40 for total horizontal margin

const Grid = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {user.map((i) => (
          <View key={i.id} style={styles.itemContainer}>
            <Text style={styles.itemText}>{i.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: itemSize,
    height: itemSize,
    backgroundColor: '#add8e6',
    marginBottom: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Grid;
