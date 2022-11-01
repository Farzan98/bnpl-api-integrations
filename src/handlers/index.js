const axios = require("axios");
const Config = require("../config/config");

module.exports.createAccessTokenHandler = async (req, res) => {
  try {
    const body = req.body;

    await axios
      .post(`${Config.url}/merchant/v1/create-access-token`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
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
    // return res.send("ok");
    const requestBody = req.body;
    const scopes = ["user:read", "webhook:endpoints", "payment:create"];
    // const scopes = Config.scopes.split(",");
    // return res.send(scopes);

    const accessTokenBody = {
      PUBLICKEY: Config.PUBLICKEY,
      SECRETKEY: Config.SECRETKEY,
      scopes: scopes,
    };

    await axios
      .post(`${Config.url}/merchant/v1/create-access-token`, accessTokenBody, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async (result) => {
        if (result) {
          const token = result.data.data;

          await axios
            .post(`${Config.url}/customer/instalment/direct-pay`, requestBody, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            })
            .then((result) => {
              console.log(`Sucess ---- `, result.data);
              return res.send(result.data);
            })
            .catch((err) => {
              console.log(`err ---- `, err);
              return res.send(err.response.data);
            });
        } else {
          return res.send({
            error: false,
            code: 200,
            message: "Token is required!",
          });
        }
      })
      .catch((err) => {
        return res.send(err.response.data);
      });
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports.createOrderHandler = async (req, res) => {
  try {
    const requestBody = req.body;
    const token = req.headers.authorization.split(" ")[1];
    await axios
      .post(`${Config.url}/merchant/v1/create-order`, requestBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(`Sucess ---- `, result);
        return res.send(result.data);
      })
      .catch((err) => {
        console.log(`err ---- `, err);
        return res.send(err.response.data);
      });
  } catch (error) {
    return res.send(error.message);
  }
};
