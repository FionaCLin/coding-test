import axios from "axios";

export async function getApi() {
  
  let api = await axios.get(
    'https://us-central1-fir-checkout-challenge.cloudfunctions.net/app/api'
  );
  console.log(api.data)
  return  api.data
}


