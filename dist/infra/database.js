"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Database {
    constructor() {
        this.DB_URL = 'mongodb://127.0.0.1:27017/db_portal';
    }
    createConnection() {
        mongoose.connect(this.DB_URL, { useNewUrlParser: true }, (err) => {
            if (err)
                throw err;
            console.log("Database created!");
        });
    }
}
exports.default = Database;
