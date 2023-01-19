import React, {useState} from "react";
import { FlatList,Alert, Image, Modal, 
    SafeAreaView, StatusBar, Text,
    TextInput, TouchableOpacity, View,  } from "react-native";
import styles from "./styles";
import {SwipeListView} from 'react-native-swipe-list-view';
import FindPeople from "./FindPeople";
import stylesInvite from "./stylesInvite";
import CheckBox from '@react-native-community/checkbox';

const DATA_PHONE = [
    {
        id: 1,
        name: 'Quốc hải',
        image: require('../../image/logoTelegram.png'),
        sdt: '0923086577',
    },
    {
        id: 2,
        name: 'Quốc hải',
        image: require('../../image/logoTelegram.png'),
        sdt: '0923086577',
    },
    {
        id: 3,
        name: 'Quốc hải',
        image: require('../../image/logoTelegram.png'),
        sdt: '0923086577',
    }
]

const DATA_Invite = [
    {
        id: 1,
        image: require('../../image/logoTelegram.png'),
        name: 'Quốc Hải'
    },
    {
        id: 1,
        image: require('../../image/logoTelegram.png'),
        name: 'Hải Nguyễn'
    },
    {
        id: 1,
        image: require('../../image/logoTelegram.png'),
        name: 'Hải Quốc'
    }

]

