import {
  delService,
  getServiceById,
  getServicesByUserId,
  insertService,
  putService,
  queryServices,
  queryServicesWParam,
  selectCategories,
} from '../repository/services.repository.js';

async function getUserServices(id) {
  try {
    const services = await getServicesByUserId(id);
    return services.rows;
  } catch (err) {
    return err;
  }
}

async function getServiceId(id) {
  try {
    const services = await getServiceById(id);
    return services.rows[0];
  } catch (err) {
    return err.message;
  }
}

async function getCategories() {
  try {
    const categories = await selectCategories();
    return categories.rows;
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getServices(description) {
  let services;
  try {
    if (!description) services = await queryServices();
    if (description) services = await queryServicesWParam(description);
    return services.rows;
  } catch (err) {
    return err.message;
  }
}

async function postService(service) {
  await insertService(service);
}

async function updateService(id, service) {
  const svc = await getServiceById(id);
  //if (svc.rows.length === 0) return res.sendStatus(404);
  //throw 404 error
  //if (svc.rows[0].userId !== res.locals.user.id) return res.sendStatus(401);
  // service = { ...service, userId: res.locals.user.id };
  await putService(id, service);
}

async function deleteService(id) {
  const service = await getServiceById(id);
  //if (service.rows.length === 0) return res.sendStatus(404);
  //if (service.rows[0].userId !== res.locals.user.id) return res.sendStatus(401);
  await delService(id);
}

export const servicesService = {
  getUserServices,
  getServiceId,
  getCategories,
  getServices,
  postService,
  updateService,
  deleteService,
};
