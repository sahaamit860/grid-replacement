import {Text, View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React, {Component} from 'react';

const gridData = [
  {value: 1},
  {value: 2},
  {value: 3},
  {value: 4},
  {value: 5},
  {value: 6},
  {value: 7},
  {value: 8},
  {value: 9},
];

export default class App extends Component {
  renderItem = (item, index) => {
    return (
      <View style={styles.gridItem}>
        <Text>{item.value}</Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{height: 160}}>
          <FlatList
            alwaysBounceVertical={false}
            alwaysBounceHorizontal={false}
            data={gridData}
            keyExtractor={item => item.value}
            numColumns={3}
            renderItem={({item, index}) => this.renderItem(item, index)}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  gridItem: {
    backgroundColor: '#FFFFFF',
    height: 35,
    width: 35,
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 8,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
