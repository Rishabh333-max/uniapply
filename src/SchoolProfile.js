import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { useContext, useState } from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView, Image, FlatList, StatusBar } from "react-native";
import { GlobalInfo } from "../App";

export const SchoolProfile = (val) => {
    console.log("agra", val)


    const [valueData, setValueData] = useState(val)

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
        onSubmit,
        openModal4,
        closeModal4,
        isModalVisible4,
        setModalVisible4,
        activeItem4,
        setActive4,

        openModal5,
        closeModal5,
        isModalVisible5,
        setModalVisible5,
        activeItem5,
        setActive5,
    } = useContext(GlobalInfo)
    console.log("schoolProfile", activeItem2)
    console.log('dataset', dataUse)


    const { mode } = val.route.params
    console.log("mode", val.route.params.mode)



    const [isModalVisible6, setModalVisible6] = useState(false);
    const [activeItem6, setActive6] = useState(false)

    const openModal6 = (item) => {
        setActive6(item || false)
        setModalVisible6(true)
    }
    const closeModal6 = () => {
        setActive6(false)
        setModalVisible6(false)
    }

    return (

        <View>

            <View>
                <ScrollView>
                    <View>
                        <View>
                            {
                                mode === "Rishabh" ?
                                    <Image source={{ uri: val.route.params.val?.[0].imgUrl }} style={{ paddingVertical: 120, paddingHorizontal: 120 }} /> :
                                    <Image source={{ uri: val?.route?.params?.val?.item?.imgUrl }} style={{ paddingVertical: 120, paddingHorizontal: 120 }} />
                            }


                        </View>
                        <View style={{ margin: 10, paddingVertical: 20, paddingHorizontal: 40, backgroundColor: "white", borderRadius: 2, shadowColor: "#000", elevation: 10, position: "absolute", bottom: -30, left: 2, right: 2 }}>
                            <View style={{ flexDirection: "row" }}>
                                {
                                    mode === "Rishabh" ?
                                        <Image source={{ uri: val?.route?.params?.val?.[0].imgUrl }} style={{ paddingVertical: 20, paddingHorizontal: 20 }} /> :
                                        <Image source={{ uri: val?.route?.params?.val?.item?.imgUrl }} style={{ paddingVertical: 20, paddingHorizontal: 20 }} />
                                }

                                <View>
                                    {
                                        mode === "Rishabh" ?
                                            <Text style={{ color: "black", alignItems: "center" }} >{val?.route?.params?.val?.[0].name}</Text> :
                                            <Text style={{ color: "black", alignItems: "center" }} >{val?.route?.params?.val?.item?.name}</Text>
                                    }

                                    <View style={{ flexDirection: "row" }}>
                                        <Image source={require("./Images/placeholder.png")} style={{ height: 14, width: 14, marginTop: 2 }} />
                                        {mode === 'Rishabh' ?
                                            <Text >{
                                                val?.route?.params?.val?.[0]?.address}</Text> : <Text>{val?.route?.params?.val?.item?.address}</Text>

                                        }


                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>



                    <View style={{ margin: 10, paddingVertical: 20, paddingHorizontal: 40, backgroundColor: "white", borderRadius: 2, shadowColor: "#000", elevation: 10, top: 20 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <Text>Compare</Text>
                            </View>
                            <View style={{ right: 2, justifyContent: "space-between", flexDirection: "row" }}>
                                <Image source={require("./Images/calculator.jpg")} style={{ height: 20, width: 20, borderWidth: 1, borderColor: "#000", borderRadius: 100, marginRight: 4 }} />
                                <Image source={require("./Images/bell.png")} style={{ height: 20, width: 20, borderWidth: 1, borderColor: "#000", borderRadius: 100, marginRight: 4 }} />
                                <Image source={require("./Images/wishlist.png")} style={{ height: 20, width: 20, borderWidth: 1, borderColor: "#000", borderRadius: 100, }} />
                            </View>

                        </View>
                        <View
                            style={{
                                marginTop: 10,
                                width: "100%",

                                borderBottomColor: 'grey',
                                borderBottomWidth: 1,
                            }}
                        />
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Image source={require("./Images/view.png")} style={{ height: 20, width: 20, marginLeft: 220 }} />
                            <Text style={{ marginLeft: 10 }}>46266</Text>
                        </View>


                    </View>

                    <View style={{ flexDirection: "row", }}>
                        <Image source={require("./Images/dp.jpg")} style={{ height: 40, width: 40, marginTop: 30, borderRadius: 10, borderColor: "grey", borderWidth: 1 }} />
                        <View style={{ borderWidth: 1, borderColor: "grey", marginTop: 20, marginLeft: 20, borderRadius: 10, width: 320, top: 4, flexDirection: "row" }}>

                            <View><Text style={{ fontSize: 10, color: "black", left: 14, top: 4 }}>I am Looking Admission for</Text>
                                <Text style={{ fontSize: 20, color: "black", fontWeight: "600", left: 20, top: 2 }}>Please Select</Text>
                            </View>
                            <TouchableOpacity onPress={openModal4}>
                                <Image source={require("./Images/drop-down-arrow.png")} style={{ height: 22, width: 22, left: 150, top: 16 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#6495ED", top: 20, margin: 10, borderTopStartRadius: 6, borderTopEndRadius: 6, flexDirection: "row" }}>
                        <Text style={{ fontSize: 20, fontWeight: "500", paddingHorizontal: 20, paddingVertical: 12, color: "black" }}>Key School Stats</Text>
                        <View>
                            <Text style={{ left: 60, top: 10, fontWeight: "bold" }}>Session</Text>
                            <Text style={{ left: 60, top: 10, bottom: 20 }}>2022-2023</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 10, marginRight: 10, height: 150, borderWidth: 1, borderColor: "#f5f5f5", backgroundColor: "white", top: 10 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                            <Text style={{ right: 40, top: 20 }}>Ownership</Text>
                            <Text style={{ top: 20, left: 0 }}>Board</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                            {
                                mode === "Rishabh" ?
                                    <Text style={{ right: 44, top: 20, fontWeight: "500", fontSize: 16, color: "#000" }}>{val?.route?.params?.val?.[0].ownership}</Text> :
                                    <Text style={{ right: 44, top: 20, fontWeight: "500", fontSize: 16, color: "#000" }}>{val?.route?.params?.val?.item?.ownership}</Text>
                            }
                            {
                                mode === "Rishabh" ?
                                    <Text style={{ top: 20, fontWeight: "500", fontSize: 16, color: "#000", left: 6 }}>{val?.route?.params?.val?.[0].board}</Text> :
                                    <Text style={{ top: 20, fontWeight: "500", fontSize: 16, color: "#000", left: 6 }}>{val?.route?.params?.val?.item?.board}</Text>
                            }

                        </View>
                        <View style={{ top: 20, left: 6 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                <Text style={{ right: 10, top: 20 }}>Year of Establishment</Text>
                                <Text style={{ top: 20 }}>Co-Ed Status</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                
                                {
                                    mode === "Rishabh" ?
                                        <Text style={{ top: 20, alignItems: "center", fontWeight: "500", fontSize: 16, color: "#000", left: 43 }}>{val?.route?.params?.val?.[0].coedStatus}</Text> :
                                        <Text style={{ top: 20, alignItems: "center", fontWeight: "500", fontSize: 16, color: "#000", left: 43 }}>{val?.route?.params?.val?.item?.coedStatus}</Text>
                                }


                            </View>
                        </View>
                        <View style={{ top: 40, backgroundColor: "white", height: 80 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                <Text style={{ right: 20, top: 20 }}>Campus Size</Text>
                                <Text style={{ top: 20, left: 28 }}>Campus Type</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                {
                                    mode === "Rishabh" ?
                                        <Text style={{ right: 44, top: 20, alignItems: "center", fontWeight: "500", fontSize: 16, color: "#000" }}>{val?.route?.params?.val?.[0].CampusSize}</Text> :
                                        <Text style={{ right: 44, top: 20, alignItems: "center", fontWeight: "500", fontSize: 16, color: "#000" }}>{val?.route?.params?.val?.item?.CampusSize}</Text>
                                }
                                {
                                    mode === "Rishabh" ?
                                        <Text style={{ top: 20, alignItems: "center", fontWeight: "500", fontSize: 16, color: "#000", right: -9 }}>{val?.route?.params?.val?.[0].CampusType}</Text> :
                                        <Text style={{ top: 20, alignItems: "center", fontWeight: "500", fontSize: 16, color: "#000", right: -9 }}>{val?.route?.params?.val?.item?.CampusType}</Text>
                                }



                            </View>
                        </View>

                    </View>
                    <View style={{ backgroundColor: "#6495ED", top: 72, margin: 10, borderTopStartRadius: 10, borderTopEndRadius: 10, flexDirection: "row" }}>
                        <Text style={{ fontSize: 20, fontWeight: "500", paddingHorizontal: 20, paddingVertical: 12, color: "black" }}>Fee Structure</Text>

                    </View>
                    <View style={{ marginBottom: 100 }}>
                        <View style={{ marginLeft: 10, marginRight: 10, top: 60, backgroundColor: "white" }}>
                            <Text style={{ color: "black", marginLeft: 12, marginTop: 16, fontSize: 16 }}>Fee Details for Nursery</Text>
                            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: "800", color: "black", marginLeft: 10, marginTop: 16, width: 90 }}>Registation Fees</Text>
                                <Text style={{ fontSize: 14, color: "black", marginLeft: 80, marginTop: 16, width: 80 }}>Onetime</Text>
                                {
                                    mode === "Rishabh" ?
                                        <Text style={{ fontSize: 14, color: "black", marginLeft: 60, marginTop: 16, width: 80 }}>{val?.route?.params?.val?.[0].RegistrationFees}</Text>
                                        : <Text style={{ fontSize: 14, color: "black", marginLeft: 60, marginTop: 16, width: 80 }}>{val?.route?.params?.val?.item?.RegistrationFees}</Text>

                                }
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: "800", color: "black", marginLeft: 10, marginTop: 16, width: 90 }}>Admission Fees</Text>
                                <Text style={{ fontSize: 14, color: "black", marginLeft: 80, marginTop: 16, width: 80 }}>Onetime</Text>
                                {
                                    mode === "Rishabh" ?
                                        <Text style={{ fontSize: 14, color: "black", marginLeft: 60, marginTop: 16, width: 80 }}>{val?.route?.params?.val?.[0].AdmissionFees}</Text> :
                                        <Text style={{ fontSize: 14, color: "black", marginLeft: 60, marginTop: 16, width: 80 }}>{val?.route?.params?.val?.item?.AdmissionFees}</Text>
                                }

                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: "800", color: "black", marginLeft: 10, marginTop: 16, width: 90 }}>Tuition Fees</Text>
                                <Text style={{ fontSize: 14, color: "black", marginLeft: 80, marginTop: 16, width: 80 }}>Onetime</Text>
                                {
                                    mode === "Rishabh" ?

                                        <Text style={{ fontSize: 14, color: "black", marginLeft: 60, marginTop: 16, width: 80 }}>{val?.route?.params?.val?.[0].TuitionFees}</Text> :
                                        <Text style={{ fontSize: 14, color: "black", marginLeft: 60, marginTop: 16, width: 80 }}>{val?.route?.params?.val?.item?.TuitionFees}</Text>

                                }
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: "800", color: "black", marginLeft: 10, marginTop: 16, width: 90 }}>Annual Fees</Text>
                                <Text style={{ fontSize: 14, color: "black", marginLeft: 80, marginTop: 16, width: 80 }}>Onetime</Text>
                                {
                                    mode === "Rishabh" ?
                                        <Text style={{ fontSize: 14, color: "black", marginLeft: 60, marginTop: 16, width: 80 }}>{val?.route?.params?.val?.[0].AnnualFees}</Text> :
                                        <Text style={{ fontSize: 14, color: "black", marginLeft: 60, marginTop: 16, width: 80 }}>{val?.route?.params?.val?.item?.AnnualFees}</Text>
                                }
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: "800", color: "black", marginLeft: 10, marginTop: 16, width: 90 }}>Development Fees</Text>
                                <Text style={{ fontSize: 14, color: "black", marginLeft: 80, marginTop: 16, width: 80 }}>Onetime</Text>
                                {
                                    mode === "Rishabh" ?
                                        <Text style={{ fontSize: 14, color: "black", marginLeft: 60, marginTop: 16, width: 80 }}>{val?.route?.params?.val?.[0].DevelopmentFees}</Text> :
                                        <Text style={{ fontSize: 14, color: "black", marginLeft: 60, marginTop: 16, width: 80 }}>{val?.route?.params?.val?.item?.DevelopmentFees}</Text>
                                }
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 14, fontWeight: "800", color: "black", marginLeft: 10, marginTop: 16, width: 90 }}>Other Fees</Text>
                                <Text style={{ fontSize: 14, color: "black", marginLeft: 80, marginTop: 16, width: 80 }}>Onetime</Text>
                                {
                                    mode === "Rishabh" ?
                                        <Text style={{ fontSize: 14, color: "black", marginLeft: 60, marginTop: 16, width: 80 }}>{val?.route?.params?.val?.[0].otherFees}</Text> :
                                        <Text style={{ fontSize: 14, color: "black", marginLeft: 60, marginTop: 16, width: 80 }}>{val?.route?.params?.val?.item?.otherFees}</Text>
                                }
                            </View>
                            <View style={{ marginTop: 30, marginLeft: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000", }}>Total Cost for a new Admission</Text>
                                {
                                    mode === "Rishabh" ?
                                        <Text style={{ color: "#000", fontSize: 20, }}>{val?.route?.params?.val?.[0].TotalCost} <Text style={{ color: "black", fontSize: 14, }}>for first year</Text></Text> :
                                        <Text style={{ color: "#000", fontSize: 20, }}>{val?.route?.params?.val?.item?.TotalCost} <Text style={{ color: "black", fontSize: 14, }}>for first year</Text></Text>
                                }
                                <Text style={{ fontSize: 12, color: "#72A0C1" }} onPress={() => openModal5(valueData)}>What is this cost and how is this calculated?</Text>
                            </View>
                            <View style={{ marginTop: 30, marginLeft: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000", }}>Monthly Cost</Text>
                                {
                                    mode === "Rishabh" ?
                                        <Text style={{ color: "#000", fontSize: 20, }}>{val?.route?.params?.val?.[0].MonthyCost} </Text> :
                                        <Text style={{ color: "#000", fontSize: 20, }}>{val?.route?.params?.val?.item?.MonthyCost} </Text>
                                }
                                <Text style={{ fontSize: 12, color: "#72A0C1" }} onPress={openModal6}>What is this cost and how is this calculated?</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: "#6495ED", top: 72, margin: 10, borderTopStartRadius: 10, borderTopEndRadius: 10, flexDirection: "row" }}>
                            <Text style={{ fontSize: 20, fontWeight: "500", paddingHorizontal: 20, paddingVertical: 12, color: "black" }}>Academic Stats</Text>

                        </View>
                        <View style={{ marginLeft: 10, marginRight: 10, height: 150, borderWidth: 1, borderColor: "#f5f5f5", backgroundColor: "white", top: 60 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                <Text style={{ left: 0, top: 20 }}>Classes Offered</Text>
                                <Text style={{ top: 20, left: 20 }}>Language Of Instruction</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                {
                                    mode === "Rishabh" ?
                                        <Text style={{ right: 52, top: 20, fontWeight: "500", fontSize: 16, color: "#000" }}>{val?.route?.params?.val?.[0].ownership}</Text> :
                                        <Text style={{ right: 52, top: 20, fontWeight: "500", fontSize: 16, color: "#000" }}>{val?.route?.params?.val?.item?.ownership}</Text>
                                }

                                {
                                    mode === "Rishabh" ?
                                        <Text style={{ top: 20, fontWeight: "500", fontSize: 16, color: "#000", right: 40 }}>{val?.route?.params?.val?.[0].board}</Text> :
                                        <Text style={{ top: 20, fontWeight: "500", fontSize: 16, color: "#000", right: 40 }}>{val?.route?.params?.val?.item?.board}</Text>
                                }
                            </View>
                            <View style={{ top: 20, left: 6 }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                    <Text style={{ right: 20, top: 20 }}>Academic Session</Text>
                                    <Text style={{ top: 20, right: 30 }}>School Format</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
{
    mode==="Rishabh"?
    <Text style={{ right: 44, top: 20, alignItems: "center", fontWeight: "500", fontSize: 16, color: "#000" }}>{val?.route?.params?.val?.[0]?.YearOfEstablishment}</Text>:
  <Text style={{ right: 44, top: 20, alignItems: "center", fontWeight: "500", fontSize: 16, color: "#000" }}>{val?.route?.params?.val?.item?.YearOfEstablishment}</Text>

}
                                    {
                                        mode === "Rishabh" ?
                                            <Text style={{ top: 20, alignItems: "center", fontWeight: "500", fontSize: 16, color: "#000", right: 2 }}>{val?.route?.params?.val?.[0].coedStatus}</Text> :
                                            <Text style={{ top: 20, alignItems: "center", fontWeight: "500", fontSize: 16, color: "#000", right: 2 }}>{val?.route?.params?.val?.item?.coedStatus}</Text>
                                    }

                                </View>
                            </View>
                            <View style={{ top: 40, backgroundColor: "white", height: 80 }}>
                                <View style={{ paddingLeft: 60 }}>
                                    <Text style={{ right: 20, top: 20 }}>Student Faculty Ratio</Text>

                                </View>
                                <View >
                                    {mode === "Rishabh" ?
                                        <Text style={{ left: 40, top: 20, fontWeight: "500", fontSize: 16, color: "#000" }}>{val?.route?.params?.val?.[0].CampusSize}</Text> :
                                        <Text style={{ left: 40, top: 20, fontWeight: "500", fontSize: 16, color: "#000" }}>{val?.route?.params?.val?.item?.CampusSize}</Text>


                                    }
                                </View>
                            </View>

                        </View>
                        <View style={{ backgroundColor: "#6495ED", margin: 10, borderTopStartRadius: 10, borderTopEndRadius: 10, flexDirection: "row", marginTop: 120 }}>
                            <Text style={{ fontSize: 20, fontWeight: "500", paddingHorizontal: 20, paddingVertical: 12, color: "black" }}>Admission Criteria & Eligibility</Text>

                        </View>

                        <View>
                            <MyTabs />
                        </View>
                    </View>






                </ScrollView>

                <Modal
                    animationType='slide'

                    visible={isModalVisible4}
                    onRequestClose={() => {
                        setModalVisible4(!isModalVisible4)
                    }}>
                    <View>
                        <Text style={{ fontSize: 16, color: "grey", marginTop: 20, marginLeft: 20 }}>Select the child you want to apply for</Text>
                        <FlatList
                            data={submitData}

                            contentContainerStyle={{
                                padding: spacing,
                                paddingTop: StatusBar.currentHeight || 42
                            }}
                            renderItem={(val) => {
                                console.log("rprp", val.item.id)
                                console.log("khkh", val)
                                return (
                                    <TouchableOpacity style={{
                                        flexDirection: "row", padding: spacing, marginBottom: spacing, borderRadius: 16, backgroundColor: "white",
                                        elevation: 10,
                                        shadowColor: '#000',

                                    }}>
                                        <Image source={require('./Images/man.png')}
                                            style={{
                                                width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                                                marginRight: spacing / 2
                                            }} />
                                        <View>
                                            <Text style={{ fontSize: 22, fontWeight: "700" }}>{val?.item?.input?.name}</Text>

                                            <Text style={{ fontSize: 18, opacity: .7 }}>{val?.item?.input?.class}</Text>

                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />

                    </View>

                </Modal>
                <Modal
                    animationType='slide'

                    visible={isModalVisible6}
                    onRequestClose={() => {
                        setModalVisible6(!isModalVisible6)
                    }}
                    transparent={true}
                >

                    <View style={{ height: "50%", width: "80%", backgroundColor: "white", marginTop: 120, marginLeft: 40, shadowColor: "#000", elevation: 20, borderRadius: 10 }}>
                        <TouchableOpacity onPress={closeModal6}>
                            <Image source={require("./Images/cross.png")} style={{ height: 27, width: 27, marginLeft: 280, marginTop: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 14, fontWeight: "700", color: "black", padding: 10 }}>Monthly Cost <Text style={{ fontSize: 14, fontWeight: "400" }}>is a rough estimate of the total amount you will have to
                            pay throughout the year (excluding one-time add  and optional costs) per month. This is not necessarily the exact amount of monthly fees but can be used for estimation purpose.This includes:</Text></Text>
                        <View style={{ flexDirection: "row", padding: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: "black", fontWeight: "500" }}>Fee Type</Text>
                            <Text style={{ fontSize: 16, color: "black", right: 26, fontWeight: "500" }}>Amt * Freq</Text>
                        </View>

                        <View style={{ flexDirection: "row", padding: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: "black", }}>Tuition Fees</Text>
                            {/* <Text style={{fontSize:16,color:"black",right:26}}>{val?.route?.params?.val?.item?.TuitionFees} / 1</Text> */}
                            {
                                mode === "Rishabh" ?
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.[0].TuitionFees} / 1</Text> :
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.item?.TuitionFees} / 1</Text>
                            }
                        </View>
                        <View style={{ flexDirection: "row", padding: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: "black", }}>Annual Fees</Text>
                            {
                                mode === "Rishabh" ?
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.[0].AnnualFees} / 12</Text> :
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.item?.AnnualFees} / 12</Text>
                            }
                        </View>
                        <View style={{ flexDirection: "row", padding: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: "black", }}>Development Fees</Text>
                            {
                                mode === "Rishabh" ?
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.[0].DevelopmentFees} / 1</Text> :
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.item?.DevelopmentFees} / 1</Text>
                            }
                        </View>
                        <View style={{ flexDirection: "row", padding: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: "black", }}>Other Fees</Text>
                            {
                                mode === "Rishabh" ?
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.[0].otherFees} / 1</Text> :
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.item?.otherFees} / 1</Text>
                            }
                        </View>
                        <View style={{ flexDirection: "row", padding: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: "black", }}>Total Fees</Text>
                            {mode === "Rishabh" ?

                                <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.[0].MonthyCost} </Text> :
                                <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.item?.MonthyCost} </Text>
                            }
                        </View>

                    </View>
                </Modal>
                <Modal
                    animationType='slide'

                    visible={isModalVisible5}
                    onRequestClose={() => {
                        setModalVisible5(!isModalVisible5)
                    }}
                    transparent={true}
                >
                    <View style={{ height: "50%", width: "80%", backgroundColor: "white", marginTop: 120, marginLeft: 40, shadowColor: "#000", elevation: 20, borderRadius: 10 }}>
                        <TouchableOpacity onPress={closeModal5}>
                            <Image source={require("./Images/cross.png")} style={{ height: 27, width: 27, marginLeft: 280, marginTop: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 14, fontWeight: "700", color: "black", padding: 10 }}>Total cost for a new Admission <Text style={{ fontSize: 14, fontWeight: "400" }}>is the total fees that
                            will be paid throughout the year (excluding optional charges) for a fresh Admission. This includes:</Text></Text>
                        <View style={{ flexDirection: "row", padding: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: "black", fontWeight: "500" }}>Fee Type</Text>
                            <Text style={{ fontSize: 16, color: "black", right: 26, fontWeight: "500" }}>Amt * Freq</Text>
                        </View>
                        <View style={{ flexDirection: "row", padding: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: "black", }}>Registation Fees</Text>
                            {
                                mode === "Rishabh" ?
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.[0].RegistrationFees} * 1</Text> :
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.item?.RegistrationFees} * 1</Text>
                            }
                        </View>
                        <View style={{ flexDirection: "row", padding: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: "black", }}>Admission Fees</Text>
                            {
                                mode === "Rishabh" ?
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.[0].AdmissionFees} * 1</Text> :
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.item?.AdmissionFees} * 1</Text>
                            }
                        </View>
                        <View style={{ flexDirection: "row", padding: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: "black", }}>Tuition Fees</Text>
                            {
                                mode === "Rishabh" ?
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.[0].TuitionFees} * 12</Text> :
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.item?.TuitionFees} * 12</Text>
                            }
                        </View>
                        <View style={{ flexDirection: "row", padding: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: "black", }}>Annual Fees</Text>
                            {
                                mode === "Rishabh" ?
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.[0].AnnualFees} * 1</Text> :
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.item?.AnnualFees} * 1</Text>
                            }
                        </View>
                        <View style={{ flexDirection: "row", padding: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: "black", }}>Development Fees</Text>
                            {
                                mode === "Rishabh" ?
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.[0].DevelopmentFees} * 12</Text> :
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.item?.DevelopmentFees} * 12</Text>
                            }
                        </View>
                        <View style={{ flexDirection: "row", padding: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: "black", }}>Other Fees</Text>
                            {
                                mode === "Rishabh" ?
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.[0].otherFees} * 12</Text> :
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.item?.otherFees} * 12</Text>
                            }
                        </View>
                        <View style={{ flexDirection: "row", padding: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: "black", }}>Total Fees</Text>
                            {
                                mode === "Rishabh" ?
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.[0].TotalCost} </Text> :
                                    <Text style={{ fontSize: 16, color: "black", right: 26 }}>{val?.route?.params?.val?.item?.TotalCost} </Text>
                            }
                        </View>

                    </View>
                </Modal>
            </View>


        </View>


    )
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarActiveTintColor: '#034694',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: 'white' },
            }}
        >
            <Tab.Screen
                name="EligibilityCriteria"
                component={EligibilityCriteria}
                options={{ tabBarLabel: 'Eligibility Criteria' }}
            />
            <Tab.Screen
                name="DocumentsRequired"
                component={DocumentsRequired}
                options={{ tabBarLabel: 'Documents Required' }}
            />

        </Tab.Navigator>
    );
}


export const EligibilityCriteria = () => {
    return (
        <View style={{ backgroundColor: 'red', height: 100 }}>
            <Text style={{ backgroundColor: "red", marginTop: 200 }}>Hi Rishabh</Text>
        </View>
    )
}

export const DocumentsRequired = () => {
    return (
        <View>
            <Text>Hi Rishabh</Text>
        </View>
    )
}