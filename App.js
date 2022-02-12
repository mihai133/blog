import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './src/screens/indexScreen'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Feather } from '@expo/vector-icons'

const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
            title:'Blogs ', 
            // headerRight: () =>(
            //     <Feather name='plus' size={30} paddingRight={15} />
            //   ),
            }} 
            name="IndexScreen" 
            component={IndexScreen} />
        <Stack.Screen options={{title:'Show Screen '}} name="ShowScreen" component={ShowScreen} />
        <Stack.Screen 
          options={{title:'Create Screen' }} 
          name="CreateScreen" 
          component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () =>{
  return <Provider>
    <App />
    </Provider> 
}