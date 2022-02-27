import React from 'react';
import {StyleSheet , View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryGroup, VictoryLabel, VictoryLegend } from 'victory-native'

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
export default function DrugsUsedDashboard(props) {
    return (
        <View style={styles.container}>
          <ScrollView>
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
                categories={{ x: ["RegionE", "RegionD", "RegionC", "RegionB", "RegionA"] }} // will need to update this with region names
                >
                    <VictoryBar
                        style={styles.barChart}
                        name="Mectizan"
                        data={[
                        { x: "RegionE", percentage: 32 },
                        { x: "RegionD", percentage: 42 },
                        { x: "RegionC", percentage: 39 },
                        { x: "RegionB", percentage: 54 },
                        { x: "RegionA", percentage: 76 },
                        ]} 
                        barWidth={12}
                        y="percentage"
                        labels={({ datum }) => datum.percentage.toString() + "%"}
                        labelComponent={<VictoryLabel dx={-30}/>}
                        cornerRadius={4}
                    />
                    <VictoryBar
                        style={styles.barChart}
                        name="Albendazole"
                        data={[
                          { x: "RegionE", percentage: 64 },
                          { x: "RegionD", percentage: 50 },
                          { x: "RegionC", percentage: 62 },
                          { x: "RegionB", percentage: 92 },
                          { x: "RegionA", percentage: 39 },
                        ]}
                        barWidth={12}
                        y="percentage"
                        labels={({ datum }) => datum.percentage.toString() + "%"}
                        labelComponent={<VictoryLabel dx={-30}/>}
                        cornerRadius={4}
                    />
                    <VictoryBar
                        style={styles.barChart}
                        name="Praziquantel"
                        data={[
                          { x: "RegionE", percentage: 50 },
                          { x: "RegionD", percentage: 72 },
                          { x: "RegionC", percentage: 56 },
                          { x: "RegionB", percentage: 47 },
                          { x: "RegionA", percentage: 45 }
                        ]}
                        barWidth={12}
                        y="percentage"
                        labels={({ datum }) => datum.percentage.toString() + "%"}
                        labelComponent={<VictoryLabel dx={-30}/>}
                        cornerRadius={4}
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
                  { name: "Albendazole", symbol: { fill: "#EC1C24" } },
                  { name: "Mectizan", symbol: { fill: "#55A5C4" } }
                ]}
              />
          </ScrollView>
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
  }
})



