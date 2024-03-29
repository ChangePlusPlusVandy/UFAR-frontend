import React from 'react';
import {StyleSheet , TouchableOpacity, View, Text, Image} from 'react-native';

import AdminButton from './AdminButton';
import NormalButton from './NormalButton';
import ufar from './ufar.png';

const IMAGE_DEF = Image.resolveAssetSource(ufar).uri;

export default function HomePage(props) {
  return (
    <View style={styles.container}>
      <Image source={{uri: IMAGE_DEF}} style={styles.image} />
      <View style={styles.buttonsContainer}>
        <AdminButton navigation={props.navigation} />
        <NormalButton navigation={props.navigation} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cb0d00",
    height: "100%",
    width: "100%",
    justifyContent: 'center'
  },
  image: {
    height: '9.4%',
    width: '92%',
    bottom: '24%',
    alignSelf:'center',
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})
