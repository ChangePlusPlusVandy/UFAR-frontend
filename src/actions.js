// Note: Every action function should have an identifier that is unique to the action as
// the last parameter. This is used to detect if an action has already been dispatched.


/**
 * When a user adds a report online, it is added to our redux store and marked as submitted 
 * if the fetch was successful. If the user is offline, the report is added to the offline queue
 * and submitted later when there's a network connection. However, the report is still aded to
 * the redux store and marked as not submitted yet. 
 * @param {*} report 
 * @param {*} authAxios 
 * @param {*} id -- function identifier for the offline queue
 * @returns 
 */
export const addReport = (report, authAxios, id) => {
    async function thunk(dispatch){
        try {

            // remove id field from the report object since the backend
            // creates it's own
            delete report._id;
            const response = await authAxios.post('/form/insert', 
            JSON.stringify(report),
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            if (response.status == 200){
                dispatch({type: 'ADD_REPORT', report: report, id: id, isSubmitted: true})
            }  else {
                // if there's an error, call the add action which marks it is not submitted
                console.log("error while submitting report1: ", err);
                dispatch({type: 'ADD_REPORT', report: report, id: id, isSubmitted: false})
            }
        } catch (err) {
        
            // if there's an error, call the add action which marks it is not submitted
            console.log("error while submitting report2: ", err);
            dispatch({type: 'ADD_REPORT', report: report, id: id, isSubmitted: false})

        }

    }

    thunk.interceptInOffline = true;
    thunk.meta = {
        retry: true,
        name: `addReport`,
        args: [report, authAxios, id],
    };    
    return thunk;
};


/**
 *  * When online an endpont is called at the backend to add modifications, otherwise, the request is added to the offline queue
 * for later execution when online. The report will be marked as validated unless an error occurs, and it is marked as not submitted
 * @param {*} report 
 * @param {*} authAxios 
 * @param {*} id -- report id and also function identifier for the offline queue
 * @returns 
 */
export const validateReport = (report, authAxios, id) => {
    async function thunk(dispatch){
        // submit the report to the server
        try {
            report.is_validated = true;
            const response = await authAxios.post('/validation/reports/validate', 
            JSON.stringify(report),
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            if (response.status == 200){
                console.log("report successfully validated");
                dispatch({type: 'MARK_VALIDATED_REPORT_SUBMITTED', report: report, id: id, isSubmitted: true})
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
        args: [report, authAxios, id],
    };    
    return thunk;
}


/**
 * Returns a thunk action that fetches all reports from a specific healthzone from the server.
 * @param {*} healthZoneId 
 * @param {*} authAxios An authenticated axios instance that can be used to make requests to the backend
 * @param {*} id A unique id for this action (used to detect if the action has already been dispatched)
 * so we use the same id to prevent duplicate actions. 
 * @returns thunk action
 */
export function getReports(healthZoneId, authAxios, id=1){
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

                reformatedReports = {};
                reports.forEach(report => {
                    // save with report id, so that we can update the report later
                    // when edited by the user
                    // isSubmitted is true if the report validation was submitted to the server
                    reformatedReports[report._id] = {report: report, isSubmitted: false}
                });
                dispatch({type: 'ADD_VALIDATION_REPORTS', reports: reformatedReports})

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
        args: [healthZoneId, authAxios, id],
    };
    return thunk;
}


/**
 * Gets unvalidated reports specific to a given user id
 * @param {*} userId -- user id
 * @param {*} authAxios -- authenticated axios instance
 * @param {*} id -- function identifier for the offline queue
 * @returns 
 */
export function getReportsUser(userId, authAxios, id=1){
    async function thunk(dispatch){
        // submit the report to the server
        try {
            const response = await authAxios.get(`/form/get_unvalidated`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }
            );
            if (response.status == 200){
                const reports = await response.data;
                // [action.id]: {report: action.report, isSubmitted: action.isSubmitted}
                reformatedReports = {};
                reports.forEach(report => {
                    // save with report id, so that we can update the report later
                    // when edited by the user
                    reformatedReports[report._id] = {report: report, isSubmitted: true}
                });
                dispatch({type: 'ADD_USER_REPORTS', reports: reformatedReports})
            } else {
                console.log("Failed to get user reports", response.status);
            }
        } catch (err) {
            console.log("error while retrieving user reports: ", err);
        }
    }


    thunk.interceptInOffline = true;
    thunk.meta = {
        retry: true,
        name: `getReportsUser`,
        args: [userId, authAxios, id],
    };
    return thunk;
}


/**
 * saves new user changes to the backend and updates the user object in the store
 * @param {*} report 
 * @param {*} authAxios 
 * @param {*} id 
 * @returns 
 */
export const saveEditReport = (report, authAxios, id) => {
    async function thunk(dispatch){
        // submit the report to the server
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
                dispatch({type: 'ADD_REPORT', report: report, id: id, isSubmitted: true})
            }  else {
                dispatch({type: 'ADD_REPORT', report: report, id: id, isSubmitted: false})
                console.log("report not succesfully edited: ", response);
            }
        } catch (err) {
            dispatch({type: 'ADD_REPORT', report: report, id: id, isSubmitted: false})
            console.log("error while edit report: ", err);
        }
    }

    thunk.interceptInOffline = true;

    thunk.meta = {
        retry: true,
        name: `saveEditReport`,
        args: [report, authAxios, id],
    };    
    return thunk;
}