import { getResolveDependencyFn } from 'metro/src/lib/transformHelpers';
import React from 'react';
import { StyleSheet, View, Text, TextInput, Image} from 'react-native';
import LoginButton from './LoginButton';
import SwitchSelector from 'react-native-switch-selector';

import ufar from './ufar.png';


const IMAGE_DEF = Image.resolveAssetSource(ufar).uri;

export default function Login(props){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const options = [
        { label: 'Admin', value: 0 },
        { label: 'Nurse', value: 1 },
    ];

    return (
        <View style={styles.container}>
            <Image source={{uri: IMAGE_DEF}} style={styles.image} />
            <SwitchSelector 
                options={options} initial={0} 
                onPress={ value => 
                    console.log(`Call onPress with value: ${value}`)
                } 
                buttonColor='#EC1C24'
                style={styles.switch}
                fontSize={15}
                backgroundColor='#C7C6C1'
            />

            <TextInput style={styles.input} placeholder="Username" 
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <TextInput style={styles.input} placeholder="Password"
                onChange = {(text) => setPassword(text)}
                // value = {password}
                secureTextEntry={true} 
            />
            <LoginButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'scroll',
    },
    image: {
        height: 79,
        width: 360,
        bottom: 100,
        alignSelf:'center',
    },

    input: {
        height: 50,
        width: 300,
        borderColor: 'gray',
        borderWidth: 0.5,
        margin: 10,
        padding: 10,
        borderRadius: 20,
    },

    switch: {
        width: 300,
        marginBottom: 20,  
    },
})