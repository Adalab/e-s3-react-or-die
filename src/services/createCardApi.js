const urlCardCreator = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
const fetchCardCreator = (myCard)=> fetch(urlCardCreator, {
    method: 'POST',
    body: JSON.stringify(myCard),
    headers:{
        'content-type': 'application/json'
    }
})
.then(response=> response.json());

export {fetchCardCreator};