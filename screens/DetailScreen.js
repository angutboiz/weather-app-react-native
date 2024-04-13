import React from 'react';
import tw from 'twrnc';
import { View, Text, Image, ScrollView } from 'react-native';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { faker } from '@faker-js/faker';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function DetailScreen() {
    const labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Biểu đồ so sánh nhiệt độ trong 5 tháng của năm 2023 và 2024'
            }
        }
    };

    const data = {
        labels,
        datasets: [
            {
                label: '2023',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
            {
                label: '2024',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            }
        ]
    };

    return (
        <ScrollView style={tw`py-5 px-3 bg-[#010217] h-[900px]`}>
            <View style={tw``}>
                <View style={tw`flex flex-row bg-[#131427] items-center justify-between p-5 rounded-3xl border-2 border-t-[#fff]`}>
                    <Image source={require('/assets/cloud.png')} style={tw`w-[57px] h-[33px] `} />
                    <View style={tw`flex justify-between gap-3`}>
                        <Text style={tw`font-bold text-white text-2xl`}>Today</Text>
                        <Text style={tw`font-bold text-white`}>May mắn</Text>
                    </View>
                    <View style={tw`css`}>
                        <View style={tw`flex flex-row`}>
                            <Text style={tw`font-bold text-2xl text-white`}>18</Text>
                            <Text style={tw` font-bold text-white`}>o</Text>
                        </View>
                        <Text style={tw` text-white`}>Cloudy</Text>
                    </View>
                </View>
            </View>
            <View style={tw`mt-5 bg-[#131427] px-2 py-10 rounded-3xl`}>
                <Line options={options} data={data} />
            </View>
            <View style={tw`mt-5 bg-[#131427] px-10 py-10 rounded-3xl `}>
                <View style={tw`flex flex-row justify-between `}>
                    <View style={tw``}>
                        <Text style={tw`font-bold text-center text-white text-xl border-b-2 border-white pb-2 mb-2`}>Tầm nhìn</Text>
                        <Text style={tw`font-bold text-center text-white`}>100 mét</Text>
                        <Text style={tw`font-bold text-center text-white`}>clear</Text>
                    </View>
                    <View style={tw``}>
                        <Text style={tw`font-bold text-center text-white text-xl border-b-2 border-white pb-2 mb-2`}>Sức gió</Text>
                        <Text style={tw`font-bold text-center text-white`}>7km</Text>
                        <Text style={tw`font-bold text-center text-white`}>NE</Text>
                    </View>
                </View>
                <View style={tw`flex flex-row justify-between mt-5`}>
                    <View style={tw``}>
                        <Text style={tw`font-bold text-center text-white text-xl border-b-2 border-white pb-2 mb-2`}>Độ ẩm</Text>
                        <Text style={tw`font-bold text-center text-white`}>75%</Text>
                    </View>
                    <View style={tw``}>
                        <Text style={tw`font-bold text-center text-white text-xl border-b-2 border-white pb-2 mb-2`}>UV Rays</Text>
                        <Text style={tw`font-bold text-center text-white`}>8</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
