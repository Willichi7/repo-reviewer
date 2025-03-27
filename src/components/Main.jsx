import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures it fills the screen
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#EDEDED", // Optional: Adjust based on your theme
  },
});

const Main = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <AppBar />
      <RepositoryList />
    </SafeAreaView>
    </SafeAreaProvider>
    
  );
};

export default Main;
