const { GenerateJWT, DecodeJWT, ValidateJWT } = require("./JWT");

// Définition des données du JWT
const header = { alg: "HS512", typ: "JWT" };
const claims = { Username: "ahmed", Age: 27, Fullname: "ahmed Hassan" };
const key = "$AhmedIsAwesome!";

// Génération du JWT
const sJWT = GenerateJWT(header, claims, key);
console.log("JWT généré :", sJWT);

// Vérification du JWT
const isValid = ValidateJWT(sJWT, key);
console.log("Le JWT généré est valide :", isValid);

// Décodage du JWT
const decodedData = DecodeJWT(sJWT);
console.log("Données décodées :", decodedData);
