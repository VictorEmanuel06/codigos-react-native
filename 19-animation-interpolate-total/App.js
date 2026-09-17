import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
export default function App() {
  const larguraAnimada = useRef(new Animated.Value(0)).current;
  const alturaAnimada = useRef(new Animated.Value(50)).current;
  // const opacidadeAnimada = useRef(new Animated.Value(1)).current;
  useEffect(() => {

    Animated.sequence([
      Animated.timing(larguraAnimada, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: false
      }),

      Animated.timing(alturaAnimada, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: false
      })
    ]).start();

  }, [])

  let porcetagemLargura = larguraAnimada.interpolate({
    //Entrada
    inputRange: [0, 100],

    //Vai sair de 0% até 100%
    outputRange: ['0%', '100%']
  })

  let porcetagemAltura = alturaAnimada.interpolate({
    //Entrada
    inputRange: [50, 100],

    //Vai sair de 5% até 100%
    outputRange: ['5%', '100%']
  })

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: porcetagemLargura,
          height: porcetagemAltura,
          backgroundColor: '#456787',
          justifyContent: 'center',
          // opacity: opacidadeAnimada,
          // borderRadius: 30
        }}
      >

        {/*

        <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>
          Testando efeito...
        </Text>

        */}

      </Animated.View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})