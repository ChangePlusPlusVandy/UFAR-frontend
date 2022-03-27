import React, {useEffect} from 'react';
import {StyleSheet , View, Text, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryGroup, VictoryLabel, VictoryLegend } from 'victory-native'

const {height, width} = Dimensions.get('window');
const BAR_WIDTH = Math.round(height*0.017)

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
            <VictoryChart
              domainPadding={Math.round(width*0.076)} // makes the data pad from end of axes
              domain={{ y: [0, 100]}} 
              padding={{top: Math.round(height*0.05), left: Math.round(width*0.19), right: Math.round(width*0.18), bottom: Math.round(height*0.1)}}
              height={Math.round(height*0.539)} // should make this a function of how much data there is??
              >
                <VictoryGroup // DO NOT use VictoryAxis with this component
                horizontal
                offset={Math.round(height*0.017)}
                colorScale={["#84BD62", "#b30000", "#55A5C4"]}
                >
                    <VictoryBar
                        style={styles.barChart}
                        name="Ivermectin"
                        data={data.ivermectin} 
                        barWidth={BAR_WIDTH}
                        y="percentage"
                        labels={({ datum }) => datum.percentage.toString() + "%"}
                        labelComponent={<VictoryLabel dx={Math.round(width*(-0.1))}/>}
                        cornerRadius={Math.round(BAR_WIDTH*0.5)}
                    />
                    <VictoryBar
                        style={styles.barChart}
                        name="Albendazole"
                        data={data.albendazole}
                        barWidth={BAR_WIDTH}
                        y="percentage"
                        labels={({ datum }) => datum.percentage.toString() + "%"}
                        labelComponent={<VictoryLabel dx={Math.round(width*(-0.1))}/>}
                        cornerRadius={Math.round(BAR_WIDTH*0.5)}
                    />
                    <VictoryBar
                        style={styles.barChart}
                        name="Praziquantel"
                        data={data.praziquantel}
                        barWidth={BAR_WIDTH}
                        y="percentage"
                        labels={({ datum }) => datum.percentage.toString() + "%"}
                        labelComponent={<VictoryLabel dx={Math.round(width*(-0.1))}/>}
                        cornerRadius={Math.round(BAR_WIDTH*0.5)}
                    />
                </VictoryGroup>
            </VictoryChart>
            <Text style={styles.chartTitle}>Graph Title</Text>
            <VictoryLegend y={10} x = {35}
  	            title=""
                orientation="horizontal"
                gutter={20}
                data={[
                  { name: "Praziquantel", symbol: { fill: "#84BD62" } },
                  { name: "Albendazole", symbol: { fill: "#b30000" } },
                  { name: "Mectizan", symbol: { fill: "#55A5C4" } }
                ]}
              />
          </ScrollView>
          <Text style={styles.error}>{errorMessage}</Text>
        </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFF",
    height: 1000,
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



