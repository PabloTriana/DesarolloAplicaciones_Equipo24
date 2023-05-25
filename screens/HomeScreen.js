import { View, Text, StyleSheet, Image } from 'react-native'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo.svg")}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4078C1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 380,
        height: 430,

    }
});

