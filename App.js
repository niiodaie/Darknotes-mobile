import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import MuseLabScreen from './screens/MuseLabScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} onLogin={setUser} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="MuseLab">
            {props => <MuseLabScreen {...props} user={user} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}