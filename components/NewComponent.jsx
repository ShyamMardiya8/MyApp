import { View, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const NewComponent = () => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: "https://www.npmjs.com/package/react-native-webview" }} 
        style={styles.webview}
      />
    </View>
  );
};

export default NewComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  webview: {
    flex: 1
  }
});
