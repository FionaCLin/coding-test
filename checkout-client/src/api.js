import axios from "axios";

export async function getApi() {
  
  let api = await axios.get(
    "https://us-central1-fir-checkout-challenge.cloudfunctions.net/app/api"
  );
  console.log(api.data);
  return api.data;
}

export async function admin_only(email) {
  let res = await axios.post(
    "https://us-central1-fir-checkout-challenge.cloudfunctions.net/app/api/admin_only",
    email
  );
  
  console.log(res.data, '@@@');
  return res.data;
}
