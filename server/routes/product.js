import express from 'express';
const router = express.Router();

// router.use((req, res, next) => {
//     console.log('middleware for product!');
//     next();
// });

router.get('/', (req, res) => {
    res.send("조회");
});

export default router;