import { delService, getServiceById, getServicesByEmail, insertService, putService, selectCategories } from "../repository/services.repository.js";

export async function getUserServices(req, res){
    try {
        const services = await getServicesByEmail(email);
        res.send(services);
    } catch(err){
        res.status(500).send(err.message);
    }
}

export async function getCategories(req, res){
    try {
        const categories = await selectCategories();
        res.send(categories);
    } catch(err){
        res.status(500).send(err.message);
    }
}

export async function postService(req, res){
    let service = req.body;
    service = {...service, userId: res.locals.user.id};
    console.log(service);
    try {
        await insertService(service);
        return res.sendStatus(201);
    } catch(err){
        res.status(500).send(err.message);
    }
}

export async function updateService(req, res){
    const service = req.body;
    const { id } = req.params;
    try {
        const service = await getServiceById(id);
        if (service.rows.length === 0) return res.sendStatus(404);
        await putService(id, service);
        return res.sendStatus(200);
    } catch(err){
        res.status(500).send(err.message);
    }
}

export async function deleteService(req, res){
    const { id } = req.params;
    try {
        const service = await getServiceById(id);
        if (service.rows.length === 0) return res.sendStatus(404);
        await delService(id);
        return res.sendStatus(204);
    } catch(err){
        res.status(500).send(err.message);
    }
}