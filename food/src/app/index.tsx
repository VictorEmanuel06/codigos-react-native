import Header from "@/components/header";
import { ScrollView, View } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full">
        <Header />
      </View>
    </ScrollView >
  );
}
