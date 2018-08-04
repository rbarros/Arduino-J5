var express = require('express'); // Carregue a biblioteca que usaremos para configurar um servidor web básico
var five = require("johnny-five"); // Carregue a biblioteca node que nos permite comunicar com o Arduino pelo JS
var board = new five.Board(); // Conecte-se ao Arduino usando essa biblioteca

board.on("ready", function() { // Quando o computador estiver conectado ao Arduino
    // Salva a referência para o pino LED e pino analógico
    var LEDpin = new five.Pin(13);
    var analogPin = new five.Pin('A0');
    var app = express(); // E inicie esse servidor
    app.get('/', function(req, res) { // o que acontece quando vamos a `/`
        console.log('Oi do `server.js`!');
        res.send("Oi do `server.js`!"); // Devolve um texto de resposta
    });
    app.use("/public", express.static(__dirname + "/public")); // Rota publica para carregar o arquivo arduino.js
    app.get('/dashboard', function(req, res) { // O que acontece quando vamos ao `/dashboard`
        console.log('dashboard.html');
        res.sendFile('dashboard.html', { root: '.' }); // Envie de volta o arquivo `dashboard.html` localizado no diretório atual (`root`)
    });
    app.get('/:pin/state', function(req, res) { // O que acontece quando alguém vai para `/#/state`, onde # é o pino acessado led ou analog
        console.log("Alguém pediu o estado do pin ", req.params.pin + "…");
        var pins = {
            'analog': analogPin,
            'led': LEDpin
        };
        if (pins.hasOwnProperty(req.params.pin)) { // Se o dicionario souber o nome do pino
            pins[req.params.pin].query(function(state) { // Procure o objeto pin associado ao nome do pino e consulte-o
                res.send(state); // enviando de volta o estado do pino
            });
        } else {
            var errorMessage = "Desculpe, você pediu o estado do pin `" + req.params.pin + '`, ' + "mas eu não fui informado sobre esse pin ainda.";
            res.send(errorMessage);
        }
    });
    app.get('/led/off', function(req, res) { // O que acontece quando alguém vai para `/led/off`
        console.log("Alguém me disse para desligar o led ...");
        LEDpin.low(); // Defina o pino referido pela variável 'LEDpin` 'low'(desligado)
        res.send("Agora o LED do pino 13 deve estar desligado."); // E diga ao usuário que ele deve estar desativado na página da Web
    });
    app.get('/led/on', function(req, res) { // O que acontece quando alguém vai para `/led/on`
        console.log("Alguém me disse para ligar o led ...");
        LEDpin.high(); // Defina o pino referido pela variável 'LEDpin` 'high'(ligado)
        res.send("Agora o LED do pino 13 deve estar ligado.") // E diga ao usuário que ele deve estar ligado na página da Web
    });
    app.listen(3000, function() { // Ligue o servidor web na porta 3000
        console.log("Servidor em http://localhost:3000!");
    });
});
