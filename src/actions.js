import { offlineActionCreators } from 'react-native-offline';

export const addReport = (report, id) => {
    async function thunk(dispatch){
        // submit the report to the server
        // todo: better way to pass in url
        try {
            const response = await fetch('http://10.74.1.110:3000/form/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(report),
            })
            if (response.status == 200){
                console.log("report submitted successfully: ", response);
                // dispatch({type: 'ADD_REPORT', report: report, id: id})
            }  else {
                // todo: if there's an error, remove the report from redux and notify the user
                console.log("error while submitting report1: ", err);
                // dispatch(offlineActionCreators.fetchOfflineMode(thunk))
            }
        } catch (err) {
            
            // todo: if there's an error, remove the report from redux and notify the user
            console.log("error while submitting report2: ", err);
            // dispatch(offlineActionCreators.fetchOfflineMode(thunk))
        }

    }

    thunk.interceptInOffline = true;
    thunk.meta = {
        retry: true,
        name: 'addReport',
        args: [report, id],
    };    
    return thunk;
};
