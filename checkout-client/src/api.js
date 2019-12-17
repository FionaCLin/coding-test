import axios from "axios";

export async function getApi() {
  
  // 'http://localhost:5001/fir-checkout-challenge/us-central1/app/api'
  let api = await axios.get(
    'https://us-central1-fir-checkout-challenge.cloudfunctions.net/app/api'
  );
  console.log(api.data)
  return  api.data
}


