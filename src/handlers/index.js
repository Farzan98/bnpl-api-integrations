const axios = require("axios");

module.exports.createAccessTokenHandler = async (req, res) => {
  try {
    const body = req.body;
    // return res.send(body);
    await axios
      .post(
        " https://e710-72-255-1-2.in.ngrok.io/api/merchant/create-access-token",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((result) => {
        return res.send(result.data);
      })
      .catch((err) => {
        return res.send(err.response.data);
      });
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports.directPayHandler = async (req, res) => {
  try {
    const requestBody = req.body;
    const token = req.headers.authorization.split(" ")[1];
    await axios
      .post(
        "https://e710-72-255-1-2.in.ngrok.io/api/customer/instalment/direct-pay",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(`Sucess ---- `, result);
        return res.send(result.data);
      })
      .catch((err) => {
        console.log(`err ---- `, err);
        return res.send(err.response.data);
      });
  } catch (error) {}
};
