# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] - 2026-03-17

### Added
- Initial release
- Displays active National Weather Service alerts for a given latitude/longitude
- Severity-coded left border: Extreme (red), Severe (orange), Moderate (yellow), Minor (blue)
- Shows alert type and headline; clears automatically when alerts expire
- No visual footprint when there are no active alerts
- Configurable poll interval; uses the free NWS API (US locations only, no API key required)
