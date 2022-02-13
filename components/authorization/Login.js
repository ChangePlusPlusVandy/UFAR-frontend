import { getResolveDependencyFn } from 'metro/src/lib/transformHelpers';
import React, {useContext, useCallback} from 'react';
import { StyleSheet, View, Text, Alert, TextInput, Image} from 'react-native';
import LoginButton from './LoginButton';
import SwitchSelector from 'react-native-switch-selector';

// authorization
import { AuthContext } from '../../src/context/AuthContext';
import * as SecureStore from 'expo-secure-store'
import { AxiosContext } from '../../src/context/AxiosContext';

import ufar from './ufar.png';


const IMAGE_DEF = Image.resolveAssetSource(ufar).uri;

export default function Login(props){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const authContext = useContext(AuthContext);
    const {publicAxios} = useContext(AxiosContext);

    const options = [
        { label: 'Admin', value: 0 },
        { label: 'Nurse', value: 1 },
    ];

    const onLogin = async () => {
        try {
            authContext.setAuthState({
                accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL25zZi1zY2MxLmlzaXMudmFuZGVyYmlsdC5lZHUvZ3JhcGhxbCI6eyJlbWFpbCI6InNhbG9tb25kdXNoaW1pcmltYW5hQGdtYWlsLmNvbSIsInJvbGUiOiJQUklWSUxFR0VEIiwibmVpZ2hib3Job29kIjoiU3lsdmFuIFBhcmsifSwiaWF0IjoxNjM3OTE1MzgwLCJleHAiOjE2Mzg1MjAxODAsInN1YiI6IjYwZjA4NDkxMDUxODUxNjU2OTliMjA5MyJ9.UJBNu1S6PT-ugEKozK8ukiagZeCp3ucOgsr3NqdW1og',
                // refreshToken,
                authenticated: true,
            });

            await SecureStore.setItemAsync('jwt', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL25zZi1zY2MxLmlzaXMudmFuZGVyYmlsdC5lZHUvZ3JhcGhxbCI6eyJlbWFpbCI6InNhbG9tb25kdXNoaW1pcmltYW5hQGdtYWlsLmNvbSIsInJvbGUiOiJQUklWSUxFR0VEIiwibmVpZ2hib3Job29kIjoiU3lsdmFuIFBhcmsifSwiaWF0IjoxNjM3OTE1MzgwLCJleHAiOjE2Mzg1MjAxODAsInN1YiI6IjYwZjA4NDkxMDUxODUxNjU2OTliMjA5MyJ9.UJBNu1S6PT-ugEKozK8ukiagZeCp3ucOgsr3NqdW1og");
        //   const response = await publicAxios.post('/<endpoint>', {
        //     username,
        //     password,
        //   });
          
        //     if (response.status == 200) {

        //         const {accessToken} = response.data;
        //         authContext.setAuthState({
        //         accessToken,
        //         // refreshToken,
        //         authenticated: true,
        //         });

        //         await Keychain.setGenericPassword(
        //             'token',
        //             JSON.stringify({
        //                 accessToken,
        //                 // refreshToken,
        //         }),);
            
        //     } else {
        //         Alert.alert('Login Failed:', response.data.message);
        //         return;
        //     }

        } catch (error) {
          Alert.alert('Login Failed', error.response?.data?.message);
          console.log("Error: ", error);
        }
    };
    

    return (
        <View style={styles.container}>
            <Image source={{uri: IMAGE_DEF}} style={styles.image} />
            <SwitchSelector 
                options={options} initial={props.initial} 
                onPress={ value => 
                    console.log(`Call onPress with value: ${value}`)
                } 
                buttonColor='#EC1C24'
                style={styles.switch}
                fontSize={15}
                backgroundColor='#C7C6C1'
            />

            <Text>{props.user}</Text>

            <TextInput style={styles.input} placeholder="Username" 
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <TextInput style={styles.input} placeholder="Password"
                onChange = {(text) => setPassword(text)}
                // value = {password}
                secureTextEntry={true} 
            />
            <LoginButton onLogin={onLogin} />
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