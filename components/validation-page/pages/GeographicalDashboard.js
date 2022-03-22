import React, {useContext, useEffect} from 'react';
import {StyleSheet , View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory-native'
import {Icon} from 'react-native-elements';


// axios
import {AxiosContext} from '../../../src/context/AxiosContext';

export default function GeographicalDashboard({getDashboard}) {
  const [data, setData] = React.useState([{ regionName: "", percentage: 0}]);
  const [errorMessage, setErrorMessage] = React.useState('');

  // iterate through the data object and create a new array with the data
  // to be used in the VictoryChart
  
  console.log("data: ", data);
  useEffect(()=>{
    getDashboard("geographic_coverage")
      .then(data => {
        const dataArray = [];
        for (const [key, value] of Object.entries(data)) {
          dataArray.push({
            regionName: key,
            percentage: value,
          });
        }

        dataArray.length && setData(dataArray);
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
                data={data}
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



