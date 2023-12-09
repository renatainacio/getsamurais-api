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

export async function getUserServices(req, res) {
  try {
    const services = await getServicesByUserId(res.locals.user.id);
    res.send(services.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getServiceId(req, res) {
  const { id } = req.params;
  try {
    const services = await getServiceById(id);
    res.send(services.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getCategories(req, res) {
  try {
    const categories = await selectCategories();
    res.send(categories.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getServices(req, res) {
  const { q } = req.query;
  let services;
  try {
    if (!q) services = await queryServices();
    if (q) services = await queryServicesWParam(q);
    return res.send(services.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function postService(req, res) {
  let service = req.body;
  service = { ...service, userId: res.locals.user.id };
  try {
    await insertService(service);
    return res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function updateService(req, res) {
  let service = req.body;
  const { id } = req.params;
  try {
    const svc = await getServiceById(id);
    if (svc.rows.length === 0) return res.sendStatus(404);
    if (svc.rows[0].userId !== res.locals.user.id) return res.sendStatus(401);
    service = { ...service, userId: res.locals.user.id };
    await putService(id, service);
    return res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function deleteService(req, res) {
  const { id } = req.params;
  try {
    const service = await getServiceById(id);
    if (service.rows.length === 0) return res.sendStatus(404);
    if (service.rows[0].userId !== res.locals.user.id) return res.sendStatus(401);
    await delService(id);
    return res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
