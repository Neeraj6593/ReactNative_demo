import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../Views/login';
import SignupScreen from '../Views/signup';
import Home from '../Views/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'none', headerShown: false}}>
        <Stack.Screen name="Login Screen" component={LoginScreen} />
        <Stack.Screen
          name="Sign Up"
          component={SignupScreen}
          options={{animation: 'none'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{animation: 'none'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
