import { notFoundError } from '../errors/notFoundError.js';
import { unauthorizedError } from '../errors/unauthorizedError.js';
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
  const services = await getServicesByUserId(id);
  return services.rows;
}

async function getServiceId(id) {
  const services = await getServiceById(id);
  return services.rows[0];
}

async function getCategories() {
  const categories = await selectCategories();
  return categories.rows;
}

async function getServices(description) {
  let services;
  if (!description) services = await queryServices();
  if (description) services = await queryServicesWParam(description);
  return services.rows;
}

async function postService(service) {
  await insertService(service);
}

async function updateService(id, service) {
  const svc = await getServiceById(id);
  if (svc.rows.length === 0) throw notFoundError(service);
  if (svc.rows[0].userId !== res.locals.user.id) throw unauthorizedError();
  await putService(id, service);
}

async function deleteService(id) {
  const service = await getServiceById(id);
  if (service.rows.length === 0) throw notFoundError(service);
  if (service.rows[0].userId !== res.locals.user.id) throw unauthorizedError();
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
