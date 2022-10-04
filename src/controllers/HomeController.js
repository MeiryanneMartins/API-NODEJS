import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    // criando um novo objeto e retornando em json
    const novoAluno = await Aluno.create({
      nome: 'Meiryanne',
      sobrenome: 'Martins',
      email: 'mey@gmail.com',
      idade: 29,
      peso: 50,
      altura: 1.62,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
