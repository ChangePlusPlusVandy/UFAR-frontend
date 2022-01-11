import React from 'react';
import {StyleSheet , TouchableOpacity, View, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import ufar from './ufar.png';

const IMAGE_DEF = Image.resolveAssetSource(ufar).uri;

export default function HomePage (props) {
    const onPress = () => {
        // Do something
        return;
    }

    return (
        <View style={styles.screen}>
            <Image
              source={{uri: IMAGE_DEF}}
              style={styles.image}
            />
          { <>
            <TouchableOpacity
              style={styles.roundButton1}>
            </TouchableOpacity> 
            
            <TouchableOpacity
              style={styles.roundButton2}
              onPress={() => props.navigation.navigate('NurseApp')}
            >
            </TouchableOpacity>
          </>}
          <Text style={styles.right}>Normal</Text>
          <Text style={styles.left}>Admin</Text>
        </View>
      );
    }
    
    /// Just some styles
    const styles = StyleSheet.create({
      screen: {
        flex: 1,
        backgroundColor: "#EC1C24",
        height: "100%",
        width: "100%",
        alignSelf:'center',
      },
      image: {
        justifyContent:'center',
        position: 'absolute',
        top: 81,
        height: 79,
        width: 360,
        alignSelf:'center',
      },
      roundButton2: {
        width: 54,
        height: 54,
        position: 'absolute',
        left: 212,
        top: 311,
        borderRadius: 100,
        backgroundColor: '#59AECF',
        elevation: 10,
      },
      roundButton1: {
        width: 54,
        height: 54,
        position: 'absolute',
        left: 94,
        top: 311,
        borderRadius: 100,
        backgroundColor: '#8AC566',
      },
      left: {
        fontSize: 13,
        position: 'absolute',
        left: 102,
        top: 375,
        lineHeight: 16,
        color: '#FFF',
      },
      right: {
        fontSize: 13,
        position: 'absolute',
        left: 218,
        top: 375,
        lineHeight: 16,
        color: '#FFF',
      },

    });