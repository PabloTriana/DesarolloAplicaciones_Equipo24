import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ListItem, Avatar } from 'react-native-elements'


const PokemonesScreen = () => {

  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    async function obtenerPokemones() {

      const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      const data = await response.json();

      setPokemones(data.results);
      console.log(data)


    }

    obtenerPokemones();
  }, [])
  return (
    <View style={styles.container}>
      <ScrollView>
        {
          pokemones.length > 0
            ?
            pokemones.map((pokemon, index) => (
              <ListItem key={index} bottomDivider containerStyle={styles.contenedor}>
                <ListItem.Title style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }} >{pokemon.name}</ListItem.Title>
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                  }}
                />
              </ListItem>

            ))
            :
            <Text style={{ marginTop: 50, textAlign: 'center', fontSize: 20 }}>No hay pokemon's</Text>
        }
      </ScrollView>
    </View>
  )
}

export default PokemonesScreen;


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


