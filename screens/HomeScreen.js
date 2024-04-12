import React, { useState } from "react"
import tw from "twrnc"
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView } from "react-native"
import { StatusBar } from 'expo-status-bar'
import { MagnifyingGlassIcon, MapPinIcon } from "react-native-heroicons/outline"

export default function HomeScreen() {
    const [showSearch, setShowSearch] = useState(false)
    const [locations, setLocations] = useState([1, 2])

    const handleLocations = ((loc) => {
        console.log('location: ', loc)
    })
    return (
        <View style={tw`flex gap-3 flex-row justify-center bg-black h-full`}>
            <StatusBar style="light" />
            <SafeAreaView style={tw`flex w-full`}>
                {/* search section */}
                <View style={tw`flex flex-row items-center gap-2 mx-4 relative z-50 h-[7%]`}>
                    <View style={tw`rounded-full bg-white bg-opacity-25 w-full`}>
                        {
                            showSearch ? (
                                <TextInput
                                    placeholder="Search city"
                                    placeholderTextColor={'lightgray'}
                                    style={tw`pl-6 h-10 text-base text-white w-full active:outline-none`}
                                />
                            ) : null
                        }
                    </View>
                    <TouchableOpacity
                        style={tw`rounded-full p-3 m-1 h-10 bg-white bg-opacity-25 relative right-15`}
                        onPress={() => setShowSearch(!showSearch)}
                    >
                        <MagnifyingGlassIcon color="white" size="25" style={tw`h-6 w-6`} />
                    </TouchableOpacity>
                    {
                        locations.length > 0 && showSearch ? (
                            <View style={tw`absolute w-full bg-gray-300 top-16 rounded-3xl `}>
                                {
                                    locations.map((loc, index) => {
                                        let showBorder = index + 1 != locations.length
                                        let borderClass = showBorder ? ' border-b-2 border-b-gray-400' : ''
                                        return (
                                            <TouchableOpacity
                                                key={index}
                                                style={tw`flex-row items-center border-0 p-3 px-4 mb-1 border-b-2 border-b-gray-400 + ${borderClass}`}
                                                onPress={() => handleLocations(loc)}
                                            >
                                                <MapPinIcon size='20' color='gray' />
                                                <Text style={tw`text-black text-lg ml-2`}>
                                                    London, United Kingdom
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        ) : null
                    }
                </View>

                {/* forecast section */}
                <View style={tw`mx-12 mt-4 justify-around flex mb-2 bg-blue-950 bg-opacity-25 rounded-3xl py-4`}>
                    {/* general section */}
                    <View style={tw`flex items-center gap-6`}>
                        <Image source={require('../assets/partlycloudy.png')}
                            style={tw`w-45 h-45`}
                        />
                        <View style={tw`flex items-center`}>
                            <Text style={tw`text-white font-bold text-6xl`}>18{'\u00b0'}</Text>
                            <Text style={tw`text-white font-semibold text-lg my-3`}>Partly Cloudy</Text>
                        </View>
                    </View>
                </View>

                {/* forecast tomorrow section */}
                <View style={tw`my-6`}>
                    <View style={tw`flex flex-row mx-5`}>
                        <ScrollView horizontal={true}>
                            {/* 1 */}
                            <View style={tw`flex justify-center items-center bg-white bg-opacity-25 rounded-3xl w-30 h-50 px-3 mr-4`}>
                                <Image source={require('../assets/heavyrain.png')}
                                    style={tw`w-20 h-20`} />
                                <View style={tw`flex items-center mt-3`}>
                                    <Text style={tw`text-white font-bold text-2xl`}>17{'\u00b0'}</Text>
                                    <Text style={tw`text-white font-bold text-lg`}>Heavy rain</Text>
                                    <Text style={tw`text-white text-md mt-3`}>Tomorrow</Text>
                                </View>
                            </View>

                            {/* 2 */}
                            <View style={tw`flex justify-center items-center bg-white bg-opacity-25 rounded-3xl w-30 h-50 px-3 mr-4`}>
                                <Image source={require('../assets/cloud.png')}
                                    style={tw`w-20 h-20`} />
                                <View style={tw`flex items-center mt-3`}>
                                    <Text style={tw`text-white font-bold text-2xl`}>17{'\u00b0'}</Text>
                                    <Text style={tw`text-white font-bold text-lg`}>Cloudy</Text>
                                    <Text style={tw`text-white text-md mt-3`}>12 April</Text>
                                </View>
                            </View>

                            {/* 3 */}
                            <View style={tw`flex justify-center items-center bg-white bg-opacity-25 rounded-3xl w-30 h-50 px-3 mr-4`}>
                                <Image source={require('../assets/mist.png')}
                                    style={tw`w-20 h-20`} />
                                <View style={tw`flex items-center mt-3`}>
                                    <Text style={tw`text-white font-bold text-2xl`}>17{'\u00b0'}</Text>
                                    <Text style={tw`text-white font-bold text-lg`}>Cloudy</Text>
                                    <Text style={tw`text-white text-md mt-3`}>13 April</Text>
                                </View>
                            </View>

                            {/* 4 */}
                            <View style={tw`flex justify-center items-center bg-white bg-opacity-25 rounded-3xl w-30 h-50 px-3 mr-4`}>
                                <Image source={require('../assets/moderaterain.png')}
                                    style={tw`w-20 h-20`} />
                                <View style={tw`flex items-center mt-3`}>
                                    <Text style={tw`text-white font-bold text-2xl`}>17{'\u00b0'}</Text>
                                    <Text style={tw`text-white font-bold text-lg`}>Moderate rain</Text>
                                    <Text style={tw`text-white text-md mt-3`}>14 April</Text>
                                </View>
                            </View>

                            {/* 5 */}
                            <View style={tw`flex justify-center items-center bg-white bg-opacity-25 rounded-3xl w-30 h-50 px-3 mr-4`}>
                                <Image source={require('../assets/sun2.png')}
                                    style={tw`w-20 h-20`} />
                                <View style={tw`flex items-center mt-3`}>
                                    <Text style={tw`text-white font-bold text-2xl`}>17{'\u00b0'}</Text>
                                    <Text style={tw`text-white font-bold text-lg`}>Sun</Text>
                                    <Text style={tw`text-white text-md mt-3`}>15 April</Text>
                                </View>
                            </View>

                            {/* 6 */}
                            <View style={tw`flex justify-center items-center bg-white bg-opacity-25 rounded-3xl w-30 h-50 px-3 mr-4`}>
                                <Image source={require('../assets/sun2.png')}
                                    style={tw`w-20 h-20`} />
                                <View style={tw`flex items-center mt-3`}>
                                    <Text style={tw`text-white font-bold text-2xl`}>17{'\u00b0'}</Text>
                                    <Text style={tw`text-white font-bold text-lg`}>Sun</Text>
                                    <Text style={tw`text-white text-md mt-3`}>16 April</Text>
                                </View>
                            </View>

                            {/* 7 */}
                            <View style={tw`flex justify-center items-center bg-white bg-opacity-25 rounded-3xl w-30 h-50 px-3 mr-4`}>
                                <Image source={require('../assets/sun2.png')}
                                    style={tw`w-20 h-20`} />
                                <View style={tw`flex items-center mt-3`}>
                                    <Text style={tw`text-white font-bold text-2xl`}>17{'\u00b0'}</Text>
                                    <Text style={tw`text-white font-bold text-lg`}>Sun</Text>
                                    <Text style={tw`text-white text-md mt-3`}>17 April</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>

                {/* other info */}

                <View style={tw`w-full bg-black`}>
                    <View style={tw`my-4 mx-4`}>
                        <View style={tw`flex flex-row justify-around gap-3`}>
                            <View style={tw`flex w-45 h-30 rounded-3xl items-center justify-center bg-white bg-opacity-30`}>
                                <Image source={require('../assets/Untitled-removebg-preview.png')}
                                    style={tw`w-15 h-15`} />
                                <Text style={tw`text-white text-md mt-3`}>Visibility</Text>
                            </View>
                            <View style={tw`flex w-45 h-30 rounded-3xl items-center justify-center bg-white bg-opacity-30`}>
                                <Image source={require('../assets/wind.png')}
                                    style={tw`w-15 h-15`} />
                                <Text style={tw`text-white text-md mt-3`}>Wind</Text>
                            </View>
                        </View>
                        <View style={tw`flex flex-row justify-around gap-3 mt-4`}>
                            <View style={tw`flex w-45 h-30 rounded-3xl items-center justify-center bg-white bg-opacity-30`}>
                                <Image source={require('../assets/drop.png')}
                                    style={tw`w-15 h-15`} />
                                <Text style={tw`text-white text-md mt-3`}>Humidity</Text>
                            </View>
                            <View style={tw`flex w-45 h-30 rounded-3xl items-center justify-center bg-white bg-opacity-30`}>
                                <Image source={require('../assets/sun.png')}
                                    style={tw`w-15 h-15`} />
                                <Text style={tw`text-white text-md mt-3`}>UV</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}