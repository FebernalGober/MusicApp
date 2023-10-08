import React from 'react'
import { Text,
    View,
    SafeAreaView, FlatList
} from 'react-native'
import ProfileStyles from '../styles/ProfileStyles' 
import Card from '../components/Card'
import CardList from '../components/CardList';


function Profile() {
  return (
    <SafeAreaView style={ProfileStyles.container}>
<View style={ProfileStyles.contentContainer}>
    <Text>Mi perfil</Text>
    <Text>Ultimas Canciones Reproducidas</Text>
    </View>
   
    </SafeAreaView>
  )
}

export default Profile

 


  