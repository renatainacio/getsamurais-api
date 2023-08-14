import db from "../database/database.connection.js";

export function getServicesByEmail(email){
    const services = db.query(`
        SELECT * 
        FROM services 
        WHERE email=$1;
        `, [email]);
    return services;
};

export function queryServices(){
    const services = db.query(`
        SELECT * 
        FROM services;
        `);
    return services;
}

export function selectCategories(){
    const categories = db.query(`
        SELECT * FROM categories;
    `);
    return categories;
}

export function getServiceById(id){
    const service = db.query(`
        SELECT *
        FROM users
        WHERE id=$1;
    `, [id]);
    return service;
}

export function insertService(service){
    const resp = db.query(`
        INSERT INTO services ("userId", "categoryId", photo, description, price, "priceUnit", status)
        VALUES ($1, $2, $3, $4, $5, $6, $7);
        `, [service.userId, service.categoryId, service.photo, service.description, service.price, service.priceUnit, true]);
    return resp;
}

export function putService(id, service){
    const resp = db.query(`
        UPDATE services
        SET "userId"=$1, "categoryId"=$2, photo=$3, description=$4, price=$5, "priceUnit"=$6, status=$7)
        WHERE id=$8;
    `, [service.userId, service.categoryId, service.photo, service.description, service.price, service.priceUnit, service.status, id]);
    return resp;
}

export function delService(id){
    const resp = db.query(`
        DELETE FROM services
        WHERE id=$1;
    `, [id]);
    return resp;
}