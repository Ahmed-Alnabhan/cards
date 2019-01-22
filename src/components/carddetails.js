import React from "react";
import { Text, View, Image } from "react-native";
import Card from "./card";
import CardPart from "./cardpart";

const styles = {
  titleSectionStyle: {
    justifyContent: "space-around",
    flexDirection: "column"
  },
  thumbStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    height: 50,
    width: 50,
    marginLeft: 8,
    marginRight: 8,
    overflow: "hidden"
  },
  titleStyle: {
    fontSize: 18
  },
  singImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

// eslint-disable-next-line arrow-parens
const CardDetails = props => {
  const { titleSectionStyle, thumbStyle, titleStyle, singImageStyle } = styles;
  const { img, thumb_img, title, artist } = props;
  return (
    <Card>
      <CardPart>
        <View>
          <Image style={thumbStyle} source={{ uri: thumb_img }} />
        </View>
        <View style={titleSectionStyle}>
          <Text style={titleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardPart>
      <CardPart>
        <Image source={{ uri: img }} style={singImageStyle} />
      </CardPart>
    </Card>
  );
};

export default CardDetails;
