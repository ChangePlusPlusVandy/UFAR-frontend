import React, {useEffect} from 'react';
import {StyleSheet , View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory-native'


export default function TherapeuticalDashboard({getDashboard}) {
  const [data, setData] = React.useState({"mectizan": [{ regionName: "", percentage: 0}]});
  const [errorMessage, setErrorMessage] = React.useState('');
  const [therapeutic, setTherapeutic] = React.useState("mectizan"); // todo: get therapeutic data dynamically from the user

  console.log("data: ", data);

  useEffect(()=>{
    getDashboard("therapeutic_coverage")
      .then(data => {
        const dataObject = {};
        for (const [key, value] of Object.entries(data)){
          dataObject[key] = [];
          for (const [key2, value2] of Object.entries(value)){
            dataObject[key].push({
              regionName: key2,
              percentage: value2,
            });
          }
        }
        dataObject && setData(dataObject);
      }).catch(error => {
        setErrorMessage(error.message);
      });
  }, [])


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
                data={data[therapeutic]}
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



