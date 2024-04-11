import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";

const LocationSearch = () => {
  const data = [
    {
      tempc: 26,
      city: "London",
      condition: {
        icon: "cdn.weatherapi.com/weather/64x64/day/122.png",
        text: "Cloudy",
      },
      last_updated: Date.now(),
    },

    {
      tempc: 27,
      condition: {
        icon: "cdn.weatherapi.com/weather/64x64/day/122.png",
        text: "Cloudy",
      },
      city: "Bien Hoa",
      last_updated: Date.now(),
    },

    {
      tempc: 28,
      condition: {
        icon: "cdn.weatherapi.com/weather/64x64/day/122.png",
        text: "Cloudy",
      },
      city: "Ho Chi Minh",
      last_updated: Date.now(),
    },
  ];

  return (
    // Container
    <View
      style={[
        tw`flex flex-col items-center px-8 pt-8 bg-[#01062A] w-full h-full`,
        {
          minWidth: "100vw",
          minHeight: "100vh",
          overflow: "scroll",
        },
      ]}
    >
      <ScrollView style={tw`w-full h-full`}>
        {/* Search bar */}
        <TextInput
          style={tw`flex flex-row text-white items-center justify-between w-full bg-[#2e3144] px-4 py-2 mt-16 rounded-md`}
          placeholder="Search..."
          placeholderTextColor={"gray"}
        ></TextInput>
        {/* Elements */}
        <View style={tw`mt-8 w-full gap-8`}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={tw`bg-[#13162D] rounded-lg flex items-center justify-center py-4`}
            >
              <Text style={tw`text-white text-8xl font-semibold`}>
                {item.tempc}
              </Text>
              <Text style={tw`text-white text-lg font-semibold`}>
                {item.condition.text}
              </Text>
              <Text style={tw` text-white font-bold text-2xl tracking-widest`}>
                {item.city}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default LocationSearch;
