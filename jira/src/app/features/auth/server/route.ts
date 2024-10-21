
import { Hono } from "hono";
import {zValidator} from "@hono/zod-validator"

import { loginSchema, registerschema } from "../schemas";

const app = new Hono()
    .post(
        "/login",
        zValidator("json", loginSchema),
        
    async (c) => {
        const {name, email, password} = c.req.valid("json");

        console.log({name, email, password});

        return c.json({name, email, password });
    }
);

.post(
    "/register"
    zValidator("json", registerschema)

export default app;
)