import { Router } from "express";
import { AlertController } from "../controllers/alertController.js";

export function createAlertRoutes(alertController: AlertController): Router {
  const router = Router();

  router.get("/", alertController.getAlerts);
  router.get("/:routeId", alertController.getRouteAlerts);

  return router;
}
