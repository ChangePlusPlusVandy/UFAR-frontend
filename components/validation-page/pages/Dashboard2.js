import React from 'react';
import {StyleSheet , View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory-native'


export default function Dashboard2(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.chartTitle}>Title of Graph</Text>
        <VictoryChart
            theme={VictoryTheme.grayscale}
            domainPadding={{x: 20}}
            padding={{top: 50, left: 80, right: 80}}
            >
              <VictoryBar
                horizontal
                style={styles.barChart}
                data={[
                  { regionName: "RegionA", percentage: 25},
                  { regionName: "RegionB", percentage: 56},
                  { regionName: "RegionC", percentage: 90},
                  { regionName: "RegionD", percentage: 78},
                  { regionName: "RegionE", percentage: 13},
                  { regionName: "RegionF", percentage: 32},
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
    data: { fill: "#c43a31", fillOpacity: ({ datum }) => datum.percentage / 100},
    labels: { fill: "white" },
  }
})



