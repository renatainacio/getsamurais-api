import db from '../database/database.connection.js';

async function checkIfUserAlreadyRegistered(email, cpf) {
  const user = await db.query(
    `
    SELECT * 
    FROM users 
    WHERE email=$1 OR cpf=$2;
    `,
    [email, cpf],
  );
  return user;
}

async function getUserByEmail(email) {
  const user = await db.query(
    `
        SELECT * 
        FROM users 
        WHERE email=$1;
        `,
    [email],
  );
  return user;
}

async function createUser(user) {
  const result = await db.query(
    `
        INSERT INTO users ( "fullName", gender, username, email, cpf, phone, city, state, password, image )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
    `,
    [
      user.fullName,
      user.gender,
      user.username,
      user.email,
      user.cpf,
      user.phone,
      user.city,
      user.state,
      user.password,
      user.image,
    ],
  );
  return result;
}

export const usersRepository = {
  checkIfUserAlreadyRegistered,
  getUserByEmail,
  createUser,
};
