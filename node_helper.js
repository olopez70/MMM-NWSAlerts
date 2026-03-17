const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
	async fetchAlerts(lat, lon) {
		try {
			const url = `https://api.weather.gov/alerts/active?point=${lat},${lon}`;
			const res = await fetch(url, {
				headers: { "User-Agent": "MagicMirror/MMM-NWSAlerts" },
			});
			const data = await res.json();
			const features = data.features ?? [];

			const alerts = features.map((f) => ({
				id: f.id,
				event: f.properties.event,
				severity: f.properties.severity,
				headline: f.properties.headline,
			}));

			this.sendSocketNotification("NWS_ALERTS", alerts);
		} catch (e) {
			console.error("[MMM-NWSAlerts] Error fetching alerts:", e);
		}
	},

	socketNotificationReceived(notification, payload) {
		if (notification === "FETCH_ALERTS") {
			this.fetchAlerts(payload.lat, payload.lon);
		}
	},
});
