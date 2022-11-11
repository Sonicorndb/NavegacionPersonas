import React, {useState} from 'react'
import {Text, Switch, StyleSheet, Image, TextInput, View, Pressable, Alert} from "react-native";

const style = StyleSheet.create({
  centro:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  msg:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  Titulo:{
    marginTop: 50,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center'
  },
  swi:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center'
  },
  input:{
    height: 45,
    width: 120,
    marginLeft: 20,
    borderWidth: 2,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  boton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  tb: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});

export default function App(){

  const [isEnabled, setIsEnabled] = useState("");

  const ValidTexto  =/[a-zA-ZÁ-ÿ\s]+$/;
  const [Nombre, setNombre] = useState("");
  const [nombreValido, setNombreValido] = useState(false);
  const [Apellidos, setApellidos] = useState("");
  const [ApellidoValido, setApellidoValido] = useState(false);

  const [Correo, setCorreo] = useState("");
  const ValidCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z\s]+$/;
  const [CorreoValido, setCorreoValido] = useState(false);

  const [Edad, setEdad] = useState("");
  const ValidNumero =/[0-9\s]+$/;
  const [NumeroValido, setNumeroValido] = useState(false);

  const [Sw, setSw] = useState("")

  const [Display, setDisplay] = useState("");
  const [msg, setmsg] = useState("");
  const [Img, setImg] = useState("");
  const [full, setfull]= useState(false)

  const result = () => {
    setSw(isEnabled ? "devolver 7 caja de valeriana" : "una tortilla de papa" )
    setDisplay('on')
    FormCompleto(Nombre, Apellidos, Edad, Correo)
    if(Display == 'on' && full == true){
      setmsg('Tu nombre es '+ Nombre + ' ' + Apellidos + ', tu correo es '+ Correo + ', tienes '+ Edad + ' años y prefieres ' + Sw )
      setImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjZTxi_hu2KQ5JJKCBu-VWySRop_yIWviGkOUPzF1lzBbjctNGidO4Q9CcK3vPsqfwAk&usqp=CAU')
    }else{
      setmsg("")
      setImg(null)
    }
  }

  function FormCompleto(Nombre, Apellidos, Edad, Correo){
    if((nombreValido && ApellidoValido &&  NumeroValido && CorreoValido)==true ){
      setfull(true)
    }else{
      Alert.alert("Formulario incompleto")
      setfull(false)
    }
  }

  function Validarnombre(Nombre){
    if (ValidTexto.test(Nombre)){
      setNombreValido(true) 
      setNombre(Nombre)
    } else {
      setNombreValido(false)
      setNombre(null)
    }
  }

  function ValidarApellido(Apellidos){
    if (ValidTexto.test(Apellidos)){
      setApellidoValido(true) 
      setApellidos(Apellidos)
    } else {
      setApellidoValido(false)
      setApellidos(null)
    }
  }

  function ValidarCorreo(Correo){
    if (ValidCorreo.test(Correo)){
      setCorreoValido(true) 
      setCorreo(Correo)
    } else {
      setCorreoValido(false)
      setCorreo(null)
    }
  }

  function ValidarNumero(Edad){
    if (ValidNumero.test(Edad)){
      setNumeroValido(true) 
      setEdad(Edad)
    } else {
      setNumeroValido(false)
      setEdad(null)
    }
  }


  return(

    <View style={{flex: 1, backgroundColor: 'lightgray', alignItems: 'center'}}>

    <Text style={style.Titulo}>Formulario</Text>

    <View style={{flexDirection: 'row', marginTop: 20}}>
      <Text style={style.centro}>Nombre</Text>
      <TextInput
        style={style.input}
        value={Nombre}
        onChangeText={Nombre => Validarnombre(Nombre)}
      />
    </View>

    <View style={{flexDirection: 'row', marginTop: 20}}>
      <Text style={style.centro}>Apellidos</Text>
      <TextInput
        style={style.input}
        value={Apellidos}
        onChangeText={Apellidos =>  ValidarApellido(Apellidos)}
      />
    </View>

    <View style={{flexDirection: 'row', marginTop: 20}}>
      <Text style={style.centro}>Correo</Text>
      <TextInput
        style={style.input}
        value={Correo}
        onChangeText={Correo => ValidarCorreo(Correo)}
      />
    </View>
    
    <View style={{flexDirection: 'row', marginTop: 20}}>
      <Text style={style.centro}>Edad</Text>
      <TextInput
        style={style.input}
        value={Edad}
        onChangeText={Edad => ValidarNumero(Edad)}
      />
    </View>

      <Text style={[style.swi, {marginTop: 20}]}>¿Sin animo de lucro, tu qué prefieres?</Text>

    <View style={{flexDirection: 'row', marginTop: 20}}>
      <Text style={style.swi}>Una tortilla de papa</Text>
      <Switch
        style={{alignItems: 'center', marginLeft: 20, transform: [{ scaleX: 1.25 }, { scaleY: 1.25 }] }}
        trackColor={{false: 'green', true: 'red'}}
        thumbColor={isEnabled ? 'purple' : 'white'}
        onValueChange={() => setIsEnabled(previousState => !previousState)}
        value = {isEnabled}
      />
      <Text style={[style.swi, {marginLeft: 20}]}>Devolver 7 caja de valeriana</Text>
    </View>

    <View style={{marginTop: 20}}>
      <Pressable style={style.boton} onPress={result}>
        <Text style={style.tb}>Finalizar</Text>
      </Pressable>
    </View>
    

    <View style={{alignItems: 'center'}}>
      <Text style={style.msg}>{msg}</Text>
      <Image
        style={{width: 150, height: 150, marginTop: 10}}
        source={{
          uri: Img,
        }}
        />
    </View>

    </View>
  )

}
