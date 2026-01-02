import { StyleSheet, Text, View } from "react-native";
import { calColors } from "../colors/colors";


export default function Calculator() {
    return (
        <View style={styles.container}>
            <Text>Calculator</Text>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});