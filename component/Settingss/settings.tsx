import React from "react";
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import stylesSetting from "./stylesSetting";

const settings = () => {
    return(
       <SafeAreaView style = {stylesSetting.container}>
            <StatusBar backgroundColor={'#000000'}/>
            <View style = {stylesSetting.ViewSTbar}>
                <Image style = {stylesSetting.imgQR} 
                source={require('../../image/iconQR.png')}></Image>
                 <Image style = {stylesSetting.imgUser} 
                source={require('../../image/logoTelegram.png')}></Image>
                <Text style = {stylesSetting.textEdit}>Edit</Text>
            </View>
           
            <View>
                <Text style = {stylesSetting.textNQH}>N QH</Text>
            </View>

            <ScrollView>
                <Text style = {stylesSetting.textSDT}>+84 92 308 65 77</Text>
            
       
            <View style = {stylesSetting.shapeView1}>
                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhoto} 
                    source={require('../../image/iconPhoto.png')}></Image>
                    <Text style = {stylesSetting.textPhoto}>Set Photo or Video</Text>
                </View>
                <View style = {stylesSetting.crossbar}></View>

                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhoto}
                    source={require('../../image/icon@.png')}></Image>
                    <Text style = {stylesSetting.textPhoto}>Set Username</Text>
                </View>
            </View>

{/* ShapeView 2 */}
            <View style = {stylesSetting.shapeView2}>
                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhoto}
                     source={require('../../image/iconSaved.png')}></Image>
                     <Text style = {stylesSetting.textSaved}>Saved Messages</Text>
                     
                </View>
                <View style = {stylesSetting.crossbarShapeView2}></View>
                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhone}
                     source={require('../../image/iconPhone.png')}></Image>
                     <Text style = {stylesSetting.textSaved}>Recent Calls</Text>
                </View>
                <View style = {stylesSetting.crossbarShapeView2}></View>
                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhone}
                     source={require('../../image/iconDevice-removebg-preview.png')}></Image>
                     <Text style = {stylesSetting.textSaved}>Devices</Text>
                </View>
                <View style = {stylesSetting.crossbarShapeView2}></View>
                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgSaved}
                     source={require('../../image/iconChat-removebg-preview.png')}></Image>
                     <Text style = {stylesSetting.textSaved}>Chat Folders</Text>
                </View>
               
            </View>
{/* ShapeView 2 */}


{/* ShapeView 3 */}
            <View style = {stylesSetting.shapeView3}>
                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhoto} 
                    source={require('../../image/iconSounds-removebg-preview.png')}></Image>
                    <Text style = {stylesSetting.textSaved}>Notifications and Sounds</Text>
                </View>

                <View style = {stylesSetting.crossbarShapeView2}></View>

                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhoto} 
                    source={require('../../image/iconLock.png')}></Image>
                    <Text style = {stylesSetting.textSaved}>Privacy and Security</Text>
                </View>

                <View style = {stylesSetting.crossbarShapeView2}></View>

                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhoto} 
                    source={require('../../image/iconData.png')}></Image>
                    <Text style = {stylesSetting.textSaved}>Data and Storage</Text>
                </View>

                <View style = {stylesSetting.crossbarShapeView2}></View>

                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhone} 
                    source={require('../../image/iconApperance.png')}></Image>
                    <Text style = {stylesSetting.textSaved}>Appearance</Text>
                </View>

                <View style = {stylesSetting.crossbarShapeView2}></View>
                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhone} 
                    source={require('../../image/iconEnglish.png')}></Image>
                    <Text style = {stylesSetting.textSaved}>Language</Text>
                </View>

                <View style = {stylesSetting.crossbarShapeView2}></View>

                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhoto} 
                    source={require('../../image/iconEmoji-removebg-preview.png')}></Image>
                    <Text style = {stylesSetting.textSaved}>Stickers and Emoji</Text>
                </View>

            </View>

{/* ShapeView 3 */}

{/* ShapeView 4 */}

            <View style = {stylesSetting.shapeView4}>
                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhoto} 
                    source={require('../../image/iconTelegram-removebg-preview.png')}></Image>
                    <Text style = {stylesSetting.textSaved}>Telagram Premium</Text>
                </View>
            </View>

{/* ShapeView 4 */}

{/* ShapeView 5 */}
            <View style = {stylesSetting.shapeView5}>
                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhoto} 
                    source={require('../../image/iconQuestion.png')}></Image>
                    <Text style = {stylesSetting.textSaved}>Ask a Question</Text>
                </View>

                <View style = {stylesSetting.crossbarShapeView2}></View>

                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhoto} 
                    source={require('../../image/iconFAQ.png')}></Image>
                    <Text style = {stylesSetting.textSaved}>Telegram FAQ</Text>
                </View>

                <View style = {stylesSetting.crossbarShapeView2}></View>

                <View style = {{flexDirection: 'row'}}>
                    <Image style = {stylesSetting.imgPhoto} 
                    source={require('../../image/iconFeatures-removebg-preview.png')}></Image>
                    <Text style = {stylesSetting.textSaved}>Telagram Features</Text>
                </View>
            </View>
{/* ShapeView 5 */}


</ScrollView>
       </SafeAreaView>
    )
}

export default settings;
