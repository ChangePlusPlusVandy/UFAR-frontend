import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import SlideshowPaginator from '../SlideshowPaginator';

import ProcessingMectizanForm from './processing-pages/ProcessingMectizanForm';
import ProcessingMectAlbForm from './processing-pages/ProcessingMectAlbForm';
import ProcessingAlbendazoleForm from './processing-pages/ProcessingAlbendazoleForm';
import ProcessingPraziquantelForm from './processing-pages/ProcessingPraziquantelForm';
import ProcessingAlbendazoleHelminthiasisForm from './processing-pages/ProcessingAlbedazoleHelminthiasis';

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
                setNumSideEffectsReportedMectizan={props.setNumSideEffectsReportedMectizan}
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
            title: "Mectizan and Albendazole (Lymphatic filariasis)",
            content: 
            <ProcessingMectAlbForm
                setNumYoungMenMectAlb={props.setNumYoungMenMectAlb}
                setNumOldMenMectAlb={props.setNumOldMenMectAlb}
                setNumYoungWomenMectAlb={props.setNumYoungWomenMectAlb}
                setNumOldWomenMectAlb={props.setNumOldWomenMectAlb}
                setNumSideEffectsReportedMectAlb={props.setNumSideEffectsReportedMectAlb}
                numYoungMenMectAlb={props.numYoungMenMectAlb}
                numYoungWomenMectAlb={props.numYoungWomenMectAlb}
                numOldMenMectAlb={props.numOldMenMectAlb}
                numOldWomenMectAlb={props.numOldWomenMectAlb}
                totalNumWomenMectAlb={props.totalNumWomenMectAlb}
                totalNumMenMectAlb={props.totalNumMenMectAlb}
                totalNumMectAlb={props.totalNumMectAlb}
                totalCoverageMectAlb={props.totalCoverageMectAlb}
                numSideEffectsReportedMectAlb={props.numSideEffectsReportedMectAlb}
            />,
        },
        {
            title: "Albendazole alone (Lymphatic filariasis)",
            content:  
            <ProcessingAlbendazoleForm
                setNumYoungMenAlbendazoleTreat={props.setNumYoungMenAlbendazoleTreat}
                setNumOldMenAlbendazoleTreat={props.setNumOldMenAlbendazoleTreat}
                setNumYoungWomenAlbendazoleTreat={props.setNumYoungWomenAlbendazoleTreat}
                setNumOldWomenAlbendazoleTreat={props.setNumOldWomenAlbendazoleTreat}
                setNumSideEffectsReportedAlbendazoleTreat={props.setNumSideEffectsReportedAlbendazoleTreat}
                numYoungMenAlbendazoleTreat={props.numYoungMenAlbendazoleTreat}
                numYoungWomenAlbendazoleTreat={props.numYoungWomenAlbendazoleTreat}
                numOldMenAlbendazoleTreat={props.numOldMenAlbendazoleTreat}
                numOldWomenAlbendazoleTreat={props.numOldWomenAlbendazoleTreat}
                totalNumWomenAlbendazoleTreat={props.totalNumWomenAlbendazoleTreat}
                totalNumMenAlbendazoleTreat={props.totalNumMenAlbendazoleTreat}
                totalNumAlbendazoleTreat={props.totalNumAlbendazoleTreat}
                totalCoverageAlbendazoleTreat={props.totalCoverageAlbendazoleTreat}
                numSideEffectsReportedAlbendazoleTreat={props.numSideEffectsReportedAlbendazoleTreat}
            />,
        },
        {
            title: "Praziquantel (Schistosomiasis)",
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
                setNumSideEffectsReportedPrazi={props.setNumSideEffectsReportedPrazi}
                numSideEffectsReportedPrazi={props.numSideEffectsReportedPrazi}
            />
        },
        {
            title: "Albendazole (Soil-transmitted helminthiasis)",
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
                setNumSideEffectsReportedAlbendazoleHelminthiasis={props.setNumSideEffectsReportedAlbendazoleHelminthiasis}
                numSideEffectsReportedAlbendazoleHelminthiasis={props.numSideEffectsReportedAlbendazoleHelminthiasis}
            />
        },
    ]

    return (
        <View>
            <Text style={styles.header}>Traitement</Text>
            <View style={styles.inputContainer}>
                <View style={styles.slideshowContainer}>
                    <SlideshowPaginator pages={pages} />
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
    }
})
