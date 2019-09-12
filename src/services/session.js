import cache from "./cache";

class Session {

    constructor() {
        this.id = '';
        this.data = {};
    }

    hasPermission(name) {

        const permissions = [];

        if (this.data && this.data.user){
            (this.data.user.roles || []).forEach(r => r.permissions.forEach(p => permissions.push(p.name)));
            return permissions.some(p => p === name);
        } else {
            return false;
        }

    }

    set(id, data) {
        this.id = id;
        this.data = data;

        return this;
    }

    save(){

        if (this.id){
            cache.set(this.id, JSON.stringify(this.data));
            cache.expire(this.id, 60 * 60 * 2);
        }

        return this;
    }

    destroy(callback) {
        cache.del(this.id, callback);
    }
    
}

export default new Session();