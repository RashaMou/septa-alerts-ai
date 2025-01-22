import express from "express";
import { createAlertRoutes } from "./routes/alerts.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { AlertService } from "./services/alertService.js";
import { AlertController } from "./controllers/alertController.js";

const app = express();
const port = process.env.PORT || 3000;

const alertService = new AlertService();
const alertController = new AlertController(alertService);

app.use(express.json());

app.use("/api/alerts", createAlertRoutes(alertController));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
