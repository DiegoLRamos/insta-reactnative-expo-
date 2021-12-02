import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Header(){
  return(
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
        source={require('../../images/icons/logo.png')}
        style={styles.logo}
        />
      </TouchableOpacity>

      <View style={styles.icons}>
        <TouchableOpacity>
          <Image
          source={require('../../images/icons/new.png')}
          style={styles.send}
          />
        </TouchableOpacity>   

        <TouchableOpacity>
          <Image
          source={require('../../images/icons/like.png')}
          style={styles.send}
          />
        </TouchableOpacity>  
            
        <TouchableOpacity>
          <Image
          source={require('../../images/icons/send.png')}
          style={styles.send}
          />
        </TouchableOpacity>      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 2
  },
  logo:{
    height: 35,
    width: 124,
  },
  icons:{
    width: 120,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  send:{
    width: 25,
    height: 25,
  }
});