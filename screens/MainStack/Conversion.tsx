import { useState } from 'react'
import { Text } from 'react-native'

import CalculationDetails from '../../components/CalculationDetails'
import Container from '../../components/Container'
import Converter from '../../components/Converter'
import { ConversionDetail } from '../../interfaces/ConversionDetail'
import headers from '../../styles/headers'

export default () => {
  const [details, setDetails] = useState<ConversionDetail[]>([])

  return (
    <>
      <Container>
        <Text style={[headers.large]}>Roman number converter</Text>

        <Converter
          handleDetails={(details: ConversionDetail[]) => setDetails(details)}
        />

        <Text style={[headers.large]}>Details</Text>

        <CalculationDetails details={details} />
      </Container>
    </>
  )
}
