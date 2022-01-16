import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import SlideshowPaginator from '../SlideshowPaginator';

import ProcessingMectizanForm from './processing-pages/ProcessingMectizanForm';
import ProcessingMectAlbForm from './processing-pages/ProcessingMectAlbForm';
import ProcessingAlbendazoleForm from './processing-pages/ProcessingAlbendazoleForm';
import ProcessingPraziquantelForm from './processing-pages/ProcessingPraziquantelForm';
import ProcessingAlbendazoleHelminthiasisForm from './processing-pages/ProcessingAlbedazoleHelminthiasisForm';

export default function ProcessingForm(props) {
    const pages = [
        {
            title: "Mectizan (Onchocercose)",
            content: 
            <ProcessingMectizanForm
                setNumYoungMenMectizan={props.setNumYoungMenMectizan}
                setNumOldMenMectizan={props.setNumOldMenMectizan}
                setNumYoungWomenMectizan={props.setNumYoungWomenMectizan}
                setNumOldWomenMectizan={props.setNumOldWomenMectizan}
                numYoungMenMectizan={props.numYoungMenMectizan}
                numYoungWomenMectizan={props.numYoungWomenMectizan}
                numOldMenMectizan={props.numOldMenMectizan}
                numOldWomenMectizan={props.numOldWomenMectizan}
                totalNumWomenMectizan={props.totalNumWomenMectizan}
                totalNumMenMectizan={props.totalNumMenMectizan}
                totalNumMectizan={props.totalNumMectizan}
                totalCoverageMectizan={props.totalCoverageMectizan}
                numSideEffectsReportedMectizan={props.numSideEffectsReportedMectizan}
            />,
        },
        {
            title: "Mectizan et Albendazole (Filariose lymphatique)",
            content: 
            <ProcessingMectAlbForm
                setNumYoungMenMectAlb={props.setNumYoungMenMectAlb}
                setNumOldMenMectAlb={props.setNumOldMenMectAlb}
                setNumYoungWomenMectAlb={props.setNumYoungWomenMectAlb}
                setNumOldWomenMectAlb={props.setNumOldWomenMectAlb}
                numYoungMenMectAlb={props.numYoungMenMectAlb}
                numYoungWomenMectAlb={props.numYoungWomenMectAlb}
                numOldMenMectAlb={props.numOldMenMectAlb}
                numOldWomenMectAlb={props.numOldWomenMectAlb}
                totalNumWomenMectAlb={props.totalNumWomenMectAlb}
                totalNumMenMectAlb={props.totalNumMenMectAlb}
                totalNumMectAlb={props.totalNumMectAlb}
                totalCoverageMectAlb={props.totalCoverageMectAlb}
            />,
        },
        {
            title: "Albendazole seul (Filariose lymphatique)",
            content:  
            <ProcessingAlbendazoleForm
                setNumYoungMenAlbendazoleTreat={props.setNumYoungMenAlbendazoleTreat}
                setNumOldMenAlbendazoleTreat={props.setNumOldMenAlbendazoleTreat}
                setNumYoungWomenAlbendazoleTreat={props.setNumYoungWomenAlbendazoleTreat}
                setNumOldWomenAlbendazoleTreat={props.setNumOldWomenAlbendazoleTreat}
                numYoungMenAlbendazoleTreat={props.numYoungMenAlbendazoleTreat}
                numYoungWomenAlbendazoleTreat={props.numYoungWomenAlbendazoleTreat}
                numOldMenAlbendazoleTreat={props.numOldMenAlbendazoleTreat}
                numOldWomenAlbendazoleTreat={props.numOldWomenAlbendazoleTreat}
                totalNumWomenAlbendazoleTreat={props.totalNumWomenAlbendazoleTreat}
                totalNumMenAlbendazoleTreat={props.totalNumMenAlbendazoleTreat}
                totalNumAlbendazoleTreat={props.totalNumAlbendazoleTreat}
                totalCoverageAlbendazoleTreat={props.totalCoverageAlbendazoleTreat}
            />,
        },
        {
            title: "Praziquantel (Schistosomiase)",
            content: 
            <ProcessingPraziquantelForm
                setNumMenPrazi={props.setNumMenPrazi}
                numMenPrazi={props.numMenPrazi}
                setNumWomenPrazi={props.setNumWomenPrazi}
                numWomenPrazi={props.numWomenPrazi}
                setTotalNumPrazi={props.setTotalNumPrazi}
                totalNumPrazi={props.totalNumPrazi}
                setTotalCoveragePrazi={props.setTotalCoveragePrazi}
                totalCoveragePrazi={props.totalCoveragePrazi}
            />,
        },
        {
            title: "Albendazole (Géohelminthiases)",
            content: 
            <ProcessingAlbendazoleHelminthiasisForm
                setNumMenAlbendazoleHelminthiasis={props.setNumMenAlbendazoleHelminthiasis}
                numMenAlbendazoleHelminthiasis={props.numMenAlbendazoleHelminthiasis}
                setNumWomenAlbendazoleHelminthiasis={props.setNumWomenAlbendazoleHelminthiasis}
                numWomenAlbendazoleHelminthiasis={props.numWomenAlbendazoleHelminthiasis}
                setTotalNumAlbendazoleHelminthiasis={props.setTotalNumAlbendazoleHelminthiasis}
                totalNumAlbendazoleHelminthiasis={props.totalNumAlbendazoleHelminthiasis}
                setTotalCoverageAlbendazoleHelminthiasis={props.setTotalCoverageAlbendazoleHelminthiasis}
                totalCoverageAlbendazoleHelminthiasis={props.totalCoverageAlbendazoleHelminthiasis}
            />,
        },
    ]

    return (
        <View>
            <Text style={styles.header}>Traitement</Text>
            <View style={styles.inputContainer}>
                <View style={styles.slideshowContainer}>
                    <SlideshowPaginator pages={pages} />
                    <View style={styles.rowContainer}>
                        <View style={styles.inputFieldContainer}>
                            <Text style={styles.inputLabelBigger}>Effets secondaires signalés</Text>
                            <TextInput style={styles.inputField} onChange={(e) => props.setNumSideEffectsReported(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numSideEffectsReported || '').toString()} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 18,
        alignSelf: 'center',
        textAlign: 'center',
        maxWidth: 300,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 28,
        color: 'white'
    },
    inputContainer: {
        marginHorizontal: 34,
    },
    slideshowContainer: {
        marginBottom: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputFieldContainer: {
        alignItems: 'center',
    },
    inputLabelBigger: {
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir-Roman',
        fontSize: 17,
        lineHeight: 20,
        color: 'white',
        marginVertical: 10,
        marginBottom: 0,
    },
    inputField: {
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 17,
        backgroundColor: 'white',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 11,
        lineHeight: 13,
        color: 'black',
        width: 95,
        textAlign: 'center',
        
        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 10,
        shadowOpacity: 0.3,
    },
})
