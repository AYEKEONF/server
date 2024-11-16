// Importar el módulo HTTP
const http = require('http');

// Configurar el puerto desde la variable de entorno o usar un puerto por defecto
const PORT = process.env.PORT || 3000;

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Servidor en Node.js ejecutándose correctamente.\n');
});

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
