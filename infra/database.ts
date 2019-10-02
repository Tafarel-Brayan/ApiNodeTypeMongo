import * as mongoose from 'mongoose';

class Database{

    private DB_URL = 'mongodb://127.0.0.1:27017/db_portal';
    

    createConnection(){
        mongoose.connect(this.DB_URL, {useNewUrlParser: true}, (err) => {
            if (err) throw err;
            console.log("Database created!");
        });
        
    }

}

export default Database;