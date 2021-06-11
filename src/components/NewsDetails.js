import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import moment from 'moment';
import {addHistory} from '../actions/historyActions';
import {connect} from 'react-redux';

class NewsDetails extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({title: this.props.route.params.title});
    const {news} = this.props.route.params;
    news.lastAccessed = Date.now();
    this.props.addHistory(news);
  }

  render() {
    const {title, source, author, content, publishedAt, urlToImage} =
      this.props.route.params.news;
    return (
      <View style={{padding: 5}}>
        <Text style={{marginBottom: 20, padding: 5}}> {title} </Text>
        <Image
          source={{uri: urlToImage}}
          style={{width: '100%', height: 200}}
        />
        {/* NOTE: bug when rendering some arabic text */}
        <Text>{content}</Text>
        {/* <Text>{this.props.route.params.news}</Text> */}
        <Text>Author: {author}</Text>
        <Text>Source: {source.name}</Text>
        <Text>
          Published At: {moment(publishedAt).format('MMMM Do YYYY, h:mm:ss a')}
        </Text>
      </View>
    );
  }
}

export default connect(null, {addHistory})(NewsDetails);
