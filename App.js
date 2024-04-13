import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DetailScreen from "./screens/DetailScreen";
import tw from "twrnc";
import BotTabNav from "./navigation/BotTabNav";

export default function App() {
    return <BotTabNav></BotTabNav>;
}

// export default function App() {
//     return <DetailScreen></DetailScreen>;
// }
