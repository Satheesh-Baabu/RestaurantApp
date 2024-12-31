import { View, Button} from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Button title="Scan QR" onPress={()=>navigation.navigate('MenuList')}/>
    </View>
  )
}

export default Home