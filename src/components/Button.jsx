import { StyleSheet, Text, TouchableOpacity} from "react-native";
import { calColors } from "../colors/colors";

export default function BButton({title,type,onPress}) {

    return(
        <TouchableOpacity style = {[
styles.button,
{
backgroundColor:
type === "top"
? calColors.btnDark
: type === "right"
? calColors.btnRight
: calColors.btnLight,
},
]} onPress={onPress}>
            <Text style={{fontSize:34,color: type === "number" ? calColors.black : calColors.btnLight,}}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
    height:70,
    width:70,
    borderRadius:10,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:calColors.btnDark,
},
});