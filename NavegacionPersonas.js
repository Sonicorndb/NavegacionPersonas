import React from 'react';
import { View, Text,Button,StatusBar,StyleSheet, FlatList, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
  Nombre: 'Persona',
  Edad: '87',
  Sexo: 'Hombre'},
  { id: '4', 
  Nombre: 'Willyrex',
  Edad: '0',
  Sexo: 'Hombre'},
  ];
  
 
  const Item = ({Nombre }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{Nombre}</Text>
    </View>
  );

function ListScreen({navigation}) {

  const ListStack = createNativeStackNavigator();

  <ListStack.Navigator>
    <ListStack.Screen name="Listado" component={ListScreen}/>
    <ListStack.Screen name="Persona" component={PersonScreen} />
  </ListStack.Navigator>

  const renderItem = ({ item }) => {
    return(
    <View>
      <Item Nombre={item.Nombre}/>
      <Button
        title='Detalles'onPress={() => Navigator.navigate("Person",{nombre: item.Nombre, edad: item.Edad,sexo: item.Sexo})}
      />
    </View>
    )
};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
    </View>
  );
}

function PersonScreen({route}){
  const{nombre,edad,sexo}=route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nombre: {nombre}</Text>
      <Text>Edad: {edad}</Text>
      <Text>Sexo: {sexo}</Text>
    </View>
  );
}

function InfoScreen({}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
    <Text>Esta pantalla tiene toda la información necesaria sobre el uso de la aplicación</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Listado') {
              iconName = focused
                ? 'contacts'
                : 'edit';
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
        <Tab.Screen name="Listado" component={ListScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'lightblue',
    width: 400,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  icon: {
    paddingLeft: 250,
  }
});