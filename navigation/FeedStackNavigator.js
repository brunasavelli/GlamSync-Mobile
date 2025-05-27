import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InitialFeed from "../screens/InitialFeed";
import DressFeed from "../screens/DressFeed";
import HatFeed from "../screens/HatFeed";
import ShoesFeed from "../screens/ShoesFeed";
import MakeUpFeed from "../screens/MakeUpFeed";
import AccessoryFeed from '../screens/AccessoryFeed';
import Notifications from "../screens/Notifications";

const Stack = createNativeStackNavigator();

export default function FeedStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="InitialFeed" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="InitialFeed" component={InitialFeed} />
            <Stack.Screen name="DressFeed" component={DressFeed} />
            <Stack.Screen name="HatFeed" component={HatFeed} />
            <Stack.Screen name="ShoesFeed" component={ShoesFeed} />
            <Stack.Screen name="MakeUpFeed" component={MakeUpFeed} />
            <Stack.Screen name="AccessoryFeed" component={AccessoryFeed} />
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    );
}