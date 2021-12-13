import React from 'react'
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import { RFValue } from '../utils/Funtions'
import Feather from 'react-native-vector-icons/Feather'

interface Props {
    placeholder: string,
    buttonRight?: btnProps,
    buttonLeft?: btnProps,
    security?: boolean,
}

interface btnProps {
    name: string,
    fn?: () => void,
}

const InputPrincipal = ({
    placeholder,
    buttonRight,
    buttonLeft,
    security = false
}: Props) => {
    return (
        <View style={styles.container}>
            {buttonLeft &&
                <TouchableOpacity
                    disabled={buttonLeft.fn ? false : true}
                    onPress={buttonLeft.fn}
                >
                    <Feather name={buttonLeft.name} color='gray' size={RFValue(20)} />
                </TouchableOpacity>
            }
            <TextInput style={styles.input}
                placeholder={placeholder}
                placeholderTextColor='gray'
                secureTextEntry={security}
            />
            {buttonRight &&
                <TouchableOpacity
                    disabled={buttonRight.fn ? false : true}
                    onPress={buttonRight.fn}
                >
                    <Feather name={buttonRight.name} color='gray' size={RFValue(20)} />
                </TouchableOpacity>
            }
        </View>
    )
}

export default InputPrincipal

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: RFValue(35),
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    input: {
        flex: 1
    }
})
