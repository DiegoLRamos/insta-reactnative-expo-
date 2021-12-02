import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Modalstory from '../Modal';

export default function Story(props){
  const [modalVisible, setModalVisible] = useState(false);

  function openModal(){
    setModalVisible(true);
  }

  function closeModal(){
    setModalVisible(false);
  }

  return(
    <TouchableOpacity onPress={ openModal }>      
      <View style={styles.cardHistory}>
          <LinearGradient colors={['#f09433','#e6683c', '#dc2743', '#cc2366', '#bc1888']} style={styles.borderStory}>
            <View style={styles.borderImg}>
              <Image 
                source={{uri: props.data.imgperfil}}
                style={styles.imgHistory}
              />
            </View>
          </LinearGradient>
          <Text style={styles.name}>{props.data.nome}</Text>

          <Modal transparent={true} animationType="fade" visible={modalVisible}>
            <Modalstory close={ closeModal } dataUser={props.data} />
          </Modal>
        </View>
     </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardHistory: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 120,
  },
  borderStory:{
    borderRadius: 50,
    padding: 2,
  },
  borderImg:{
    borderWidth: 3, 
    borderColor: '#FFFFFF', 
    borderRadius: 50
  },
  imgHistory: {
    borderRadius: 50,
    height: 65,
    width: 65,
  },
  name: {
    fontSize: 12
  }
});