import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      // criando um novo objeto e retornando em json
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json(e.errors.map((err) => err.message));
    }
  }
}

export default new UserController();
