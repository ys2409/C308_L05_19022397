import {Text, View, Image} from 'react-native';
import React from 'react';


//exercise 2
const movie = {title: 'Doctor Sleep', year: '2019'};
class Movies extends React.Component {
  render() {
    return (
      <Text>
        {movie.title}, {movie.year}
      </Text>
    );
  }
}

exercise 3
const MOVIES_DATA = ['Doctor Sleep', 'Midway'];
const MovieList = () => {
  return MOVIES_DATA.map((title) => <Text> {title} </Text>);
};

exercise 4
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
  },
  {
    title: 'Midway',
    year: '2019',
  },
];
const MovieList = () => {
  return MOVIES_DATA.map((movie1) => {
    return (
      <View>
        <Text>{movie1.title}</Text>
        <Text>{movie1.year}</Text>
      </View>
    );
  });
};

exercise 5
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];
const MovieList = () => {
  return MOVIES_DATA.map((movie1) => {
    return (
      <View>
        <Text>{movie1.title}</Text>
        <Text>{movie1.year}</Text>
        <Image source={movie1.poster} />
      </View>
    );
  });
};

exercise 6


export default MovieList;
