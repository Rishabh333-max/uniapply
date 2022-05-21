// import React, { useState, createContext } from "react"
// import { Modal } from "react-native";
// import { View, Text, Image, FlatList, Button, StyleSheet, } from "react-native"
// import { RadioButton } from "react-native-paper";
// import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
// import Feather from "react-native-vector-icons/Feather"
// import { Picker as SelectPicker } from '@react-native-picker/picker';
// import { TextInput } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import AntIcon from "react-native-vector-icons/AntDesign";
// import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
// import { useEffect } from "react";
// import { StatusBar } from "react-native";

// export const ManageChild = (props) => {
//     const submitData = props.route?.params?.submitData
//     const toggleBtn=props.route?.params?.toggleBtn
//     const setToggleBtn=props.route?.params?.setToggleBtn
//     const input=props.route?.params?.input
//     const setInput=props.route?.params?.setInput

//     console.log("kjshjsdds", submitData)
//     const [isModalVisible, setModalVisible] = useState(false);
//     const [activeItem, setActive] = useState(false)

//     const openModal = (item) => {
//         setActive(item || false)
//         setModalVisible(true)
//     }
//     const closeModal = () => {
//         setActive(false)
//         setModalVisible(false)
//     }

//     const navigation = useNavigation()
//     const spacing = 20
//     const AVATAR_SIZE = 70;



//     const editItem = (id) => {
// let newEditItem= submitData.find((elem)=>{
// return elem.id === id
// })
// console.log(".",newEditItem)
// setToggleBtn(false)
// setInput(newEditItem)
//     }
//     return (
//         <>
//             <ScrollView>
//                 <View style={{ flex: 1, backgroundColor: "#fff" }}>
//                     <View   >
//                         <Feather name="plus-circle" color="black" size={30} onPress={() => navigation.navigate("Modall")} />

//                     </View>
//                     <View>
//                         {/* <FlatList
//                         // ListHeaderComponent={renderItem}
//                         data={particularFollowUpData}
//                         // filter(users, u => !u.isDelete)
//                         // ListHeaderComponent={ }
//                         renderItem={renderItem}
//                         keyExtractor={item => item.id}
//                     // position={absolute}
//                     /> */}
//                         {/* <Text>{name}</Text>
//                     <Text>{input.gender}</Text> */}
//                         {/* <Text>{input.name}</Text>
//     <Text>{input.gender}</Text> */}
//                         {/* <Text style={{color:"black",fontSize:30}}>{name?.submitData?.input?.name}</Text>
// <Text style={{color:"black",fontSize:30}}>{name?.submitData?.input?.email}</Text> */}
//                         <FlatList
//                             data={submitData}

//                             contentContainerStyle={{
//                                 padding: spacing,
//                                 paddingTop: StatusBar.currentHeight || 42
//                             }}
//                             renderItem={(val) => {
//                                 console.log("vvxcx", val)
//                                 return (
//                                     <TouchableOpacity style={{
//                                         flexDirection: "row", padding: spacing, marginBottom: spacing, borderRadius: 16, backgroundColor: "white",
//                                         elevation: 10,
//                                         shadowColor: '#000',
//                                     }} key={val.id} onPress={() => editItem(val.id)}>
//                                         <Image source={require('./Images/man.png')}
//                                             style={{
//                                                 width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
//                                                 marginRight: spacing / 2
//                                             }} />
//                                         <View>
//                                             <Text style={{ fontSize: 22, fontWeight: "700" }}>{val?.item?.input?.name}</Text>

//                                             <Text style={{ fontSize: 18, opacity: .7 }}>{val?.item?.input?.email}</Text>
//                                             <Text style={{ fontSize: 14, opacity: .8, color: "#0099cc" }}>{val?.item?.input?.gender}</Text>
//                                         </View>
//                                     </TouchableOpacity>

//                                 )
//                             }}
//                         />
//                         {/* {submitData?.map((val)=>{
//     console.log("vvvv",val)
// return(
//     <>
//        <Text style={{color:"black",fontSize:30}}>{val?.input?.name}</Text>

