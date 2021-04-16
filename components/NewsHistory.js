import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {getHistory} from '../actions/historyActions';
import NewsCard from './NewsCard';

class NewsHistory extends Component {
  subscription = null;

  componentDidMount() {
    // add listener
    this.subscription = this.props.navigation.addListener('focus', () => {
      this.props.getHistory();
    });
    // this.props.getHistory();
  }

  componentWillUnmount() {
    this.subscription();
  }

  render() {
    return (
      <ScrollView>
        {this.props.history.map((article, index) => (
          <NewsCard
            news={article}
            key={index}
            navigation={this.props.navigation}
          />
        ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history.history,
});

export default connect(mapStateToProps, {getHistory})(NewsHistory);
