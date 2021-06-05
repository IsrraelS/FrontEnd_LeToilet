
const urlLocal = `http://localhost:3000`;

const mapAcces = {

    

    registerMarkers : async (lat, lng, id) => {
        try {
            let response = await fetch(`${urlLocal}/markers`, 
            { method: 'POST', 
            body: JSON.stringify({ 
                lat: lat,
                lng: lng}),
                headers:{'Content-Type': 'application/json'}
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log('Ha habido un problema' + error);
        }
    },

    checkMarkers : async () => {
        try {
            let response = await fetch(`${urlLocal}/markers/`, 
            { method: 'GET' });
            response = await response.json();
            return response;
        } catch (error) {
            console.log('Ha habido un problema' + error);
        }
    },

}

export default mapAcces
