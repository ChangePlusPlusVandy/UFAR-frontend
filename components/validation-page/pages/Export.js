import React, {useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, PermissionsAndroid, Platform, TouchableOpacity} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import ExportButton from './ExportButton';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as Progress from 'react-native-progress';
import {Icon} from 'react-native-elements';

// requests
import {AxiosContext} from '../../../src/context/AxiosContext';

async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
  
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

export default function Export(){
    const {authAxios} = useContext(AxiosContext);
    
    // return a date range picker
    const [startDate, setStartDate] = React.useState(new Date(Date.now()));
    const [endDate, setEndDate] = React.useState(new Date(Date.now()));
    const [csvData, setCsvData] = React.useState('');
    const [fileName, setFileName] = React.useState('');

    const [animating, setAnimating] = React.useState(false);

    // console.log("startDate: ", startDate);
    const fetchData = async () => {
        setAnimating(true);
        try {
            const response = await authAxios.post('/data/download_forms',
            JSON.stringify({startDate: startDate, endDate: endDate}),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                // credit: https://stackoverflow.com/questions/54213601/how-to-show-progress-of-axios-during-get-request-not-download-or-upload
                onDownloadProgress: (progressEvent) => {
                    const total = parseFloat(progressEvent.currentTarget.responseHeaders['Content-Length'])
                    const current = progressEvent.currentTarget.response.length

                    let percentCompleted = Math.floor(current / total * 100)
                    console.log('completed: ', percentCompleted);
                }
            });

        if (response.status == 200) {
            const data = response.data;
            setAnimating(false);
            setFileName(`export-${startDate.toLocaleDateString().replace(/\//g, '-')}-to-${endDate.toLocaleDateString().replace(/\//g, '-')}.csv`);
            setCsvData(data);
        }
        } catch (error) {
            setAnimating(false);
            Alert.alert("Error", error.message);
        }
    }


    const exportData = async () => {
        const path = FileSystem.documentDirectory + fileName;
        try {
            if (Platform.OS === "android" && !(await hasAndroidPermission())) {
                Alert.alert('Failure', 'Permission to access external storage was denied');
            }

            await FileSystem.writeAsStringAsync(path, csvData, { encoding: FileSystem.EncodingType.UTF8 });
            await Sharing.shareAsync(path);
            Alert.alert('Success', 'Data exported successfully');
        } catch (e) {
            Alert.alert('Failure', 'Failed to export data');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Export To CSV</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.inputLabel}>
                            Date de début
                        </Text>
                        <TextInput
                            onPressIn={() => {
                                DateTimePickerAndroid.open({
                                    value: startDate,
                                    onChange: (event, selectedDate) => {
                                        setStartDate(selectedDate);
                                    },
                                    mode: 'date',
                                    is24Hour: true
                                })
                            }}
                            style={styles.inputField}
                            value={startDate.toLocaleDateString()}
                        />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.inputLabel}>
                            Date de fin
                        </Text>
                        <TextInput
                            onPressIn={() => {
                                DateTimePickerAndroid.open({
                                    value: endDate,
                                    onChange: (event, selectedDate) => {
                                        setEndDate(selectedDate);
                                    },
                                    mode: 'date',
                                    is24Hour: true
                                })
                            }}
                            style={styles.inputField}
                            value={endDate.toLocaleDateString()}
                        />
                    </View>
                </View>
                <ExportButton fetchData={fetchData} />
                <View style={{flexDirection: 'row', alignItems:'center', alignSelf: 'center', margin:"3%"}}>
                    <Progress.CircleSnail color={['red', 'green', 'blue']} hidesWhenStopped={true} animating={animating} />
                </View>
                {fileName.length? <View style={styles.item}>
                    <Icon name="page-csv" type="foundation" color = 'black' size = {30} iconStyle = {styles.icon} />
                    <Text style={styles.inputLabel}>{fileName}</Text>
                    <TouchableOpacity onPressIn={() => exportData()}>
                        <Icon name="download" type="foundation" color = 'black' size = {30} iconStyle = {styles.icon} />
                    </TouchableOpacity>
                </View>: null}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'scroll',
        flex: 1,
        marginTop: "3%",
        paddingVertical: "3%",
        // height:"40%",

        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 5,
        shadowOpacity: 0.3,
    },
    header: {
        // fontFamily: 'Helvetica Neue',
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 25,
        // marginBottom: 5,
        alignSelf: "center",
    },
    inputContainer:{
        flexDirection: "row",
        width: "100%",
        marginVertical: "2%",
        padding:"1%",
    },
    inputBlock: {
        width: "50%",
    },
    inputLabel: {
        alignSelf: "center",
    },
    inputField: {
        margin: 5,
        padding: 5,
        paddingHorizontal: 15,
        borderRadius: 17,
        backgroundColor: "white",
        fontFamily:
          Platform.OS === "android" ? "sans-serif-medium" : "Avenir-Roman",
        fontSize: 11,
        lineHeight: 13,
        color: "black",
        textAlign: "center",
    
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
    item: {
        marginHorizontal: "2%",
        paddingHorizontal: '2.5%',
        paddingVertical: '1%',
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent: "space-between",

        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 5,
        shadowOpacity: 0.3,
    },
    icon:{
        marginTop: 5,
        marginLeft: 2,
    },
});