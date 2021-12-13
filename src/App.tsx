import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackMain from './navigation/StackMain';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor='transparent'/>
      <StackMain />
    </NavigationContainer>
  );
}
 