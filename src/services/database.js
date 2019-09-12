import Mongoose from "mongoose";

export function connect(callback) {
    return Mongoose.connect(
        "mongodb://localhost/siscob",
        {
            useNewUrlParser: true,
            useCreateIndex: true
        },
        callback
    );
}