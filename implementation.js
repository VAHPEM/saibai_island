// implementation.js — Express router for the Implementation page (ESM)
// Usage in index.js:
//   import implementationRouter from "./implementation.js";
//   app.use(implementationRouter);

import { Router } from "express";

const router = Router();

router.get("/implementation", (req, res) => {
  const body = `
  <section class="section">
    <p class="kicker">Deployment plan</p>
    <h2 class="mb-4">Where and how we will install the system</h2>

    <div class="grid grid-3">
      <div class="card"><div class="card__body">
        <h3 class="card__title">North coast — seawall & jetty</h3>
        <p class="mt-2">Primary king‑tide impact zone. Install tide sensor (stilling well + JSN‑SR04T) and weather mast for rain gauge.</p>
        <ul class="list-disc ml-5 mt-2">
          <li>Anchor PVC stilling well to existing seawall</li>
          <li>Solar + LiFePO<sub>4</sub> battery box mounted above splash line</li>
          <li>Monthly ranger checks; quarterly calibration</li>
        </ul>
      </div></div>

      <div class="card"><div class="card__body">
        <h3 class="card__title">South coast — mangrove floodplain</h3>
        <p class="mt-2">Monitors overflow accumulation. Prioritises rainfall data and area runoff trends.</p>
        <ul class="list-disc ml-5 mt-2">
          <li>Reinforced pole with anti‑corrosion brackets</li>
          <li>Conduit for protected cabling; sealed junctions</li>
          <li>Biofouling wipe/off every visit</li>
        </ul>
      </div></div>

      <div class="card"><div class="card__body">
        <h3 class="card__title">East — community gardens</h3>
        <p class="mt-2">Tracks secondary tide channels threatening gardens and paths.</p>
        <ul class="list-disc ml-5 mt-2">
          <li>Gauge stand height ≥ 2 m; wind braces</li>
          <li>SMS fault alerts to ranger coordinator</li>
          <li>Spare kit stored at depot</li>
        </ul>
      </div></div>
    </div>

    <div class="grid grid-3 mt-6">
      <div class="card"><div class="card__body">
        <h3 class="card__title">West — near housing runoff</h3>
        <p class="mt-2">Monitors runoff that can back‑flow toward community housing.</p>
        <ul class="list-disc ml-5 mt-2">
          <li>Neighbour consultation before pole placement</li>
          <li>Night‑safe enclosure locks</li>
          <li>Reflective markers for vehicle visibility</li>
        </ul>
      </div></div>

      <div class="card"><div class="card__body">
        <h3 class="card__title">Backhaul & alerts</h3>
        <p class="mt-2">ESP32 triggers bilingual payloads. Primary: PA/siren & radio cut‑ins; Secondary: SMS gateway.</p>
        <ul class="list-disc ml-5 mt-2">
          <li>Store thresholds in config file on device</li>
          <li>Local ring buffer logs; periodic sync</li>
          <li>Auto‑resume after power/network loss</li>
        </ul>
      </div></div>

      <div class="card"><div class="card__body">
        <h3 class="card__title">Health & safety</h3>
        <p class="mt-2">Work near water follows TSIRC safety procedures. PPE, buddy system, weather windows, lockout/tagout for electrical.</p>
      </div></div>
    </div>
  </section>

  <section class="section">
    <p class="kicker">Phased rollout</p>
    <h2 class="mb-4">Timeline & milestones (indicative)</h2>

    <div class="card"><div class="card__body">
      <table class="table w-full">
        <thead>
          <tr><th>Phase</th><th>Activities</th><th class="num">Target</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>0. Approvals</td>
            <td>Site walk, community briefing, permits, procurement</td>
            <td class="num">Weeks 1–3</td>
          </tr>
          <tr>
            <td>1. Pilot install</td>
            <td>1× tide + 1× rain at North coast; acceptance tests</td>
            <td class="num">Weeks 4–5</td>
          </tr>
          <tr>
            <td>2. Scale to 4 sites</td>
            <td>Deploy remaining units (S/E/W), train rangers</td>
            <td class="num">Weeks 6–8</td>
          </tr>
          <tr>
            <td>3. Review & tune</td>
            <td>Threshold tuning, bilingual message review, playbook</td>
            <td class="num">Week 9</td>
          </tr>
          <tr>
            <td>4. Handover</td>
            <td>O&M docs, spares audit, SLA sign‑off</td>
            <td class="num">Week 10</td>
          </tr>
        </tbody>
      </table>
    </div></div>
  </section>

  <section class="section">
    <p class="kicker">Training & operations</p>
    <h2 class="mb-4">Community‑led maintenance and governance</h2>

    <div class="grid grid-3">
      <div class="card"><div class="card__body">
        <h3 class="card__title">Ranger training</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Install & cabling, corrosion care</li>
          <li>Calibration workflow & threshold review</li>
          <li>Fault triage and spares swap</li>
        </ul>
      </div></div>

      <div class="card"><div class="card__body">
        <h3 class="card__title">Operations playbook</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Monthly checks; quarterly deep clean</li>
          <li>Firmware update checklist</li>
          <li>Incident log & escalation contacts</li>
        </ul>
      </div></div>

      <div class="card"><div class="card__body">
        <h3 class="card__title">SLA targets</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Time‑to‑alert: &lt; 60 sec</li>
          <li>Uptime: &gt; 90%</li>
          <li>Fault acknowledgement: &lt; 24 h</li>
        </ul>
      </div></div>
    </div>
  </section>

  <section class="section">
    <p class="kicker">Risk & assurance</p>
    <h2 class="mb-4">Managing technical and community risks</h2>

    <div class="grid grid-3">
      <div class="card"><div class="card__body">
        <h3 class="card__title">Technical</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Corrosion & biofouling → marine‑grade fasteners, gaskets</li>
          <li>Power loss → solar + LiFePO<sub>4</sub>, watchdog auto‑restart</li>
          <li>Sensor drift → calibration schedule; spare modules</li>
        </ul>
      </div></div>

      <div class="card"><div class="card__body">
        <h3 class="card__title">Community</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Bilingual message review with elders</li>
          <li>Public signage: purpose, contacts, no‑tamper notice</li>
          <li>School outreach on flood safety</li>
        </ul>
      </div></div>

      <div class="card"><div class="card__body">
        <h3 class="card__title">Data & privacy</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Environmental data only; no PII</li>
          <li>Local logs with retention policy (e.g., 12 months)</li>
          <li>Open data summary for community transparency</li>
        </ul>
      </div></div>
    </div>
  </section>

  <section class="section">
    <p class="kicker">Sustainability & end‑of‑life</p>
    <h2 class="mb-4">Longevity, spares and recycling</h2>
    <div class="grid grid-3">
      <div class="card"><div class="card__body">
        <h3 class="card__title">Spares & swap</h3>
        <p class="mt-2">Maintain one hot‑spare per sensor type + one pre‑flashed ESP32. Swap on site; bench repair later.</p>
      </div></div>
      <div class="card"><div class="card__body">
        <h3 class="card__title">Recycling</h3>
        <p class="mt-2">End‑of‑life parts sorted: e‑waste for electronics; metals and PVC via TSIRC waste streams.</p>
      </div></div>
      <div class="card"><div class="card__body">
        <h3 class="card__title">Upgrades</h3>
        <p class="mt-2">Optional add‑ons: wind sensor, barometer, LoRa backhaul, community dashboard.</p>
      </div></div>
    </div>
  </section>

  <section class="section">
    <div class="alert">
      <strong>Next:</strong> See <a href="/references">References</a> for sources and <a href="/appendices">Appendices</a> for O&M checklists, playbooks and prompt log.
    </div>
  </section>
  `;

  res.render("index", { title: "Implementation Plan", body });
});

export default router;
