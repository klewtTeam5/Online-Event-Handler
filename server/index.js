require('dotenv').config();
const cors = require('cors')
const dbConnection = require('./config/database');

const app = require('express')();
app.use(cors(
    {
        origin: ["https://deploy-mern-1whq.vercel.app"],
        methods: ["POST", "GET"],
        credentials:true
                 }
    ));

dbConnection().then(() => {

    require('./config/express')(app);

    require('./config/routes')(app);

    app.listen(process.env.PORT, console.log(`Listening on port ${process.env.PORT}!`));
    console.log('Connected to MongoDB');

}).catch(console.error);
