export const addReport = (report, id) => {
    function thunk(dispatch){


        // submit the report to the server
        // todo: better way to pass in url
        fetch('http://10.74.1.110:3000/form/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(report),
        })
        .then(response => response.json())
        .then(data => {
            console.log("report submitted successfully: ", data);
            dispatch({type: 'ADD_REPORT', report: report, id: id})
        })
        .catch(err => {
            console.log("error while submitting report: ", err);
        });
    }

    thunk.interceptInOffline = true;
    thunk.meta = {
        retry: true,
        name: 'addReport',
        args: [report, id],
    };    
    return thunk;
};
