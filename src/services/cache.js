import Redis from "redis";

const cache = Redis.createClient({host: "localhost"});

 export default cache;