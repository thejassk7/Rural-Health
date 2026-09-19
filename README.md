# Hospital Resource Availability System

A plain HTML, CSS, and vanilla JavaScript single-page app for comparing hospital resources and viewing incoming emergency requests.

## Run

Open `index.html` directly in a browser. No server, build tool, framework, or network connection is required.

## Reset data

Open the browser developer console on the app and run:

```js
['hrs_hospitals', 'hrs_requests', 'hrs_session'].forEach(key => localStorage.removeItem(key));
location.reload();
```

## Confidential admin codes

These codes are for developer reference only and are deliberately not displayed in the app UI.

| Hospital | Admin secret code |
|---|---|
| Apollo Indraprastha Hospital | APOLLO24 |
| Fortis Mulund Hospital | FORTIS24 |
| Manipal Hospital Old Airport Road | MANIPAL24 |
| Medanta The Medicity | MEDANTA24 |
| Narayana Superspeciality Hospital | NARAYANA24 |
| KIMS Hospitals | KIMS2024 |
| Ruby Hall Clinic | RUBY2024 |
