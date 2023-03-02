import { StyleSheet, View } from 'react-native'

export default ({ children }: { children?: JSX.Element | JSX.Element[] }) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
})
