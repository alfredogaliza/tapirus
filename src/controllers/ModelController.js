import { Router } from "express";

const sendResult = (response) => {
    return (error, result) => {
        if (error){
            console.log("error...");
            response.status(500).send(error);
        } else {
            console.log("end...");
            response.send(result);
        }
    }
};

export default (Model, name, handleResult = sendResult) => {

    const router = new Router();

    router.post(`/${name}`, (request, response) => {
        Model.create(request.body, handleResult(response));
    });

    router.get(`/${name}`, (request, response) => {
        console.log("start...");
        Model.find(request.body).exec(handleResult(response));
    });

    router.get(`/${name}/:id`, (request, response) => {
        Model.findById(request.params.id).exec(handleResult(response));
    });

    router.put(`/${name}/:id`, (request, response) => {
        Model.findByIdAndUpdate(request.params.id, request.body).exec((error, result) => {
            if (error) response.status(500).send(error)
            else Model.findById(request.params.id).exec(handleResult(response));
        });
    });

    router.delete(`/${name}/:id`, (request, response) => {
        Model.deleteOne({ _id: request.params.id }).exec(handleResult(response));
    });

    return router;
};