import express from 'express'

const app = express()
app.use(express.json())

const alunos = [];

const mediaAluno = (aluno) => {

  let notasAluno = aluno.notas
  let SomaNotasAluno = notasAluno.reduce((acumulador, nota) => {
    return acumulador + nota
  }, 0);
  let media = SomaNotasAluno / notasAluno.length
  let situacao = ''
  
  if (media >= 7 && media <= 10) {
     situacao = 'aprovado'
  }
  if (media >= 0 && media < 7) {
     situacao = 'reprovado'
  }
  return{
    media,
    situacao
  }
}

app.get('/alunos', (req, res) => {
  const status = req.query.status
  if (alunos.length < 1) {
    return res.status(400).json({
      mensagem: `Nenhum Aluno Cadastrado!`
    })
  }
  if (status) {
    if (status !== 'ativo' && status !== 'inativo') {
      return res.status(400).json({
        mensagem: `O status deve ser 'ativo' ou 'inativo'.`
      })
    }
    const alunosStatus = alunos.filter(aluno => aluno.status === status)
    return res.status(200).json(alunosStatus)
  }
  res.status(200).json(alunos)
})

// GET TODOS ALUNOS -----------------------------
app.get('/alunos/notas', (req, res) => {
  if (alunos.length < 1) {
    return res.status(400).json({
      mensagem: `Nenhum Aluno Cadastrado!`
    })
  }
  const alunosVerificados = alunos.filter(aluno => aluno.status === 'ativo' && aluno.notas !== null)
  const aprensentaAlunos = alunosVerificados.map((aluno) => {
    let {media, situacao} = mediaAluno(aluno)
    return {
      nome:aluno.nome,
      matricula:aluno.matricula,
      notas:aluno.notas,
      media,
      situacao
    }
  })

  return res.status(200).json({
    body: aprensentaAlunos
  })
})
// CRIAR CADASTRO -----------------------------
app.post('/alunos', (req, res) => {
  const { nome, matricula, status } = req.body
  if (!matricula) {
    return res.status(400).json({
      mensagem: `O campo 'matricula' é obrigatório.`,
    });
  }
  if (!nome) {
    return res.status(400).json({
      mensagem: `O campo 'nome' é obrigatório.`,
    });
  }
  if (!status) {
    return res.status(400).json({
      mensagem: `O campo 'status' é obrigatório.`,
    });
  }

  if (status !== 'ativo' && status !== 'inativo') {
    return res.status(400).json({
      mensagem: `O campo 'status' deve ser 'ativo' ou 'inativo'.`,
    });
  }
  if (nome.length < 3) {
    return res.status(400).json({
      mensagem: `O nome deve conter pelo menos 3 caracteres.`,
    });
  }
  if (alunos.length > 0) {

    const verificaMatricula = alunos.filter((aluno) => aluno.matricula === matricula)
    if (verificaMatricula.length > 0) {
      return res.status(409).json({
        mensagem: 'Matrícula já cadastrada',
        matricula: matricula
      });
    }
  }
  let dataCriacao = new Date()
  let dataAlteracao = new Date()
  alunos.push({
    nome,
    matricula,
    status,
    dataCriacao,
    dataAlteracao
  })
  res.status(201).json({
    mensagem: 'Aluno cadastrado com sucesso.',
    body: { nome, matricula, status }
  })
})
// INSERIR NOTAS -----------------------------------------------
app.post('/alunos/:matricula/notas', (req, res) => {
  const { notas } = req.body
  const { matricula } = req.params

  if (!notas) {
    return res.status(400).json({
      mensagem: `O campo 'notas' é obrigatório e deve ser um array de 4 números.`
    })
  }
  if (notas.length != 4) {
    return res.status(400).json({
      mensagem: `Devem ser fornecidas exatamente 4 notas.`
    })
  }
  const alunoIndex = alunos.findIndex(aluno => aluno.matricula === matricula)
  if (alunos[alunoIndex].status === 'inativo') {
    return res.status(403).json({
      mensagem: `Não é possível cadastrar notas para alunos inativos.`
    })
  }
  if (alunoIndex === -1) {
    return res.status(404).json({
      mensagem: `Aluno não encontrado.`
    })
  }
  notas.forEach(nota => {
    if (nota < 0 || nota > 10) {
      return res.status(400).json({
        mensagem: "As notas devem estar entre 0 e 10."
      })
    }
  })
  alunos[alunoIndex].notas = notas
  alunos[alunoIndex].dataAlteracao = new Date()


  return res.status(200).json({
    mensagem: `Notas Inseridas corretamente ${notas}`,
    body: {
      matricula,
      notas
    }
  })

})
//DELETE ---------------------------------------------------
app.delete('/alunos/:matricula', (req, res) => {
  const matricula = req.params.matricula
  const index = alunos.findIndex(aluno => aluno.matricula === matricula)
  if (index == -1) {
    return res.status(404).json({
      mensagem: `Aluno não encontrado.`
    })
  }
  alunos[index].status = 'inativo'

  res.status(200).json({
    mensagem: `Aluno removido com sucesso.`
  })
})

app.listen(3000, 'localhost', () => {
  console.log("Servidor rodando em http://localhost:3000");
});
