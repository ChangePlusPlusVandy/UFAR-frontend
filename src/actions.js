import uuid from 'react-native-uuid';


// Note: Every action function should have an identifier that is unique to the action as
// the last parameter. This is used to detect if an action has already been dispatched.


/**
 * When a user adds a report online, it is added to our redux store and marked as submitted 
 * if the fetch was successful. If the user is offline, the report is added to the offline queue
 * and submitted later when there's a network connection. However, the report is still aded to
 * the redux store and marked as not submitted yet. 
 * @param {*} report report object
 * @param {*} id uuid of the report
 * @returns a redux thunk action
 */
export const addReport = (report, authAxios, id) => {
    async function thunk(dispatch){
        try {
            const response = await authAxios.post('/form/insert', 
            JSON.stringify(report),
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            if (response.status == 200){
                dispatch({type: 'ADD_REPORT', report: report, id: id})
            }  else {
                // if there's an error, call the add function which marks it is not submitted
                console.log("error while submitting report1: ", err);
                dispatch({type: 'ADD_REPORT', report: report, id: id})
            }
        } catch (err) {
        
            // if there's an error, call the add function which marks it is not submitted
            console.log("error while submitting report2: ", err);
            dispatch({type: 'ADD_REPORT', report: report, id: id})

        }

    }

    thunk.interceptInOffline = true;
    thunk.meta = {
        retry: true,
        name: `addReport`,
        args: [report, id],
    };    
    return thunk;
};


/**
 * When online an endpont is called at the backend to add modifications, otherwise, the request is added to the offline queue
 * for later execution when online. The report will be marked as validated unless an error occurs, and it is marked as not submitted
 * @param {*} report 
 * @param {*} id -- unique id of the current function
 * @returns thunk action
 */
export const validateReport = (report, authAxios, id=uuid.v4()) => {
    async function thunk(dispatch){
        // submit the report to the server
        try {
            const response = await authAxios.post('/validation/reports/validate', 
            JSON.stringify([report]),
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            if (response.status == 200){
                console.log("report successfully validated");
            }  else {
                console.log("report not succesfully validated: ", response);
            }
        } catch (err) {
            console.log("error while validating report: ", err);
        }
    }

    thunk.interceptInOffline = true;

    thunk.meta = {
        retry: true,
        name: `validateReport`,
        args: [report, id],
    };    
    return thunk;
}


/**
 * Returns a thunk action that fetches all reports from a specific healthzone from the server.
 * @param {*} healthZoneId 
 * @param {*} authAxios An authenticated axios instance that can be used to make requests to the backend
 * @param {*} id A unique id for this action
 * @returns thunk action
 */
// todo: might need to use the same identifer for all actions
export function getReports(healthZoneId, authAxios, id=uuid.v4()){
    async function thunk(dispatch){
        // submit the report to the server
        try {
            const response = await authAxios.get(`/validation/${healthZoneId}/reports`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }
            );
            if (response.status == 200){
                const reports = await response.data;
                reports && dispatch({type: 'ADD_VALIDATION_REPORTS', reports: reports})
            } else {
                console.log("Failed to get reports", response.status);
            }
        } catch (err) {
            console.log("error while retrieving reports: ", err);
        }
    }


    thunk.interceptInOffline = true;

    thunk.meta = {
        retry: true,
        name: `getReports`,
        args: [healthZoneId, id],
    };
    return thunk;
}