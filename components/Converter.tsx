import { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import useRomanConversion from '../hooks/useRomanConversion'
import { ConversionDetail } from '../interfaces/ConversionDetail'

import colors from '../styles/colors'

export default ({ handleDetails }: { handleDetails: Function }) => {
  const [arabic, setArabic] = useState<string>('')
  const [output, setOutput] = useState<string>('')
  const [hasError, setHasError] = useState<boolean>(false)

  const { makeArabicToRoman } = useRomanConversion()

  const showOutput = (details: ConversionDetail[]) => {
    let output = ''
    for (const d of details) {
      output += `${d.romanNumber.repeat(d.timesFound)}`
    }
    setOutput(output)
  }

  const validate = () => {
    if (arabic === '') {
      setOutput('Please provide a number.')
      setHasError(true)
    } else if (isNaN(+arabic)) {
      setOutput('Are you stupid 😡?')
      setHasError(true)
    } else if (+arabic > 9999) {
      setOutput('Number too large.')
      setArabic(arabic.slice(0, 4))
      calculateRoman(+arabic.slice(0, 4))
      setHasError(true)
    } else {
      setHasError(false)
    }
  }

  useEffect(() => {
    validate()
  }, [arabic])

  const calculateRoman = (arabic: number) => {
    const details: ConversionDetail[] = makeArabicToRoman(arabic)
    handleDetails(details)
    showOutput(details)
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        style={[styles.input, hasError && { borderColor: 'red', color: 'red' }]}
        placeholder="Eg. 41"
        value={arabic}
        onChangeText={text => {
          setArabic(text)
          calculateRoman(+text)
        }}
      />

      <Text style={[styles.output, hasError && { color: 'red' }]}>
        {output}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },

  input: {
    backgroundColor: colors.neutral[100],
    borderColor: colors.neutral[400],
    color: colors.neutral[900],
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
