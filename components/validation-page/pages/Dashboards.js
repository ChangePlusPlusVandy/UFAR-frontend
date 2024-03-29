import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import GeographicalDashboard from './GeographicalDashboard';
import TherapeuticalDashboard from './TherapeuticalDashboard';
import DrugsUsedDashboard from './DrugsUsedDashboard';
import {AxiosContext} from '../../../src/context/AxiosContext';
import {AuthContext} from '../../../src/context/AuthContext';
import {Icon} from 'react-native-elements';


export default function Dashboards() {
   

    const options = [
        { label: 'Couverture Géographique', value: 0 },
        { label: 'Couverture Thérapeutique', value: 1 },
        { label: 'Mmédicaments utilisés', value: 2 },
    ];

    const {authAxios} = useContext(AxiosContext);
    const authContext = useContext(AuthContext);
    
    const getDashboard = async (dashboard, startDate, endDate, id=authContext.authState.user.health_zone.id) => {
        try {
            const response = await authAxios.post(`/data/${id}/${dashboard}`,
                JSON.stringify({startDate: startDate, endDate: endDate}),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
                
            if (response && response.status == 200) {
                return response.data;
            } else {
                throw new Error(`${dashboard} La requête a échoué: `, response.statusText);
            }
  
        } catch (error) {
            throw new Error (`Ne peut pas obtenir ${dashboard}: ` + error);
        }
    };

    const dashboards = [
        {
            title: "Couverture Géographique",
            graph: <GeographicalDashboard getDashboard={getDashboard}/>,
        },
        {
            title: "Couverture thérapeutique",
            graph: <TherapeuticalDashboard getDashboard={getDashboard}/>,
        },
        {
            title: "Proportion des médicaments utilisés",
            graph: <DrugsUsedDashboard getDashboard={getDashboard}/>,
        },
    ];

    const [activeDashboard, setActiveDashboard] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tableau de bord</Text>
            <SwitchSelector 
                options={options} initial={activeDashboard} 
                onPress={value => setActiveDashboard(value)} 
                buttonColor='#cb0d00'
                style={styles.switch}
                textStyle={styles.switchText}
                selectedTextStyle={styles.switchSelectedText}
                backgroundColor='#d8d8d8'
            />
            <Text style={styles.dashboardTitle}>{dashboards[activeDashboard].title}</Text>
            <View style={styles.dashboardContainer}>
                {dashboards[activeDashboard].graph}
            </View>
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
        paddingVertical: "1%",
        paddingHorizontal: 10,
        alignItems: 'center',

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
        fontSize: 25,
        lineHeight: 25,
        marginBottom: 5,
    },
    switch: {
        width: '100%',
    },
    switchText: {
        fontWeight: 'bold',
        color: '#9d9d9d',
    },
    switchSelectedText: {
        fontWeight: 'bold',
    },
    dashboardTitle: {
        fontWeight: 'bold',
        color: '#cb0d00',
        fontSize: 18,
    },
    dashboardContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: "1%",
        flex: 1,

        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 5,
    },
});
