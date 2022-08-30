import React from 'react';
import { View, Text, Image, ScrollView, TextInput} from 'react-native';
import bulbasaurImG from './assets/img/Bulbasaur-pokemon.jpg';

const Pokemon = ()=> {
  return(
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize:45,
            alignSelf:"center",
            color: "green",
          }}
        
        > Bulbasaur </Text>
        
        <Image
          source={{
            uri: bulbasaurImG
          }}
          style={{
            width: 350, height:220, alignSelf:"center" }}
        />
        
        </View>

        <TextInput
          style={{
            height: 40, 
            borderColor: 'green',
            borderWidth: 1,
            padding: 5,
            margin: 15, 
          }}
          defaultValue="Digite aqui!!"
        />

        </ScrollView>
  ); 
}
export default Pokemon;