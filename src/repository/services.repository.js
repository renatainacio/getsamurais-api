import db from '../database/database.connection.js';

async function getServicesByUserId(userId) {
  const services = await db.query(
    `
        SELECT * 
        FROM services 
        WHERE "userId"=$1;
        `,
    [userId],
  );
  return services;
}

async function queryServices() {
  const services = await db.query(`
        SELECT services.*, users.username, users.email, users.phone, users.city, users.state 
        FROM services
        JOIN users
        ON services."userId"=users.id
        WHERE services.status=true;
        `);
  return services;
}

async function queryServicesWithParams(description) {
  const services = await db.query(
    `
        SELECT services.*, users.username, users.email, users.phone, users.city, users.state 
        FROM services
        JOIN users
        ON services."userId"=users.id
        WHERE services.status=true
        AND services.description ILIKE $1;
        `,
    [`%${description}%`],
  );
  return services;
}

async function selectCategories() {
  const categories = await db.query(`
        SELECT * FROM categories;
    `);
  return categories;
}

async function getServiceById(id) {
  const service = await db.query(
    `
        SELECT *
        FROM services
        WHERE id=$1;
    `,
    [id],
  );
  return service;
}

async function postService(service) {
  const resp = await db.query(
    `
        INSERT INTO services ("userId", "categoryId", photo, description, price, "priceUnit", status)
        VALUES ($1, $2, $3, $4, $5, $6, $7);
        `,
    [service.userId, service.categoryId, service.photo, service.description, service.price, service.priceUnit, true],
  );
  return resp;
}

async function updateService(id, service) {
  const resp = await db.query(
    `
        UPDATE services
        SET "userId"=$1, "categoryId"=$2, photo=$3, description=$4, price=$5, "priceUnit"=$6, status=$7
        WHERE id=$8;
    `,
    [
      service.userId,
      service.categoryId,
      service.photo,
      service.description,
      service.price,
      service.priceUnit,
      service.status,
      id,
    ],
  );
  return resp;
}

async function deleteService(id) {
  const resp = await db.query(
    `
        DELETE FROM services
        WHERE id=$1;
    `,
    [id],
  );
  return resp;
}

export const servicesRepository = {
  getServicesByUserId,
  queryServices,
  queryServicesWithParams,
  selectCategories,
  getServiceById,
  postService,
  updateService,
  deleteService,
};
