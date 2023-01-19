import React from "react";
import {Image} from "react-native"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import chats from "../component/chats/chats";
import contacts from "../component/Contacts/contacts";
import settings from "../component/Settingss/settings";




const Tab = createBottomTabNavigator();

const bottomTab = () => {
    return(
        <Tab.Navigator screenOptions={{headerShown: false, 
        tabBarStyle : {backgroundColor: '#333333'}}} >
            <Tab.Screen name="Contacts" component={contacts}
            
            options = {{
                tabBarIcon: () => (
                    <Image source={require('../image/icon1.png')} style={{height:30, width:30}} />
                )
            }}>
            </Tab.Screen>
            <Tab.Screen name="Chats" component={chats}
            options = {{
                tabBarIcon: () => (
                    <Image source={require('../image/icon2.png')} style={{height:30, width:30}} />
                )
            }}>
            </Tab.Screen>
            <Tab.Screen name="Settings" component={settings}
            options = {{
                tabBarIcon: () => (
                    <Image source={require('../image/icon3.png')} style={{height:30, width:30}} />
                )
            }}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default bottomTab;