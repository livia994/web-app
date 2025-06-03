const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const cookieRoutes = require('./routes/cookies');
const { generateToken } = require('./utils/generateToken');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/cookies', cookieRoutes);
app.post('/api/token', generateToken);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
