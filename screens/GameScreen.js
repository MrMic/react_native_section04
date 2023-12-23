import { StyleSheet, Text, View } from "react-native";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <View>
        <Text>Opponent's Guess</Text>
        {/* GUESS */}
        <View>
          <Text>Higher or Lower?</Text>
          {/*  + - */}
        </View>
        <View>
          <Text>LOG ROUNDS</Text>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
});
