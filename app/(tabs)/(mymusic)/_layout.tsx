import { Stack } from "expo-router";

export default function MymusicLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "탐색",
        }}
      />
      <Stack.Screen name="two" />
    </Stack>
  );
}
