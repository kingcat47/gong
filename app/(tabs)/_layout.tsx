import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, useRouter } from "expo-router";
import { Pressable, View, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import AntDesign from "@expo/vector-icons/AntDesign";
import Foundation from "@expo/vector-icons/Foundation";
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "홈",
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),

            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <Entypo
                      name="home"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name="(bucktv)"
          options={{
            headerTitle: "차트",
            tabBarIcon: ({ color }) => (
              <AntDesign name="Trophy" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(mymusic)"
          options={{
            headerTitle: "내 음악",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-o" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(search)"
          options={{
            headerTitle: "탐색",
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(essential)"
          options={{
            headerTitle: "ESS급급",
            tabBarIcon: ({ color }) => (
              <Foundation name="sound" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