// <Text style={{color:"black",fontSize:30}}>{val?.input?.email}</Text>
// <Text style={{color:"black",fontSize:30}}>{val?.input?.gender}</Text>
//     </>
// )
// })} */}
//                     </View>
//                 </View>
//             </ScrollView>
//         </>

//     )
// }
// const styless = StyleSheet.create({
//     textStyle: {
//         fontSize: 50,
//         color: "black"
//     }
// })
// export const Modall = () => {
//     const navigation = useNavigation()

//     const [newEntry, setNewEntry] = useState([])

//     const [date, setDate] = useState(new Date(1598051730000));
//     const [mode, setMode] = useState('date');
//     const [show, setShow] = useState(false);

//     const [dateVisible, setDatevisible] = useState(false)
//     const onChange = (event, selectedDate) => {
//         const currentDate = selectedDate;
//         setShow(false);
//         setDate(currentDate);
//     };

//     const showMode = (currentMode) => {
//         setShow(true);
//         setMode(currentMode);
//     };

//     const showDatepicker = () => {
//         showMode('date');
//     };

//     const [input, setInput] = useState({
//         name: "",
//         email: "",
//         gender: "",
//         class: "",
//         dates: ""
//     })
//     const [submitData, setSubmitData] = useState([])

//     const onSubmit = () => {
//         const inputDataId = { id: new Date().getTime().toString(), input }
//         // const newData={input:input}
//         // console.log("newData",newData)
//         // setSubmitData([...submitData,input])
//         setSubmitData([...submitData, inputDataId])
//         setInput("")
//         // console.log("submitdata",name)
//     }

//     useEffect(() => {
//         navigation.push("ManageChild", { submitData,toggleBtn,setToggleBtn,input,setInput, })
//     }, [submitData])

//     const [toggleBtn,setToggleBtn]=useState(true);

//     return (
//         <ScrollView>
//             <View style={styles.mainContainer}>
//                 <Text style={styles.labels}>Name</Text>
//                 <TextInput
//                     style={styles.inputStyle}
//                     placeholder="What is your Child's Full Name?*"
//                     // mode='outlined'
//                     // label='Course Name'
//                     // outlineColor='#272643'
//                     // id="courseName"
//                     value={input?.name}

//                     // onChangeText={(text) => setInput({ ...input, name: text })}
//                     onChangeText={(text) => { setInput({ ...input, name: text }) }}
//                 // activeOutlineColor='#272643'
//                 // backgroundColor='#E7E6FC'

//                 />
//                 <Text style={styles.labels}>Email</Text>
//                 <TextInput
//                     style={styles.inputStyle}
//                     placeholder="What is your Child's Number?*"
//                     // mode='outlined'
//                     // label='Course Name'
//                     // outlineColor='#272643'
//                     // id="courseName"
//                     value={input?.email}
//                     onChangeText={(text) => setInput({ ...input, email: text })}
//                 // onChangeText={(text) => setInput({ ...input, name: text })}

//                 // activeOutlineColor='#272643'
//                 // backgroundColor='#E7E6FC'

//                 />
//                 <Text style={styles.labels}>Gender</Text>
//                 <View style={{
//                     borderWidth: 1,
//                     borderColor: 'rgba(0,0,0,0.3)',
//                     paddingHorizontal: 15,
//                     paddingVertical: 7,
//                     borderRadius: 1,
//                     fontFamily: 'regular',
//                     fontSize: 18,

//                     backgroundColor: "white"
//                 }}>


//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <RadioButton
//                             value={input?.gender}
//                             label="bsaxb"
//                             color='#588fba'

//                             status={input?.gender === 'MALE' ? 'checked' : 'unchecked'}
//                             onPress={() => setInput({ ...input, gender: 'MALE' })}
//                         />
//                         <Text>Male     </Text>

//                         <RadioButton
//                             value={input?.gender}
//                             color='#588fba'

//                             status={input?.gender === 'FEMALE' ? 'checked' : 'unchecked'}
//                             onPress={() => setInput({ ...input, gender: 'FEMALE' })}
//                         />
//                         <Text>Female      </Text>
//                         <RadioButton
//                             value={input?.gender}
//                             color='#588fba'

