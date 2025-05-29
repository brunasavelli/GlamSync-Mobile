import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Chats from "../screens/Chats";
import Message from "../screens/Message";

const Stack = createNativeStackNavigator();

export default function ChatStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Chats" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Chats" component={Chats} />
            <Stack.Screen name="Message" component={Message} options={{
                    presentation: 'card'
                }} />
        </Stack.Navigator>
    );
}