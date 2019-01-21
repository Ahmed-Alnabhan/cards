import React, { Component } from "react";
import { Text, View } from "react-native";
import axios from "axios";

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
        {this.state.cards.map(card => (
          <Text key={card.title}>{card.title}</Text>
        ))}
      </View>
    );
  }
}

export default CardsList;
