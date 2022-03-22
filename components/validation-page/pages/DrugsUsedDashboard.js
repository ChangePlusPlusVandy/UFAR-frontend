import React, {useEffect} from 'react';
import {StyleSheet , View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryGroup, VictoryLabel } from 'victory-native'

// the way this works is a bit odd, you create a 3 overlaid and offset bar charts
// Say the data looks like this
const regionData = {
    "RegionA": [12, 37, 49], // where 12 is Mectizan, 37 is Albendazole...
    "RegionB": [34, 25, 56],
    "RegionC": [22, 67, 98],
}
// Then the first first VictoryBar should have the [0] index of all regions, the second should have all [1], and so on
// I.E. Instead of adding more victorybar components if you get more regions, you just add more data points inside each one.
// Each bar should have the same number of data points and should correspond to the number of regions
// The below data is obv all dummy
export default function DrugsUsedDashboard({getDashboard}) {
  const [data, setData] = React.useState({"ivermectin": [{ regionName: "", percentage: 0}],
                                          "albendazole": [{ regionName: "", percentage: 0}],
                                          "praziquantel": [{ regionName: "", percentage: 0}]});

  const [errorMessage, setErrorMessage] = React.useState('');
    console.log("data: ", data);
    useEffect(() =>{
      // call get dashboard and catch errors
      getDashboard("drugs")
      .then(data => {
        var dataObject = {};
        for (const [key, value] of Object.entries(data)){
          for (const [key2, value2] of Object.entries(value)){
            dataObject[key2]? dataObject[key2].push({x: key, percentage: value2}) : dataObject[key2] = [{x: key, percentage: value2}];
          }
        }

        Object.keys(dataObject).length && setData(dataObject);
      }).catch(error => {
        setErrorMessage(error.message);
      });
    }, [])

    return (
        <View style={styles.container}>
          <ScrollView>
          <Text style={styles.chartTitle}>Graph Title</Text>
            <VictoryChart
              domainPadding={30} // makes the data pad from end of axes
              domain={{ y: [0, 100]}} 
              padding={{top: 30, left: 80, right: 60, bottom: 80}}
              height={450} // should make this a function of how much data there is!!
              >
                <VictoryGroup // DO NOT use VictoryAxis with this component
                horizontal
                offset={12}
                colorScale={["#84BD62", "#EC1C24", "#55A5C4"]}
                // categories={{ x: ["RegionE", "RegionD", "RegionC", "RegionB", "RegionA"] }} // will need to update this with region names
                >
                    <VictoryBar
                        style={styles.barChart}
                        name="Ivermectin"
                        data={data.ivermectin} 
                        barWidth={12}
                        y="percentage"
                        labels={({ datum }) => datum.percentage.toString() + "%"}
                        labelComponent={<VictoryLabel dx={-30}/>}
                        cornerRadius={4}
                    />
                    <VictoryBar
                        style={styles.barChart}
                        name="Albendazole"
                        data={data.albendazole}
                        barWidth={12}
                        y="percentage"
                        labels={({ datum }) => datum.percentage.toString() + "%"}
                        labelComponent={<VictoryLabel dx={-30}/>}
                        cornerRadius={4}
                    />
                    <VictoryBar
                        style={styles.barChart}
                        name="Praziquantel"
                        data={data.praziquantel}
                        barWidth={12}
                        y="percentage"
                        labels={({ datum }) => datum.percentage.toString() + "%"}
                        labelComponent={<VictoryLabel dx={-30}/>}
                        cornerRadius={4}
                    />
                </VictoryGroup>
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
  },
  barChart: {
    data: { fillOpacity: ({ datum }) => datum.percentage / 100},
    labels: { fill: "white" },
  },
  error: {
    color: 'red',
    fontSize: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
})



