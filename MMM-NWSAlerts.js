Module.register("MMM-NWSAlerts", {
	requiresVersion: "2.1.0",

	defaults: {
		lat: 40.7973,
		lon: -74.1854,
		updateInterval: 5 * 60 * 1000, // 5 minutes
	},

	start() {
		this.alerts = [];
		this.fetchAlerts();
		setInterval(() => this.fetchAlerts(), this.config.updateInterval);
	},

	fetchAlerts() {
		this.sendSocketNotification("FETCH_ALERTS", {
			lat: this.config.lat,
			lon: this.config.lon,
		});
	},

	getTemplate() {
		return "MMM-NWSAlerts.njk";
	},

	getTemplateData() {
		return { alerts: this.alerts };
	},

	socketNotificationReceived(notification, payload) {
		if (notification === "NWS_ALERTS") {
			this.alerts = payload;
			this.updateDom();
		}
	},
});
