import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';
import { getPersonDb } from './layers/db/entityPerson';

const secret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

export const authMiddleware = expressjwt({
  algorithms: ['HS256'],
  credentialsRequired: false,
  secret,
});

export async function handleLogin(request: any, response: any) {
  console.log('***** starting handleLogin ***** ');
  const idPerson = 1;
  const email = 'danilodejesusgomes@gmail.com';
  const password = '123456';
  //const { email, password } = request.body;
  const user = await getPersonDb(idPerson);
  if (!user || user.password !== password) {
    request.sendStatus(401);
  } else {
    const claims = { sub: user.id, email: user.email };
    const token = jwt.sign(claims, secret);
    request.json({ token });
  }
}
