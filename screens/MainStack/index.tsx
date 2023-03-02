import { createStackNavigator } from '@react-navigation/stack'

import Conversion from './Conversion'
import Settings from './Settings'

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Conversion" component={Conversion} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}
