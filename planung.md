# Projektentwurf: Analyse der Arbeitsstellen im Kanton Freiburg

## Fragestellung
Wie viele neu geschaffene und verlorene Arbeitsstellen gibt es im Kanton Freiburg?

## Projektziel
Wir möchten untersuchen, in welchen Gemeinden des Kantons Freiburg die meisten Firmen gegründet werden und wo Firmen aufgelöst werden. Die erarbeiteten Daten sollen auf einer interaktiven Karte dargestellt werden. Dabei sollen die verschiedenen Gemeinden je nach Anzahl der Unternehmungsgründungen bzw. -auflösungen heller oder dunkler visualisiert werden.

## Methodik
- **Datensammlung**: 
  - Relevante Daten zu Firmenneugründungen und -auflösungen im Kanton Freiburg beschaffen (z. B. von offiziellen Statistiken oder Handelsregistern).
  
- **Datenverarbeitung**:
  - Verarbeitung und Analyse der Daten mit **Python** (z. B. Pandas, NumPy, Geopandas).
  - Aggregation der Daten nach Gemeinden.
  
- **Datenvisualisierung**:
  - Erstellung einer interaktiven Karte mit **React** und **Leaflet** oder **D3.js**.
  - Farbskalierung zur Darstellung der Gründungs- und Auflösungszahlen.
  
## Technologien
- **Backend**: Python (Pandas, NumPy, Flask/FastAPI für API-Endpoints)
- **Frontend**: React (Leaflet/D3.js für Kartenvisualisierung)
- **Datenquellen**: Statistische Ämter, Handelsregister, Open Data

## Erwartetes Ergebnis
- Eine interaktive Website, die die Firmengründungen und -auflösungen in den Gemeinden des Kantons Freiburg visuell darstellt.
- Eine datenbasierte Analyse über die Entwicklung von Arbeitsstellen in der Region.

## Terminplanung
- **06.03.2025**: Datenbeschaffung und erste Sichtung der verfügbaren Quellen
- **13.03.2025**: Erste Verarbeitung und Analyse der Daten
- **20.03.2025**: Entwicklung eines Prototyps der interaktiven Karte
- **27.03.2025**: Implementierung der Website mit Frontend- und Backend-Integration
- **03.04.2025**: Projektschlussbesprechung

