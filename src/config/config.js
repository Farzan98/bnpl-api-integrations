console.log(process.env.url);

module.exports = {
  PUBLICKEY: process.env.PUBLICKEY,
  SECRETKEY: process.env.SECRETKEY,
  scopes: process.env.scopes,
  url: process.env.url,

  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
};
