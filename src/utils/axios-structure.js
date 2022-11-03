/** 
 * Basic structure of axios
 */

await axios
  .post(`${Config.url}/merchant/v1/create-access-token`, accessTokenBody, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(async (result) => {
    console.log(`--- success --- `, result);
  })
  .catch((error) => {
    console.log(`--- err --- `, error);
  });
