// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatListScreen } from './src/screens/ChatListScreen';
import { ChatScreen } from './src/screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChatList">
        <Stack.Screen
          name="ChatList"
          component={ChatListScreen}
          options={{ title: 'WhatsApp LAN - Contatos' }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={({ route }: any) => ({ title: `Chat (${route.params?.peerIp || 'LAN'})` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
