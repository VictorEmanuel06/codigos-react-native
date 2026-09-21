import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

export default function Header() {
    return (
        <View>
            <Pressable>
                <Ionicons name="menu" size={20} color="#121212" />
            </Pressable>
        </View>
    );
}