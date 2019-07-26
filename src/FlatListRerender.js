import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const data = [
  { key: '1', textBox: 'Apple', color: 'red' },
  { key: '2', textBox: 'Lemon', color: 'yellow' },
  { key: '3', textBox: 'Orange', color: 'orange' },
  { key: '4', textBox: 'Pear', color: 'green' },

]

class FlatListRerender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemId: null,
    };
  }

  onPressItem = (key) => {
    this.setState({ selectedItemId: key });
  }

  renderItem = ({ item }) => {
    const { key, textBox, color } = item;
    const { selectedItemId } = this.state;
    const isSelected = selectedItemId === key;

    console.log('renderItem', key, textBox, color, isSelected);
    return (
      <TouchableOpacity
        key={key}
        style={[
          styles.box,
          { backgroundColor: isSelected ? color : 'transparent' },
        ]}
        onPress={() => this.onPressItem(key)}
      >
        <Text style={styles.text}>
          {textBox}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    // const { selectedItemId } = this.state;
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          // extraData={selectedItemId}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 20,
  },
  box: {
    width: '100%',
    height: 70,
    borderColor: 'grey',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  }
});

export default FlatListRerender;
