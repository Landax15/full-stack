const jsrsasign = require("jsrsasign");

const ValidateJWT = (token, key, algorithm = "HS512") => {
    try {
        if (!token) throw new Error("Token manquant.");
        return jsrsasign.KJUR.jws.JWS.verifyJWT(token, key, { alg: [algorithm] });
    } catch (error) {
        console.error("Erreur lors de la validation du JWT :", error);
        return false;
    }
};

module.exports = ValidateJWT;