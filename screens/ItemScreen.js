import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ListItem } from 'react-native-elements'



const ItemScreen = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function obtenerItems() {

      const response = await fetch('https://pokeapi.co/api/v2/item?offset=0&limit=20')
      const data = await response.json();

      setItems(data.results);
      console.log(data)


    }

    obtenerItems();
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          items.length > 0
            ?
            items.map((items, index) => (
              <ListItem key={index} bottomDivider containerStyle={styles.contenedor}>
                <ListItem.Title style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>{items.name}</ListItem.Title>

                <Image
                  style={{ width: 75, height: 75, alignContent: 'center', justifyContent: 'center' }}
                  source={require(`../assets/items/${index + 1}.webp`)}
                />
              </ListItem>

            ))
            :
            <Text style={{ marginTop: 50, textAlign: 'center', fontSize: 20 }}>No hay item's </Text>
        }
      </ScrollView>
    </View>
  )
}

export default ItemScreen


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