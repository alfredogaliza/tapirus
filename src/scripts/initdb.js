import { connect } from "../services/database";

import User from "../models/lib/User";
import Role from "../models/lib/Role";
import Permission from "../models/lib/Permission";

const permissions = [
    {name: "SHOW USER"},
    {name: "CREATE USER"},
    {name: "EDIT USER"},
    {name: "DELETE USER"},
    {name: "SHOW ROLE"},
    {name: "CREATE ROLE"},
    {name: "EDIT ROLE"},
    {name: "DELETE ROLE"},
    {name: "SHOW PERMISSION"}
];

async function initdb(){
    try {
        await connect();
        await User.model.collection.drop();
        await Role.model.collection.drop();
        await Permission.model.collection.drop();
    } catch (error) {
        console.log(error.errormsg);
    } finally {
        Permission.model.insertMany(permissions, (error, docs) => {
            const ids = docs.map(doc => doc._id);
            Role.model.create({
                name:"Administrator",
                permissions: ids
            }, (error, result) => {
                console.log(result);
                User.model.create({
                    login: "admin",
                    password: "admin",
                    roles: [result._id]
                }, (error, result) => {
                    console.log(result);
                });
            });
        });
    }
}

initdb();