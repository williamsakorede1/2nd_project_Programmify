const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todosRoutes = require('./routes/todos');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/todos', todosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
