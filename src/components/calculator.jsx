import { StyleSheet, Text,  View } from "react-native";
import { calColors } from "../colors/colors";
import BButton from "./Button.jsx";
import React, { useState } from "react";



export default function Calculator() {
      const [firstValue, setFirstValue] = useState("");
      const [displayValue, setDisplayValue] = useState("0");
      const [operator, setOperator] = useState("");

const handleNumberInput = (num) => {
  if (displayValue === "0") {
    setDisplayValue(num);
  } else {
    setDisplayValue(displayValue + num);
  }
}
const handleOperatorInput = (operator) => {
  setOperator(operator);
  setFirstValue(displayValue);
  setDisplayValue("0");
}
const handleEquals = () => {
  const num1 = parseFloat(firstValue);
  const num2 = parseFloat(displayValue);
  if (operator === "+") {
    setDisplayValue((num1 + num2).toString());
  } else if (operator === "-") {
    setDisplayValue((num1 - num2).toString());
  } else if (operator === "*") {
    setDisplayValue((num1 * num2).toString());
  } else if (operator === "/") {
    setDisplayValue((num1 / num2).toString());
  }else if (operator === "%") {
    setDisplayValue((num1 % num2).toString());
  }
  setFirstValue("");
  setOperator("");
}
const handleClear = () => {
  setFirstValue("");
  setDisplayValue("0");
  setOperator("");
}
const handleBackspace = () => {
  if (displayValue.length === 1) {
    setDisplayValue("0");
  } else {
    setDisplayValue(displayValue.slice(0, -1));
  }
}
    return (
        <View style={styles.container}>
            <View style={styles.display}>
              <Text style={{fontSize:30,fontWeight:'semibold'}}>{firstValue + operator}</Text>
              <Text style={{fontSize:70,fontWeight:'semibold'}}>{displayValue}</Text>
            </View>
            <View style={styles.Keypad}>
               <BButton title='C' type='top' onPress={handleClear}/>
              <BButton title='«' type='top' onPress={handleBackspace}/>
<BButton title='%' type='top' onPress={() => handleOperatorInput('%')}/>
<BButton title='/' type='right' onPress={() => handleOperatorInput('/')}/>
<BButton title='7' type='number' onPress={() => handleNumberInput('7')}/>
<BButton title='8' type='number' onPress={() => handleNumberInput('8')}/>
<BButton title='9' type='number' onPress={() => handleNumberInput('9')}/>
<BButton title='x' type='right' onPress={() => handleOperatorInput('*')}/>
<BButton title='6' type='number' onPress={() => handleNumberInput('6')}/>
<BButton title='5' type='number' onPress={() => handleNumberInput('5')}/>
<BButton title='4' type='number' onPress={() => handleNumberInput('4')}/>
<BButton title='-' type='right' onPress={() => handleOperatorInput('-')}/>
<BButton title='1' type='number' onPress={() => handleNumberInput('1')}/>
<BButton title='2' type='number' onPress={() => handleNumberInput('2')}/>
<BButton title='3' type='number' onPress={() => handleNumberInput('3')}/>
<BButton title='+' type='right' onPress={() => handleOperatorInput('+')}/>
<BButton title='0' type='number' onPress={() => handleNumberInput('0')}/> 
<BButton title='00' type='number' onPress={() => handleNumberInput('00')}/>
<BButton title='.' type='number' onPress={() => handleNumberInput('.')}/>
<BButton title='=' type='right' onPress={handleEquals} />
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