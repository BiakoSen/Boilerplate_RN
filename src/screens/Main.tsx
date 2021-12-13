import React from 'react'
import { ScrollView, Text } from 'react-native'
import InputPrincipal from '../components/InputPrincipal'
import { Containers, TextStyle } from '../styles'

const Main = () => {
    return (
        <ScrollView style={Containers.principal}>
            <Text style={[
                TextStyle.title,
                TextStyle.xl_size
            ]}>Main</Text>
            <Text style={[
                TextStyle.subtitle,
                TextStyle.xl_size
            ]}>Main</Text>
            <Text style={[
                TextStyle.title,
                TextStyle.l_size
            ]}>Main</Text>
            <Text style={[
                TextStyle.subtitle,
                TextStyle.l_size
            ]}>Main</Text>
            <Text style={[
                TextStyle.title,
                TextStyle.m_size
            ]}>Main</Text>
            <Text style={[
                TextStyle.subtitle,
                TextStyle.m_size
            ]}>Main</Text>
            <Text style={[
                TextStyle.title,
                TextStyle.s_size
            ]}>Main</Text>
            <Text style={[
                TextStyle.subtitle,
                TextStyle.s_size
            ]}>Main</Text>
            <Text style={[
                TextStyle.title,
                TextStyle.xs_size
            ]}>Main</Text>
            <Text style={[
                TextStyle.subtitle,
                TextStyle.xs_size
            ]}>Main</Text>

            <InputPrincipal
                placeholder='Texto de ejemplo'
                buttonLeft={{ name: 'user' }}
                buttonRight={{ name: 'eye' }}
            />

        </ScrollView>
    )
}

export default Main

