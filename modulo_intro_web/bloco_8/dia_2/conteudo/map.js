let listaDePessoasAprovadas = [
  'ada.lovelace@example.com',
  'marie.curie@example.com',
  'margaret.hamilton@example.com',
  'alan.turing@example.com'
];

const enviarEmail = (objetoEmail) => {
  console.log(`Email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso!`);
};

let listaDeEmails;

listaDeEmails = listaDePessoasAprovadas.map((email) => {
  return {email, nota: 10}
})

// console.log(listaDeEmails);

listaDeEmails.forEach((objetoEmail) => enviarEmail(objetoEmail));
