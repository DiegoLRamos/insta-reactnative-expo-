import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Modalstory(props){
  return(
    <View style={styles.modal}>
      <TouchableOpacity onPress={ props.close } >
        <View style={styles.infoUser}>
          <Image 
            source={{uri: props.dataUser.imgperfil}}
            style={styles.perfil} 
          />
          <Text style={styles.nome}>{props.dataUser.nome}</Text>
        </View>

        <Image 
          resizeMode="contain"
          source={{uri: props.dataUser.imgPublicacao}}
          style={styles.imgPost} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modal:{
    backgroundColor: '#000000',
    height: 800,
  },
  infoUser:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 30,
  },
  perfil:{
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  nome:{
    fontSize: 12, 
    color: '#FFF', 
    marginLeft: 10,
  },
  imgPost:{
    marginTop: -100,
    height: 800,
    width: 400,
  }
});