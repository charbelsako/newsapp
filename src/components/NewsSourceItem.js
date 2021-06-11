import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default class NewsSourceItem extends Component {
  goToSourcePage = () => {
    this.props.navigation.navigate('SourcePage', {
      name: this.props.source.id,
      title: this.props.source.name,
    });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.goToSourcePage} style={{padding: 10}}>
        <Text>{this.props.source.name}</Text>
        {/* <Text>{this.props.source.id}</Text> */}
        <Text>{this.props.source.description}</Text>
        <Text>{this.props.source.category}</Text>
        {/* <Text>{this.props.source.language}</Text> */}
        <Text>{this.props.source.country}</Text>
      </TouchableOpacity>
    );
  }
}
