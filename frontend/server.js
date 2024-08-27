const express = require('express');
const app = express();
const port = 8080;

/**
 * Carga el contenido estático de la carpeta demo
 */
app.use(express.static('demo'));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});