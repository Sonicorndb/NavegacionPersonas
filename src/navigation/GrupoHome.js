import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../containers/ListScreen';
import PersonScreen from '../containers/PersonScreen';

const Stack = createNativeStackNavigator();

export default function GrupoHome(){
    return(
    <Stack.Navigator initialRouteName="Listado">
       <Stack.Screen name="Listado" component={ListScreen}/>
      <Stack.Screen name="Persona" component={PersonScreen} />
    </Stack.Navigator>
    )
  }