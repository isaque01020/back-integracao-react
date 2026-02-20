import express from "express";
import conexao from "./config/dbConnect.js";
import Router from "./routes/index.js";
import cors from "cors";

conexao.on("error", (erro) => {
    console.log(erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();
app.use(cors());
Router(app);

export default app;
