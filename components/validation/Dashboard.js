import React from 'react';
import {StyleSheet , TouchableOpacity, View, Text, Image} from 'react-native';
import {VictoryChart, VictoryBar, VictoryTheme, VictoryAxis, VictoryLabel } from 'victory-native'


export default function Dashboard(props) {
  return (
    <View style={styles.container}>
        <VictoryChart
            theme={VictoryTheme.grayscale}
            domainPadding={{x: 20}}
          >
            <Text style={styles.chartTitle}>Proportion des ménages de I'AS ayant bénéficié du traitement pendant la DMM</Text>
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
              labels={({ datum }) => datum.percentage}
              animate={{
                duration: 1000,
                onLoad: { duration: 1000 }
              }}
              barRatio={0.8}
              // cornerRadius={{top: 16, bottom: 16}}
            />
            <VictoryAxis/>
        </VictoryChart>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFF",
    flex: 1,
    justifyContent: 'center',
  },
  chartTitle: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  axis: {

  },
  barChart: {
    data: { fill: "#c43a31", fillOpacity: ({ datum }) => datum.percentage / 100},
  }
})



