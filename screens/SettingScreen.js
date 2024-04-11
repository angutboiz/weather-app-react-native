import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
const SettingScreen = () => {
  const units = [
    {
      label: "Temperature",
      value: "Celsius/Fahrenheit",
    },
    {
      label: "Wind",
      value: "Kmp/Mph/Knots",
    },
    {
      label: "Air Pressure",
      value: "hPa/mmHg/inHg",
    },
    {
      label: "Visibility",
      value: "Km/Mi",
    },
  ];
  return (
    <View
      style={[
        tw`flex items-center flex-cols pt-16 px-4 bg-[#01062A]`,
        {
          minHeight: "100vh",
          height: "100%",
          minWidth: "100wh",
        },
      ]}
    >
      <View style={tw`w-full mb-16`}>
        <Text style={tw`text-gray-400 font-semibold text-xl mb-4`}>Units</Text>
        <View style={tw`w-full pb-6 rounded-2xl bg-[#13162D] text-white`}>
          {units.map((item, index) => (
            <View
              key={index}
              style={tw` flex flex-row items-center justify-between border-b-2 border-gray-200 py-4 mx-4`}
            >
              <Text style={tw`text-white text-xl`}>{item.label}</Text>
              <TouchableOpacity>
                <Text style={tw`text-blue-700 text-lg`}>{item.value}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <View style={tw`w-full py-4 rounded-full bg-[#13162D] text-white px-8`}>
        <TouchableOpacity>
          <Text style={tw`text-white text-xl`}>About Weather App {">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;