//                             status={input?.gender === 'OTHER' ? 'checked' : 'unchecked'}
//                             onPress={() => setInput({ ...input, gender: 'OTHER' })}
//                         />
//                         <Text>Other</Text>


//                     </View>
//                 </View>
//                 <Text style={styles.labels}>Date</Text>
//                 {
//                     dateVisible &&
//                     <DateTimePicker
//                         value={date}
//                         mode={mode}
//                         onChange={onChange}

//                     />

//                 }
//                 <View style={[styles.inputStyle, { flexDirection: "row" }]}>
//                     <Text style={{ fontSize: 16, fontWeight: '330', color: 'black', paddingRight: 6 }}>Date of Birth:  </Text>
//                     <Text style={{ fontSize: 16, fontWeight: '400', color: 'black', paddingRight: 65 }}>{date.toLocaleDateString()}</Text>
//                     <AntIcon name='calendar' onPress={showDatepicker} size={30} color='#272643' />
//                 </View>

//                 <View>
//                     <AntIcon name='calendar' onPress={showDatepicker} size={30} color='#272643' />
//                 </View>

//                 <Text style={{ color: "black" }}>selected: {date.toLocaleDateString()}</Text>
//                 {show && (
//                     <DateTimePicker
//                         testID="dateTimePicker"
//                         value={input?.dates}
//                         mode={mode}
//                         is24Hour={true}
//                         onChange={onChange}
//                     />
//                 )}

//                 <Text style={styles.labels}>Class</Text>
//                 <View style={styles.inputStyle}>
//                     <SelectPicker selectedValue={input?.class} onValueChange={(itemValue, itemIndex) => setInput(pre => Object.assign({}, pre, { class: itemValue }))}>
//                         <SelectPicker.Item label="Select Admission Class" backgroundColor='#E7E6FC'
//                         ></SelectPicker.Item>
//                         <SelectPicker.Item label="Play Group" value='PlayGroup'>
//                         </SelectPicker.Item>
//                         <SelectPicker.Item label="Pre-Nursery" value='Pre-Nursery'></SelectPicker.Item>
//                         <SelectPicker.Item label="Nursery" value='Nursery' ></SelectPicker.Item>
//                         <SelectPicker.Item label="LKG" value='LKG' ></SelectPicker.Item>
//                         <SelectPicker.Item label="UKG" value='UKG' ></SelectPicker.Item>
//                         <SelectPicker.Item label="Class 1" value='Class 1' ></SelectPicker.Item>
//                         <SelectPicker.Item label="Class 2 " value='Class 2 ' ></SelectPicker.Item>
//                         <SelectPicker.Item label="Class 3" value='Class 3' ></SelectPicker.Item>
//                         <SelectPicker.Item label="Class 4" value='Class 4' ></SelectPicker.Item>
//                         <SelectPicker.Item label="Class 5" value='Class 5' ></SelectPicker.Item>
//                         <SelectPicker.Item label="Class 6" value='Class 6' ></SelectPicker.Item>
//                         <SelectPicker.Item label="Class 7" value='Class 7' ></SelectPicker.Item>
//                         <SelectPicker.Item label="Class 8" value='Class 8' ></SelectPicker.Item>
//                         <SelectPicker.Item label="Class 9" value='Class 9' ></SelectPicker.Item>
//                         <SelectPicker.Item label="Class 10" value='Class 10' ></SelectPicker.Item>
//                         <SelectPicker.Item label="Class 11" value='Class 11' ></SelectPicker.Item>
//                         <SelectPicker.Item label="Class 12" value='Class 12' ></SelectPicker.Item>

//                     </SelectPicker>
//                 </View>
//                 {
//                     toggleBtn?   <Button title="Save" onPress={() => onSubmit([submitData])} />:
//                     <Button title="Update" onPress={() => onSubmit([submitData])} />
//                 }

//                 <View>
//                     {submitData.map((values) => {
//                         return (
//                             <>
//                                 <Text style={{ color: "black" }}>{values.input.name}</Text>
//                                 <Text style={{ color: "black" }}>{values.input.email}</Text>
//                                 <Text style={{ color: "black" }}>{values.input.gender}</Text>
//                                 <Text style={{ color: "black" }}>{values.input.class}</Text>
//                             </>
//                         )
//                     })}
//                 </View>
//             </View>

