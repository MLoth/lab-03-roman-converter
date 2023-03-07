// OPTIONEEL!
// Custom hook om de conversie van een arabic naar een roman getal te doen
// en de conversie van een roman naar een arabic getal te doen

import { useState } from 'react'
import { ConversionDetail } from '../interfaces/ConversionDetail'
import { ConversionTable } from '../interfaces/ConversionTable'

export let conversionTable: ConversionTable = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

const getAmountOfNumbers = (
  romanNumber: string,
  remaining: number,
): ConversionDetail | undefined => {
  let found = Math.floor(remaining / conversionTable[romanNumber])
  if (found > 0) {
    return {
      romanNumber: romanNumber,
      timesFound: found,
    }
  } else {
    return
  }
}

const getDetails = (arabicNumber: number) => {
  let amount = arabicNumber
  const details: ConversionDetail[] = []

  Object.keys(conversionTable)
    .reverse() // Start with the big numbers
    .map((key: string) => {
      const found = getAmountOfNumbers(key, amount)
      if (found) {
        amount -= found.timesFound * conversionTable[key]
        details.push(found)
      }
    })

  return details
}

export default function useRomanConversion() {
  const [message, setMessage] = useState<string>('')

  // useEffect(() => {
  //   console.log({ details })
  // }, [details])

  const makeArabicToRoman = (arabicNumber: number): ConversionDetail[] => {
    console.log('Performing arabic to roman conversion with', arabicNumber)
    // if (arabicNumber < 1 || arabicNumber > 9999) {
    //   console.log('Number is not in range')

    //   setMessage('Number is not in range')
    //   // TODO: show error
    //   return []
    // }

    let details: ConversionDetail[] = getDetails(arabicNumber)

    return details
  }

  return {
    message,

    makeArabicToRoman,
  }
}
