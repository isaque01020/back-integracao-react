import mongoose from "mongoose";

async function conectaNoAtlas() {
    await mongoose.connect(process.env.STRING_CONEXAO_BD);
}
conectaNoAtlas();
const conexao = mongoose.connection;

export default conexao;
