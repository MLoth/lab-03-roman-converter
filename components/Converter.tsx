import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import useRomanConversion from '../hooks/useRomanConversion'

import colors from '../styles/colors'

export default ({ handleDetails }: { handleDetails: Function }) => {
  const [arabic, setArabic] = useState<number>(0)
  const { makeArabicToRoman } = useRomanConversion()

  const calculateRoman = (arabic: number) => {
    const details = makeArabicToRoman(arabic)
    handleDetails(details)
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Eg. 41"
        // value={arabic.toString()}
        onChangeText={text => {
          // setArabic(parseInt(text.nativeEvent.text))
          calculateRoman(+text)
        }}
      />

      <Text style={styles.output}>XVII</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },

  input: {
    backgroundColor: 'white',
    borderColor: colors.neutral[400],
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    width: '100%',
    fontSize: 18,
  },

  output: {
    fontSize: 32,
    marginTop: 16,
    fontWeight: '800', // 'semibold' -> works on iOS, not on Android
    letterSpacing: 2,
    color: colors.primary[600],
    // fontFamily: 'monospace', -> works on Android, not on iOS
  },
})
