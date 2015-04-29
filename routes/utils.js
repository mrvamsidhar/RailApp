var CryptoJS = require("crypto-js");
module.exports = {
    getHmacKey: function() {
        var message = "12004" + "json" + "966a11c3ac4ba62f1f8ae127be82ddb0";
        var hmacKey = CryptoJS.HmacSHA1(message, "eeb77e818889b1bd7485d8806ca53813");
        console.log(hmacKey);
        return hmacKey;
    },

    concatenateNames: function (name, surname) {
        var wholeName = name + " " + surname;
    
        return wholeName;
    }
};