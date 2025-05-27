import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Profile from "../screens/Profile";
import FeedStackNavigator from "../navigation/FeedStackNavigator";
import ChatStackNavigator from "../navigation/ChatStackNavigator";
import Post from "../screens/Post";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Profile" screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 80,
                paddingTop: 15,
                paddingHorizontal: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderWidth: 1,
                borderColor: '#dcdcdc',
            },
        }}>
            <Tab.Screen name="InitialFeed" component={FeedStackNavigator} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image source={require('../assets/img/home-icon.png')} style={{ width: 35, height: 35 }} />
                ),
            }} />
            <Tab.Screen name="Post" component={Post} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image source={require('../assets/img/plus-icon.png')} style={{ width: 35, height: 35 }} />
                ),
            }} />
            <Tab.Screen name="ChatStack" component={ChatStackNavigator} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image source={require('../assets/img/chat-icon.png')} style={{ width: 35, height: 35 }} />
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image source={require('../assets/img/profile-icon.png')} style={{ width: 35, height: 35 }} />
                ),
            }} />
        </Tab.Navigator>
    );
}
