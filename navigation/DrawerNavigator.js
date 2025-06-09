import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStackNavigator from "./HomeStackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="GlamSync" screenOptions={{
            headerShown: false,
            drawerPosition: 'right',
            drawerStyle: {
                backgroundColor: '#f7f7f7',
            },
            drawerActiveTintColor: '#F07070',
            drawerInactiveTintColor: '#999',
            drawerLabelStyle: {
                fontSize: 15,
                fontFamily: 'Montserrat-SemiBold',
            },
            drawerItemStyle: {
                marginVertical: 5,
                paddingHorizontal: 20,
            },
        }} >
            <Drawer.Screen name="GlamSync" component={TabNavigator} />
            <Drawer.Screen name="Log Out" component={HomeStackNavigator} />
        </Drawer.Navigator>
    );
}