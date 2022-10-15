import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button ,TextInput} from 'react-native';
import React,{useState} from 'react';

export default function App() {
  const [user,setUser]=useState("Edwin");
  const [fruit,setFruit]=useState("Mango");
  const[price,setPrice]=useState(5)
  const pressHandler=()=>{
    setUser("Peter")
    setFruit("WaterMelon")
    setPrice(200)
  }
  return (
    <View style={styles.container}>
      <Text>{user} is eating {fruit} which cost {price} dollars</Text>
      <TextInput style = {styles.textinput}
               placeholder = "Enter the user"
               onChangeText={(text) => setUser(text)}/>
      <TextInput style = {styles.textinput}
               placeholder = "Enter the fruit"
               onChangeText={(user) => setFruit(user)}/>
      <TextInput style = {styles.textinput}
               placeholder = "Enter the Price"
               onChangeText={(price) => setPrice(price)}/>
      <View style={styles.edwin}></View>
      <Button
      onPress={pressHandler}
       title='change'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput:{
    borderWidth:1,
    borderColor:"black",
    width:300,
    height:68,
    padding:10,
    margin:20,
    },
  edwin:{
    marginTop:20,
  }
});
