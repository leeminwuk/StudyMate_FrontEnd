import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NotificationScreen from './Modules/Page/Notification/Notification';
import LoginScreen from './Modules/Login';
import HomeScreen from './Modules/Page/Home/HomeScreen';
import BottomNavigationBar from './Modules/BottomNavigationBar';
import MoreScreen from './Modules/Page/More/MoreScreen';
import MessageScreen from './Modules/Page/Message/MessageScreen';
import ChattingScreen from './Modules/Page/Chatting/ChatingScreen';
import FeedScreen from './Modules/Page/Feed/FeedScreen';
import PostScreen from './Modules/Page/Post/PostScreen';
import { DataProvider } from './Modules/DataContext';
import WriteScreen from './Modules/Page/Writing/WriteScreen';
import RegistrationScreen from './Modules/Page/Registration/RegistrationScreen';
import TutorSelectScreen from './Modules/Page/TutorSelect/TutorSelectScreen';
import SignupScreen from './Modules/Page/Signup/SignupScreen';
import Login2Screen from './Modules/Login2/LoginScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <DataProvider>

    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Main" component={BottomNavigationBar} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
          <Stack.Screen name="MoreScreen" component={MoreScreen} />
          <Stack.Screen name="MessageScreen" component={MessageScreen} />
          <Stack.Screen name="ChatingScreen" component={ChattingScreen} />
          <Stack.Screen name="Feed" component={FeedScreen} />
          <Stack.Screen name="Post" component={PostScreen} />
          <Stack.Screen name="WriteScreen" component={WriteScreen} />
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
          <Stack.Screen name="TutorSelectScreen" component={TutorSelectScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="Login2Screen" component={Login2Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </DataProvider>
  );
};


export default App;
