import { StyleSheet, View } from 'react-native';


export const PositionScreen = () => {
  return (
    <View style={ styles.container }>
    
    <View style={ styles.cajaVerde }/>
    <View style={ styles.cajaMorada }/>
    <View style={ styles.cajaNaranja }/>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // width: 400,
        // height: 400,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28c4D9'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,

    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#FA023B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    cajaVerde: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // top: 0,
        // right: 0,

        ...StyleSheet.absoluteFillObject
    },
});