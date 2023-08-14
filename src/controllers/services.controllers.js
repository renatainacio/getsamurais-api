import { delService, getServiceById, getServicesByUserId, insertService, putService, queryServices, selectCategories } from "../repository/services.repository.js";

export async function getUserServices(req, res){
    try {
        const services = await getServicesByUserId(res.locals.user.id);
        res.send(services.rows);
    } catch(err){
        res.status(500).send(err.message);
    }
}

export async function getCategories(req, res){
    try {
        const categories = await selectCategories();
        res.send(categories.rows);
    } catch(err){
        res.status(500).send(err.message);
    }
}

export async function getServices(req, res){
    try {
        const services = await queryServices();
        return res.send(services.rows);
    }catch(err){
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
        console.log(service.rows);
        if (service.rows.length === 0) return res.sendStatus(404);
        if (service.rows[0].userId !== res.locals.user.id) return res.sendStatus(401);
        await delService(id);
        return res.sendStatus(204);
    } catch(err){
        res.status(500).send(err.message);
    }
}