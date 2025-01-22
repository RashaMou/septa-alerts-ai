import fetch from "node-fetch";
import type { SeptaAlert } from "../types/septa.js";

export class AlertService {
  private readonly baseUrl = "https://www3.septa.org/api/Alerts";

  async getAlerts(): Promise<SeptaAlert[]> {
    const response = await fetch(this.baseUrl);
    if (!response.ok) {
      throw new Error(`SEPTA API error: ${response.status}`);
    }
    return response.json() as Promise<SeptaAlert[]>;
  }

  async getRouteAlerts(routeId: string): Promise<SeptaAlert[]> {
    const response = await fetch(`${this.baseUrl}/index.php?routes=${routeId}`);
    if (!response.ok) {
      throw new Error(`SEPTA API error: ${response.status}`);
    }
    return response.json() as Promise<SeptaAlert[]>;
  }

  async getDetailedRouteAlert(routeId: string): Promise<SeptaAlert[]> {
    const response = await fetch(
      `${this.baseUrl}/get_alert_data.php?route_id=${routeId}`,
    );
    if (!response.ok) {
      throw new Error(`SEPTA API error: ${response.status}`);
    }
    return response.json() as Promise<SeptaAlert[]>;
  }
}
