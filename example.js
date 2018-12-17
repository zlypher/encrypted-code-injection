const { prepareExport, decrypt } = require("./utils");

const password = "Hello World";
const algorithm = "aes-192-cbc";

// const payload = "module.exports = () => { console.log('Hello World'); }";
// const encryptedPayload = encrypt(payload, algorithm, password);

const encryptedPayload = "558859bc57e72c6b80669fcb76f217d0b12a6881cbfe991c5e5538a25f7e9910594a0c1e6b39f04151b1ff222b0afa1395a7df09f6b176d3fe88de49fb5d0c6a";
const decrypted = decrypt(encryptedPayload, algorithm, password);

module.exports = prepareExport(decrypted);
