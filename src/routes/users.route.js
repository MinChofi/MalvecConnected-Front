import { Router } from "express";

const router = Router();

router.get(
    "/user/:name",
    (req, res) => {
        const { name } =req.params;
    res.json({ user: name});
});

export default router;