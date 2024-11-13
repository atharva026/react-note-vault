import mongoose from 'mongoose'

const url = process.env.DB_URL;

mongoose.connect(url)
const db = mongoose.connection;

db.on("connected", () => {
    console.log("Connected")
});

db.on('error', (err) => {
    console.log(err);
});


db.on("disconnected", () => {
    console.log("Disonnected")
});

export default db