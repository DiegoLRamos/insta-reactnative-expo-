import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';

import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Story from './src/components/Story';
import List from './src/components/List';

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: '1', 
      nome: 'Lucas Silva', 
      descricao: 'Mais um dia de muitos bugs :)', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      savePublicacao: false,  
      likeada: false, 
      likers: 0
     },
    {
      id: '2', 
      nome: 'Matheus', 
      descricao: 'Isso sim é ser raiz!!!!!', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
      savePublicacao: false, 
      likeada: false, 
      likers: 1
    },
    {
      id: '3', 
      nome: 'Jose Augusto', 
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
      savePublicacao: false, 
      likeada: false, 
      likers: 2
    },
    {
      id: '4', 
      nome: 'Gustavo Henrique', 
      descricao: 'Isso sim que é TI!', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
      savePublicacao: false, 
      likeada: false, 
      likers: 3
    },
    {
      id: '5', 
      nome: 'Guilherme', 
      descricao: 'Boa tarde galera do insta...', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      savePublicacao: false, 
      likeada: false, 
      likers: 4
    },
  ]);

  const [persons, setPersons] = useState([
    {
      id: '1', 
      nome: 'Diego Ramos', 
      imgperfil: 'https://instagram-clone-diegolramos.vercel.app/assets/img/persons/perfil-instagram.jpg', 
      imgPublicacao: 'https://lh5.googleusercontent.com/p/AF1QipOPh5xaznfSbo3bq077D1ef1URG2o-wfnoiNfDi=w600-h650-p-k-no',
    },
    {
      id: '2', 
      nome: 'Luiz Fernando', 
      imgperfil: 'https://instagram-clone-diegolramos.vercel.app/assets/img/persons/65.jpg', 
      imgPublicacao: 'https://lh5.googleusercontent.com/p/AF1QipOsS46c6BRngcVawsEs2YSsqWcj6nIkAxHxJ5e3=w600-h321-p-k-no',
    },
    {
      id: '3', 
      nome: 'Irinha', 
      imgperfil: 'https://instagram-clone-diegolramos.vercel.app/assets/img/persons/36.jpg', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
    },
    {
      id: '4', 
      nome: 'Manu', 
      imgperfil: 'https://instagram-clone-diegolramos.vercel.app/assets/img/persons/2.jpg',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
    },

    {
      id: '5', 
      nome: 'Mirella', 
      imgperfil: 'https://instagram-clone-diegolramos.vercel.app/assets/img/persons/13.jpg', 
      imgPublicacao: 'https://instagram-clone-diegolramos.vercel.app/assets/img/persons/13.jpg',
    },
    {
      id: '6', 
      nome: 'Carlos Adão', 
      imgperfil: 'https://instagram-clone-diegolramos.vercel.app/assets/img/persons/25.jpg', 
      imgPublicacao: 'https://instagram-clone-diegolramos.vercel.app/assets/img/persons/25.jpg',
    },
    {
      id: '7', 
      nome: 'Seu Zé', 
      imgperfil: 'https://instagram-clone-diegolramos.vercel.app/assets/img/persons/90.jpg', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
    },
    {
      id: '8', 
      nome: 'Lucas', 
      imgperfil: 'https://instagram-clone-diegolramos.vercel.app/assets/img/persons/59.jpg',
      imgPublicacao: 'https://instagram-clone-diegolramos.vercel.app/assets/img/posts/pedraMacela.jpg', 
    },
  ]);

  return (
    <View style={styles.container}>
      <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={ (item) => item.id }
            data={persons}
            renderItem={ ({ item }) => <Story data={item} /> }
          />

          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={ (item) => item.id }
            data={feed}
            renderItem={ ({ item }) => <List data={item} /> }
          />
      </ScrollView>
     <Footer />
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 30
  },
  areaCards:{
    height: 110, 
    width: 400,
    backgroundColor: 'pink',
  },
  box:{
    width: 100,
    height: 100,
  }
});