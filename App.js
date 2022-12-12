import React from 'react';
import { View, Text, Button, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function ListScreen({navigation}) {

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

function PersonScreen({route}){
  const {item}=route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: 'black', fontSize: 20}}>Nombre: {item.Nombre}</Text>
      <Text style={{color: 'black', fontSize: 20}}>Edad: {item.Edad}</Text>
      <Text style={{color: 'black', fontSize: 20}}>Sexo: {item.Sexo}</Text>
    </View>
  );
}

function InfoScreen({}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
    <Text style={{color: 'black', fontSize: 20}}>Esta pantalla tiene toda la información necesaria sobre el uso de la aplicación</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'List') {
              iconName = focused
                ? 'body'
                : 'body';
            } else if (route.name === 'Info') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="List" component={GrupoHome} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function GrupoHome(){
  return(
  <Stack.Navigator initialRouteName="Listado">
     <Stack.Screen name="Listado" component={ListScreen}/>
    <Stack.Screen name="Persona" component={PersonScreen} />
  </Stack.Navigator>
  )
}
