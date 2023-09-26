import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NotificationScreen from './Modules/Page/Notification/Notification';
import LoginScreen from './Modules/Login';
import BottomNavigationBar from './Modules/BottomNavigationBar';
import MoreScreen from './Modules/Page/More/MoreScreen';
import MessageScreen from './Modules/Page/Message/MessageScreen';
import ChattingScreen from './Modules/Page/Chatting/ChatingScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={BottomNavigationBar} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
          <Stack.Screen name="MoreScreen" component={MoreScreen} />
          <Stack.Screen name="MessageScreen" component={MessageScreen} />
          <Stack.Screen name="ChatingScreen" component={ChattingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};


export default App;
