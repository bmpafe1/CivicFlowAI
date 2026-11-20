# CivicFlow AI – clickable prototype

**CivicFlow AI** is an AI-enabled civil status and council services platform, designed with **Limbe II Council, Cameroon**. It helps residents prove who they are and use council services in English, French and Cameroonian Pidgin, by text, voice, WhatsApp, SMS, USSD or the web.

This repository holds a working, browser-only prototype prepared for the *Cities Deliver: AI Solutions for Public Services* (Seed track) application to The Rockefeller Foundation and the OpenAI Foundation.

> **All data is synthetic and fictional.** This is not an official council service. Names, records, fees and numbers are for demonstration only. AI behaviour is simulated in the browser; no data is sent anywhere.

## The problem

In Cameroon, about a third of births are never registered. Without a birth certificate, a child cannot sit school exams or get a national ID card, and later struggles to open a bank or mobile money account, inherit land or work formally. In Limbe II, many paper registers were damaged during the crisis, and more pages are lost every rainy season. Staff search the surviving books by hand, while families make trip after trip.

## What the prototype shows

| Area | What you can try |
|---|---|
| Trilingual AI assistant | Questions and simulated voice notes in English, French and Pidgin, answered only from council-approved information, with a Listen button |
| Births at health centres | Birth notification by the health centre, then a same-day certificate at the council desk in the hospital |
| Find my certificate | AI search of digitised archives and a privacy-safe shared index across councils (match scores only) |
| Registrar workspace | AI pre-checks, duplicate alerts across councils, BUNEC monthly transmission, letter drafting |
| Archives | Register digitisation with AI handwriting reading, confidence scores and clerk verification |
| Payments and verification | Mobile money payment, QR-verifiable certificates and receipts, a check for scam messages |
| Basic phones | USSD menu, SMS and WhatsApp previews |
| Council administration | Fees, staff roles, audit trail, knowledge base, per-council colour themes and menu layout |
| How it works | Architecture, AI models, human checks and pass marks before go-live |

## Two guided journeys

- **Mary:** a fish trader who reads little sends a Pidgin voice note about her newborn. The health centre has already notified the birth, the registrar signs at the council desk, and she leaves with a QR-verifiable certificate.
- **Joseph:** a 19-year-old displaced by the crisis, whose papers burned, needs his birth certificate for an exam. The AI finds his record at another council and sends the request for him.

## How to open it

**Online:** use the GitHub Pages link for this repository and start at `start.html`.

**On your own computer:**

1. Download the repository (Code → Download ZIP) and unzip it.
2. Double-click `start.html` to open it in Chrome, Edge or Firefox.

No installation or internet connection is needed. Use the dark **Demo view** bar to switch between the resident, health centre, registrar, treasurer, archives, administration and management views. Anything you change is kept only in your own browser. **Reset demo data** (top right) restores the starting data.

`README.txt` lists every page and what it demonstrates.

## How the full platform will work

The prototype simulates the AI. The planned platform is described on the *How it works* page (`architecture.html`):

- **One back end** serving the web, mobile, WhatsApp, SMS and USSD channels. The pilot is hosted at the University of Buea's state data centre, encrypted and backed up daily.
- **Tool-agnostic AI:** models from OpenAI, Google and Anthropic, Transkribus, and open speech models such as Whisper, compared on Limbe II test data. The best performer for each task is used, and can be replaced at any time.
- **Pass marks before go-live:** over 95% accuracy on high-confidence register fields, 90% correct assistant answers, every fee exact, and zero data leaks. Pidgin voice launches only once it understands at least 85% of requests.
- **People decide:** clerks check every uncertain entry, and registrars approve and sign every legal act. The AI never approves or refuses a request.
- **Works with the national system:** records are sent monthly to BUNEC in the national format.

## Partners

| Partner | Role |
|---|---|
| CHRDA (Centre for Human Rights and Democracy in Africa) | Lead applicant |
| Limbe II Council | City partner |
| AICExperts | Technical lead |
| WinDT | Coordination and independent evaluation |
| University of Buea Digital Centre | Hosting and training |

## Data and privacy

- The prototype contains no personal data. Every person, record and phone number is invented.
- Pages are marked `noindex`, and `robots.txt` asks search engines not to list them.
- The live platform will follow Cameroon's data protection law (Law No. 2024/017). Limbe II Council will own its data.

## Status

This is a prototype for an application. It is not in production, and its pages, prices and procedures are illustrative until they are confirmed by the council.

## Licence

Copyright 2026 AICExperts and the CivicFlow AI consortium.

Licensed under the [Apache License 2.0](LICENSE). See [NOTICE](NOTICE) for attribution. The grant-funded platform code will also be published under this licence, so other councils can reuse it.
