import React from 'react';
import { View, Text} from 'react-native';

export default function PersonScreen({route}){
    const {item}=route.params;
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: 'black', fontSize: 20}}>Nombre: {item.Nombre}</Text>
        <Text style={{color: 'black', fontSize: 20}}>Edad: {item.Edad}</Text>
        <Text style={{color: 'black', fontSize: 20}}>Sexo: {item.Sexo}</Text>
      </View>
    );
  }
