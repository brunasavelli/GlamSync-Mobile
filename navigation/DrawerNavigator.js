import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="GlamSync" screenOptions={{
            headerShown: false,
            drawerPosition: 'right',
            }} >
            <Drawer.Screen name="GlamSync" component={TabNavigator} />
            <Drawer.Screen name="Deslogar" component={Home} />
        </Drawer.Navigator>
    );
}