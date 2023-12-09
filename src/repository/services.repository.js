import db from '../database/database.connection.js';

function getServicesByUserId(userId) {
  const services = db.query(
    `
        SELECT * 
        FROM services 
        WHERE "userId"=$1;
        `,
    [userId],
  );
  return services;
}

function queryServices() {
  const services = db.query(`
        SELECT services.*, users.username, users.email, users.phone, users.city, users.state 
        FROM services
        JOIN users
        ON services."userId"=users.id
        WHERE services.status=true;
        `);
  return services;
}

function queryServicesWithParams(description) {
  const services = db.query(
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

function selectCategories() {
  const categories = db.query(`
        SELECT * FROM categories;
    `);
  return categories;
}

function getServiceById(id) {
  const service = db.query(
    `
        SELECT *
        FROM services
        WHERE id=$1;
    `,
    [id],
  );
  return service;
}

function postService(service) {
  const resp = db.query(
    `
        INSERT INTO services ("userId", "categoryId", photo, description, price, "priceUnit", status)
        VALUES ($1, $2, $3, $4, $5, $6, $7);
        `,
    [service.userId, service.categoryId, service.photo, service.description, service.price, service.priceUnit, true],
  );
  return resp;
}

function updateService(id, service) {
  const resp = db.query(
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

function deleteService(id) {
  const resp = db.query(
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
