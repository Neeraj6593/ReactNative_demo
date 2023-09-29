import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';


const Home = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        onPress={() => {
          navigation.navigate('Login Screen');
        }}
        style={{backgroundColor: 'blue', color: 'white'}}
        title="Logout"
      />
    </View>
  );
};
export default Home;
