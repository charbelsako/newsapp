import React, {Component} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import moment from 'moment';
import styles from './styles';

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
      <TouchableOpacity style={styles.pten} onPress={this.onPress}>
        <Text style={styles.wfull}> {this.props.news.title} </Text>
        <Image
          source={{uri: this.props.news.urlToImage}}
          style={styles.thumbnail}
        />
        <Text>
          {moment(this.props.news.publishedAt).format(
            'MMMM Do YYYY, h:mm:ss a',
          )}
        </Text>
        {this.props.news.source ? (
          <Text>{this.props.news.source.name}</Text>
        ) : null}
        <Text style={styles.contentText}>{this.props.news.content}</Text>
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
