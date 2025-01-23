import CryptoJS from "crypto-js";

const HASHKEY = "B@j@j@123%&~";

class AesEncryptionService {
  // Encrypt a value
  encrypt(valueToEncrypt) {
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(valueToEncrypt),
      HASHKEY
    ).toString();
    return ciphertext;
  }

  // Decrypt a value
  decrypt(valueToDecrypt) {
    const bytes = CryptoJS.AES.decrypt(valueToDecrypt, HASHKEY);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }
}

// Export an instance of the class to use throughout the app
export default new AesEncryptionService();
