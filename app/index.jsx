import { View,Text, StyleSheet } from "react-native";
import {StatusBar} from 'expo-status-bar'
import {calColors} from '../src/colors/colors.jsx'




export default function Index() {
  return (
      <View style={styles.container}>
        <Text>Theme</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: calColors.light,
    alignItems: 'center',
    Color: calColors.white,
    justifyContent: 'center',
  },
});