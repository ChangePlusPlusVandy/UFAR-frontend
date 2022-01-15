
/**
 * When a user adds a report online, it is added to our redux store and marked as submitted 
 * if the fetch was successful. If the user is offline, the report is added to the offline queue
 * and submitted later when there's a network connection. However, the report is still aded to
 * the redux store and marked as not submitted yet. 
 * @param {*} report report object
 * @param {*} id uuid of the report
 * @returns a redux thunk action
 */
export const addReport = (report, id) => {
    async function thunk(dispatch){
        // submit the report to the server
        // todo: better way to pass in url
        try {
            const response = await fetch('http://10.76.170.134:3000/form/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(report),
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