//         </ScrollView>
//     )

// }

// const styles = StyleSheet.create({
//     brandView: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     brandViewText: {
//         color: "#ffffff",
//         fontSize: 40,
//         fontWeight: "bold",
//         textTransform: "uppercase"
//     },
//     bottomView: {
//         flex: 1.5,
//         backgroundColor: "#ffffff",
//         bottom: 50,
//         borderTopStartRadius: 60,
//         borderTopEndRadius: 60
//     },
//     categoryListWrapper: {
//         paddingTop: 20,
//         marginLeft: 170,

//     },
//     categoryItemWrapper: {
//         backgroundColor: "white",
//         // marginRight:20,
//         borderRadius: 20,
//         alignSelf: "center",
//         elevation: 40,
//         width: 150,
//         height: 200,
//         shadowColor: "#000"

//         // marginHorizontal:20
//     },
//     categoryItemImage: {
//         width: 50,
//         height: 50,
//         marginLeft: 50,
//         marginTop: 25
//     },
//     categoryItemTitle: {
//         textAlign: "center",
//         fontFamily: "Montserrat-semiBold",
//         fontSize: 14,
//         marginTop: 15,
//         fontSize: 20,
//         fontWeight: "bold",
//         color: "#272643"

//     },
//     categorySelectWrapper: {
//         alignSelf: "center",
//         justifyContent: "center",
//         marginTop: 20,
//         width: 40,
//         height: 40,
//         // fontSize:15,
//         borderRadius: 50,
//         marginBottom: 10,
//         backgroundColor: "#000"
//     },
//     categorySelectIcon: {
//         alignSelf: "center",
//         color: "white",
//     },

//     modalView: {
//         backgroundColor: "white",
//         marginTop: 210
//     },
//     mainContainer: {
//         height: '100%',
//         paddingHorizontal: 30,
//         paddingTop: 30,
//         backgroundColor: "#F5F5F5"
//     },
//     mainHeader: {
//         fontSize: 25,
//         color: "#344055",
//         fontWeight: 'bold',
//         paddingTop: 20,
//         paddingBottom: 15,
//         textTransform: 'capitalize',
//         fontFamily: "regular",
//         justifyContent: "center",
//         marginLeft: 80
//     },
//     inputContainer: {
//         marginTop: 10
//     },
//     labels: {
//         fontSize: 18,
//         color: "#7d7d7d",
//         marginTop: 10,
//         marginBottom: 5,
//         lineHeight: 25,
//         fontFamily: 'regular'
//     },
//     inputStyle: {
//         borderWidth: 1,
//         borderColor: 'rgba(0,0,0,0.3)',
//         paddingHorizontal: 15,
//         paddingVertical: 7,
//         borderRadius: 1,
//         fontFamily: 'regular',
//         fontSize: 18,

//         backgroundColor: "white"

//     },
//     description: {
//         fontSize: 20,
//         color: "#7d7d7d",
//         marginTop: 10,
//         marginBottom: 2,
//         lineHeight: 25,
//         fontFamily: "regular"
//     }
// })


import React, { useState, createContext } from "react"
import { Modal } from "react-native";
import { View, Text, Image, FlatList, Button, StyleSheet, } from "react-native"
import { RadioButton } from "react-native-paper";
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Feather from "react-native-vector-icons/Feather"
import { Picker as SelectPicker } from '@react-native-picker/picker';
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntIcon from "react-native-vector-icons/AntDesign";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { GlobalInfo } from "../App";
import { useContext } from "react";

