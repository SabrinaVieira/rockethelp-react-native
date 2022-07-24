// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { Box, NativeBaseProvider,StatusBar } from 'native-base';
import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Signin } from './src/screens/Signin';
import { Loading } from './src/components/Loading'; 

import { THEME } from './src/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <NativeBaseProvider theme={THEME}>
      <Box>
        <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
        />
        { fontsLoaded ? <Signin /> : <Loading />}
      </Box>
    </NativeBaseProvider>

  );
}
