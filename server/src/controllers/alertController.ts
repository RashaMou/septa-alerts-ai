import { Request, Response } from "express";
import { AlertService } from "../services/alertService.js";

export class AlertController {
  constructor(private alertService: AlertService) {}

  getAlerts = async (_req: Request, res: Response) => {
    try {
      const alerts = await this.alertService.getAlerts();
      res.json(alerts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch alerts" });
    }
  };

  getRouteAlerts = async (req: Request, res: Response) => {
    try {
      const { routeId } = req.params;
      const alerts = await this.alertService.getRouteAlerts(routeId);
      res.json(alerts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch route alerts" });
    }
  };
}