export const ManageChild = (props) => {


    const { allDatas, setAllDatas, filterAr, setFilterAr, cities, setCities, filterMenu, openModal, openModal1, openModal2, isModalVisible, isModalVisible1, isModalVisible2, activeItem, activeItem1, activeItem2, setActive, setActive1, setActive2, setModalVisible, setModalVisible1, setModalVisible2, closeModal, closeModal1, closeModal2, searchbar, setSearchbar, dataUse, setDataUse, dataFilter, dataUsage, setDataUsage, 
         openModal3,
        closeModal3,
        isModalVisible3,
        setModalVisible3,
        activeItem3,
        setActive3,
        spacing,
        AVATAR_SIZE,
         editItem,
         isEditItem,
         setIsEditItem,
         toggleBtn,
         setToggleBtn,
         input,
         setInput,
         setSubmitData,
         submitData,
         onSubmit
    } = useContext(GlobalInfo)
    const [newEntry, setNewEntry] = useState([])

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [dateVisible, setDatevisible] = useState(false)
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    // const [input, setInput] = useState({
    //     name: "",
    //     email: "",
    //     gender: "",
    //     class: "",
    //     dates: ""
    // })
    // const [submitData, setSubmitData] = useState([])

    // const onSubmit = () => {
    //     const inputDataId = { id: new Date().getTime().toString(), input }
    //     // const newData={input:input}
    //     // console.log("newData",newData)
    //     // setSubmitData([...submitData,input])
    //     setSubmitData([...submitData, inputDataId])
    //     setInput("")
    //     setModalVisible(!isModalVisible)
    //     // console.log("submitdata",name)
    // }

    // // useEffect(() => {
    // //     navigation.push("ManageChild", { submitData,toggleBtn,setToggleBtn,input,setInput, })
    // // }, [submitData])

    // const [toggleBtn, setToggleBtn] = useState(true);
    // const [isModalVisible, setModalVisible] = useState(false);
    // const [activeItem, setActive] = useState(false)
    // const[isEditItem,setIsEditItem]=useState(null)

    // const openModal = (item) => {
    //     setActive(item || false)
    //     setModalVisible(true)
    //     setInput('')
    //        setToggleBtn(true)
    // }
    // const closeModal = () => {
    //     setActive(false)
    //     setModalVisible(false)
    // }

    // const navigation = useNavigation()
    // const spacing = 20
    // const AVATAR_SIZE = 70;


    // // const [storeData,setStoreData]=useState(newEditItem)
    // // console.log('ssnbd',storeData)
    // const editItem = (ids) => {
    //     console.log("ids", ids)

    //     let newEditItem = submitData.find((elem) => {
    //         console.log(":testelem", elem)
    //         return elem.id === ids.item.id
    //     })

    // setToggleBtn(false)
    //     if (newEditItem?.item?.id !== '')  {
    //         setInput({
    //             name: ids.item.input.name,
    //             email: ids.item.input.email,
    //             gender: ids.item.input.gender,
    //             class: ids.item.input.class,
    //             dates:ids.item.input.dates

    //         })
    //     }


    //     else {
    //         {console.log("123", newEditItem)}
    //         setInput({
    //             name: input.name,
    //             email: input.email,
    //             gender: input.gender,
    //             class: input.class,
    //             dates:input.dates

    //         })
    //     }
    //     setIsEditItem(ids)

    // }







    return (
        <>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: "#fff" }}>
                    <View   >
                        <Feather name="plus-circle" color="black" size={30} onPress={() => openModal3()} />

                    </View>
                    <View>

                        <FlatList
                            data={submitData}

                            contentContainerStyle={{
                                padding: spacing,
                                paddingTop: StatusBar.currentHeight || 42
                            }}
                            renderItem={(val) => {
                                console.log("sd", val.item.id)
                                console.log("vvxcx", val)
                                return (
                                    <TouchableOpacity style={{
                                        flexDirection: "row", padding: spacing, marginBottom: spacing, borderRadius: 16, backgroundColor: "white",
                                        elevation: 10,
                                        shadowColor: '#000',
                                        // }} key={val.id} onPress={() => {editItem(val.item.id); setModalVisible(true)}}>
                                    }} key={val.id} onPress={() => { editItem(val); setModalVisible3(true) }}>
                                        <Image source={require('./Images/man.png')}
                                            style={{
                                                width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                                                marginRight: spacing / 2
                                            }} />
                                        <View>
                                            <Text style={{ fontSize: 22, fontWeight: "700" }}>{val?.item?.input?.name}</Text>

                                            <Text style={{ fontSize: 18, opacity: .7 }}>{val?.item?.input?.email}</Text>
                                            <Text style={{ fontSize: 14, opacity: .8, color: "#0099cc" }}>{val?.item?.input?.gender}</Text>
                                        </View>
                                    </TouchableOpacity>

                                )
                            }}
                        />

                    </View>
                </View>
            </ScrollView>
            <Modal

                transparent={true}
                animationType='slide'
                visible={isModalVisible3}
                onRequestClose={() => {
                    setModalVisible3(!isModalVisible3)
                }}
            >
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <Text style={styles.labels}>Name</Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="What is your Child's Full Name?*"
                      
                            value={input?.name}

           
                            onChangeText={(text) => { setInput({ ...input, name: text }) }}
              
                        />
                        <Text style={styles.labels}>Email</Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="What is your Child's Number?*"
                            // mode='outlined'
                            // label='Course Name'
                            // outlineColor='#272643'
                            // id="courseName"
                            value={input?.email}
                            onChangeText={(text) => setInput({ ...input, email: text })}
                        // onChangeText={(text) => setInput({ ...input, name: text })}

                        // activeOutlineColor='#272643'
                        // backgroundColor='#E7E6FC'

                        />
                        <Text style={styles.labels}>Gender</Text>
                        <View style={{
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.3)',
                            paddingHorizontal: 15,
                            paddingVertical: 7,
                            borderRadius: 1,
                            fontFamily: 'regular',
                            fontSize: 18,

                            backgroundColor: "white"
                        }}>


                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton
                                    value={input?.gender}
                                    label="bsaxb"
                                    color='#588fba'

                                    status={input?.gender === 'MALE' ? 'checked' : 'unchecked'}
                                    onPress={() => setInput({ ...input, gender: 'MALE' })}
                                />
                                <Text>Male     </Text>

                                <RadioButton
                                    value={input?.gender}
                                    color='#588fba'

                                    status={input?.gender === 'FEMALE' ? 'checked' : 'unchecked'}
                                    onPress={() => setInput({ ...input, gender: 'FEMALE' })}
                                />
                                <Text>Female      </Text>
                                <RadioButton
                                    value={input?.gender}
                                    color='#588fba'

                                    status={input?.gender === 'OTHER' ? 'checked' : 'unchecked'}
                                    onPress={() => setInput({ ...input, gender: 'OTHER' })}
                                />
                                <Text>Other</Text>


                            </View>
                        </View>
                        <Text style={styles.labels}>Date</Text>
                        {
                            dateVisible &&
                            <DateTimePicker
                                value={date}
                                mode={mode}
                                onChange={onChange}

                            />

                        }
                        <View style={[styles.inputStyle, { flexDirection: "row" }]}>
                            <Text style={{ fontSize: 16, fontWeight: '330', color: 'black', paddingRight: 6 }}>Date of Birth:  </Text>
                            <Text style={{ fontSize: 16, fontWeight: '400', color: 'black', paddingRight: 65 }}>{date.toLocaleDateString()}</Text>
                            <AntIcon name='calendar' onPress={showDatepicker} size={30} color='#272643' />
                        </View>

                        <View>
                            <AntIcon name='calendar' onPress={showDatepicker} size={30} color='#272643' />
                        </View>

                        <Text style={{ color: "black" }}>selected: {date.toLocaleDateString()}</Text>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={input?.dates}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChange}
                            />
                        )}

                        <Text style={styles.labels}>Class</Text>
                        <View style={styles.inputStyle}>
                            <SelectPicker selectedValue={input?.class} onValueChange={(itemValue, itemIndex) => setInput(pre => Object.assign({}, pre, { class: itemValue }))}>
                                <SelectPicker.Item label="Select Admission Class" backgroundColor='#E7E6FC'
                                ></SelectPicker.Item>
                                <SelectPicker.Item label="Play Group" value='PlayGroup'>
                                </SelectPicker.Item>
                                <SelectPicker.Item label="Pre-Nursery" value='Pre-Nursery'></SelectPicker.Item>
                                <SelectPicker.Item label="Nursery" value='Nursery' ></SelectPicker.Item>
                                <SelectPicker.Item label="LKG" value='LKG' ></SelectPicker.Item>
                                <SelectPicker.Item label="UKG" value='UKG' ></SelectPicker.Item>
                                <SelectPicker.Item label="Class 1" value='Class 1' ></SelectPicker.Item>
                                <SelectPicker.Item label="Class 2 " value='Class 2 ' ></SelectPicker.Item>
                                <SelectPicker.Item label="Class 3" value='Class 3' ></SelectPicker.Item>
                                <SelectPicker.Item label="Class 4" value='Class 4' ></SelectPicker.Item>
                                <SelectPicker.Item label="Class 5" value='Class 5' ></SelectPicker.Item>
                                <SelectPicker.Item label="Class 6" value='Class 6' ></SelectPicker.Item>
                                <SelectPicker.Item label="Class 7" value='Class 7' ></SelectPicker.Item>
                                <SelectPicker.Item label="Class 8" value='Class 8' ></SelectPicker.Item>
                                <SelectPicker.Item label="Class 9" value='Class 9' ></SelectPicker.Item>
                                <SelectPicker.Item label="Class 10" value='Class 10' ></SelectPicker.Item>
                                <SelectPicker.Item label="Class 11" value='Class 11' ></SelectPicker.Item>
                                <SelectPicker.Item label="Class 12" value='Class 12' ></SelectPicker.Item>

                            </SelectPicker>
                        </View>
                        {
                            toggleBtn ?
                                <Button title="Save" onPress={() => { onSubmit([submitData]); }} /> :
                                <Button title="Update" onPress={() => { onSubmit([submitData]); }} />
                        }

                        {/* {
            toggleBtn?
            <Button title="Save" onPress={() => onSubmit([submitData])} />:
            <Button title="Update" onPress={() => onSubmit([submitData])} />
        }
     */}



                        <View>
                            {submitData.map((values) => {
                                return (
                                    <>
                                        <Text style={{ color: "black" }}>{values.input.name}</Text>
                                        <Text style={{ color: "black" }}>{values.input.email}</Text>
                                        <Text style={{ color: "black" }}>{values.input.gender}</Text>
                                        <Text style={{ color: "black" }}>{values.input.class}</Text>
                                    </>
                                )
                            })}
                        </View>
                    </View>

                </ScrollView>
            </Modal>
        </>

    )
}



