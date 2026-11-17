
const http = require('http');
const os = require('os');

const PORT = 3000;

// Creamos el servidor HTTP.
const server = http.createServer((req, res) => {

    // Ruta principal: mensaje de bienvenida.
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8'
        });

        res.end('Bienvenida a la API de Andrea - Distribuciones Mediterráneo S.L.');
    }

    // Ruta de estado: devuelve información del servidor en JSON.
    else if (req.url === '/estado') {

        const estado = {
            servicio: 'API Node.js de Andrea',
            hostname: os.hostname(),
            uptime_segundos: process.uptime(),
            fecha: new Date().toISOString()
        };

        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });

        res.end(JSON.stringify(estado, null, 2));
    }

    // Ruta no encontrada.
    else {
        res.writeHead(404, {
            'Content-Type': 'text/plain; charset=utf-8'
        });

        res.end('Error 404: ruta no encontrada');
    }
});

// Iniciamos el servidor en todas las interfaces de red.
server.listen(PORT, '0.0.0.0', () => {
    console.log(`API Node.js escuchando en el puerto ${PORT}`);
});
