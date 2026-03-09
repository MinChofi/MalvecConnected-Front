import { Router } from "express";

const router = Router();

router.get("/products", (req, res) => {
    res.json({ users: "products"});
});

export default router;