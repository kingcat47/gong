import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface ChartCardProps {
  rank?: number;
  title: string;
  artist: string;
  albumArt: string;
  buttonText?: string;
}

const Bugsbox = ({
  rank = 1,
  title = "REBEL HEART",
  artist = "IVE (아이브)",
  albumArt,
  buttonText = "임의 재생",
}: ChartCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>#실시간 TOP 100</Text>

      <View style={styles.imageContainer}>
        <Image source={{ uri: albumArt }} style={styles.albumArt} />
        <View style={styles.rankBadge}>
          <Text style={styles.rankText}>{rank}</Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {artist}
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#635D6C",
    padding: 16,
    borderRadius: 24,
    width: 200,
    height: 300,
    marginTop: 16,
  },
  topText: {
    color: "#D1D5DB",
    fontSize: 12,
    marginBottom: 12,
  },
  imageContainer: {
    position: "relative",
    width: 140,
    height: 140,
    alignSelf: "center",
    marginBottom: 12,
  },
  albumArt: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  rankBadge: {
    position: "absolute",
    bottom: -8,
    right: -8,
    backgroundColor: "black",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  rankText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
  artist: {
    color: "#9CA3AF",
    fontSize: 14,
    marginBottom: 12,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#374151",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#D1D5DB",
    fontSize: 12,
  },
});

export default Bugsbox;
