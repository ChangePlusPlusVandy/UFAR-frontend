import React, {useContext, useEffect} from 'react';
import {StyleSheet , View, Text, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory-native'
import DateRangeFilter from './dateRangeFilter';

const {height, width} = Dimensions.get('window');
const BAR_WIDTH = Math.round(height*0.017)

export default function GeographicalDashboard({getDashboard}) {
  const [data, setData] = React.useState([{ regionName: "", percentage: 0}]);
  const [errorMessage, setErrorMessage] = React.useState('');

  // iterate through the data object and create a new array with the data
  // to be used in the VictoryChart
  const filterData = (startDate, endDate) => {
    getDashboard("geographic_coverage", startDate, endDate)
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
  }

  return (
    <View>
      <View>
        <DateRangeFilter filterData={filterData}/>
      </View>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.chartTitle}>Proportion des ménages de I'AS ayant bénéficié du traitement pendant la DMM</Text>
          <VictoryChart
              theme={VictoryTheme.grayscale}
              domainPadding={{x: Math.round(width*0.05)}}
              padding={{top: Math.round(height*0.05), left: Math.round(width*0.2), right: Math.round(width*0.18)}}
              >
                <VictoryBar
                  horizontal
                  style={styles.barChart}
                  data={data}
                  x="regionName" 
                  y="percentage"
                  labels={({ datum }) => datum.percentage.toString() + "%"}
                  labelComponent={<VictoryLabel dx={Math.round(width*(-0.1))}/>}
                  animate={{
                    duration: 120,
                    onLoad: { duration: 120 }
                  }}
                  barRatio={0.8}
                  barWidth={BAR_WIDTH}
                  cornerRadius={Math.round(BAR_WIDTH*0.5)}
                />
                <VictoryAxis/>
            </VictoryChart>
        </ScrollView>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
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



