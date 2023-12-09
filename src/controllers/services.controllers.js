import { servicesService } from '../services/services.service.js';

export async function getUserServices(req, res) {
  const services = await servicesService.getUserServices(res.locals.user.id);
  res.send(services);
}

export async function getServiceId(req, res) {
  const { id } = req.params;
  const services = servicesService.getServiceId(id);
  res.send(services);
}

export async function getCategories(req, res) {
  const categories = servicesService.getCategories();
  res.send(categories);
}

export async function getServices(req, res) {
  const { description } = req.query;
  const services = await servicesService.getServices(description);
  return res.send(services);
}

export async function postService(req, res) {
  let service = req.body;
  service = { ...service, userId: res.locals.user.id };
  await servicesService.postService(service);
  return res.sendStatus(201);
}

export async function updateService(req, res) {
  const { id } = req.params;
  const service = { ...service, userId: res.locals.user.id };
  await servicesService.updateService(id, service);
  return res.sendStatus(200);
}

export async function deleteService(req, res) {
  const { id } = req.params;
  await servicesService.deleteService(id);
  return res.sendStatus(204);
}