const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        color: "black"
    },
    brandView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    brandViewText: {
        color: "#ffffff",
        fontSize: 40,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: "#ffffff",
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60
    },
    categoryListWrapper: {
        paddingTop: 20,
        marginLeft: 170,

    },
    categoryItemWrapper: {
        backgroundColor: "white",
        // marginRight:20,
        borderRadius: 20,
        alignSelf: "center",
        elevation: 40,
        width: 150,
        height: 200,
        shadowColor: "#000"

        // marginHorizontal:20
    },
    categoryItemImage: {
        width: 50,
        height: 50,
        marginLeft: 50,
        marginTop: 25
    },
    categoryItemTitle: {
        textAlign: "center",
        fontFamily: "Montserrat-semiBold",
        fontSize: 14,
        marginTop: 15,
        fontSize: 20,
        fontWeight: "bold",
        color: "#272643"

    },
    categorySelectWrapper: {
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 20,
        width: 40,
        height: 40,
        // fontSize:15,
        borderRadius: 50,
        marginBottom: 10,
        backgroundColor: "#000"
    },
    categorySelectIcon: {
        alignSelf: "center",
        color: "white",
    },

    modalView: {
        backgroundColor: "white",
        marginTop: 210
    },
    mainContainer: {
        height: '100%',
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: "#F5F5F5"
    },
    mainHeader: {
        fontSize: 25,
        color: "#344055",
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: 'capitalize',
        fontFamily: "regular",
        justifyContent: "center",
        marginLeft: 80
    },
    inputContainer: {
        marginTop: 10
    },
    labels: {
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        fontFamily: 'regular'
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontFamily: 'regular',
        fontSize: 18,

        backgroundColor: "white"

    },
    description: {
        fontSize: 20,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 2,
        lineHeight: 25,
        fontFamily: "regular"
    }
})
