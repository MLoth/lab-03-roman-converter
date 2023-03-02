// React (native)
import { View } from 'react-native'
// Expo
import { StatusBar } from 'expo-status-bar'

// Third-party
import { NavigationContainer } from '@react-navigation/native'

// Local / own code / custom
import MainStack from './screens/MainStack'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <MainStack />
    </NavigationContainer>
  )
}
