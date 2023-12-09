import { servicesService } from '../services/services.service.js';

export async function getUserServices(req, res) {
  try {
    const services = await servicesService.getUserServices(res.locals.user.id);
    res.send(services);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getServiceId(req, res) {
  const { id } = req.params;
  try {
    const services = servicesService.getServiceId(id);
    res.send(services);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getCategories(req, res) {
  try {
    const categories = servicesService.getCategories();
    res.send(categories);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getServices(req, res) {
  const { description } = req.query;
  try {
    const services = await servicesService.getServices(description);
    return res.send(services);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function postService(req, res) {
  let service = req.body;
  service = { ...service, userId: res.locals.user.id };
  try {
    await servicesService.postService(service);
    return res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function updateService(req, res) {
  const { id } = req.params;
  try {
    const service = { ...service, userId: res.locals.user.id };
    await servicesService.updateService(id, service);
    return res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function deleteService(req, res) {
  const { id } = req.params;
  try {
    await servicesService.deleteService(id);
    return res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
