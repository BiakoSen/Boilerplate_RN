import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from '../screens';

const Stack = createNativeStackNavigator();

const StackMain = () => {
    return (
        <Stack.Navigator initialRouteName="Main" screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: 'gray'
            }
        }}>
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    );
}

export default StackMain