const contacts = ({navigation}: {navigation: any}) => {

const [modalVisible, setModalVisible] = useState(false);
const [modalVisibleSort, setModalVisibleSort] = useState(false);
const [modalInviteFriends, setModalInviteFriends] = useState(false);
const [task, setTask] = useState('')
const [numberAddInput, setnumberAddInput] = useState([1])
const [Data, setdata] = useState(DATA_PHONE);
const [inputFirstName, setinputFirstName] = useState('');
const [inputLastName, setinputLastname] = useState('');
const [Modalquit, setModalquit] = useState(false);
const [inputSDT, setinputSDT] = useState('')
const [DataInvite, setDataInvite] = useState(DATA_Invite);


    const handleAddTask = () => {
        if(task.length === 0){
            Alert.alert("bạn vui lòng nhập sđt");
            return false;
        }
        Alert.alert(task);
    }

    const addInput = () => {
        setnumberAddInput([...numberAddInput, 1]);
      };

      
    const handDelete = ({item, index}) => {
        let newContact = [...numberAddInput];
        newContact.splice(index, 1);
        setnumberAddInput(newContact);
    };

    const deleteItem = ({item, index}) => {
        let DataItem = [...Data];
        DataItem.splice(index, 1);
        setdata(DataItem);
    }

    const renderItemSDT = ({item, index}) => {
        return(
            <View>
            <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => {
                handDelete(item);
            }}>
                <Image style = {styles.imgTru} 
                source={require('../../image/iconTru-removebg-preview.png')}></Image>
            </TouchableOpacity>
            <Text style= {styles.textDĐ}>di động</Text>

            <View style = {styles.crossbarHeight}></View>

            <TextInput style = {styles.inputDD}
            placeholder = "+"
            placeholderTextColor={'white'}
            keyboardType = 'number-pad'
            onChangeText={(text) => setTask(text)}
            >

            </TextInput>
        </View>
        <View style = {styles.crossbarNewContactDD}></View>
        </View>
        )
    }

    const renderItemData = ({item}) => {
        return(
            <View style = {styles.ViewRenderDATAPHONE}>
                <Image style = {styles.imageItem}
                 source={item.image}></Image>
            <View style = {{flexDirection: 'column'}}>
                <Text style={styles.textItem}>
                    {item.name}</Text>
                <Text style={styles.textMessage}>
                    {item.sdt}</Text>
                </View>
            </View>
        )
    }

    const renderItemInvite = ({item}) => {
        return(
            <View style = {stylesInvite.ViewRenderInvite}>
                <Image style = {stylesInvite.imageItem}
                 source={item.image}></Image>
                 <Text style = {stylesInvite.textItem}>
                     {item.name} </Text>

                <CheckBox
                style = {stylesInvite.checkBox}
                disabled={false}
                onAnimationType = 'fill'
                offAnimationType="fade"
                boxType="square"
                onFillColor="blue"
                >

                </CheckBox>
            </View>
        )
    }

    const addinputData = () => {
        let Dataaa = [...Data];
        setModalquit(!Modalquit);
        Dataaa.push({
            id: Dataaa.length + 1,
            name: inputFirstName + ' ' + inputLastName,
            image : require('../../image/anhT.png'),
            sdt : inputSDT
        });
        setdata(Dataaa);
    }


    return(
       <SafeAreaView style = {styles.container}>
            <StatusBar backgroundColor={'#333333'}/>
            <View style = {styles.shapeView}>
                <View style = {styles.ViewSTbar}>
                <TouchableOpacity onPress={() => setModalVisibleSort(true)}>
                    <Text style = {styles.textSort}>Sort</Text>
                </TouchableOpacity>
                    <Text style = {styles.textContacts}>Contacts</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image source={require('../../image/add-removebg-preview.png')}
                     style = {styles.imgAdd}></Image>
                </TouchableOpacity>
                </View>

                <View>
                <TextInput style = {styles.textInput}
                    placeholder = "Search"
                    placeholderTextColor={'white'}
                    textAlign = 'center'
                    >
                    </TextInput>
                </View>
            </View>

            <View>
                <Text style = {styles.textToAccess}>Access to Contacts</Text>
                    <View style = {{marginTop: 10}}>
                        <Text style = {styles.textPlease}>Please allow Telegram access to your</Text>
                        <Text style = {styles.textPlease}>phonebook to seamlessly find all your friends.</Text>
                </View>
            </View>

            <View style = {styles.shapeView2}>
                <View>
                    <Text style = {styles.textShapeView}>CONTACTS</Text>
                </View>
            </View>

            <View style = {{flexDirection: 'row'}}>
                <Image style = {styles.imgAddress}
                 source={require('../../image/iconAddress-removebg-preview.png')}></Image>
                 <TouchableOpacity onPress={() => navigation.navigate(FindPeople)}>
                 <Text style = {styles.textFind}>Find People Nearby</Text>
                 </TouchableOpacity>
            </View>

            <View style = {styles.crossbarShapeView2}></View>

            
            <View style = {{flexDirection: 'row'}}>
                <Image style = {styles.imgAddress}
                 source={require('../../image/iconInvite.png')}></Image>
                 <TouchableOpacity onPress={() => setModalInviteFriends(true)}>
                    <Text style = {styles.textFind}>Invite Friends</Text>
                 </TouchableOpacity>
            </View>

            <View style = {styles.crossbarShapeView2}></View>


{/* Render DATA_PHONE */} 

            <SwipeListView
                data={Data}
                renderItem={renderItemData}
                keyExtractor={item => item.id.toString()}
                renderHiddenItem={item => (
                    <TouchableOpacity style = {{  width: 50,
                        height: 80,
                        backgroundColor: 'black',
                        alignItems: 'center',
                        justifyContent: 'center',}}>
                        <View>
                        <TouchableOpacity onPress={() => deleteItem(item)}>
                            <Image 
                            source={require('../../image/icons8_delete_24px.png')}></Image>
                         </TouchableOpacity>
                         <Text>right</Text>
                         </View>
                    </TouchableOpacity>
                )}
                rightOpenValue={-75}
                leftOpenValue={75}       
            >

            </SwipeListView>

{/* Render DATA_PHONE  */}      

{/* Modal New Contact */}
            <View>
                <Modal
                  animationType='slide'
                  transparent = {true}
                   visible = {modalVisible}
                   onRequestClose = {() => {
                  
                   }}
                >
                    <View style = {styles.ViewModal}></View>
                    <View style = {styles.Modal}>
                        <View style = {{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                 <Text style = {styles.textCancle}>Cancel</Text>
                            </TouchableOpacity>
                            <Text style = {styles.textNewContacts}>New Contact</Text>
                            <TouchableOpacity onPress={addinputData}>
                                <Text style = {styles.textCreate}>Create</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <View style = {{flexDirection: 'row'}}>
                                <Image style = {styles.imgLogoAdd}
                                 source={require('../../image/user.png')}></Image>
                            <View style = {{flexDirection: 'column'}}>
                                 <TextInput style = {styles.inputFirst}
                                  placeholder = "First Name"
                                  placeholderTextColor={'#555555'}
                                  onChangeText={setinputFirstName}
                                 >
                                 </TextInput>
                                 <View style = {styles.crossbarNewContact}></View>

                                 <TextInput style = {styles.inputLast}
                                  placeholder = "Last Name"
                                  placeholderTextColor={'#555555'}
                                  onChangeText={setinputLastname}
                                 >
                                 </TextInput>
                            </View>
                            </View>

                            <View style = {{flexDirection: 'row'}}>
                                <TouchableOpacity>
                                    <Image style = {styles.imgTru} 
                                    source={require('../../image/iconTru-removebg-preview.png')}></Image>
                                </TouchableOpacity>
                                <Text style= {styles.textDĐ}>di động</Text>

                                <View style = {styles.crossbarHeight}></View>

                                <TextInput style = {styles.inputDD}
                                placeholder = "+"
                                placeholderTextColor={'white'}
                                keyboardType = 'number-pad'
                                onChangeText={setinputSDT}
                                >

                                </TextInput>
                            </View>
                            <View style = {styles.crossbarNewContactDD}></View>
                        </View>

            <View>
                <FlatList 
                data={numberAddInput}
                keyExtractor={(item, index) => item.id}
                renderItem = {renderItemSDT}
                >
                </FlatList>
            </View>

                        <View>
                            <View style = {{flexDirection: 'row'}}>
                                <Image style = {styles.imgCong}
                                 source={require('../../image/add-removebg-preview.png')}></Image>
                                 <TouchableOpacity onPress={addInput}>
                                 <Text style = {styles.textAddPhone}>add phone</Text>
                                 </TouchableOpacity>
                            </View>
                            <View style = {styles.crossbarNewContactDD}></View>
                        </View>
                    </View>

                </Modal>
            </View>
{/* Modal New Contact */}

{/* Modal Sort */}
            <View>
                <Modal
                animationType='fade'
                transparent = {true}
                 visible = {modalVisibleSort}
                >
                     <View style = {styles.ViewModalSort}>
                        <TouchableOpacity onPress={() => setModalVisibleSort(false)}>
                            <Text style = {styles.textModalSort}>by Last Seen</Text>
                        </TouchableOpacity>
                        <View style = {styles.crossbarModalSort}></View>
                        <TouchableOpacity onPress={() => setModalVisibleSort(false)}>
                            <Text style = {styles.textModalSort}>by Name</Text>
                        </TouchableOpacity>
                     </View>
                </Modal>
            </View>
{/* Modal Sort */}


{/* Modal Invite Friends */}

            <View>
                <Modal
                animationType='slide'
                transparent = {true}
                 visible = {modalInviteFriends}
                >
                     <View style = {stylesInvite.ModalContainer}>
                        <View style = {{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => setModalInviteFriends(false)}>
                            <Text style = {stylesInvite.textModalClose}>Close</Text>
                        </TouchableOpacity>
                            <Text style = {stylesInvite.textTitle}>Invite Friends</Text>
                            <Text style = {stylesInvite.textSelect}>Select All</Text>
                        </View>

                        <TextInput style = {stylesInvite.textInput}
                        placeholder = "Search"
                        placeholderTextColor={'white'}
                        textAlign = 'center'
                        >
                        </TextInput>

                        <View style = {{flexDirection: 'row'}}>
                            <Image style = {stylesInvite.imgTym}
                             source={require('../../image/iconTym-removebg-preview.png')}></Image>
                             <Text style = {stylesInvite.textTym}>Share Telegram</Text>
                        </View>

                        <View style = {stylesInvite.shapeViewContact}>
                            <Text style = {stylesInvite.textShapeViewContact}>CONTACTS</Text>
                        </View>

                        <FlatList
                        data={DataInvite}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItemInvite}
                        >

                        </FlatList>
                     </View>
                    
                </Modal>
            </View>

{/* Modal Invite Friends */}
            
       </SafeAreaView>
    )
}

export default contacts;