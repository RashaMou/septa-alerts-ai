import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
