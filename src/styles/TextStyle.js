import { StyleSheet } from "react-native";
import { RFValue } from "../utils/Funtions";

export default StyleSheet.create({
    title: {
        fontWeight: "bold",
        color: 'white'
    },
    subtitle: {
        color: 'gray'
    },
    xl_size: { fontSize: RFValue(42) },
    l_size: { fontSize: RFValue(32) },
    m_size: { fontSize: RFValue(22) },
    s_size: { fontSize: RFValue(16) },
    xs_size: { fontSize: RFValue(12) },
})