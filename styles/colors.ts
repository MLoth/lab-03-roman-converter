import { Appearance } from 'react-native'

const neutralColors = {
  100: '#ffffff',
  200: '#f2f2f2',
  300: '#e6e6e6',
  400: '#cccccc',
  500: '#999999',
  600: '#666666',
  700: '#4d4d4d',
  800: '#333333',
  900: '#111111',
}

const reverseColors = () => {
  const reversed: { [key: string]: string } = {}
  for (let i = 0; i < Object.keys(neutralColors).length; i++) {
    reversed[Object.keys(neutralColors)[i]] =
      Object.values(neutralColors)[Object.values(neutralColors).length - 1 - i]
  }
  console.log(reversed)

  return reversed
}

console.log(Appearance.getColorScheme())

const colors =
  Appearance.getColorScheme() === 'dark' ? reverseColors() : neutralColors

export default {
  neutral: colors,

  primary: {
    100: '#e6f7ff',
    200: '#bae7ff',
    300: '#91d5ff',
    400: '#69c0ff',
    500: '#40a9ff',
    600: '#1890ff',
    700: '#096dd9',
    800: '#0050b3',
    900: '#003a8c',
  },
}
