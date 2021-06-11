import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import axios from 'axios';
import NewsCard from './NewsCard';

export default class SourcePage extends Component {
  state = {
    articles: [],
  };

  async componentDidMount() {
    try {
      let response = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=${this.props.route.params.name}&apiKey=88ba75a801124ae1a2bacc106a5140d0`,
      );

      this.setState({articles: response.data.articles});
      this.props.navigation.setOptions({title: this.props.route.params.title});
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <ScrollView>
        <Text>
          {this.state.articles.map((article, index) => (
            <NewsCard
              news={article}
              navigation={this.props.navigation}
              key={index}
            />
          ))}
        </Text>
      </ScrollView>
    );
  }
}
