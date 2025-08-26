import fastify from "fastify";
import { getIPInfo } from "../controller";
const app= fastify();
app.get("/", getIPInfo);