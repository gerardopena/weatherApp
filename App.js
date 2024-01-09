import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StatusImage from './Components/StatusImage';
import { useState } from 'react';


export default function App() {
  const [city, setCity] = useState('City Name')

  return (
    <View style={styles.container}>
      <Text>{city}</Text>
      <Text>Date</Text>
      <Text>Temp</Text>
      {/* <StatusImage/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4287f5',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
