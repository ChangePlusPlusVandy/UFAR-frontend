import React, {useContext, useEffect} from 'react';
import {StyleSheet , View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory-native'
import {Icon} from 'react-native-elements';


// axios
import {AxiosContext} from '../../../src/context/AxiosContext';

export default function GeographicalDashboard({getDashboard}) {
  const [data, setData] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');

  const healthZoneId = ""; // todo: get this from the user

  useEffect(()=>{
    getDashboard(healthZoneId, "geographic_coverage")
      .then(data => {
        setData(data);
      }).catch(error => {
        setErrorMessage(error.message);
      });
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.chartTitle}>Proportion des ménages de I'AS ayant bénéficié du traitement pendant la DMM</Text>
        <VictoryChart
            theme={VictoryTheme.grayscale}
            domainPadding={{x: 20}}
            padding={{top: 50, left: 100, right: 70}}
            >
              <VictoryBar
                horizontal
                style={styles.barChart}
                data={[
                  { regionName: "USA", percentage: 25},
                  { regionName: "FRNCE", percentage: 56},
                  { regionName: "IELAND", percentage: 90},
                  { regionName: "ERMANY", percentage: 78},
                  { regionName: "PAIN", percentage: 13},
                  { regionName: "SA", percentage: 25},
                  { regionName: "FANCE", percentage: 56},
                  { regionName: "IEAND", percentage: 90},
                  { regionName: "GERMNY", percentage: 78},
                  { regionName: "SIN", percentage: 13},
                  { regionName: "U", percentage: 25},
                  { regionName: "FRE", percentage: 56},
                  { regionName: "IAD", percentage: 90},
                  { regionName: "GY", percentage: 78},
                  { regionName: "SA", percentage: 13},
                  { regionName: "FE", percentage: 56},
                  { regionName: "ID", percentage: 90},
                  { regionName: "NY", percentage: 78},
                  { regionName: "SA", percentage: 13},
                ]}
                x="regionName" 
                y="percentage"
                labels={({ datum }) => datum.percentage.toString() + "%"}
                labelComponent={<VictoryLabel dx={-30}/>}
                animate={{
                  duration: 120,
                  onLoad: { duration: 120 }
                }}
                barRatio={0.8}
                cornerRadius={10}
              />
              <VictoryAxis/>
          </VictoryChart>
      </ScrollView>
      <Text style={styles.error}>{errorMessage}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFF",
  },
  chartTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    // right: 25
  },
  barChart: {
    data: { fill: "#c43a31", fillOpacity: ({ datum }) => datum.percentage / 100},
    labels: { fill: "white" },
  },
  error: {
    color: 'red',
    fontSize: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
})



