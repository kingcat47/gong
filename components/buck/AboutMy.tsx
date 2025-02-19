import styled from "styled-components/native";
import { Text, View } from "../Themed";

interface AboutMyProps {
  text: string;
  text2?: string;
  icon: string;
  icon2?: string;
}

export default function AboutMy({ text, text2, icon, icon2 }: AboutMyProps) {
  return (
    <View>
      <Container>
        <Text>text</Text>
        <Text>text2</Text>
      </Container>
    </View>
  );
}

const Container = styled.View`
  width: 100%;
  height: 40;
`;
