const enviarEmail = (pessoaAprovada) => {
  const parte1 = `${pessoaAprovada.email}: Parabéns ${pessoaAprovada.nome}`;
  const mensagem = `${parte1} sua nota foi ${pessoaAprovada.nota}`;
  console.log(mensagem);
}

const listaDePessoasAprovadas = [
  {nome: 'Jerry Mors', email: 'jerry@example.com', nota: 51},
  {nome: 'Rabbit Jesssica', email: 'jessica@example.com', nota: 101},
  {nome: 'Ada Lovalace', email: 'ada.lovelace@example.com', nota: 150},
  {nome: 'Bruno Gomes', email: 'bruno@example.com', nota: 0},
  {nome: 'Augustina Vega', email: 'augustina@example.com', nota: 101},
  {nome: 'Daniel Soto', email: 'daniel@example.com', nota: 50},
  {nome: 'Emiliano Domingues', email: 'emiliano@example.com', nota: 150},
  {nome: 'Carla Netas', email: 'carla@example.com', nota: 100},
];

const pessoasFiltradas = listaDePessoasAprovadas.filter((pessoa) => pessoa.nota >= 100);

// console.log(pessoasFiltradas);

pessoasFiltradas.forEach((pessoa) => enviarEmail(pessoa));