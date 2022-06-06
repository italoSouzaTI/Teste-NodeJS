import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, resp: Response) => {
    return resp.json({ ok: true });
})

export { router };