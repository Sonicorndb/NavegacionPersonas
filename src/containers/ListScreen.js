import React from 'react';
import { View, Button, FlatList} from 'react-native';

export default function ListScreen({navigation}) {

    const DATA = [
      { id: '1',
      Nombre: 'Alvaro',
      Edad: '12',
      Sexo: 'Hombre'},
      { id: '2',
      Nombre: 'Yonlee',
      Edad: '40',
      Sexo: 'Algo raro'},
      {id: '3', 
      Nombre: 'Goku',
      Edad: '87',
      Sexo: 'Hombre'},
      { id: '4', 
      Nombre: 'Willyrex',
      Edad: '0',
      Sexo: 'Hombre'},
      ];
  
    const renderItem = ({ item }) => (
      <View style={{marginTop: 30, width: 300, }}>
        <Button
          title={item.Nombre} onPress={() => navigation.navigate('Persona',{item})}/>
      </View>
    );
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }