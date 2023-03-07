import { useEffect, useState } from 'react'
import { Switch, SwitchChangeEvent, Text, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Container from '../../components/Container'

export default () => {
  const [isDark, setIsDark] = useState<boolean>(true)

  const getInitialMode = async (): Promise<void> => {
    const mode = await AsyncStorage.getItem('mode')
    if (mode) {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }

  useEffect(() => {
    getInitialMode()
  }, [])

  useEffect(() => {
    AsyncStorage.setItem('mode', isDark.toString())
  }, [isDark])

  return (
    <Container>
      <Text>Settings</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text>Mode: {isDark ? 'dark' : 'light'}</Text>
        <Switch
          value={isDark}
          onChange={(event: SwitchChangeEvent) =>
            setIsDark(event.nativeEvent.value)
          }
        />
      </View>
    </Container>
  )
}
