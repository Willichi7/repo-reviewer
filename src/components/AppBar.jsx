import { Pressable, View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24292e",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
   
  },
});

const AppBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable>
          <Text style={styles.text}>Repositories</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AppBar;
