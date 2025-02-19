import React, { memo, useCallback } from "react";
import { StyleSheet, ScrollView, Pressable, Text } from "react-native";

type MoodItemProps = {
  mood: string;
  isSelected: boolean;
  onSelect: (mood: string) => void;
};

const MoodItem = memo(({ mood, isSelected, onSelect }: MoodItemProps) => {
  const handlePress = useCallback(() => {
    onSelect(mood);
  }, [mood, onSelect]);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.moodItem,
        isSelected && styles.selectedMood,
        pressed && styles.pressedMood,
      ]}
      onPress={handlePress}
    >
      <Text style={[styles.moodText, isSelected && styles.selectedMoodText]}>
        {mood}
      </Text>
    </Pressable>
  );
});

const MoodBar = () => {
  const [selectedMood, setSelectedMood] = React.useState("오후");

  const moods = [
    "오후",
    "기분전환",
    "인디",
    "겨울",
    "휴식/명상",
    "신나는",
    "재즈",
  ];

  const handleSelect = useCallback((mood: string) => {
    setSelectedMood(mood);
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {moods.map((mood) => (
        <MoodItem
          key={mood}
          mood={mood}
          isSelected={selectedMood === mood}
          onSelect={handleSelect}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 8,
  },
  moodItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  selectedMood: {
    backgroundColor: "black",
    borderColor: "black",
  },
  pressedMood: {
    opacity: 0.8,
  },
  moodText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  selectedMoodText: {
    color: "white",
  },
});

export default memo(MoodBar);
