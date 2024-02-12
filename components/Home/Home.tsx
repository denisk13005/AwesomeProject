import React from 'react';

import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
const homeImage = require('../../assets/homeImage.gif')

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Une 📷 Vaut Mieux Qu'une 🚔</Text>
      <View style= {styles.imageContainer}>

      <Image source={homeImage} style={styles.image}/>
      </View>
      <Text style={styles.title}>Prendre une photo d'un horodateur hors service peut vous éviter une amande</Text>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', 
    height: '100%', 
    padding: 20,
    
  },
  title : {
    textAlign: 'center', 
    fontSize: 24,
    marginTop: 25,
    marginBottom: 25,
  },
  imageContainer:{
    backgroundColor : 'pink',
    display: 'flex',
    alignItems:'center',
    justifyContent :'center',
    height : 370,
    overflow:'hidden',
    borderRadius : 25
  },
  image: {
    objectFit:'contain', 
    width : '100%',
  }
});
