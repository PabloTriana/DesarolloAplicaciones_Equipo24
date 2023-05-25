import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ListItem } from 'react-native-elements'

const VersionesScreen = () => {

    const [version, setVersion] = useState([]);

    useEffect(() => {
        async function obtenerVersion() {

            const response = await fetch('https://pokeapi.co/api/v2/version-group?offset=0&limit=19')
            const data = await response.json();

            setVersion(data.results);
            console.log(data)


        }
        obtenerVersion();
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    version.length > 0
                        ?
                        version.map((version, index) => (
                            <ListItem key={index} bottomDivider containerStyle={styles.contenedor}>
                                <Image
                                    style={{ width: 220, height: 200 }}
                                    source={require(`../assets/versiones/${index}.webp`)}
                                />
                                <ListItem.Title style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>{version.name}</ListItem.Title>
                            </ListItem>

                        ))
                        :
                        <Text style={{ marginTop: 50, textAlign: 'center', fontSize: 20 }}>No hay versiones</Text>
                }
            </ScrollView>
        </View>
    )
}

export default VersionesScreen;

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

