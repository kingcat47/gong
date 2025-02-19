import { Pressable, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import styled from "styled-components/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
export default function Mymusic() {
  const [one, setOne] = useState(true);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "white",
      }}
    >
      <View style={styles.container}>
        <Container>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="hearto" size={24} color="black" />
            <Text>좋아한 음악</Text>
          </View>
          <View>
            <Text>하뜌하뜌</Text>
          </View>
        </Container>
        <Container>
          <View style={{ flexDirection: "row" }}>
            <Feather name="download-cloud" size={24} color="black" />
            <Text>저장한 음악</Text>
          </View>
          <View>
            <Text>0곡곡</Text>
          </View>
        </Container>
        <Container>
          <View style={{ flexDirection: "row" }}>
            <Feather name="smartphone" size={24} color="black" />
            <Text>로컬음악</Text>
          </View>
          <View>
            <Text>2곡</Text>
          </View>
        </Container>
        <Container>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="hearto" size={24} color="black" />
            <Text>좋아한 음악</Text>
          </View>
          <View>
            <Text>웅 그래</Text>
          </View>
        </Container>
        <Container>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="hearto" size={24} color="black" />
            <Text>좋아한 음악</Text>
          </View>
          <View>
            <Text>웅 그래</Text>
          </View>
        </Container>
        <Container>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="hearto" size={24} color="black" />
            <Text>좋아한 음악</Text>
          </View>
          <View>
            <Text>웅 그래</Text>
          </View>
        </Container>
      </View>
      <View>
        <Container style={{ marginTop: 50 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Pressable onPress={() => setOne(true)}>
              <Text
                style={{
                  fontSize: one ? 20 : 20,
                  fontWeight: one ? "bold" : "normal",
                  color: one ? "black" : "gray",
                }}
              >
                내 앨범
              </Text>
            </Pressable>
            <View style={{ width: 30 }} />
            <Pressable onPress={() => setOne(false)}>
              <Text
                style={{
                  fontSize: !one ? 20 : 20,
                  fontWeight: !one ? "bold" : "normal",
                  color: !one ? "black" : "gray",
                }}
              >
                콜라보 앨범
              </Text>
            </Pressable>
          </View>
        </Container>
        <View
          style={{
            height: 200,
            // backgroundColor: "red",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "100%", justifyContent: "center" }} />
          {one === true ? (
            <Text style={{ color: "gray" }}>
              좋아하는곡을 내 앨범에 담거나 스크린샷으로 내 앨범을 어쩌구저쩌구
            </Text>
          ) : (
            <Text style={{ color: "gray" }}>
              콜라보 앨범으로 친구들과 함께 곡을 추가하고 어쩌구 저쩌구
            </Text>
          )}
          <View
            style={{
              width: 100,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              borderColor: "gray",
              borderWidth: 0.5,
            }}
          >
            <Text style={{ color: "black" }}>로그인</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const Container = styled.View`
  padding-top: 10;
  width: 100%;
  height: 40;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
