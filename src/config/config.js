console.log(process.env.url);

module.exports = {
  PUBLICKEY: process.env.PUBLICKEY,
  SECRETKEY: process.env.SECRETKEY,
  scopes: process.env.scopes,
  url: process.env.url,
};
