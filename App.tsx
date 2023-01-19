import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import chats from "./component/chats/chats";
import contacts from "./component/Contacts/contacts";
import bottomTab from "./Tab/bottomTab";
import settings from "./component/Settingss/settings";
import FindPeople from "./component/Contacts/FindPeople";

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="bottomTab" screenOptions={{headerShown : false}}>
            <Stack.Screen name="bottomtab" component={bottomTab}></Stack.Screen>           
            <Stack.Screen name="chats" component={chats}></Stack.Screen>
            <Stack.Screen name="contacts" component={contacts}></Stack.Screen>
            <Stack.Screen name="settings" component={settings}></Stack.Screen>
            <Stack.Screen name="FindPeople" component={FindPeople}></Stack.Screen>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;