# MMM-NWSAlerts

A [MagicMirror²](https://magicmirror.builders/) module that displays active [National Weather Service](https://www.weather.gov/) alerts inline on the mirror.

**US locations only.** Uses the free NWS API — no API key required.

## Features

- Displays all active alerts for your location
- Severity-coded left border: Extreme (red), Severe (orange), Moderate (yellow), Minor (blue)
- Shows alert type and headline
- Polls on a configurable interval and clears automatically when alerts expire
- No visual footprint when there are no active alerts

## Installation

```bash
cd ~/MagicMirror/modules
git clone https://github.com/olopez70/MMM-NWSAlerts.git
```

## Configuration

Add to your `config/config.js`:

```js
{
    module: "MMM-NWSAlerts",
    position: "top_left",
    config: {
        lat: 40.7973,
        lon: -74.1854,
    }
}
```

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `lat` | number | `40.7973` | Latitude of your location |
| `lon` | number | `-74.1854` | Longitude of your location |
| `updateInterval` | number | `300000` | Poll interval in ms (default: 5 min) |

## Dependencies

- [NWS Alerts API](https://www.weather.gov/documentation/services-web-api) — free, no API key required, US only
