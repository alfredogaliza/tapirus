import cache from "../services/cache";
import session from "../services/session";

export default (request, response, next) => {

    const authorization = (request.headers.authorization || "").replace("Bearer ", "");
    
    if (authorization.match(/^([0-9a-f]{8}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{12})$/)){
        cache.get(authorization, (error, data) => {
            if (error) response.status(501).send(error);
            else if (data !== null) {
                console.log(authorization);
                console.log(JSON.parse(data));
                session.set(authorization, JSON.parse(data));
            } else {
                session.set(null, null);
            }
            next();
        });
    } else {
        next();
    }
}