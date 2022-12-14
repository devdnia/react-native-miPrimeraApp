import { StyleSheet, View } from 'react-native'

export const Tarea6Screen = () => {
  return (
    <View style={ styles.container }> 
        <View style={ styles.cajaMorada } />
        <View style={ styles.cajaNaranja } />
        <View style={ styles.cajaAzul } />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'column',
        // justifyContent: 'space-between'
    },
    cajaMorada: {
        // width: 100,
        flex: 1,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        //alignSelf: 'flex-end',
        
    },
    cajaNaranja: {
        // width: 100,
        flex: 1,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // alignSelf: 'center',
    },
    cajaAzul: {
        // width: 100,
        flex: 2,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'center',
    },
});