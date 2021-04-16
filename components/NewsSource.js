import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchSources} from '../actions/sourceActions';
import NewsSourceItem from './NewsSourceItem';

class NewsSource extends Component {
  componentDidMount() {
    this.props.fetchSources();
  }

  render() {
    return (
      <View>
        {this.props.sources.sources.map((source, index) => (
          <NewsSourceItem
            source={source}
            key={index}
            navigation={this.props.navigation}
          />
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  sources: state.sources,
});

const mapDispatchToProps = {fetchSources};

export default connect(mapStateToProps, mapDispatchToProps)(NewsSource);
