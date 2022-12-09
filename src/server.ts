import { app } from './app';

app.listen(process.env.PORT_SERVER, () => {
  console.log(`servidor rodando na port ${process.env.PORT_SERVER}`);
});
