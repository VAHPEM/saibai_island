// index.js (Express + EJS server)
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import overviewRouter from "./overview.js";
import implementationRouter from "./implementation.js";
import costFundingRouter from "./cost_funding.js";
import prototypeRouter from "./prototype.js";
import referencesRouter from "./references.js";
import groupDeclarationRouter from "./group_declaration.js";
import designSolutionRouter from "./design_solution.js";
import otherConsiderationsRouter from "./other_considerations.js";
import appendicesRouter from "./appendices.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files (serves /public/main.css etc.)
app.use(express.static(path.join(__dirname, "public")));

// Home route -> render views/index.ejs
app.get("/", (req, res) => {
  const body = `
  <section class="exec-summary">
  <span class="eyebrow eyebrow--bar">EXECUTIVE SUMMARY</span>
    <div class="meta-grid">
      <div><span class="meta-label">Design Area(s):</span> 6.1 — Early Warning & Communication (EWB Challenge: Saibai Island)</div>
      <div><span class="meta-label">Keywords:</span> early warning, Saibai, tide sensor, rain gauge, ESP32, solar, bilingual alerts, PA siren, SMS, radio, resilience</div>
    </div>
    <div class="section-card">
      <span class="eyebrow eyebrow--bar">Proposal summary</span>
      <p class="justified">
        The project aims to deliver <strong>timely, accurate local hazard alerts</strong> for Saibai Island by
        <strong>deploying on-island tide and rainfall sensors</strong> connected to a solar-powered microcontroller that triggers
        bilingual alerts across multiple channels. This design strengthens disaster preparedness by ensuring local autonomy
        and faster response without reliance on mainland systems.
      </p>
    </div>

    <div class="section-card">
      <span class="eyebrow eyebrow--bar">Design Overview</span>
      <ul class="bullets">
        <li>
          The <em>Saibai EWS</em> measures real-world tide and rainfall via a waterproof ultrasonic sensor (tide)
          and a tipping-bucket gauge (rainfall). Readings are processed on an ESP32 and broadcast when thresholds are met.
        </li>
        <li>
          The system runs entirely on <strong>solar power</strong> and uses <strong>weather-sealed housings</strong> for tropical durability.
        </li>
        <li>
          Components: JSN-SR04T ultrasonic module, tipping-bucket rain gauge, ESP32 DevKit, PVC pipe stilling housing,
          LiFePO₄ battery + charge controller, and local siren/PA integration.
        </li>
        <li>
          <strong>Users:</strong> TSIRC community rangers (maintenance, calibration, and alerts) and Saibai residents
          (recipients via siren, SMS, and radio). Bilingual messaging ensures inclusivity.
        </li>
      </ul>

      <div class="gallery">
        <figure>
          <img src="/images/tide-sensor.png" alt="Tide sensor module" onerror="this.closest('figure').remove()">
          <figcaption>Tide sensor module (JSN-SR04T inside PVC stilling pipe)</figcaption>
        </figure>
        <figure>
          <img src="/images/rain-gauge.png" alt="Tipping-bucket rain gauge" onerror="this.closest('figure').remove()">
          <figcaption>Tipping-bucket rain gauge (magnet + reed switch)</figcaption>
        </figure>
      </div>
    </div>

    <div class="section-card">
      <span class="eyebrow eyebrow--bar">Key Considerations</span>
      <ul class="bullets">
        <li><strong>Materials sourcing:</strong> sensors/controllers imported; PVC/mounts locally available on Saibai or Thursday Island.</li>
        <li><strong>Maintenance:</strong> monthly visual checks; quarterly calibration; spare kits for post-storm repairs.</li>
        <li><strong>Implementation approach:</strong> pilot 1–2 stations → validate with rangers → expand to 4 points (N/S/E/W) with community training.</li>
        <li><strong>Consultation:</strong> ongoing review with TSIRC, local elders, and EWB to refine bilingual message tone and siren cues.</li>
      </ul>
    </div>

    <div class="section-card">
      <span class="eyebrow eyebrow--bar">Materials & Cost</span>
      <ul class="bullets">
        <li><strong>Purchased Materials:</strong> JSN-SR04T sensors, tipping-bucket gauges, ESP32 boards, solar kits, charge controllers, IP-rated enclosures, siren interfaces.</li>
        <li><strong>Other Materials:</strong> PVC pipes, stainless fasteners, signage, and surge protection.</li>
        <li><strong>Labour:</strong> installation team (1 coordinator + 2 local rangers), bilingual message recording, and training.</li>
        <li><strong>Estimated Total Cost:</strong> pilot (2 units) ≈ $8k–$20k; full island rollout ≈ $200k–$300k AUD.</li>
      </ul>
      <p class="small muted">
        Cost estimates align with potential grants (NEMA Disaster Ready Fund, FRRR Small & Vital, Telstra Connected Communities).
      </p>
    </div>
  </section>
  `;
  res.render("index", { title: "Saibai Early Warning System — Executive Summary", body });
});

app.use(overviewRouter);

app.use(implementationRouter);

app.use(costFundingRouter);

app.use(prototypeRouter);

app.use(referencesRouter);

app.use(groupDeclarationRouter);

app.use(designSolutionRouter);

app.use(otherConsiderationsRouter);

app.use(appendicesRouter);

// (Optional) stub routes so your nav doesn’t 404 while you fill pages
app.get("/overview", (req, res) =>
  res.render("index", { title: "Overview", body: "<h2>Overview</h2><p class='muted'>Coming soon.</p>" })
);
app.get("/prototype", (req, res) =>
  res.render("index", { title: "Prototype", body: "<h2>Prototype</h2><p class='muted'>Coming soon.</p>" })
);
app.get("/implementation", (req, res) =>
  res.render("index", { title: "Implementation", body: "<h2>Implementation Plan</h2><p class='muted'>Coming soon.</p>" })
);
app.get("/references", (req, res) =>
  res.render("index", { title: "References (APA 7)", body: "<h2>References</h2><p class='muted'>Add APA list here.</p>" })
);
app.get("/appendices", (req, res) =>
  res.render("index", { title: "Appendices", body: "<h2>Appendices</h2><p class='muted'>Charter, Minutes, Prompt Log.</p>" })
);

app.get("/group_declaration", (req, res) => res.redirect(301, "/group-declaration"));

app.get("/design-solution", (req, res) =>
  res.render("index", {
    title: "Design Solution",
    body: "<h2>Design Solution</h2><p class='muted'>Page loading...</p>"
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running → http://localhost:${PORT}`));
