import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import axios from "axios";
import CardDetails from "./carddetails";

class CardsList extends Component {
  state = {
    cards: []
  };

  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ cards: response.data }));
  }

  render() {
    return (
      <View>
        <ScrollView>
          {this.state.cards.map(card => (
            <CardDetails
              key={card.title}
              title={card.title}
              artist={card.artist}
              thumb_img={card.thumbnail_image}
              img={card.image}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default CardsList;
