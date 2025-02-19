import { Image, Pressable, StyleSheet, Text } from "react-native";
import { View } from "../Themed";
import styled from "styled-components/native";
import { useRouter } from "expo-router";

interface MagicBoxProps {
  width: number;
  height: number;
  image: string;
  children?: React.ReactNode;
  text?: string;
  title: string;
}

export default function Dumibox({
  width,
  height,
  image,
  title,
  text,
}: MagicBoxProps) {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push("/(tabs)/(search)")}>
      <View>
        <View style={[styles.container, { width, height }]}>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Moreinfo>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </Moreinfo>
      </View>
    </Pressable>
  );
}

const Moreinfo = styled.View`
  width: 100;
  gap: 10;
  padding: 3px;
  /* background-color: green; */
`;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  text: {
    color: "black",
    fontSize: 12,
  },

  title: {
    color: "balck",
    fontSize: 16,
    fontWeight: "bold",
  },
});
