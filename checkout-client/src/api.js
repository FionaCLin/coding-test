import axios from "axios";

export async function getApi() {
  let api = await axios.get(
    "https://us-central1-fir-checkout-challenge.cloudfunctions.net/app/api"
  );
  return api.data;
}

export async function admin_only(user) {
  let token = await user.getIdToken()
  return axios.get(
    "http://us-central1-fir-checkout-challenge.cloudfunctions.net/app/api/admin_only",
    { headers: { Authorization: `Bearer ${token}` } }
  );
}

export function addAdmin(email) {
  return axios.post(
    "https://us-central1-fir-checkout-challenge.cloudfunctions.net/app/api/admin_only",
    {
      email: email
    }
  );
}
