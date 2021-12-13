import { StyleSheet } from "react-native";
import Colors from "./Colors";
import Dimensions from "./Dimensions";

export default StyleSheet.create({
    principal: {
        flex: 1,
        backgroundColor: Colors.primary.main,
        paddingHorizontal: Dimensions.marginGlobal
    }
})