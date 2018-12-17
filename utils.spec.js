const { prepareExport, encrypt, decrypt } = require("./utils");

describe("Utility Functions", () => {
    it("'encrypt' function is exported", () => {
        expect(encrypt).toBeInstanceOf(Function);
    });

    it("can encrypt a text string", () => {
        const algorithm = "aes-192-cbc";
        const password = "FooBar";
        const payload = "Payload";
        const expected = "26da39520345651309d31e0a5c050698";

        const actual = encrypt(payload, algorithm, password);

        expect(actual).toBe(expected);
    });

    it("'decrypt' function is exported", () => {
        expect(decrypt).toBeInstanceOf(Function);
    });

    it("can decrypt a text string", () => {
        const algorithm = "aes-192-cbc";
        const password = "FooBar";
        const payload = "26da39520345651309d31e0a5c050698";
        const expected = "Payload";

        const actual = decrypt(payload, algorithm, password);

        expect(actual).toBe(expected);
    });

    it("'prepareExport' function is exported", () => {
        expect(prepareExport).toBeInstanceOf(Function);
    });

    // m._compile is not available via Jest
    // xit("can prepare arbitrary JS code", () => {
    //     const src = "module.exports = () => { return 123; }";
    //     const actual = prepareExport(src);

    //     expect(actual).toBeInstanceOf(Function);

    //     const result = actual();
    //     expect(result).toBe(123);
    // });
});
