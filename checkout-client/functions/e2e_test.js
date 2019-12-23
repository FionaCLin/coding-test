/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
const functions = require("firebase-functions");
const request = require("request");
let token = "";

exports.e2e_test = {
  "get api version": test => {
    request.get(
      {
        headers: { "content-type": "application/json" },
        url:
          "https://us-central1-fir-checkout-challenge.cloudfunctions.net/app/api"
      },
      (err, res, body) => {
        test.ok(!err);
        test.equal(res.statusCode, 200);
        test.equal(body, "v1.0");
        test.done();
      }
    );
  },
  "deny get admin_only with 400": test => {
    let bad_token = 'XXXXXXX'
    request.get(
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${bad_token}`
        },
        url:
          "https://us-central1-fir-checkout-challenge.cloudfunctions.net/app/api/admin_only"
      },
      (err, res, body) => {
        test.ok(!err)
        test.equal(res.statusCode, 400);
        test.done();
      }
    );
  }
};
