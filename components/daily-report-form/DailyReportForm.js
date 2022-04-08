import React, { useState, useEffect, useRef } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import BackButton from "./BackButton";
import CrossIcon from "./CrossIcon";
import NextButton from "./NextButton";
import SubmitButton from "./SubmitButton";
import ProgressBar from "./ProgressBar";

import DatesForm from "./pages/DatesForm";
import Denumber1Form from "./pages/Denumber1Form";
import Denumber2Form from "./pages/Denumber2Form";
import Denumber3Form from "./pages/Denumber3Form";
import DistributorsForm from "./pages/DistributorsForm";
import IdentificationForm from "./pages/IdentificationForm";
import TreatmentInformationForm from "./pages/TreatmentInformationForm";
import MorbidityCasesForm from "./pages/MorbidityCasesForm";
import ProcessingForm from "./pages/ProcessingForm";
import UntreatedForm from "./pages/UntreatedForm";
import DrugManagementForm from "./pages/DrugManagementForm";
import data from "./pages/locations";
import { connect } from "react-redux";

import { convertFromYYYYMMDDToDDMMYYYY } from "../../src/utils.js";

const replaceIdsWithNames = (
  provinceId,
  healthZoneId,
  healthAreaId,
  villageId
) => {
  var result = {
    provinceName: "",
    healthZoneName: "",
    healthAreaName: "",
    villageName: "",
  };

  Object.keys(data.provinces).forEach((province) => {
    if (data.provinces[province].id === provinceId) {
      result.provinceName = province;

      Object.keys(data.provinces[province].health_zones).forEach(
        (healthZone) => {
          if (
            data.provinces[province].health_zones[healthZone].id ===
            healthZoneId
          ) {
            result.healthZoneName = healthZone;

            Object.keys(
              data.provinces[province].health_zones[healthZone].health_areas
            ).forEach((healthArea) => {
              if (
                data.provinces[province].health_zones[healthZone].health_areas[
                  healthArea
                ].id === healthAreaId
              ) {
                result.healthAreaName = healthArea;

                Object.keys(
                  data.provinces[province].health_zones[healthZone]
                    .health_areas[healthArea].villages
                ).forEach((village) => {
                  if (
                    data.provinces[province].health_zones[healthZone]
                      .health_areas[healthArea].villages[village] ===
                    villageId
                  ) {
                    result.villageName = village;
                  }
                });
              }
            });
          }
        }
      );
    }
  });

  return result;
};

