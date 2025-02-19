import { Image, StyleSheet, Text } from "react-native";
import { View } from "../Themed";

interface MagicBoxProps {
  width: number;
  height: number;
  image: string;
  children?: React.ReactNode;
  text?: string;
}

export default function MagicBox({
  width,
  height,
  image,
  children,
  text,
}: MagicBoxProps) {
  return (
    <View style={[styles.container, { width, height }]}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />

      {children}
    </View>
  );
}

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
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
