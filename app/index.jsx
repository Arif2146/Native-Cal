import { Stack } from "expo-router";
import Calculator from "../src/components/calculator.jsx";


export default function Index() {
  return (
   <>
    <Stack.Screen  options={{title:'Calculator'}}/>
    <Calculator/>
   </>
  );
}