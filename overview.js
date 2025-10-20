// overview.js — Express router for the Overview page (ESM)
// Usage in index.js (server):
//   import overviewRouter from "./overview.js";
//   app.use(overviewRouter);

import { Router } from "express";

const router = Router();

router.get("/overview", (req, res) => {
  const body = `
  <section class="section">
    <p class="kicker">Project context</p>
    <h2 class="mb-4">Saibai Island — risks & needs</h2>
    <div class="grid grid-2">
      <div class="stack">
        <p>
          Saibai Island lies ~150 km north of Australia and ~4 km from Papua New Guinea. With around 500 residents—most Torres Strait Islanders—
          the island is extremely low-lying (highest point ~1.7 m above sea level) and exposed to king tides, storm surges and flooding.
          Local government: Torres Strait Island Regional Council (TSIRC).
        </p>
        <ul class="list-disc ml-5">
          <li>Frequent flooding and coastal inundation threaten homes and food gardens.</li>
          <li>Alerts currently rely on email/radio from the mainland, causing delays and message loss in large events.</li>
          <li>Digital divide: elders and non-digital users may miss time‑critical warnings.</li>
        </ul>
      </div>
      <div class="card card--elev">
        <div class="card__body">
          <h3 class="card__title">Design challenge</h3>
          <p class="mt-2">
            How can Saibai residents receive <strong>timely, accurate and bilingual</strong> warnings of rising tides and heavy rainfall—without
            depending on mainland forecasts or manual relays?
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <p class="kicker">Our solution</p>
    <h2 class="mb-4">Local, solar‑powered IoT early warning system</h2>
    <div class="grid grid-3">
      <div class="card"><div class="card__body">
        <h3 class="card__title">Tide sensor (JSN‑SR04T)</h3>
        <p class="mt-2">Waterproof ultrasonic module inside a PVC stilling well computes tide height from echo time.</p>
      </div></div>
      <div class="card"><div class="card__body">
        <h3 class="card__title">Rain gauge (tipping‑bucket)</h3>
        <p class="mt-2">Counts bucket tips to measure rainfall (mm/tip) using a magnet + reed switch.</p>
      </div></div>
      <div class="card"><div class="card__body">
        <h3 class="card__title">ESP32 controller</h3>
        <p class="mt-2">Filters noise, compares to thresholds, builds bilingual payloads and triggers alerts automatically.</p>
      </div></div>
    </div>

    <div class="grid grid-3 mt-6">
      <div class="card"><div class="card__body">
        <h3 class="card__title">Alert channels</h3>
        <ul class="mt-2 list-disc ml-5">
          <li>PA/Siren cut‑ins for outdoors & gatherings</li>
          <li>SMS broadcast for mobile coverage</li>
          <li>4MW radio interrupts for broad reach</li>
        </ul>
      </div></div>
      <div class="card"><div class="card__body">
        <h3 class="card__title">Power & enclosure</h3>
        <p class="mt-2">Solar panel + battery; salt‑resistant housing and gaskets for coastal conditions.</p>
      </div></div>
      <div class="card"><div class="card__body">
        <h3 class="card__title">Operations</h3>
        <p class="mt-2">Ranger‑led inspections, simple calibration workflow, spare kits and SMS fault notifications.</p>
      </div></div>
    </div>
  </section>

  <section class="section">
    <p class="kicker">How it works</p>
    <h2 class="mb-4">From data to alerts in seconds</h2>
    <div class="grid grid-3">
      <div class="card"><div class="card__body">
        <h3 class="card__title"> Measure</h3>
        <p class="mt-2">Ultrasonic tide sensor computes water level; tipping‑bucket counts rainfall in mm/tip.</p>
      </div></div>
      <div class="card"><div class="card__body">
        <h3 class="card__title"> Decide</h3>
        <p class="mt-2">ESP32 filters noise and compares readings to thresholds to detect unsafe conditions.</p>
      </div></div>
      <div class="card"><div class="card__body">
        <h3 class="card__title"> Alert</h3>
        <p class="mt-2">Bilingual payload is sent to PA/Siren, SMS and radio, reaching the whole community quickly.</p>
      </div></div>
    </div>
  </section>

  <section class="section">
    <p class="kicker">Why it fits Saibai</p>
    <h2 class="mb-4">Benefits for the community</h2>
    <div class="grid grid-4">
      <div class="card"><div class="card__body"><strong>Seconds to alert</strong><p class="mt-2 muted">Automation removes human delay during fast‑rising tides.</p></div></div>
      <div class="card"><div class="card__body"><strong>Inclusive comms</strong><p class="mt-2 muted">Bilingual SMS/PA ensures elders and non‑digital users are covered.</p></div></div>
      <div class="card"><div class="card__body"><strong>Built to last</strong><p class="mt-2 muted">Solar power, corrosion‑resistant housings and ranger checks maintain uptime.</p></div></div>
      <div class="card"><div class="card__body"><strong>Lower losses</strong><p class="mt-2 muted">Earlier action reduces damage costs and protects livelihoods.</p></div></div>
    </div>
  </section>
  `;

  res.render("index", { title: "Overview", body });
});

export default router;
