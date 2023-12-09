import { notFoundError } from '../errors/notFoundError.js';
import { unauthorizedError } from '../errors/unauthorizedError.js';
import { servicesRepository } from '../repository/services.repository.js';

async function getUserServices(id) {
  const services = await servicesRepository.getServicesByUserId(id);
  return services.rows;
}

async function getServiceId(id) {
  const services = await servicesRepository.getServiceById(id);
  return services.rows[0];
}

async function getCategories() {
  const categories = await servicesRepository.selectCategories();
  return categories.rows;
}

async function getServices(description) {
  let services;
  if (!description) services = await servicesRepository.queryServices();
  if (description) services = await servicesRepository.queryServicesWithParams(description);
  return services.rows;
}

async function postService(service) {
  await servicesRepository.postService(service);
}

async function updateService(id, service) {
  const svc = await servicesRepository.getServiceById(id);
  if (svc.rows.length === 0) throw notFoundError(service);
  if (svc.rows[0].userId !== res.locals.user.id) throw unauthorizedError();
  await servicesRepository.updateService(id, service);
}

async function deleteService(id) {
  const service = await servicesRepository.getServiceById(id);
  if (service.rows.length === 0) throw notFoundError(service);
  if (service.rows[0].userId !== res.locals.user.id) throw unauthorizedError();
  await servicesRepository.deleteService(id);
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
