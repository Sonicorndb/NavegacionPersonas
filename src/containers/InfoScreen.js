import React from 'react';
import { View, Text} from 'react-native';
  
export default function InfoScreen({}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
      <Text style={{color: 'black', fontSize: 20}}>Esta pantalla tiene toda la información necesaria sobre el uso de la aplicación</Text>
      </View>
    );
  }