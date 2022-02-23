import React from 'react';
import {StyleSheet , View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory-native'


export default function Dashboard1(props) {
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
                  { regionName: "FRANCE", percentage: 56},
                  { regionName: "IRELAND", percentage: 90},
                  { regionName: "GERMANY", percentage: 78},
                  { regionName: "SPAIN", percentage: 13},
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
    // right: 25
  },
  barChart: {
    data: { fill: "#c43a31", fillOpacity: ({ datum }) => datum.percentage / 100},
    labels: { fill: "white" },
  }
})



