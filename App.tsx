import { SafeAreaView } from 'react-native';
// import { FlexScreen } from './src/screens/FlexScreen';
import { Tarea10Screen } from './src/screens/Tarea10Screen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';

export const App = () => {

  return ( 
    <SafeAreaView style={{ 
      flex: 1,
      backgroundColor: '#28425B',
    }}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/*<FlexScreen />*/}
      <Tarea10Screen />
    </SafeAreaView>
    
    // <ContadorScreen />
  )
}

