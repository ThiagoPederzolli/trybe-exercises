// const express = require('express');
// const app = express();
// const router = express.Router();
// // const morgan = require('morgan'); pacote similar a função criada para desenvolver o log.
// // app.use(morgan);

// const middleware = (request, response, next) => {
//   // console.log(request.headers);
//   console.log('passei por aqui');
//   next();
// }

// const authMiddleware = (req, res, next) => {
//   const auth = req.headers.authorization;
//   if (auth === '123qwe') {
//     next();
//   } else {
//     res.status(401).send({message: 'Token inválido'});
//   }
// }

// const logRequestMiddleware = (req, res, next) => {
//   console.log(`${req.method} ${req.path}`)
//   next();
// }

// const errorHandler = (err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Algo deu errado :(')
// }

// // app.use(express.json()) quando feito um POST, ele já faz o parse desses dados

// // app.use(authMiddleware);
// router.use(authMiddleware)
// app.use(logRequestMiddleware);

// // app.get('/hello',middleware, (req, res) => {
// //   res.send('Hello World, again');
// // });

// // http://localhost:3000/secure/hello
// router.get('/hello',middleware, (req, res) => {
//   res.send('Hello World, again');
// });

// app.use('/secure', router)

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.get('/error', (req, res) => {
//   throw new Error('Eu retorno um erro!');
// });

// app.use(errorHandler);

// app.listen(3000, () => {
//   console.log('Ouvindo porta 3000');
// });;
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

function verifyEmail(email) {
  const emailRegex = /^([a-zA-Z0-9_-]+)@mail\.com$/gm;
  return emailRegex.test(email);
}
function verifypassword(password) {
  const passwordRegex = /^\d{4,8}$/gm;
  return passwordRegex.test(password);
}

app.get('/', (req, res) => {
  res.send('Olá mundo!');
});

app.post('/login', (req, res) => {
  const { body } = req;
  const emailIsValid = verifyEmail(body.email);
  const passwordIsValid = verifypassword(body.password);
  if (emailIsValid && passwordIsValid) {
    const token = crypto.randomBytes(6).toString('hex');
    return res.status(200).json({ token });
  } else {
    return res.status(401).json('email or password is incorrect.');
  }
});

app.listen(PORT, () => console.log(`listen to port ${PORT} `));