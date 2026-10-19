// src/screens/ChatScreen.tsx
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { MessageBubble } from '../components/MessageBubble';
import { InputBar } from '../components/InputBar';

interface Message {
  id: string;
  text: string;
  isMe: boolean;
  timestamp: string;
}

export const ChatScreen = ({ route }: any) => {
  const { peerIp } = route.params || { peerIp: 'LAN' };
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: `Sessão iniciada com o IP: ${peerIp}`, isMe: false, timestamp: '12:00' }
  ]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isMe: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, newMessage]);
  };
return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageBubble text={item.text} isMe={item.isMe} timestamp={item.timestamp} />
        )}
        contentContainerStyle={styles.messageList}
      />
      <InputBar onSend={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#efeae2' },
  messageList: { paddingVertical: 16 },
});
