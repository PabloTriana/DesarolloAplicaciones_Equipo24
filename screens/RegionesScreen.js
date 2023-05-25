import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ListItem } from 'react-native-elements'


const RegionesScreen = () => {
  const [region, setRegion] = useState([]);

  useEffect(() => {
    async function obtenerRegion() {

      const response = await fetch('https://pokeapi.co/api/v2/region?offset=0&limit=10')
      const data = await response.json();

      setRegion(data.results);
      console.log(data)


    }

    obtenerRegion();
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          region.length > 0
            ?
            region.map((region, index) => (
              <ListItem key={index} bottomDivider >
                <ListItem.Title>{region.name}</ListItem.Title>
                <Image
                  style={{ width: 200, height: 200, alignContent: 'center', justifyContent: 'center' }}
                  source={require(`../assets/regiones/${index}.webp`)}
                />
              </ListItem>

            ))
            :
            <Text style={{ marginTop: 50, textAlign: 'center', fontSize: 20 }}>No hay regiones</Text>
        }
      </ScrollView>
    </View>
  )
}

export default RegionesScreen


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

