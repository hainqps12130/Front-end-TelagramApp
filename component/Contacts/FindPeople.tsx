import React from "react";
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import contacts from "./contacts";
import stylesFind from "./stylesFind";

const FindPeople = ({navigation}: {navigation: any}) => {
    return(
        <SafeAreaView style = {stylesFind.container}>
            <StatusBar backgroundColor={'#000000'}></StatusBar>

            <View>
                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesFind.imgBack} 
                    source={require('../../image/iconBack.png')}></Image>
                    <TouchableOpacity onPress={() => navigation.navigate(contacts)}>
                        <Text style = {stylesFind.textBack}>Back</Text>
                    </TouchableOpacity>
                    <Text style = {stylesFind.textTitle}>People Nearby</Text>
                </View>
            </View>

            <Image style = {stylesFind.imgNear}
             source={require('../../image/iconNear-removebg-preview.png')}></Image>

             <Text style = {stylesFind.textPeople}>People Nearby</Text>
             <View style = {{marginTop: 10}}>
                <Text style = {stylesFind.text}>Quickly add people nearby who are also</Text>
                <Text style = {stylesFind.text}>viewing this section and discover local</Text>
                <Text style = {stylesFind.text}>group chats</Text>
             </View>

            <View style = {{marginTop: 20}}>
                <Text style = {stylesFind.text}>Please allow on location access to enable</Text>
                <Text style = {stylesFind.text}>this feature</Text>
            </View>

            <TouchableOpacity style = {stylesFind.btnAllow}>
                <Text style = {stylesFind.textbtnAloow}>Allow in Settings</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default FindPeople;