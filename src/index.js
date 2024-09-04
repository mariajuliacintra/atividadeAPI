const express = require("express"); //importando o módolo express

//Define uma classe para organizar a lógica da aplicação
class AppController {
  constructor() {
    //Cria uma nova instância
    //criar a instância do Express dentro da classe
    this.express = express();
    //Chama o método middlewares para configurar os middlewares
    this.middlewares();
    //Chama o método routes para definir as rotas da Api
    this.routes();
  }
  middlewares() {
    //Permitir que a aplicação receba dados em formato JSON nas requisições(solicitação)
    this.express.use(express.json());
  }
  //Define as rotas da nossa Api
  routes() {
    const apiRoutes = require("./routes/apiRoutes");
    this.express.use("/project-senai/api/v1", apiRoutes);

    this.express.get("/health/", (req, res) => {
      res.send({ Status: "OK" });
    }); //Essa rota é usada para verificar se a Api está OK
  }
}

//Exportândo a instância de express configurada, para que seja acessada em outros arquivos
module.exports = new AppController().express;
