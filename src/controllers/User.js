import User from "../models/User.js";

class UserController{

    static async cadastrarUser(req, res) {
        try{
            const user = req.body;
            await User.create(user);
            res.status(201).json({
                message: "Cadastrado com sucesso!"
            });
        } catch(erro) {
            const mensagemErro = Object.values(erro.errors).map((erro) => erro.message);
            console.log(mensagemErro);
            res.status(400).json({ message: mensagemErro });
        }
    }

    static async autenticarUser(req, res) {
        try{
            const user = req.body.email;
            const senhaUser = req.body.senha;
            const procuraUser = await User.findOne({email: user});

            if(procuraUser) {
                if(procuraUser.senha === senhaUser) {
                    const id = procuraUser.id;
                    await User.findByIdAndUpdate(id, { acess: true });
                    res.status(200).json({
                        auth: true,
                        message: "Logado com sucesso!"
                    });
                } else{
                    res.status(401).json({
                        auth: false,
                        message: "Senha incorreta"
                    });
                }
            } else{
                res.status(400).json({
                    auth: false,
                    message: "Email não cadastrado"
                });
            }

        } catch(erro) {
            res.status(500).send(erro);
        }
    };
};

export default UserController;
