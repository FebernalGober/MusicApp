import React from 'react'
import { Text, 
    StyleSheet,
    View,
    SafeAreaView
} from 'react-native'

function Details() {
  return (
    <SafeAreaView style={styles.container}>
<View style={styles.contentContainer}>
    <Text>Details</Text>
    </View>
    </SafeAreaView>
  )
}

export default Details

 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentContainer: {
      flex: 1,
backgroundColor: 'black',
    },
  });
  