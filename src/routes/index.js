import { Router } from "express";
import UsersRouter from "./users.route.js";
import ProductsRouter from "./products.route.js";

const router = Router();

router.use(UsersRouter);
router.use(ProductsRouter);

export default router;