
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRScanner from './pages/QRScanner';
import Home from './pages/Home';

export default function App() {

const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="QRScanner" component={QRScanner}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


