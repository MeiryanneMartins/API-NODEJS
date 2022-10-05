import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  // eslint-disable-next-line consistent-return
  async create(req, res) {
    const { email = '', password = '' } = req.body;

    // Verificando se email ou senha estão na base de dados
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    // Lembrando que aqui está sendo feito direto da base de dados
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    // verificação vindo lá do model de User para saber se a senha é válida
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    res.json({ token });
  }
}

export default new TokenController();
