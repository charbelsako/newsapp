import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import moment from 'moment';

export default class NewsCard extends Component {
  constructor(props) {
    super(props);
  }

  onPress = () => {
    this.props.navigation.navigate('Details', {
      news: this.props.news,
      title: this.props.news.title,
    });
  };

  render() {
    // return <Text>{this.props.news.source.name}</Text>;
    return (
      <TouchableOpacity style={{padding: 10}} onPress={this.onPress}>
        <Text style={{width: '100%'}}> {this.props.news.title} </Text>
        <Image
          source={{uri: this.props.news.urlToImage}}
          style={{width: '100%', height: 200}}
        />
        <Text>
          {moment(this.props.news.publishedAt).format(
            'MMMM Do YYYY, h:mm:ss a',
          )}
        </Text>
        {this.props.news.source ? (
          <Text>{this.props.news.source.name}</Text>
        ) : null}
        <Text
          style={{
            height: 55,
            width: 380,
            padding: 10,
            overflow: 'hidden',
          }}>
          {this.props.news.content}
        </Text>
        {this.props.news.lastAccessed && (
          <Text>
            Last Accessed:{' '}
            {moment(this.props.news.lastAccessed).format(
              'MMMM Do YYYY, h:mm:ss a',
            )}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
}
