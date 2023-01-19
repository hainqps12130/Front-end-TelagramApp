import React, {useState} from "react";
import { FlatList, Image, Modal, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const DATA_ITEM = [
    {
        id: 0,
        image: require('../../image/logoTelegram.png'),
        name: 'Anh Em Giao Lưu Code',
        text: 'Liên hệ quảng cáo vui lòng inbox'
    },
    {
        id: 1,
        image: require('../../image/logoTelegram.png'),
        name: 'Anh Em Giao Lưu Code',
        text: 'Liên hệ quảng cáo vui lòng inbox'
    },
    {
        id: 2,
        image: require('../../image/logoTelegram.png'),
        name: 'Anh Em Giao Lưu Code',
        text: 'Liên hệ quảng cáo vui lòng inbox',
    },
    {
        id: 3,
        image: require('../../image/logoTelegram.png'),
        name: 'Anh Em Giao Lưu Code',
        text: 'Liên hệ quảng cáo vui lòng inbox',
    },
    {
        id: 4,
        image: require('../../image/logoTelegram.png'),
        name: 'Anh Em Giao Lưu Code',
        text: 'Liên hệ quảng cáo vui lòng inbox',
    },
    {
        id: 5,
        image: require('../../image/logoTelegram.png'),
        name: 'Anh Em Giao Lưu Code',
        text: 'Liên hệ quảng cáo vui lòng inbox',
    },
    {
        id: 6,
        image: require('../../image/logoTelegram.png'),
        name: 'Anh Em Giao Lưu Code',
        text: 'Liên hệ quảng cáo vui lòng inbox',
    },
    {
        id: 7,
        image: require('../../image/logoTelegram.png'),
        name: 'Anh Em Giao Lưu Code',
        text: 'Liên hệ quảng cáo vui lòng inbox',
    },
    {
        id: 8,
        image: require('../../image/logoTelegram.png'),
        name: 'Anh Em Giao Lưu Code',
        text: 'Liên hệ quảng cáo vui lòng inbox',
    }
]

const chats = ({navigation}: {navigation: any}) => {    

    const [dataTelgram, setdataTelegram] = useState(DATA_ITEM);
    const [ModalNewMessage, setModalNewMessage] = useState(false);
    const [ModalNewContact, setModalNewContact] = useState(false);
    const [ModalNewChannel, setModalNewChannel] = useState(false);
    const [ModalCreateChannel, setModalCreateChannel] = useState(false)
    const [numberAddInput, setNumberAddInput] = useState([1]);
    const [task, setTask] = useState('')

    const ItemView = ({item}) => {
        return(
           
                <View style = {{flexDirection: 'row'}}>
                    <Image style = {styles.imageItem}
                     source={item.image}></Image>
                     <View style = {{flexDirection: 'column'}}>
                     <Text style = {styles.text}>
                         {item.name}
                     </Text>
                    <Text style = {styles.message}>
                        {item.text}
                    </Text>
                    </View>
            </View>
          

        
        )
    }

    const ItemSeparatorView = () => {
        return(
            <View
            style = {{height: 1, width: '100%', backgroundColor: 'white'}}
            >
            </View>
        )
    }

    const addInput = () => {
        setNumberAddInput([...numberAddInput, 1]);
    };

    const handDelete = ({item, index}) => {
        let newContact = [...numberAddInput];
        newContact.slice(index, 1);
        setNumberAddInput(newContact);
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


// header
    return(
        <SafeAreaView style = {styles.container}>
            <StatusBar backgroundColor = '#333333' />
            <View style = {styles.ShapeView}>
                <View style = {styles.ViewSTBar}>
                    <Text style = {styles.textEdit}>Edit</Text>
                    <Text style = {styles.textChat}>Chats</Text>
                    <TouchableOpacity onPress={() => setModalNewMessage(true)}>
                        <Image style = {styles.imgSttBar} 
                        source={require('../../image/iconEdit-removebg-preview.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput style = {styles.textInput}
                    placeholder = "Search chats"
                    placeholderTextColor={'white'}
                    textAlign = 'center'
                    >
                    </TextInput>
                </View>
            </View>
{/* header */}

            <FlatList
                data={dataTelgram}
                renderItem={ItemView}
                // keyExtractor = {(item, index) => index.toString()}
                keyExtractor = {item => item.id.toString()}
                ItemSeparatorComponent = {ItemSeparatorView}

            >
            </FlatList>

{/* Modal New Message */}

        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={ModalNewMessage}
            >
                <View style = {styles.ViewModalMessage}>
                    <View style = {styles.ShapeViewTitle}>
                        <View style = {{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => setModalNewMessage(false)}>
                                <Text style = {styles.textCancel}>Cancel</Text>
                            </TouchableOpacity>
                            <Text style = {styles.textTitle}>New Message</Text>
                        </View>
                        <View>
                            <TextInput style = {styles.textInputNewMessage}
                            placeholder = "Search chats"
                            placeholderTextColor={'white'}
                            textAlign = 'center'
                            >
                            </TextInput>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'row'}}>
                        <Image style = {styles.imgNewGroup}
                        source={require('../../image/iconNewGroup.png')}></Image>
                        <Text style = {styles.textNewGroup}>New Group</Text>
                     </View>
                     <View style = {styles.crossbarNewMesage}></View>

                     <View style = {{flexDirection: 'row'}}>
                        <Image style = {styles.imgNewGroup}
                        source={require('../../image/iconNewContact.png')}></Image>
                        <TouchableOpacity onPress={() => setModalNewContact(true)}>
                            <Text style = {styles.textNewGroup}>New Contact</Text>
                        </TouchableOpacity>
                     </View>
                     <View style = {styles.crossbarNewMesage}></View>

                     <View style = {{flexDirection: 'row'}}>
                        <Image style = {styles.imgNewChanel}
                        source={require('../../image/iconChanel-removebg-preview.png')}></Image>
                        <TouchableOpacity onPress={() => setModalNewChannel(true)}>
                            <Text style = {styles.textNewGroup}>New Channel</Text>
                        </TouchableOpacity>
                     </View>
                     <View style = {styles.crossbarNewMesage}></View>


                </View>
            </Modal>
        </View>

{/*  Modal New Message */}


{/*  Modal New Contact */}

            <View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={ModalNewContact}
                >

                    <View style = {styles.ViewModalNewContact}>
                        <View style = {{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => setModalNewContact(false)}>
                                <Text style = {styles.textCancel}>Cancel</Text>
                            </TouchableOpacity>
                                <Text style = {styles.textTitle}>New Contact</Text>
                            <TouchableOpacity>
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
                                    // onChangeText={setinputFirstName}
                                    >
                                    </TextInput>
                                    <View style = {styles.crossbarNewContact}></View>

                                    <TextInput style = {styles.inputLast}
                                    placeholder = "Last Name"
                                    placeholderTextColor={'#555555'}
                                    // onChangeText={setinputLastname}
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
                                // onChangeText={setinputSDT}
                                >

                                </TextInput>
                            </View>
                            <View style = {styles.crossbarNewContactDD}></View>
                        </View>

                <View>
                    <FlatList
                        data={numberAddInput}
                        keyExtractor={(item, index) => item.id}
                        renderItem={renderItemSDT}
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

{/*  Modal New Contact */}

{/*  Modal New Channel */}
            <View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={ModalNewChannel}
                >
                    <View style = {styles.ViewModalNewContact}>
                        <View style = {{flexDirection: 'row'}}>
                            <Image style = {styles.imgBackNewChanel}
                                source={require('../../image/iconBack.png')}></Image>
                        <TouchableOpacity onPress={() => setModalNewChannel(false)}>
                            <Text style = {styles.textBack}>Back</Text>
                        </TouchableOpacity>
                        </View>

                        <View>
                            <Image style = {styles.imgNewChannel}
                             source={require('../../image/imgChannel-removebg-preview.png')}></Image>
                        </View>

                        <View>
                            <Text style = {styles.textTitleChanel}>What is a Channel?</Text>
                        </View>
                        <View style = {{marginTop: 25}}>
                            <Text style = {styles.textBottomTitle}>Channel are a one-to-many tool</Text>
                            <Text  style = {styles.textBottomTitle}>for broadcasting your mesages</Text>
                            <Text  style = {styles.textBottomTitle}>to unlimited audiences.</Text>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => setModalCreateChannel(true)} 
                            style = {styles.btnCreateChannel}>
                                <Text style = {styles.textBtnCreateChanel}>Create Channel</Text>
                            </TouchableOpacity>
                        </View>
                       
                    </View>
                </Modal>
            </View>
{/*  Modal New Channel */}


{/*  Modal Create Channel */}

        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={ModalCreateChannel}
            >
                <View style = {styles.ViewModalNewContact}>
                    <View style = {{flexDirection: 'row'}}>
                            <Image style = {styles.imgBackNewChanel}
                                source={require('../../image/iconBack.png')}></Image>
                        <TouchableOpacity onPress={() => setModalCreateChannel(false)}>
                            <Text style = {styles.textBack}>Back</Text>
                        </TouchableOpacity>
                        <Text style = {styles.textTitleCreateChannel}>Create Channel</Text>
                        <Text style = {styles.textNextChannel}>Next</Text>
                    </View>
                </View>
            </Modal>
        </View>

{/*  Modal Create Channel */}
            
        </SafeAreaView>
        
    )
    
}

export default chats;