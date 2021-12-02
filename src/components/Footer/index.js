import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Footer(){
  return(
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image
          source={require('../../images/icons/home.png')}
          style={styles.icons}
          />
        </TouchableOpacity>   

        <TouchableOpacity>
          <Image
          source={require('../../images/icons/search.png')}
          style={styles.icons}
          />
        </TouchableOpacity>  
            
        <TouchableOpacity>
          <Image
          source={require('../../images/icons/new.png')}
          style={styles.icons}
          />
        </TouchableOpacity> 

        <TouchableOpacity>
          <Image
          source={require('../../images/icons/photo.png')}
          style={styles.icons}
          />
        </TouchableOpacity>      

        <TouchableOpacity>
          <Image
          source={{uri: 'https://instagram-clone-diegolramos.vercel.app/assets/img/persons/perfil-instagram.jpg'}}
          style={styles.perfil}
          />
        </TouchableOpacity>      
      </View>
  );
}

const styles = StyleSheet.create({
  footer:{
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    borderTopWidth: 0.2,
    shadowColor: '#000',
    elevation: 2
  },
  icons:{
    width: 25,
    height: 25,
  },
  perfil:{
    width: 25,
    height: 25,
    borderRadius: 50
  },
});