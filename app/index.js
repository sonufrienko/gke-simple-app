const crypto = require('crypto');
const app = require('express')();
const { PORT = 4000, SALT = '#ha43-1' } = process.env;
const algorithm = 'aes-192-cbc';
const keylen = 24;

const encrypt = ({ message, secret }) => {
  const key = crypto.scryptSync(secret, SALT, keylen);
  const iv = Buffer.alloc(16, 0);
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(message, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
};

const decrypt = ({ message, secret }) => {
  const key = crypto.scryptSync(secret, SALT, keylen);
  const iv = Buffer.alloc(16, 0);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(message, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
};

app.use(({ query: { message, secret }, path }, res, next) => {
  console.log(`${path}: ${message}`);
  next();
})

app.get('/encrypt', ({ query }, res) => {
  res.send(encrypt(query));
});

app.get('/decrypt', ({ query }, res) => {
  res.send(decrypt(query));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});