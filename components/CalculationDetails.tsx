import { StyleSheet, Text, View } from 'react-native'
import { conversionTable } from '../hooks/useRomanConversion'

import { ConversionDetail } from '../interfaces/ConversionDetail'
import colors from '../styles/colors'

export default ({ details }: { details: ConversionDetail[] }) => {
  if (details.length > 1) {
    return (
      <View style={styles.container}>
        {details.map(detail => (
          <Text style={styles.detailItem} key={detail.romanNumber}>
            {detail.timesFound} x {detail.romanNumber} ={' '}
            {conversionTable[detail.romanNumber] * detail.timesFound}
          </Text>
        ))}
        {/* <Text style={styles.detailItem}>2 x II = 2</Text>
      <Text style={styles.detailItem}>2 x V = 10</Text> */}
      </View>
    )
  } else {
    return <Text>No details, provide a (valid) number 👆🏼.</Text>
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
    marginVertical: 16,
    backgroundColor: colors.neutral[200],
    borderRadius: 8,
    borderColor: colors.neutral[400],
    borderWidth: 1,
    // boxShadow: {
    //   shadowColor: colors.neutral[900],
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
    //   shadowOpacity: 1,
    //   shadowRadius: 5,
    //   elevation: 1,
    // },
  },

  detailItem: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '600',
    // fontFamily: '',
  },
})
