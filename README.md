aptcode-backend
================

aptcode-backend ist das serverseitige CMS-Backend für aptcode.de – eine persönliche Portfolio-Webseite mit Blog, Projektübersicht und integriertem Live-Chat.  
Das Backend basiert auf TypeScript, Express.js, MongoDB und Socket.IO für Echtzeitkommunikation.

-------------------------------
Funktionen
-------------------------------

- Blog-System mit Kategorien und Beiträgen
- Projekt- und Portfolioverwaltung mit Bild-Uploads
- Echtzeit-Chat mit Socket.IO
- Benutzer-Authentifizierung via JWT
- REST-API für Inhalte, Medien, Kontaktformulare uvm.
- Modularer Aufbau für einfache Erweiterbarkeit
- Docker- und CI/CD-fähig

-------------------------------
Technologien
-------------------------------

- Sprache: TypeScript
- Server: Express.js
- Datenbank: MongoDB (über Mongoose)
- WebSocket: Socket.IO
- Authentifizierung: JWT
- Tests: Jest
- Containerisierung: Docker, docker-compose

-------------------------------
Installation
-------------------------------

1. Repository klonen:
   git clone https://github.com/Sebastian-Vetter/aptcode-backend.git

2. Projektverzeichnis öffnen:
   cd aptcode-backend

3. Abhängigkeiten installieren:
   npm install

4. Umgebungsvariablen anlegen (.env Datei):

   PORT=4000  
   MONGO_URI=mongodb://localhost:27017/aptcode  
   JWT_SECRET=dein_geheimer_key  
   CLIENT_URL=https://aptcode.de

-------------------------------
Starten
-------------------------------

Lokale Entwicklung:
npm run dev

Produktivmodus:
npm run build  
npm run start

-------------------------------
API-Endpunkte (Auswahl)
-------------------------------

GET    /         - Alle Blogbeiträge  
POST   /         - Neuen Beitrag erstellen  
GET    /      - Projekte anzeigen  
POST   /       - Kontaktanfrage senden  
GET    /       - Aktuelles Benutzerprofil

-------------------------------
Socket.IO Chat-Events
-------------------------------

- connection
- message
- disconnect
- typing

Der Chatserver läuft zusammen mit dem Express-Server.

-------------------------------
Projektstruktur
-------------------------------

src/  
├── controllers/     (API-Logik)  
├── models/          (Mongoose-Modelle)  
├── routes/          (Routen-Definition)  
├── repositories/    (Repositories)  
├── services/        (Fachlogik)  
├── middleware/      (z. B. Auth, Fehlerbehandlung)  
├── sockets/         (Socket.IO-Logik)  
└── index.ts         (Einstiegspunkt)

tests/               (Jest-Tests)
.env  
tsconfig.json

-------------------------------
Tests
-------------------------------

Tests ausführen:
npm run test

Test-Coverage (optional):
npm run test:cov

-------------------------------
Roadmap
-------------------------------

- [ ] JWT Authentifizierung
- [ ] Blog-System
- [ ] Projektgalerie
- [ ] Socket.IO Integration
- [ ] Admin-UI für Inhalte
- [ ] Bildoptimierung mit CDN
- [ ] CMS-Module für Navigation und Seiten

-------------------------------
Autor
-------------------------------

Sebastian Vetter  
aptcode.de

-------------------------------
Lizenz
-------------------------------

MIT License
