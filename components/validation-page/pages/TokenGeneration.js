import React, {useContext, useRef} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import GenerateTokenButton from '../GenerateTokenButton';
import data from '../../daily-report-form/pages/locations';

// authorization
import { AxiosContext } from '../../../src/context/AxiosContext';

export default function TokenGeneration(props){
    const {authAxios} = useContext(AxiosContext);

    const [ healthZoneId, setHealthZoneId ] = React.useState('');
    const [ role, setRole ] = React.useState('');
    const [ token, setToken ] = React.useState('');
    const [ errorMessage, setErrorMessage ] = React.useState('');
    const isMounted = useRef(false); // todo: not used yet

    const getHealthZones = () => {
        var items = [];
        Object.keys(data.provinces).forEach(province => {
            Object.keys(data.provinces[province].health_zones).forEach(healthZone => {
                items.push({label: healthZone, value: data.provinces[province].health_zones[healthZone].id})
            }
        )})
        return items;
    }

    const roles = [
        {label: "Admin", value: "Admin"},
        {label: "Normal", value: "Normal"},
    ]


    const generateToken = async () => {
        try {
            const response = await authAxios.post('/auth/newuuid',
                JSON.stringify({health_zone: healthZoneId, role: role}),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
                
            if (response.status == 200) {
                // todo: get uuid token and store it (state for now)
                // secure store might be a good idea, just in case, 
                // they need to retrive it later.
                const uuidToken = response.data;
                setToken(uuidToken.token);
                setErrorMessage('');
            } else {
                setErrorMessage("Token generation failed: " + response.json().message);
            }

        } catch (error) {
            setErrorMessage("Cannot get token " + error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>New User Token</Text>
            <View style={styles.RNPickerSelectContainer}>
                <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    style={{inputAndroid: styles.RNPickerSelectInput, iconContainer: styles.RNPickerSelectIconContainer, placeholder: styles.placeholder}}
                    onValueChange={value => { 
                        setHealthZoneId(value);
                    }}
                    items={getHealthZones()}
                    value={healthZoneId}
                    placeholder={{label: 'Select Healht Zone', value: null}}
                />
            </View>
            <View style={styles.RNPickerSelectContainer}>
                <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    style={{inputAndroid: styles.RNPickerSelectInput, iconContainer: styles.RNPickerSelectIconContainer, placeholder: styles.placeholder}}
                    onValueChange={(value) => { 
                        setRole(value);
                    }}
                    items={roles}
                    value={role}
                    placeholder={{label: 'Select Role', value: null}}
                />
            </View>
            <TextInput style={styles.error}>{errorMessage}</TextInput>
            <GenerateTokenButton generateToken={generateToken}/>
            <View>
                <Text>Token (press and hold to select): </Text> 
                {token? <Text selectable={true}>{token}</Text>: null}
            </View>
            <View>
                <Text>Token will be lost when you leave the page</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFF",
    },
    RNPickerSelectInput: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 17,
        backgroundColor: 'white',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 11,
        lineHeight: 13,
        color: 'black',
    },
    RNPickerSelectContainer: {
        marginVertical: 5,
        borderRadius: 17,
        backgroundColor: 'white',
        
        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 10,
        shadowOpacity: 0.3,
    },
    copiedText: {
        marginTop: 10,
        color: 'red',
    },
    error:{
        color: 'red',
        fontSize: 12,
        fontStyle: 'italic',
    },
    title: {
        fontWeight: 'bold',
        color: '#b30000',
        fontSize: 18,
        alignSelf: 'center',
    },
});