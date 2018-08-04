# Arduino-J5
Arduino com Johnny-Five com Node.js + Express

Este é um pequeno projeto de exemplo que demonstra como usar o [johnny-five](http://johnny-five.io/) 
(uma biblioteca [Node](https://nodejs.org/en/) que permite você programar em muitas
plataformas - incluindo o [Arduino](https://www.arduino.cc/) e [Tessel](https://tessel.io/) - _via_ JavaScript) 
em conjunto com [express](http://expressjs.com/) (outra biblioteca do Node que permite escrever um servidor web simples com JavaScript) para usar o Arduino como um servidor web.

Para executar este projeto, precisamos fazer duas coisas:

1. Ensine ao Arduino como receber comunicações do nosso computador pela biblioteca `johnny-five`.
2. E instale as bibliotecas necessárias e execute o código para este projeto de exemplo.

---

Para fazer (1):

1. Baixe e instale o [Arduino IDE](https://www.arduino.cc/en/Main/Software) 
2. Abra o Arduino IDE e abra o exemplo do `StandardFermata` indo em `Arquivo> Exemplos> Fermata> StandardFermata`
3. Faça o upload do exemplo `StandardFermata` selecionando `Sketch> Upload`
   
---

Para fazer (2):

1. Clonar este repositório _via_ [GitHub](https://github.com/rbarros/Arduino-J5.git) ou a partir da linha de comando 
   (`git clone https://github.com/rbarros/Arduino-J5.git`).
2. Abra o repositório clonado no seu terminal.
3. Dentro do repositório, execute `npm install` no seu terminal. Isso usa [`npm`](https://www.npmjs.com/) - 
   gerenciador de pacotes - para instalar as bibliotecas necessárias para este projeto (`express` e `johnny-five`) 
   olhando dentro do arquivo package.json.
4. Conecte seu Arduino ao seu computador _via_ USB.
5. No seu terminal (que ainda deve estar dentro do repositório clonado), execute `node server.js`
6. Você deve ver o `Servidor em http://localhost:3000!`; quando você fizer isso, vá para 
   [http://localhost:3000](http://localhost:3000) e você verá "Hello from` server.js`!"
7. Agora você pode explorar as outras rotas e comportamentos detalhados em [`server.js`](https://github.com/rbarros/Arduino-J5/blob/master/server.js)

