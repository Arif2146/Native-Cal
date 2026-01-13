import { StyleSheet, Text,  View } from "react-native";
import { calColors } from "../colors/colors";
import BButton from "./Button.jsx";



export default function Calculator() {


    return (
        <View style={styles.container}>
            <View style={styles.display}>
              <Text style={{fontSize:70,fontWeight:'semibold'}}>8765</Text>
            </View>
            <View style={styles.Keypad}>
               <BButton title='C' type='top'/>
              <BButton title='«' type='top'/>
<BButton title='%' type='top'/>
<BButton title='+' type='right'/>
<BButton title='7' type='number'/>
<BButton title='8' type='number'/>
<BButton title='9' type='number'/>
<BButton title='x' type='right'/>
<BButton title='6' type='number'/>
<BButton title='5' type='number'/>
<BButton title='4' type='number'/>
<BButton title='-' type='right'/>
<BButton title='1' type='number'/>
<BButton title='2' type='number'/>
<BButton title='3' type='number'/>
<BButton title='+' type='right'/>
<BButton title='0' type='number'/>
<BButton title='00' type='number'/>
<BButton title='.' type='number'/>
<BButton title='=' type='right'/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display: {
    flex: 1,
    backgroundColor: calColors.gray,
    paddingVertical:20,
    paddingHorizontal:40,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  Keypad: {
    flex: 2,
    backgroundColor: calColors.light,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap:30,
    padding:30,
  },
});