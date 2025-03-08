const express = require("express");
const { GenerateJWT, DecodeJWT, ValidateJWT } = require("./JWT");

const app = express();
app.use(express.json());

const key = "$AhmedIsAwesome!"; // Clé secrète pour signer les tokens

// Route pour générer un JWT
app.post("/GenerateJWT", (req, res) => {
    const { Username, Age, Fullname } = req.body;
    
    if (!Username || !Age || !Fullname) {
        return res.status(400).json({ error: "Tous les champs sont requis" });
    }

    const header = { alg: "HS512", typ: "JWT" };
    const claims = { Username, Age, Fullname };

    const token = GenerateJWT(header, claims, key);
    res.json({ token });
});

// Route pour valider un JWT
app.post("/ValidateJWT", (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: "Token requis" });
    }

    const isValid = ValidateJWT(token, key);
    res.json({ isValid });
});

// Route pour décoder un JWT
app.post("/DecodeJWT", (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: "Token requis" });
    }

    const decoded = DecodeJWT(token);
    res.json({ decoded });
});
app.get("/", (req, res) => {res.send("Hello API!!");});

// Démarrer le serveur sur le port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(Serveur démarré sur http://localhost:${PORT});
});