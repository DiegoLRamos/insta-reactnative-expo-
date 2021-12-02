import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function List(props){
  const [imgLike, setImgLike] = useState(require('../../images/icons/like.png'));
  const [savePost, setSavePost] = useState(require('../../images/icons/nosave.png'));
  const [numLikers, setNumLikers] = useState(props.data.likers);

  function carregaIcone(statusLikeada){
    if(!statusLikeada){
      props.data.likeada = true;
      setNumLikers(props.data.likers++); 
      setImgLike(require('../../images/icons/likeada.png'));
      
    } else {
      props.data.likeada = false;
      setNumLikers(props.data.likers--); 
      setImgLike(require('../../images/icons/like.png'));
    }
  }

  function salvaPostagem(guardarPostagem){
    if(!guardarPostagem){
      props.data.savePublicacao = true;
      setSavePost(require('../../images/icons/save.png'));
      
    } else {
      props.data.savePublicacao = false;
      setSavePost(require('../../images/icons/nosave.png'));
    }



  }

  function mostraLikes(likers){
    if(likers === 0){
      return;
    }

    return( 
      <Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
    );
  }

  return(
    <View>
      <View style={styles.viewPerfil}>
        <Image
         source={{uri: props.data.imgperfil}}
          style={styles.fotoPerfil}
        />
        <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      </View>

      <Image
        resizeMode="cover"
        source={{uri: props.data.imgPublicacao}}
        style={styles.fotoPublicacao}
      />

      <View style={styles.areabtnlikeandsave}>
        <View style={styles.arealike}>
          <TouchableOpacity onPress={() => carregaIcone(props.data.likeada)}>
            <Image
              source={imgLike}
              style={styles.iconeLike}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnsend}>
            <Image
              source={require('../../images/icons/comment.png')}
              style={styles.iconeLike}
            />
          </TouchableOpacity>       

          <TouchableOpacity style={styles.btnsend}>
            <Image
              source={require('../../images/icons/send.png')}
              style={styles.iconeLike}
            />
          </TouchableOpacity>   
        </View>

        <TouchableOpacity style={styles.btnsend} onPress={() => salvaPostagem(props.data.savePublicacao)}>
          <Image
            source={savePost}
            style={styles.iconeLike}
          />
        </TouchableOpacity>   
        
      </View>

      {mostraLikes(props.data.likers)}

      <View style={styles.areaLegenda}>
        <Text style={styles.nomeRodape}>
          {props.data.nome}
        </Text>

        <Text style={styles.descRodape}>
          {props.data.descricao}
        </Text>
      </View>

      <View style={styles.areaCommments}>
        <Image
          source={{uri: props.data.imgperfil}}
          style={styles.fotoPerfil}
        />
      
        <TextInput style={styles.input} placeholder="Adicione um comentário..."/>

        <View style={styles.areaBtnComments}>
          <TouchableOpacity style={styles.btnsend}>
            <Image
            source={require('../../images/icons/likeada.png')}
            style={styles.iconsComments}
            />
          </TouchableOpacity>   

          <TouchableOpacity style={styles.btnsend}>
            <Image
            source={require('../../images/icons/hands.png')}
            style={styles.iconsComments}
            />
          </TouchableOpacity>       

          <TouchableOpacity style={styles.btnsend}>
            <Image
            source={require('../../images/icons/new.png')}
            style={styles.iconsComments}
            />
          </TouchableOpacity>           
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil:{
    flexDirection: 'row',
    flex:1,
    alignItems: 'center',
    padding: 8,
  },
  fotoPerfil:{
    width: 25,
    height: 25,
    borderRadius: 25
  },
  nomeUsuario:{
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  fotoPublicacao:{
    height: 400,
    alignItems: 'center'
  },
  areabtnlikeandsave:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 390,
    padding: 10
  },
  arealike:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  iconeLike:{
    width: 26,
    height: 26
  },
  btnsend:{
    paddingLeft: 5
  },
  likes:{
    fontWeight: 'bold',
    marginLeft: 5,
  },
  areaLegenda:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input:{
    marginRight: 80
  },
  areaCommments:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginBottom: 20
  },
  areaBtnComments:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
    padding: 5,
  },
  iconsComments:{
    width: 15,
    height: 15
  },
  nomeRodape:{
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  descRodape:{
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15
  }

});