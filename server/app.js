import express from 'express';

import productRouter from './routes/product.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.use('/api', productRouter);