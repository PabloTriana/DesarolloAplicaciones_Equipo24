import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ListItem } from 'react-native-elements'




const LocacionesScreen = () => {
  const [locaciones, setLocaciones] = useState([]);

  useEffect(() => {
    async function obtenerLocaciones() {
      const response = await fetch('https://pokeapi.co/api/v2/location?offset=0&limit=10')
      const data = await response.json();

      setLocaciones(data.results);
      console.log(data)
    }
    obtenerLocaciones();
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          locaciones.length > 0
            ?
            locaciones.map((locaciones, index) => (
              <ListItem key={index} bottomDivider>
                <ListItem.Title>{locaciones.name}</ListItem.Title>
                <Image
                  style={{ width: 200, height: 200 ,alignContent:'center',justifyContent:'center'}}
                  source={require(`../assets/locaciones/${index + 1}.webp`)}
                />
              </ListItem>

            ))
            :
            <Text style={{ marginTop: 50, textAlign: 'center', fontSize: 20 }}>No hay pokemones</Text>
        }
      </ScrollView>
    </View>
  )



}


export default LocacionesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 2
  },
  contenedor: {
    backgroundColor: '#4078C1',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  }
});