export default connect(mapStateToProps)(function DailyReportForm(props) {
  const [validate, setValidate] = useState(props.validate);
  const [reportId, setReportId] = useState("");
  const [is_validated, setIs_validated] = useState(false);
  // useRef to keep track of edit
  const edit = useRef(props.edit);

  const [activePage, setActivePage] = useState(0);

  // Identification state
  const [DMMDay, setDMMDay] = useState("");
  const [registeredNurse, setRegisteredNurse] = useState("");

  const [provinceName, setProvinceName] = useState("");
  const [provinceId, setProvinceId] = useState("");

  const [healthZoneName, setHealthZoneName] = useState("");
  const [healthZoneId, setHealthZoneId] = useState("");

  const [healthAreaName, setHealthAreaName] = useState("");
  const [healthAreaId, setHealthAreaId] = useState("");

  const [villageName, setVillageName] = useState("");
  const [villageId, setVillageId] = useState("");

  // Treatment Information state
  const [onchocerciasis, setOnchocerciasis] = useState(false);
  const [numCyclesOnchocerciasis, setNumCyclesOnchocerciasis] = useState(0);
  const [onchocerciasisFirst, setOnchocerciasisFirst] = useState(false);
  const [onchocerciasisSecond, setOnchocerciasisSecond] = useState(false);
  const [lymphaticFilariasis, setLymphaticFilariasis] = useState(false);
  const [LFIvermectineAlbendazole, setLFIvermectineAlbendazole] = useState(false);
  const [numCyclesLFIvermectineAlbendazole, setNumCyclesLFIvermectineAlbendazole] =
    useState(0);
  const [numCyclesLFAlbendazole, setNumCyclesLFAlbendazole] = useState(0);
  const [LFAlbendazoleFirst, setLFAlbendazoleFirst] = useState(false);
  const [LFAlbendazoleSecond, setLFAlbendazoleSecond] = useState(false);
  const [schistosomiasis, setSchistosomiasis] = useState(false);
  const [soilTransmittedHelminthiasis, setSoilTransmittedHelminthiasis] =
    useState(false);
  const [trachoma, setTrachoma] = useState(false);

  // Update onchocerciasis rounds when onchocerciasis is not selected
  useEffect(() => {
    if (!onchocerciasis) {
      setOnchocerciasisFirst(false);
      setOnchocerciasisSecond(false);
      setNumCyclesOnchocerciasis(0);
    }
  }, [onchocerciasis]);

  // Update LF rounds when LF is not selected
  useEffect(() => {
    if (!lymphaticFilariasis) {
      setLFIvermectineAlbendazole(false);
      setLFAlbendazoleFirst(false);
      setLFAlbendazoleSecond(false);
      setNumCyclesLFIvermectineAlbendazole(0);
      setNumCyclesLFAlbendazole(0);
    }
  }, [lymphaticFilariasis]);

  // Dates state
  const [DCTrainingCompletionDate, setDCTrainingCompletionDate] = useState(new Date(Date.now()));
  const [medicineArrivalDate, setMedicineArrivalDate] = useState(new Date(Date.now()));
  const [MDDStartDate, setMDDStartDate] = useState(new Date(Date.now()));
  const [DMMEndDate, setDMMEndDate] = useState(new Date(Date.now()));
  const [reportTransmissionDate, setReportTransmissionDate] = useState(new Date(Date.now()));

  // Distributors state
  const [numMenDistributors, setNumMenDistributors] = useState(0);
  const [numWomenDistributors, setNumWomenDistributors] = useState(0);
  const [totalNumDistributors, setTotalNumDistributors] = useState(
    numMenDistributors + numWomenDistributors
  );

  // Update total anytime # men or # women is updated
  useEffect(() => {
    setTotalNumDistributors(numMenDistributors + numWomenDistributors);
  }, [numMenDistributors, numWomenDistributors]);

  // Denumber state
  const [menUnderSixMonths, setMenLessThanSixMonths] = useState(0);
  const [menSixMonthsToFiveYears, setMenSixMonthsToFiveYears] = useState(0);
  const [menFiveToFourteenYears, setMenFiveToFourteenYears] = useState(0);
  const [menFifteenAndOlder, setMenFifteenAndOlder] = useState(0);
  const [womenLessThanSixMonths, setWomenLessThanSixMonths] = useState(0);
  const [womenSixMonthsToFiveYears, setWomenSixMonthsToFiveYears] = useState(0);
  const [womenFiveToFourteenYears, setWomenFiveToFourteenYears] = useState(0);
  const [womenFifteenAndOlder, setWomenFifteenAndOlder] = useState(0);
  const [totalChildrenUnderSixMonths, setTotalChildrenUnderSixMonths] =
    useState(0);
  const [
    totalchilrenSixMonthsToveFiveYears,
    setTotalchilrenSixMonthsToveFiveYears,
  ] = useState(0);
  const [totalFiveToFourteenYears, setTotalFiveToFourteenYears] = useState(0);
  const [totalFifteenAndOlder, setTotalFifteenAndOlder] = useState(0);
  const [totalNumMen, setTotalNumMen] = useState(0);
  const [totalNumWomen, setTotalNumWomen] = useState(0);
  const [totalNumPersons, setTotalNumPersons] = useState(0);

  // Update totals
  useEffect(() => {
    setTotalNumMen(
      menUnderSixMonths +
        menSixMonthsToFiveYears +
        menFiveToFourteenYears +
        menFifteenAndOlder
    );
    setTotalNumWomen(
      womenLessThanSixMonths +
        womenSixMonthsToFiveYears +
        womenFiveToFourteenYears +
        womenFifteenAndOlder
    );
    setTotalNumPersons(totalNumMen + totalNumWomen);
    setTotalChildrenUnderSixMonths(menUnderSixMonths + womenLessThanSixMonths);
    setTotalchilrenSixMonthsToveFiveYears(
      menSixMonthsToFiveYears + womenSixMonthsToFiveYears
    );
    setTotalFiveToFourteenYears(
      menFiveToFourteenYears + womenFiveToFourteenYears
    );
    setTotalFifteenAndOlder(menFifteenAndOlder + womenFifteenAndOlder);
  }, [menUnderSixMonths, menSixMonthsToFiveYears, menFiveToFourteenYears, menFifteenAndOlder, womenLessThanSixMonths, womenSixMonthsToFiveYears, womenFiveToFourteenYears, womenFifteenAndOlder, totalNumMen, totalNumWomen]);

  // Households
  const [numHouseholdsVisited, setNumHouseholdsVisited] = useState(0);
  const [numHouseholdsTreated, setNumHouseholdsTreated] = useState(0);
  const [
    geographicalCoverageOfHouseholds,
    setGeographicalCoverageOfHouseholds,
  ] = useState(0);

  // Update coverage
  useEffect(() => {
    setGeographicalCoverageOfHouseholds(
      (numHouseholdsTreated / numHouseholdsVisited) * 100
    );
  }, [numHouseholdsVisited, numHouseholdsTreated]);

  // Morbidity Cases state
  const [numMenBlind, setNumMenBlind] = useState(0);
  const [numWomenBlind, setNumWomenBlind] = useState(0);
  const [totalNumBlind, setTotalNumBlind] = useState(
    numMenBlind + numWomenBlind
  );

  const [numMenLUpperLimbs, setNumMenLUpperLimbs] = useState(0);
  const [numMenRUpperLimbs, setNumMenRUpperLimbs] = useState(0);
  const [numMenLLowerMembers, setNumMenLLowerMembers] = useState(0);
  const [numMenRLowerMembers, setNumMenRLowerMembers] = useState(0);
  const [numWomenLUpperLimbs, setNumWomenLUpperLimbs] = useState(0);
  const [numWomenRUpperLimbs, setNumWomenRUpperLimbs] = useState(0);
  const [numWomenLLowerMembers, setNumWomenLLowerMembers] = useState(0);
  const [numWomenRLowerMembers, setNumWomenRLowerMembers] = useState(0);
  const [numWomenLeftBreast, setNumWomenLeftBreast] = useState(0);
  const [numWomenRightBreast, setNumWomenRightBreast] = useState(0);

  const [totalNumMenLymphedema, setTotalNumMenLymphedema] = useState(
    numMenLUpperLimbs +
      numMenRUpperLimbs +
      numMenLLowerMembers +
      numMenRLowerMembers
  );
  const [totalNumWomenLymphedema, setTotalNumWomenLymphedema] = useState(
    numWomenLUpperLimbs +
      numWomenRUpperLimbs +
      numWomenLLowerMembers +
      numWomenRLowerMembers +
      numWomenLeftBreast +
      numWomenRightBreast
  );
  const [totalNumLymphedema, setTotalNumLymphedema] = useState(
    totalNumMenLymphedema + totalNumWomenLymphedema
  );

  const [numMenTrichiasis, setNumMenTrichiasis] = useState(0);
  const [numWomenTrichiasis, setNumWomenTrichiasis] = useState(0);
  const [totalNumTrichiasis, setTotalNumTrichiasis] = useState(
    numMenTrichiasis + numWomenTrichiasis
  );
  const [numMenHydroceles, setNumMenHydroceles] = useState(0);
  const [numMenGuineaWorm, setNumMenGuineaWorm] = useState(0);
  const [numWomenGuineaWorm, setNumWomenGuineaWorm] = useState(0);
  const [totalNumGuineaWorm, setTotalNumGuineaWorm] = useState(
    numMenGuineaWorm + numWomenGuineaWorm
  );

  // Update total anytime # men or # women is updated
  useEffect(() => {
    setTotalNumBlind(numMenBlind + numWomenBlind);
    setTotalNumTrichiasis(numMenTrichiasis + numWomenTrichiasis);
    setTotalNumGuineaWorm(numMenGuineaWorm + numWomenGuineaWorm);
    setTotalNumMenLymphedema(
      numMenLUpperLimbs +
        numMenRUpperLimbs +
        numMenLLowerMembers +
        numMenRLowerMembers
    );
    setTotalNumWomenLymphedema(
      numWomenLUpperLimbs +
        numWomenRUpperLimbs +
        numWomenLLowerMembers +
        numWomenRLowerMembers +
        numWomenLeftBreast +
        numWomenRightBreast
    );
    setTotalNumLymphedema(
      numMenLUpperLimbs +
        numMenRUpperLimbs +
        numMenLLowerMembers +
        numMenRLowerMembers +
        numWomenLUpperLimbs +
        numWomenRUpperLimbs +
        numWomenLLowerMembers +
        numWomenRLowerMembers +
        numWomenLeftBreast +
        numWomenRightBreast
    );
  }, [numMenBlind, numWomenBlind, numMenTrichiasis, numWomenTrichiasis, numMenGuineaWorm, numWomenGuineaWorm, numMenLLowerMembers, numMenRLowerMembers, numMenLUpperLimbs, numMenRUpperLimbs, numWomenLLowerMembers, numWomenRLowerMembers, numWomenRUpperLimbs, numWomenLUpperLimbs, numWomenLeftBreast, numWomenRightBreast]);

  // Processing: Ivermectine state
  const [numYoungMenIvermectine, setNumYoungMenIvermectine] = useState(0);
  const [numOldWomenIvermectine, setNumOldWomenIvermectine] = useState(0);
  const [numOldMenIvermectine, setNumOldMenIvermectine] = useState(0);
  const [numYoungWomenIvermectine, setNumYoungWomenIvermectine] = useState(0);
  const [totalNumMenIvermectine, setTotalMenIvermectine] = useState(
    numYoungMenIvermectine + numOldMenIvermectine
  );
  const [totalNumWomenIvermectine, setTotalWomenIvermectine] = useState(
    numYoungWomenIvermectine + numOldWomenIvermectine
  );
  const [totalNumIvermectine, setTotalNumIvermectine] = useState(
    totalNumMenIvermectine + totalNumWomenIvermectine
  );
  const [totalCoverageIvermectine, setTotalCoverageIvermectine] = useState(
    (totalNumIvermectine * 100) / totalNumPersons
  );

  // Update totals
  useEffect(() => {
    setTotalMenIvermectine(numYoungMenIvermectine + numOldMenIvermectine);
    setTotalWomenIvermectine(numYoungWomenIvermectine + numOldWomenIvermectine);
    setTotalNumIvermectine(totalNumMenIvermectine + totalNumWomenIvermectine);
    setTotalCoverageIvermectine((totalNumIvermectine * 100) / totalNumPersons);
  }, [numYoungMenIvermectine, numOldMenIvermectine, numYoungWomenIvermectine, numOldWomenIvermectine, totalNumMenIvermectine, totalNumWomenIvermectine, totalNumIvermectine, totalNumPersons]);

  // Processing: Ivermectine and Albendazole state
  const [numYoungMenMectAlb, setNumYoungMenMectAlb] = useState(0);
  const [numOldWomenMectAlb, setNumOldWomenMectAlb] = useState(0);
  const [numOldMenMectAlb, setNumOldMenMectAlb] = useState(0);
  const [numYoungWomenMectAlb, setNumYoungWomenMectAlb] = useState(0);
  const [totalNumMenMectAlb, setTotalMenMectAlb] = useState(
    numYoungMenMectAlb + numOldMenMectAlb
  );
  const [totalNumWomenMectAlb, setTotalWomenMectAlb] = useState(
    numYoungWomenMectAlb + numOldWomenMectAlb
  );
  const [totalNumMectAlb, setTotalNumMectAlb] = useState(
    totalNumMenMectAlb + totalNumWomenMectAlb
  );
  const [totalCoverageMectAlb, setTotalCoverageMectAlb] = useState(
    (totalNumMectAlb * 100) / totalNumPersons
  );

  // Update totals
  useEffect(() => {
    setTotalMenMectAlb(numYoungMenMectAlb + numOldMenMectAlb);
    setTotalWomenMectAlb(numYoungWomenMectAlb + numOldWomenMectAlb);
    setTotalNumMectAlb(totalNumMenMectAlb + totalNumWomenMectAlb);
    setTotalCoverageMectAlb((totalNumMectAlb * 100) / totalNumPersons);
  }, [numYoungMenMectAlb, numOldMenMectAlb, numYoungWomenMectAlb, numOldWomenMectAlb, totalNumMenMectAlb, totalNumWomenMectAlb, totalNumMectAlb, totalNumPersons]);

  // Processing: Albendazole (alone) state
  const [numYoungMenAlbendazoleTreat, setNumYoungMenAlbendazoleTreat] =
    useState(0);
  const [numOldWomenAlbendazoleTreat, setNumOldWomenAlbendazoleTreat] =
    useState(0);
  const [numOldMenAlbendazoleTreat, setNumOldMenAlbendazoleTreat] = useState(0);
  const [numYoungWomenAlbendazoleTreat, setNumYoungWomenAlbendazoleTreat] =
    useState(0);
  const [totalNumMenAlbendazoleTreat, setTotalMenAlbendazoleTreat] = useState(
    numYoungMenAlbendazoleTreat + numOldMenAlbendazoleTreat
  );
  const [totalNumWomenAlbendazoleTreat, setTotalWomenAlbendazoleTreat] =
    useState(numYoungWomenAlbendazoleTreat + numOldWomenAlbendazoleTreat);
  const [totalNumAlbendazoleTreat, setTotalNumAlbendazoleTreat] = useState(
    totalNumMenAlbendazoleTreat + totalNumWomenAlbendazoleTreat
  );
  const [totalCoverageAlbendazoleTreat, setTotalCoverageAlbendazoleTreat] =
    useState((totalNumAlbendazoleTreat * 100) / totalNumPersons);

  // Update totals
  useEffect(() => {
    setTotalMenAlbendazoleTreat(
      numYoungMenAlbendazoleTreat + numOldMenAlbendazoleTreat
    );
    setTotalWomenAlbendazoleTreat(
      numYoungWomenAlbendazoleTreat + numOldWomenAlbendazoleTreat
    );
    setTotalNumAlbendazoleTreat(
      totalNumMenAlbendazoleTreat + totalNumWomenAlbendazoleTreat
    );
    setTotalCoverageAlbendazoleTreat(
      (totalNumAlbendazoleTreat * 100) / totalNumPersons
    );
  }, [numYoungMenAlbendazoleTreat, numOldMenAlbendazoleTreat, numYoungWomenAlbendazoleTreat, numOldWomenAlbendazoleTreat, totalNumMenAlbendazoleTreat, totalNumWomenAlbendazoleTreat, totalNumAlbendazoleTreat, totalNumPersons]);

  // Processing: Praziquantel state
  const [numMenPrazi, setNumMenPrazi] = useState(0);
  const [numWomenPrazi, setNumWomenPrazi] = useState(0);
  const [totalNumPrazi, setTotalNumPrazi] = useState(
    numMenPrazi + numWomenPrazi
  );
  const [totalCoveragePrazi, setTotalCoveragePrazi] = useState(
    (totalNumPrazi * 100) / totalNumPersons
  );

  // Update total
  useEffect(() => {
    setTotalNumPrazi(numMenPrazi + numWomenPrazi);
    setTotalCoveragePrazi((totalNumPrazi * 100) / totalNumPersons);
  }, [numMenPrazi, numWomenPrazi, totalNumPrazi, totalNumPersons]);

  // Processing: Albendazole (Soil-transmitted helminthiasis)
  const [numMenAlbendazoleHelminthiasis, setNumMenAlbendazoleHelminthiasis] =
    useState(0);
  const [
    numWomenAlbendazoleHelminthiasis,
    setNumWomenAlbendazoleHelminthiasis,
  ] = useState(0);
  const [
    totalNumAlbendazoleHelminthiasis,
    setTotalNumAlbendazoleHelminthiasis,
  ] = useState(
    numMenAlbendazoleHelminthiasis + numWomenAlbendazoleHelminthiasis
  );
  const [
    totalCoverageAlbendazoleHelminthiasis,
    setTotalCoverageAlbendazoleHelminthiasis,
  ] = useState((totalNumAlbendazoleHelminthiasis * 100) / totalNumPersons);

  // Update total
  useEffect(() => {
    setTotalNumAlbendazoleHelminthiasis(
      numMenAlbendazoleHelminthiasis + numWomenAlbendazoleHelminthiasis
    );
    setTotalCoverageAlbendazoleHelminthiasis(
      (totalNumAlbendazoleHelminthiasis * 100) / totalNumPersons
    );
  }, [numMenAlbendazoleHelminthiasis, numWomenAlbendazoleHelminthiasis, totalNumAlbendazoleHelminthiasis, totalNumPersons]);

  // Side effects state
  const [numSideEffectsReported, setNumSideEffectsReported] = useState(0);

  // Untreated state
  const [numInfants, setNumInfants] = useState(0);
  const [numPregnant, setNumPregnant] = useState(0);
  const [numBreastfeeding, setNumBreastfeeding] = useState(0);
  const [numBedridden, setNumBedridden] = useState(0);
  const [numRefused, setNumRefused] = useState(0);
  const [numAbsent, setNumAbsent] = useState(0);
  const [totalUntreated, setTotalUntreated] = useState(
    numInfants +
      numPregnant +
      numBreastfeeding +
      numBedridden +
      numRefused +
      numAbsent
  );

  // update total anytime the number is changed for any of the values
  useEffect(() => {
    setTotalUntreated(
      numInfants +
        numPregnant +
        numBreastfeeding +
        numBedridden +
        numRefused +
        numAbsent
    );
  }, [numInfants, numPregnant, numBreastfeeding, numBedridden, numRefused, numAbsent]);

  // Drug Management: Ivermectin
  const [ivermectinReceived, setIvermectinReceived] = useState(0);
  const [ivermectinUsed, setIvermectinUsed] = useState(0);
  const [ivermectinLost, setIvermectinLost] = useState(0);
  const [ivermectinReturned, setIvermectinReturned] = useState(0);
  const [ivermectinRemaining, setIvermectinRemaining] = useState(
    ivermectinReceived - ivermectinUsed - ivermectinLost
  );

  // update the total amount of ivermectin remaining once the other values change
  useEffect(() => {
    setIvermectinRemaining(ivermectinReceived - (ivermectinUsed + ivermectinLost));
  }, [ivermectinUsed, ivermectinLost]);

  // Drug Management: Albendazole
  const [albendazoleReceived, setAlbendazoleReceived] = useState(0);
  const [albendazoleUsed, setAlbendazoleUsed] = useState(0);
  const [albendazoleLost, setAlbendazoleLost] = useState(0);
  const [albendazoleReturned, setAlbendazoleReturned] = useState(0);
  const [albendazoleRemaining, setAlbendazoleRemaining] = useState(
    albendazoleReceived - albendazoleUsed - albendazoleLost
  );

  // update the total amount of albendazole remaining once the other values change
  useEffect(() => {
    setAlbendazoleRemaining(
      albendazoleReceived - (albendazoleUsed + albendazoleLost)
    );
  }, [albendazoleUsed, albendazoleLost]);

  // Drug Management: Praziquantel
  const [praziquantelReceived, setPraziquantelReceived] = useState(0);
  const [praziquantelUsed, setPraziquantelUsed] = useState(0);
  const [praziquantelLost, setPraziquantelLost] = useState(0);
  const [praziquantelReturned, setPraziquantelReturned] = useState(0);
  const [praziquantelRemaining, setPraziquantelRemaining] = useState(
    praziquantelReceived - praziquantelUsed - praziquantelLost
  );

  // update the total amount of albendazole remaining once the other values change
  useEffect(() => {
    setPraziquantelRemaining(
        praziquantelReceived - (praziquantelUsed + praziquantelLost)
    );
  }, [praziquantelUsed, praziquantelLost]);

  const pages = [
    <IdentificationForm
      setDMMDay={setDMMDay}
      DMMDay={DMMDay}
      setRegisteredNurse={setRegisteredNurse}
      registeredNurse={registeredNurse}
      setProvinceName={setProvinceName}
      provinceName={provinceName}
      provinceId={provinceId}
      setProvinceId={setProvinceId}
      setHealthZoneName={setHealthZoneName}
      healthZoneName={healthZoneName}
      healthZoneId={healthZoneId}
      setHealthZoneId={setHealthZoneId}
      setHealthAreaName={setHealthAreaName}
      healthAreaName={healthAreaName}
      setHealthAreaId={setHealthAreaId}
      healthAreaId={healthAreaId}
      setVillageName={setVillageName}
      villageName={villageName}
      villageId={villageId}
      setVillageId={setVillageId}
      validate={props.validate}
    />,
    <TreatmentInformationForm
      setOnchocerciasis={setOnchocerciasis}
      onchocerciasis={onchocerciasis}
      setOnchocerciasisFirst={setOnchocerciasisFirst}
      onchocerciasisFirst={onchocerciasisFirst}
      setOnchocerciasisSecond={setOnchocerciasisSecond}
      onchocerciasisSecond={onchocerciasisSecond}
      setLymphaticFilariasis={setLymphaticFilariasis}
      lymphaticFilariasis={lymphaticFilariasis}
      setLFIvermectineAlbendazole={setLFIvermectineAlbendazole}
      LFIvermectineAlbendazole={LFIvermectineAlbendazole}
      setLFAlbendazoleFirst={setLFAlbendazoleFirst}
      LFAlbendazoleFirst={LFAlbendazoleFirst}
      setLFAlbendazoleSecond={setLFAlbendazoleSecond}
      LFAlbendazoleSecond={LFAlbendazoleSecond}
      setNumCyclesOnchocerciasis={setNumCyclesOnchocerciasis}
      numCyclesOnchocerciasis={numCyclesOnchocerciasis}
      setNumCyclesLFIvermectineAlbendazole={setNumCyclesLFIvermectineAlbendazole}
      numCyclesLFIvermectineAlbendazole={numCyclesLFIvermectineAlbendazole}
      setNumCyclesLFAlbendazole={setNumCyclesLFAlbendazole}
      numCyclesLFAlbendazole={numCyclesLFAlbendazole}
      setSchistosomiasis={setSchistosomiasis}
      schistosomiasis={schistosomiasis}
      setSoilTransmittedHelminthiasis={setSoilTransmittedHelminthiasis}
      soilTransmittedHelminthiasis={soilTransmittedHelminthiasis}
      setTrachoma={setTrachoma}
      trachoma={trachoma}
      validate={props.validate}
    />,
    <DatesForm
      setDCTrainingCompletionDate={setDCTrainingCompletionDate}
      DCTrainingCompletionDate={DCTrainingCompletionDate}
      setMedicineArrivalDate={setMedicineArrivalDate}
      medicineArrivalDate={medicineArrivalDate}
      setMDDStartDate={setMDDStartDate}
      MDDStartDate={MDDStartDate}
      setDMMEndDate={setDMMEndDate}
      DMMEndDate={DMMEndDate}
      setReportTransmissionDate={setReportTransmissionDate}
      reportTransmissionDate={reportTransmissionDate}
      validate={props.validate}
    />,
    <DistributorsForm
      setNumMenDistributors={setNumMenDistributors}
      numMenDistributors={numMenDistributors}
      setNumWomenDistributors={setNumWomenDistributors}
      numWomenDistributors={numWomenDistributors}
      totalNumDistributors={totalNumDistributors}
      validate={props.validate}
    />,
    <Denumber1Form
      setMenLessThanSixMonths={setMenLessThanSixMonths}
      menUnderSixMonths={menUnderSixMonths}
      setMenSixMonthsToFiveYears={setMenSixMonthsToFiveYears}
      menSixMonthsToFiveYears={menSixMonthsToFiveYears}
      setMenFiveToFourteenYears={setMenFiveToFourteenYears}
      menFiveToFourteenYears={menFiveToFourteenYears}
      setMenFifteenAndOlder={setMenFifteenAndOlder}
      menFifteenAndOlder={menFifteenAndOlder}
      setWomenLessThanSixMonths={setWomenLessThanSixMonths}
      womenLessThanSixMonths={womenLessThanSixMonths}
      setWomenSixMonthsToFiveYears={setWomenSixMonthsToFiveYears}
      womenSixMonthsToFiveYears={womenSixMonthsToFiveYears}
      setWomenFiveToFourteenYears={setWomenFiveToFourteenYears}
      womenFiveToFourteenYears={womenFiveToFourteenYears}
      setWomenFifteenAndOlder={setWomenFifteenAndOlder}
      womenFifteenAndOlder={womenFifteenAndOlder}
      totalNumMen={totalNumMen}
      totalNumWomen={totalNumWomen}
      validate={props.validate}
    />,
    <Denumber2Form
      totalChildrenUnderSixMonths={totalChildrenUnderSixMonths}
      totalchilrenSixMonthsToveFiveYears={totalchilrenSixMonthsToveFiveYears}
      totalFiveToFourteenYears={totalFiveToFourteenYears}
      totalFifteenAndOlder={totalFifteenAndOlder}
      totalNumPersons={totalNumPersons}
      validate={props.validate}
    />,
    <Denumber3Form
      setNumHouseholdsVisited={setNumHouseholdsVisited}
      numHouseholdsVisited={numHouseholdsVisited}
      setNumHouseholdsTreated={setNumHouseholdsTreated}
      numHouseholdsTreated={numHouseholdsTreated}
      geographicalCoverageOfHouseholds={geographicalCoverageOfHouseholds}
      validate={props.validate}
    />,
    <MorbidityCasesForm
      setNumMenBlind={setNumMenBlind}
      numMenBlind={numMenBlind}
      setNumWomenBlind={setNumWomenBlind}
      numWomenBlind={numWomenBlind}
      totalNumBlind={totalNumBlind}
      setNumMenLUpperLimbs={setNumMenLUpperLimbs}
      numMenLUpperLimbs={numMenLUpperLimbs}
      setNumMenRUpperLimbs={setNumMenRUpperLimbs}
      numMenRUpperLimbs={numMenRUpperLimbs}
      setNumWomenLUpperLimbs={setNumWomenLUpperLimbs}
      numWomenLUpperLimbs={numWomenLUpperLimbs}
      setNumWomenRUpperLimbs={setNumWomenRUpperLimbs}
      numWomenRUpperLimbs={numWomenRUpperLimbs}
      setNumMenLLowerMembers={setNumMenLLowerMembers}
      numMenLLowerMembers={numMenLLowerMembers}
      setNumMenRLowerMembers={setNumMenRLowerMembers}
      numMenRLowerMembers={numMenRLowerMembers}
      setNumWomenLLowerMembers={setNumWomenLLowerMembers}
      numWomenLLowerMembers={numWomenLLowerMembers}
      setNumWomenRLowerMembers={setNumWomenRLowerMembers}
      numWomenRLowerMembers={numWomenRLowerMembers}
      setNumWomenLeftBreast={setNumWomenLeftBreast}
      numWomenLeftBreast={numWomenLeftBreast}
      setNumWomenRightBreast={setNumWomenRightBreast}
      numWomenRightBreast={numWomenRightBreast}
      setTotalNumMenLymphedema={setTotalNumMenLymphedema}
      setTotalNumWomenLymphedema={setTotalNumWomenLymphedema}
      setTotalNumLymphedema={setTotalNumLymphedema}
      totalNumWomenLymphedema={totalNumWomenLymphedema}
      totalNumMenLymphedema={totalNumMenLymphedema}
      totalNumLymphedema={totalNumLymphedema}
      setNumMenTrichiasis={setNumMenTrichiasis}
      numMenTrichiasis={numMenTrichiasis}
      setNumWomenTrichiasis={setNumWomenTrichiasis}
      numWomenTrichiasis={numWomenTrichiasis}
      totalNumTrichiasis={totalNumTrichiasis}
      setNumMenGuineaWorm={setNumMenGuineaWorm}
      numMenGuineaWorm={numMenGuineaWorm}
      setNumWomenGuineaWorm={setNumWomenGuineaWorm}
      numWomenGuineaWorm={numWomenGuineaWorm}
      totalNumGuineaWorm={totalNumGuineaWorm}
      numMenHydroceles={numMenHydroceles}
      setNumMenHydroceles={setNumMenHydroceles}
      validate={props.validate}
    />,
    <ProcessingForm
      // Treatments
      onchocerciasis={onchocerciasis}
      lymphaticFilariasis={lymphaticFilariasis}
      LFIvermectineAlbendazole={LFIvermectineAlbendazole}
      LFAlbendazoleFirst={LFAlbendazoleFirst}
      LFAlbendazoleSecond={LFAlbendazoleSecond}
      schistosomiasis={schistosomiasis}
      soilTransmittedHelminthiasis={soilTransmittedHelminthiasis}
      // Ivermectine
      setNumYoungMenIvermectine={setNumYoungMenIvermectine}
      setNumOldMenIvermectine={setNumOldMenIvermectine}
      setNumYoungWomenIvermectine={setNumYoungWomenIvermectine}
      setNumOldWomenIvermectine={setNumOldWomenIvermectine}
      numYoungMenIvermectine={numYoungMenIvermectine}
      numYoungWomenIvermectine={numYoungWomenIvermectine}
      numOldMenIvermectine={numOldMenIvermectine}
      numOldWomenIvermectine={numOldWomenIvermectine}
      totalNumWomenIvermectine={totalNumWomenIvermectine}
      totalNumMenIvermectine={totalNumMenIvermectine}
      totalNumIvermectine={totalNumIvermectine}
      totalCoverageIvermectine={totalCoverageIvermectine}
      // Ivermectine and Albendazole
      setNumYoungMenMectAlb={setNumYoungMenMectAlb}
      setNumOldMenMectAlb={setNumOldMenMectAlb}
      setNumYoungWomenMectAlb={setNumYoungWomenMectAlb}
      setNumOldWomenMectAlb={setNumOldWomenMectAlb}
      numYoungMenMectAlb={numYoungMenMectAlb}
      numYoungWomenMectAlb={numYoungWomenMectAlb}
      numOldMenMectAlb={numOldMenMectAlb}
      numOldWomenMectAlb={numOldWomenMectAlb}
      totalNumWomenMectAlb={totalNumWomenMectAlb}
      totalNumMenMectAlb={totalNumMenMectAlb}
      totalNumMectAlb={totalNumMectAlb}
      totalCoverageMectAlb={totalCoverageMectAlb}
      // Albendazole (alone)
      setNumYoungMenAlbendazoleTreat={setNumYoungMenAlbendazoleTreat}
      setNumOldMenAlbendazoleTreat={setNumOldMenAlbendazoleTreat}
      setNumYoungWomenAlbendazoleTreat={setNumYoungWomenAlbendazoleTreat}
      setNumOldWomenAlbendazoleTreat={setNumOldWomenAlbendazoleTreat}
      numYoungMenAlbendazoleTreat={numYoungMenAlbendazoleTreat}
      numYoungWomenAlbendazoleTreat={numYoungWomenAlbendazoleTreat}
      numOldMenAlbendazoleTreat={numOldMenAlbendazoleTreat}
      numOldWomenAlbendazoleTreat={numOldWomenAlbendazoleTreat}
      totalNumWomenAlbendazoleTreat={totalNumWomenAlbendazoleTreat}
      totalNumMenAlbendazoleTreat={totalNumMenAlbendazoleTreat}
      totalNumAlbendazoleTreat={totalNumAlbendazoleTreat}
      totalCoverageAlbendazoleTreat={totalCoverageAlbendazoleTreat}
      // Praziquantel
      setNumMenPrazi={setNumMenPrazi}
      numMenPrazi={numMenPrazi}
      setNumWomenPrazi={setNumWomenPrazi}
      numWomenPrazi={numWomenPrazi}
      setTotalNumPrazi={setTotalNumPrazi}
      totalNumPrazi={totalNumPrazi}
      setTotalCoveragePrazi={setTotalCoveragePrazi}
      totalCoveragePrazi={totalCoveragePrazi}
      // Albendazole (Soil-transmitted helminthiasis)
      setNumMenAlbendazoleHelminthiasis={setNumMenAlbendazoleHelminthiasis}
      numMenAlbendazoleHelminthiasis={numMenAlbendazoleHelminthiasis}
      setNumWomenAlbendazoleHelminthiasis={setNumWomenAlbendazoleHelminthiasis}
      numWomenAlbendazoleHelminthiasis={numWomenAlbendazoleHelminthiasis}
      setTotalNumAlbendazoleHelminthiasis={setTotalNumAlbendazoleHelminthiasis}
      totalNumAlbendazoleHelminthiasis={totalNumAlbendazoleHelminthiasis}
      setTotalCoverageAlbendazoleHelminthiasis={
        setTotalCoverageAlbendazoleHelminthiasis
      }
      totalCoverageAlbendazoleHelminthiasis={
        totalCoverageAlbendazoleHelminthiasis
      }
      // Side effects
      setNumSideEffectsReported={setNumSideEffectsReported}
      numSideEffectsReported={numSideEffectsReported}
      validate={props.validate}
    />,
    <UntreatedForm
      setNumInfants={setNumInfants}
      numInfants={numInfants}
      setNumPregnant={setNumPregnant}
      numPregnant={numPregnant}
      setNumBreastfeeding={setNumBreastfeeding}
      numBreastfeeding={numBreastfeeding}
      setNumBedridden={setNumBedridden}
      numBedridden={numBedridden}
      setNumRefused={setNumRefused}
      numRefused={numRefused}
      setNumAbsent={setNumAbsent}
      numAbsent={numAbsent}
      totalUntreated={totalUntreated}
      validate={props.validate}
    />,
    <DrugManagementForm
      // Treatments
      onchocerciasis={onchocerciasis}
      lymphaticFilariasis={lymphaticFilariasis}
      schistosomiasis={schistosomiasis}
      soilTransmittedHelminthiasis={soilTransmittedHelminthiasis}
      // Ivermectin
      ivermectinReceived={ivermectinReceived}
      ivermectinUsed={ivermectinUsed}
      ivermectinLost={ivermectinLost}
      ivermectinRemaining={ivermectinRemaining}
      ivermectinReturned={ivermectinReturned}
      setIvermectinReceived={setIvermectinReceived}
      setIvermectinUsed={setIvermectinUsed}
      setIvermectinLost={setIvermectinLost}
      setIvermectinRemaining={setIvermectinRemaining}
      setIvermectinReturned={setIvermectinReturned}
      // Albendazole
      albendazoleReceived={albendazoleReceived}
      albendazoleUsed={albendazoleUsed}
      albendazoleLost={albendazoleLost}
      albendazoleRemaining={albendazoleRemaining}
      albendazoleReturned={albendazoleReturned}
      setAlbendazoleReceived={setAlbendazoleReceived}
      setAlbendazoleUsed={setAlbendazoleUsed}
      setAlbendazoleLost={setAlbendazoleLost}
      setAlbendazoleRemaining={setAlbendazoleRemaining}
      setAlbendazoleReturned={setAlbendazoleReturned}
      // Praziquantel
      praziquantelReceived={praziquantelReceived}
      praziquantelUsed={praziquantelUsed}
      praziquantelLost={praziquantelLost}
      praziquantelRemaining={praziquantelRemaining}
      praziquantelReturned={praziquantelReturned}
      setPraziquantelReceived={setPraziquantelReceived}
      setPraziquantelUsed={setPraziquantelUsed}
      setPraziquantelLost={setPraziquantelLost}
      setPraziquantelRemaining={setPraziquantelRemaining}
      setPraziquantelReturned={setPraziquantelReturned}
      validate={props.validate}
    />,
  ];

  // resets all states to default values
  const resetAllStates = (report) => {
    var { provinceName, healthZoneName, healthAreaName, villageName } =
      replaceIdsWithNames(
        report.province,
        report.health_zone,
        report.health_area,
        report.village
      );

    setReportId(props.currentReportId? props.currentReportId: "");
    setIs_validated(report.is_validated);

    setDMMDay(report.DMM_day);
    setRegisteredNurse(report.nurse);

    setProvinceName(provinceName);
    setProvinceId(report.province);
    setHealthZoneName(healthZoneName);
    setHealthZoneId(report.health_zone);
    setHealthAreaName(healthAreaName);
    setHealthAreaId(report.health_area);
    setVillageName(villageName);
    setVillageId(report.village);

    // Treatment Information state
    setOnchocerciasis(report.schistosomiasis);
    setNumCyclesOnchocerciasis(0);
    setOnchocerciasisFirst(report.onchocerciasis.first_round);
    setOnchocerciasisSecond(report.onchocerciasis.second_round);
    setLymphaticFilariasis(
      report.lymphatic_filariasis.Ivermectine_and_albendazole ||
        report.lymphatic_filariasis.albendazole_alone.first_round ||
        report.lymphatic_filariasis.albendazole_alone.second_round
    );
    setLFIvermectineAlbendazole(
      report.lymphatic_filariasis.Ivermectine_and_albendazole
    );
    setNumCyclesLFIvermectineAlbendazole(0);
    setNumCyclesLFAlbendazole(0);
    setLFAlbendazoleFirst(
      report.lymphatic_filariasis.albendazole_alone.first_round
    );
    setLFAlbendazoleSecond(
      report.lymphatic_filariasis.albendazole_alone.second_round
    );
    setSchistosomiasis(report.schistosomiasis);
    setSoilTransmittedHelminthiasis(report.soil_transmitted_helminthiasis);
    setTrachoma(report.trachoma);

    // Dates state
    setDCTrainingCompletionDate(
        new Date(report.dcs_training_completion_date)
    );
    setMedicineArrivalDate(
      new Date(report.medicines_arrival_date)
    );
    setMDDStartDate(
      new Date(report.MDD_start_date)
    );
    setDMMEndDate(
      new Date(report.MDD_end_date)
    );
    setReportTransmissionDate(
      new Date(report.date_of_transmission)
    );

    // Distributors state
    setNumMenDistributors(report.distributors.men);
    setNumWomenDistributors(report.distributors.women);

    // Denumber state
    setMenLessThanSixMonths(report.patients.men.lessThanSixMonths);
    setMenSixMonthsToFiveYears(report.patients.men.sixMonthsToFiveYears);
    setMenFiveToFourteenYears(report.patients.men.fiveToFourteen);
    setMenFifteenAndOlder(report.patients.men.fifteenAndAbove);
    setWomenLessThanSixMonths(report.patients.women.lessThanSixMonths);
    setWomenSixMonthsToFiveYears(report.patients.women.sixMonthsToFiveYears);
    setWomenFiveToFourteenYears(report.patients.women.fiveToFourteen);
    setWomenFifteenAndOlder(report.patients.women.fifteenAndAbove);

    // Households
    setNumHouseholdsVisited(report.households.visited);
    setNumHouseholdsTreated(report.households.treated);

    // Morbidity Cases state
    setNumMenBlind(report.blind.men);
    setNumWomenBlind(report.blind.women);
    setNumMenTrichiasis(report.trichiasis.men);
    setNumWomenTrichiasis(report.trichiasis.women);
    setNumMenHydroceles(report.hydroceles.men);
    setNumMenGuineaWorm(report.guinea_worm.men);
    setNumWomenGuineaWorm(report.guinea_worm.women);

    setNumMenLUpperLimbs(report.lymphedema.men.upper_limbs.left);
    setNumMenRUpperLimbs(report.lymphedema.men.upper_limbs.right);
    setNumMenLLowerMembers(report.lymphedema.men.lower_limbs.left);
    setNumMenRLowerMembers(report.lymphedema.men.lower_limbs.right);

    setNumWomenLUpperLimbs(report.lymphedema.women.upper_limbs.left);
    setNumWomenRUpperLimbs(report.lymphedema.women.upper_limbs.right);
    setNumWomenLLowerMembers(report.lymphedema.women.lower_limbs.left);
    setNumWomenRLowerMembers(report.lymphedema.women.lower_limbs.right);
    setNumWomenLeftBreast(report.lymphedema.women.breast.left);
    setNumWomenRightBreast(report.lymphedema.women.breast.right);

    // Processing: Ivermectine state
    setNumYoungMenIvermectine(report.Ivermectine.men.fiveToFourteen);
    setNumOldWomenIvermectine(report.Ivermectine.men.fifteenAndOver);
    setNumOldMenIvermectine(report.Ivermectine.men.fifteenAndOver);
    setNumYoungWomenIvermectine(report.Ivermectine.women.fiveToFourteen);

    // Processing: Ivermectine and Albendazole state
    setNumYoungMenMectAlb(report.Ivermectine_and_albendazole.men.fiveToFourteen);
    setNumOldMenMectAlb(report.Ivermectine_and_albendazole.men.fifteenAndOver);
    setNumYoungWomenMectAlb(
      report.Ivermectine_and_albendazole.women.fiveToFourteen
    );
    setNumOldWomenMectAlb(report.Ivermectine_and_albendazole.women.fifteenAndOver);

    setNumSideEffectsReported(report.side_effects_num);

    // Processing: Albendazole (alone) state
    setNumYoungMenAlbendazoleTreat(report.albendazole.men.fiveToFourteen);
    setNumOldWomenAlbendazoleTreat(report.albendazole.women.fifteenAndOver);
    setNumOldMenAlbendazoleTreat(report.albendazole.men.fifteenAndOver);
    setNumYoungWomenAlbendazoleTreat(report.albendazole.women.fiveToFourteen);

    // Processing: Praziquantel state
    setNumMenPrazi(report.praziquantel.men.fiveToFourteen);
    setNumWomenPrazi(report.praziquantel.women.fiveToFourteen);

    // Processing: Albendazole (Soil-transmitted helminthiasis)
    setNumMenAlbendazoleHelminthiasis(
      report.albendazole_soil_transmitted.men.fiveToFourteen
    );
    setNumWomenAlbendazoleHelminthiasis(
      report.albendazole_soil_transmitted.women.fiveToFourteen
    );

    // Untreated state
    setNumInfants(report.untreated_persons.childrenYoungerThanFive);
    setNumPregnant(report.untreated_persons.pregnantWomen);
    setNumBreastfeeding(report.untreated_persons.breastfeedingWomen);
    setNumBedridden(report.untreated_persons.bedriddenPatients);
    setNumRefused(report.untreated_persons.refusals);
    setNumAbsent(report.untreated_persons.absent);

    // Drug Management: Ivermectin
    setIvermectinReceived(report.ivermectin_management.quantityReceived);
    setIvermectinUsed(report.ivermectin_management.quantityUsed);
    setIvermectinLost(report.ivermectin_management.amountLost);
    setIvermectinReturned(report.ivermectin_management.quantityReturnedToCS);

    // Drug Management: Albendazole
    setAlbendazoleReceived(report.albendazole_management.quantityReceived);
    setAlbendazoleUsed(report.albendazole_management.quantityUsed);
    setAlbendazoleLost(report.albendazole_management.amountLost);
    setAlbendazoleReturned(report.albendazole_management.quantityReturnedToCS);

    // Drug Management: Praziquantel
    setPraziquantelReceived(report.praziquantel_management.quantityReceived);
    setPraziquantelUsed(report.praziquantel_management.quantityUsed);
    setPraziquantelLost(report.praziquantel_management.amountLost);
    setPraziquantelReturned(
      report.praziquantel_management.quantityReturnedToCS
    );
  };

  // report object to be sent to the server
  var report = {
    // IDENTIFICATION
    _id: reportId, // might be empty or there depending on
    is_validated: is_validated,
    //if it's a new report or backend report
    DMM_day: DMMDay,
    nurse: registeredNurse,
    village: villageId,
    province: provinceId,
    health_area: healthAreaId,
    health_zone: healthZoneId,
    village: villageId,
    // DATE
    date: (new Date(Date.now())).toISOString(),
    // 1.11 diseases treated
    onchocerciasis: {
      first_round: onchocerciasisFirst,
      second_round: onchocerciasisSecond,
    },
    lymphatic_filariasis: {
      Ivermectine_and_albendazole: LFIvermectineAlbendazole,
      albendazole_alone: {
        first_round: LFAlbendazoleFirst,
        second_round: LFAlbendazoleSecond,
      },
    },
    schistosomiasis: schistosomiasis,
    soil_transmitted_helminthiasis: soilTransmittedHelminthiasis,
    trachoma: trachoma,
    dcs_training_completion_date: DCTrainingCompletionDate,
    medicines_arrival_date: medicineArrivalDate,
    MDD_start_date: MDDStartDate,
    MDD_end_date: DMMEndDate,
    date_of_transmission: reportTransmissionDate,
    distributors: {
      men: numMenDistributors,
      women: numWomenDistributors,
    },
    // II. DENUMBER
    patients: {
      men: {
        lessThanSixMonths: menUnderSixMonths,
        sixMonthsToFiveYears: menSixMonthsToFiveYears,
        fiveToFourteen: menFiveToFourteenYears,
        fifteenAndAbove: menFifteenAndOlder,
      },
      women: {
        lessThanSixMonths: womenLessThanSixMonths,
        sixMonthsToFiveYears: womenSixMonthsToFiveYears,
        fiveToFourteen: womenFiveToFourteenYears,
        fifteenAndAbove: womenFifteenAndOlder,
      },
    },
    households: {
      visited: numHouseholdsVisited,
      treated: numHouseholdsTreated,
    },
    // III. MORBIDITY
    blind: {
      men: numMenBlind,
      women: numWomenBlind,
    },
    lymphedema: {
      men: {
        upper_limbs: {
          left: numMenLUpperLimbs,
          right: numMenRUpperLimbs,
        },
        lower_limbs: {
          left: numMenLLowerMembers,
          right: numMenRLowerMembers,
        },
      },
      women: {
        upper_limbs: {
          left: numWomenLUpperLimbs,
          right: numWomenRUpperLimbs,
        },
        lower_limbs: {
          left: numWomenLLowerMembers,
          right: numWomenRLowerMembers,
        },
        breast: {
          left: numWomenLeftBreast,
          right: numWomenRightBreast,
        },
      },
    },

    hydroceles: {
      men: numMenHydroceles,
    },
    trichiasis: {
      men: numMenTrichiasis,
      women: numWomenTrichiasis,
    },
    guinea_worm: {
      men: numMenGuineaWorm,
      women: numWomenGuineaWorm,
    },

    // IV. PROCESSING
    Ivermectine: {
      men: {
        fiveToFourteen: numYoungMenIvermectine,
        fifteenAndOver: numOldMenIvermectine,
      },
      women: {
        fiveToFourteen: numYoungWomenIvermectine,
        fifteenAndOver: numOldWomenIvermectine,
      },
    },
    Ivermectine_and_albendazole: {
      men: {
        fiveToFourteen: numYoungMenMectAlb,
        fifteenAndOver: numOldMenMectAlb,
      },
      women: {
        fiveToFourteen: numYoungWomenMectAlb,
        fifteenAndOver: numOldWomenMectAlb,
      },
    },
    albendazole: {
      men: {
        fiveToFourteen: numYoungMenAlbendazoleTreat,
        fifteenAndOver: numOldMenAlbendazoleTreat,
      },
      women: {
        fiveToFourteen: numYoungWomenAlbendazoleTreat,
        fifteenAndOver: numOldWomenAlbendazoleTreat,
      },
    },
    praziquantel: {
      men: {
        fiveToFourteen: numMenPrazi,
      },
      women: {
        fiveToFourteen: numWomenPrazi,
      },
    },
    albendazole_soil_transmitted: {
      men: {
        fiveToFourteen: numMenAlbendazoleHelminthiasis,
      },
      women: {
        fiveToFourteen: numWomenAlbendazoleHelminthiasis,
      },
    },
    side_effects_num: numSideEffectsReported,

    // V. UNTREATED PERSONS
    untreated_persons: {
      childrenYoungerThanFive: numInfants,
      pregnantWomen: numPregnant,
      breastfeedingWomen: numBreastfeeding,
      bedriddenPatients: numBedridden,
      refusals: numRefused,
      absent: numAbsent,
    },
    // VI. DRUG management is done by the DRUG model
    ivermectin_management: {
      quantityReceived: ivermectinReceived,
      quantityUsed: ivermectinUsed,
      amountLost: ivermectinLost,
      quantityReturnedToCS: ivermectinReturned,
    },
    albendazole_management: {
      quantityReceived: albendazoleReceived,
      quantityUsed: albendazoleUsed,
      amountLost: albendazoleLost,
      quantityReturnedToCS: albendazoleReturned,
    },
    praziquantel_management: {
      quantityReceived: praziquantelReceived,
      quantityUsed: praziquantelUsed,
      amountLost: praziquantelLost,
      quantityReturnedToCS: praziquantelReturned,
    },
  };

  // Conditional rendering page navigation
  const renderPageContent = () => {
    // if there's a report to validate, reset all states
    if (validate) {
      setValidate(false);
      resetAllStates(props.currentReport);
    } else if (edit.current){
      edit.current = false;
      resetAllStates(props.currentReport);
    }

    return (
      <>
        {pages[activePage]}
        <View style={styles.buttonsContainer}>
          {activePage > 0 && <BackButton setActivePage={setActivePage} />}
          {activePage < pages.length - 1 && (
            <NextButton setActivePage={setActivePage} />
          )}
          {activePage === pages.length - 1 && (
            <SubmitButton
              setBridgeActivePage={props.setBridgeActivePage}
              setLandingPage={props.setLandingPage}
              report={report}
              validate={props.validate}
              edit={props.edit}
              setEdit={props.setEdit}
              currentReportId={props.currentReport && props.currentReportId}
            />
          )}
        </View>
        <ProgressBar progress={(activePage + 1) / pages.length} />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <CrossIcon
        setEdit={props.setEdit}
        edit={props.edit}
        validate={props.validate}
        setLandingPage={props.setLandingPage}
        setBridgeActivePage={props.setBridgeActivePage}
      />
      {renderPageContent()}
    </View>
  );
});

function mapStateToProps(state) {
  return {
    name: state.reducer.name,
    reports: state.reducer.reports,
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    top: Platform.OS === "android" ? StatusBar.currentHeight : 45,
    bottom: 0,
    backgroundColor: "#cb0d00",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,

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

  buttonsContainer: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: 30,
  },
});
