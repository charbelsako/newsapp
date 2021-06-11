import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {fetchNews} from '../actions/newsActions';
import NewsCard from './NewsCard';

class NewsFeed extends Component {
  componentDidMount() {
    // NOTE: this can be in a for loop inside the function for abstraction
    // this.props.fetchNews(['business', 'sports'], ['ae', 'eg'])
    this.props.fetchNews('business', 'ae');
    this.props.fetchNews('business', 'eg');
    this.props.fetchNews('sports', 'ae');
    this.props.fetchNews('sports', 'eg');
  }

  render() {
    if (this.props.loading) {
      return <Text>Loading</Text>;
    }
    return (
      <ScrollView>
        {this.props.news.news.map((news, index) => (
          <NewsCard
            news={news}
            key={index}
            navigation={this.props.navigation}
          />
        ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({news: state.news});

export default connect(mapStateToProps, {fetchNews})(NewsFeed);
