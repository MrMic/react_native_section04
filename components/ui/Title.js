import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 5,
    padding: 12,
  },
});
