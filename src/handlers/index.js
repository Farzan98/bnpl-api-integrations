const axios = require("axios");
const Config = require("../config/config");
const Models = require("../database/models");

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
    const requestBody = req.body;
    const availableScopes = Config.scopes.split(",");

    const accessTokenBody = {
      PUBLICKEY: Config.PUBLICKEY,
      SECRETKEY: Config.SECRETKEY,
      scopes: [availableScopes[0], availableScopes[1], availableScopes[2]],
    };

    const findOrder = await Models.Order.findOne({
      where: {
        merchantOrderId: requestBody.merchantOrderId,
      },
    });

    if (findOrder) {
      return res.send({
        error: true,
        code: 400,
        message: "Order with this order Id is already created.",
      });
    }

    await axios
      .post(`${Config.url}/merchant/v1/create-access-token`, accessTokenBody, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async (result) => {
        if (result) {
          const token = result.data.data;

          const order = await Models.Order.create({
            ...requestBody,
            paymentStatus: "pending",
          });
          if (!order) {
            return res.send({
              error: true,
              code: 400,
              message: "Order creation failed.",
            });
          }

          await axios
            .post(`${Config.url}/customer/instalment/direct-pay`, requestBody, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            })
            .then((result) => {
              console.log(`Success ---- `, result.data);
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
