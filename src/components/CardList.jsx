import React from 'react';
import {FlatList, View} from 'react-native';
import Card from './Card';

const CardList = ({}) => {
  const renderItem = ({}) => <Card />;
  return (
    <View style={{marginBottom: 80}}>
      <FlatList
      
      />
    </View>
  );
};

export default CardList;