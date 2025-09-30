import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ 
	ok: true,
	redis: process.env.REDIS_URL,
  rabbit: process.env.RABBIT_URL,
}));

const port = process.env.PORT ?? "3001";
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});

export default app;
