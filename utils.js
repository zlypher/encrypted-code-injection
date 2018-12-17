const crypto = require("crypto");

function prepareExport(src) {
    var Module = module.constructor;
    var m = new Module();
    // m.paths = module.paths;
    m._compile(src, "");
    return m.exports;
}

/**
 * Encrypts the payload with the given password, using the given algorithm.
 * @param {string} payload The data to encrypt.
 * @param {string} algorithm The algorithm to use.
 * @param {string} password The password to encrypt the data with.
 */
function encrypt(payload, algorithm, password) {
    const cipher = crypto.createCipher(algorithm, password);
    let encrypted = cipher.update(payload, "utf8", "hex");
    encrypted += cipher.final("hex");

    return encrypted;
}

/**
 * Decrypts the payload with the given password, using the given algorithm.
 * @param {string} payload The data to decrypt.
 * @param {string} algorithm The algorithm to use.
 * @param {string} password The password to decrypt the data with.
 */
function decrypt(payload, algorithm, password) {
    const decipher = crypto.createDecipher(algorithm, password);
    let decrypted = decipher.update(payload, "hex", "utf8");
    decrypted += decipher.final("utf8");

    return decrypted;
}

module.exports = {
    prepareExport,
    encrypt,
    decrypt
};
