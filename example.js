const crypto = require("crypto");
const password = "Hello World";
const algorithm = "aes-192-cbc";
const payload = "module.exports = () => { console.log('blub'); }";

// https://lollyrock.com/posts/nodejs-encryption/
// https://medium.com/@cnorthwood/todays-javascript-trash-fire-and-pile-on-f3efcf8ac8c7
// https://github.com/dominictarr/event-stream/issues/116
// https://github.com/dominictarr/event-stream/issues/116#issuecomment-441744514
// https://github.com/nodejs/node/blob/1e23e3ceb3217f2b0e076864fdbbe874a8603e2f/lib/internal/modules/cjs/loader.js
// https://github.com/floatdrop/require-from-string/blob/master/index.js
// https://github.com/nodejs/node-v0.x-archive/blob/master/lib/module.js
// https://stackoverflow.com/questions/17581830/load-node-js-module-from-string-in-memory

const encrypted = encrypt(payload, algorithm, password);
const decrypted = decrypt(encrypted, algorithm, password);

console.log(encrypted);
console.log("---");
console.log(decrypted);

module.exports = prepareExport(decrypted);

function prepareExport(src) {
    var Module = module.constructor;
    var m = new Module();
    // m.paths = module.paths;
    m._compile(src, "");
    return m.exports;
}

function encrypt(payload, algorithm, password) {
    const cipher = crypto.createCipher(algorithm, password);
    let encrypted = cipher.update(payload, "utf8", "hex");
    encrypted += cipher.final("hex");

    return encrypted;
}

function decrypt(payload, algorithm, password) {
    const decipher = crypto.createDecipher(algorithm, password);
    let decrypted = decipher.update(payload, "hex", "utf8");
    decrypted += decipher.final("utf8");

    return decrypted;
}