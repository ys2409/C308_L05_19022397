import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Movies from './Movies';
import MovieList from './Movies';
import BoatList from './Boats';

const App: () => React$Node = () => {
  return (
    <View>
      <ScrollView>
        <Text>GetABoat - For Sale</Text>
        <BoatList />
      </ScrollView>
    </View>
  );
};

export default App;
