import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";
import { isValidPhoneNumber } from "libphonenumber-js";
import { cpf } from "cpf-cnpj-validator";

const UserSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    email: { 
        type: String, 
        required: [true, "E-mail obrigatório"],
        validate: {
            validator: (valor) => isEmail(valor),
            message: "E-mail inválido"
        }
    },
    senha: {
        type: String,
        required: [true, "Senha é obrigatória"],
        validate: {
            validator: (valor) => {
                if(/[@!#$%&*]/.test(valor) && /[123456789]/.test(valor) && valor.length > 8 && /[A-Z]/.test(valor)) {
                    return true;
                } else{
                    return false;
                }
            },
            message: "Formato da senha incorreto"
        }
    },
    nome: {
        type: String,
        required: [true, "Nome obrigatório"]
    },
    telefone: {
        type: String,
        required: [true, "Telefone obrigatório"],
        validate: {
            validator: (value) => isValidPhoneNumber(value, "BR"),
            message: "Formato do número inválido"
        }
    },
    cpf: {
        type: String,
        required: [true, "CPF obrigatório"],
        set: (value) => cpf.format(value),
        validate: {
            validator: (value) => cpf.isValid(value),
            message: "CPF inválido" 
        }
    }
}, { versionKey: false });

const User = mongoose.model("Users", UserSchema);

export default User;
