import React, {useEffect} from 'react';
import {StyleSheet , View, Text, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory-native'
import RNPickerSelect from 'react-native-picker-select';
import DateRangeFilter from './dateRangeFilter';

const {height, width} = Dimensions.get('window');
const BAR_WIDTH = Math.round(height*0.017)

export default function TherapeuticalDashboard({getDashboard}) {

  const initialData = {
    "ivermectine": [{ regionName: "", percentage: 0}],
    "albendazole": [{ regionName: "", percentage: 0}],
    "ivermectine_and_albendazole": [{ regionName: "", percentage: 0}],
    "praziquantel": [{ regionName: "", percentage: 0}],

  }

  const [data, setData] = React.useState(initialData);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [therapeutic, setTherapeutic] = React.useState("ivermectine"); // this is set by the RNPicker

  const filterData = (startDate, endDate) => {
    getDashboard("therapeutic_coverage", startDate, endDate)
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

        dataObject.albendazole.length &&
        dataObject.ivermectine.length &&  
        dataObject.ivermectine_and_albendazole.length  && 
        dataObject.praziquantel.length? setData(dataObject): setData(initialData);

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
          <Text style={styles.chartTitle}>Couverture thérapeutique</Text>
          <View>
            <RNPickerSelect
                value={therapeutic}
                placeholder={{ label: "Select your therapy of choice", value: null }}
                onValueChange={(value) => setTherapeutic(value)}
                items={[
                    { label: 'Ivermectine', value: 'ivermectine' },
                    { label: 'Albendazole', value: 'albendazole' },
                    { label: 'Ivermectine & Albendazole', value: 'ivermectine_and_albendazole' },
                    { label: 'Praziquantel', value: 'praziquantel' },
                ]}
            />
            <Text style={{position: 'absolute', bottom: 0, left: 0}}>{''}</Text>
          </View>
          <VictoryChart
              theme={VictoryTheme.grayscale}
              domainPadding={{x: Math.round(width*0.05)}}
              padding={{top: Math.round(height*0.05), left: Math.round(width*0.2), right: Math.round(width*0.2)}}
              >
                <VictoryBar
                  horizontal
                  style={styles.barChart}
                  data={data[therapeutic]}
                  x="regionName" 
                  y="percentage"
                  labels={({ datum }) => datum.percentage.toString() + "%"}
                  labelComponent={<VictoryLabel dx={Math.round(width*(-0.1))}/>}
                  animate={{
                    duration: 120,
                    onLoad: { duration: 120 }
                  }}
                  barRatio={0.8}
                  barWidth={BAR_WIDTH} // get rid of this line if you start running into issues, not sure if it works with ratio
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



