// overview.js — Express router for the Overview page (EWB Saibai EWS)

import { Router } from "express";
const router = Router();

router.get("/overview", (req, res) => {
  const body = `
  <section class="exec-summary">
    <!-- Project Details -->
    <span class="eyebrow eyebrow--bar">1. PROJECT DETAILS</span>
    <div class="section-card fade-in">
      <p class="justified">
        <strong>Saibai Island</strong>, located in the Torres Strait, faces frequent tidal flooding and heavy rainfall that threaten
        homes, transport, and essential services. Current warning systems rely on mainland networks that often fail during storms, leaving residents vulnerable.
      </p>

      <p class="justified">
        The <strong>Saibai ICT Early Warning System (EWS)</strong> aims to provide an <strong>automated, bilingual, and solar-powered alert network</strong>
        that enables local hazard monitoring and rapid dissemination of tide and rainfall warnings.
      </p>

      <div class="meta-grid">
        <p><strong>Design Area:</strong> 6.1 — Early Warning Systems</p>
        <p><strong>Project Opportunity:</strong> Strengthening the integration of hazard monitoring, forecasting, communication, and preparedness activities.</p>
        <p><strong>Needs Statement:</strong> How might we design a reliable, bilingual early-warning system for Saibai Island that operates independently of mainland infrastructure?</p>
      </div>
    </div>

    <!-- Background -->
    <span class="eyebrow eyebrow--bar">2. BACKGROUND</span>
    <div class="section-card fade-in">
      <p class="justified">
        Saibai’s low elevation and remoteness from mainland Australia make it highly susceptible to rising sea levels, king tides, and
        intense tropical rainfall. The existing emergency alerts depend on limited mobile coverage and manual radio broadcasts,
        which are inconsistent and often delayed.
      </p>

      <ul class="bullets">
        <li><strong>Context:</strong> A low-lying island community exposed to recurrent coastal flooding and extreme weather.</li>
        <li><strong>Significance:</strong> Reliable, locally managed alerts reduce risks to homes, infrastructure, and community safety.</li>
        <li><strong>Current Efforts:</strong> SMS and radio warnings from mainland meteorological offices; these lack real-time local data.</li>
        <li><strong>Gap:</strong> No locally autonomous system for continuous monitoring and bilingual dissemination.</li>
        <li><strong>Goal:</strong> Create a resilient, locally operated solution that complements national systems and empowers Saibai residents.</li>
      </ul>
    </div>

    <!-- Problem Description -->
    <span class="eyebrow eyebrow--bar">3. PROBLEM DESCRIPTION</span>
    <div class="section-card fade-in">
      <p class="justified">
        <strong>User Needs Statement:</strong> Saibai residents and rangers need an affordable and self-sustaining system that can
        automatically detect rising tides and heavy rainfall, and issue clear bilingual alerts through multiple communication channels.
      </p>
      <p class="justified">
        <strong>Ideal Outcome:</strong> A network of solar-powered IoT sensors that deliver timely, accurate, and inclusive alerts via
        siren, SMS, and radio—ensuring community safety even when external communication fails.
      </p>
    </div>

    <!-- Design Criteria -->
    <span class="eyebrow eyebrow--bar">4. DESIGN CRITERIA</span>
    <div class="section-card grid grid-2 fade-in">
      <div class="criteria-box">
        <h3>Accuracy & Reliability</h3>
        <p>The warning system must provide precise sensor readings and consistent operation under tropical weather.</p>
        <p class="criteria-just">Ensures dependable alerts that inform evacuation and response decisions.</p>
      </div>

      <div class="criteria-box">
        <h3>Availability to Local Community</h3>
        <p>The system must be simple to operate and maintain by local rangers using available tools.</p>
        <p class="criteria-just">Empowers Saibai residents to independently manage and sustain the EWS.</p>
      </div>

      <div class="criteria-box">
        <h3>Affordability</h3>
        <p>Use low-cost, readily available components such as ESP32 boards and PVC-based housings.</p>
        <p class="criteria-just">Ensures scalability and long-term sustainability within community budgets.</p>
      </div>

      <div class="criteria-box">
        <h3>Timeliness</h3>
        <p>Alerts must reach users within minutes of threshold detection via multiple communication methods.</p>
        <p class="criteria-just">Critical for minimizing damage and maximizing safety response time.</p>
      </div>

      <div class="criteria-box">
        <h3>Sustainability</h3>
        <p>Operate entirely on solar energy and use corrosion-resistant materials suited for tropical environments.</p>
        <p class="criteria-just">Reduces maintenance frequency and environmental footprint.</p>
      </div>
    </div>

    <!-- HOW IT WORKS (Block Chart) -->
    <span class="eyebrow eyebrow--bar">5. HOW IT WORKS</span>
<div class="section-card no-lift">
      <figure class="flow" role="img" aria-labelledby="how-title">
        <svg viewBox="0 0 960 420" xmlns="http://www.w3.org/2000/svg">
          <title id="how-title">Saibai EWS — How it works block chart</title>
          <defs>
            <!-- Node fill gradient (dark panel for good contrast with white text) -->
            <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#153341"/>
              <stop offset="100%" stop-color="#0f2430"/>
            </linearGradient>
            <!-- Arrowhead -->
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#94d2ef"/>
            </marker>
          </defs>

          <!-- Nodes (row 1) -->
          <g class="node" transform="translate(40,60)">
            <rect rx="12" ry="12" width="180" height="90"/>
            <text class="title" x="90" y="28">Sensors</text>
            <text class="item" x="90" y="54">Ultrasonic tide</text>
            <text class="item" x="90" y="74">Tipping-bucket rain</text>
          </g>

          <g class="node" transform="translate(260,60)">
            <rect rx="12" ry="12" width="180" height="90"/>
            <text class="title" x="90" y="28">Edge Processor</text>
            <text class="item" x="90" y="54">ESP32, filter/debounce</text>
            <text class="item" x="90" y="74">Local clock &amp; power</text>
          </g>

          <g class="node" transform="translate(480,60)">
            <rect rx="12" ry="12" width="180" height="90"/>
            <text class="title" x="90" y="28">Rules &amp; Thresholds</text>
            <text class="item" x="90" y="54">Tide &gt; HAT</text>
            <text class="item" x="90" y="74">Rain &gt; daily limit</text>
          </g>

          <g class="node" transform="translate(700,60)">
            <rect rx="12" ry="12" width="180" height="90"/>
            <text class="title" x="90" y="28">Alert Builder</text>
            <text class="item" x="90" y="54">Bilingual message</text>
            <text class="item" x="90" y="74">Level • time • action</text>
          </g>

          <!-- Nodes (row 2 — channels) -->
          <g class="node" transform="translate(560,220)">
            <rect rx="12" ry="12" width="160" height="80"/>
            <text class="title" x="80" y="28">Siren / PA</text>
            <text class="item" x="80" y="54">Local audio</text>
          </g>

          <g class="node" transform="translate(700,220)">
            <rect rx="12" ry="12" width="160" height="80"/>
            <text class="title" x="80" y="28">SMS</text>
            <text class="item" x="80" y="54">Mobiles on-island</text>
          </g>

          <g class="node" transform="translate(840,220)">
            <rect rx="12" ry="12" width="160" height="80"/>
            <text class="title" x="80" y="28">Radio</text>
            <text class="item" x="80" y="54">4MW cut-ins</text>
          </g>

          <!-- Sink (community) -->
          <g class="node" transform="translate(680,340)">
            <rect rx="12" ry="12" width="200" height="70"/>
            <text class="title" x="100" y="30">Residents &amp; Rangers</text>
            <text class="item" x="100" y="52">Receive timely alerts</text>
          </g>

          <!-- Side node (optional logging) -->
          <g class="node" transform="translate(260,220)">
            <rect rx="12" ry="12" width="180" height="80"/>
            <text class="title" x="90" y="28">Data Log</text>
            <text class="item" x="90" y="54">SD/Flash, audit trail</text>
          </g>

          <!-- Badge -->
          <g class="badge" transform="translate(40,20)">
            <rect rx="8" ry="8" width="150" height="28"/>
            <text x="75" y="19">Solar + Battery</text>
          </g>

          <!-- Arrows -->
          <g class="arrows">
            <!-- row 1 links -->
            <line x1="220" y1="105" x2="260" y2="105"/>
            <line x1="440" y1="105" x2="480" y2="105"/>
            <line x1="660" y1="105" x2="700" y2="105"/>

            <!-- to logging -->
            <line x1="350" y1="150" x2="350" y2="220"/>

            <!-- branching to channels -->
            <line x1="790" y1="150" x2="640" y2="220"/>
            <line x1="790" y1="150" x2="780" y2="220"/>
            <line x1="790" y1="150" x2="920" y2="220"/>

            <!-- channels to community -->
            <line x1="640" y1="300" x2="780" y2="340"/>
            <line x1="780" y1="300" x2="780" y2="340"/>
            <line x1="920" y1="300" x2="820" y2="340"/>
          </g>

        </svg>
        <figcaption class="small muted" style="margin-top:.5rem">
          Local sensors feed an edge controller. Thresholds trigger a bilingual alert that is sent via siren/PA, SMS, and radio to the community.
        </figcaption>
      </figure>
    </div>

    <!-- SENSORS -->
    <span class="eyebrow eyebrow--bar">5.1 SENSORS</span>
    <div class="section-card grid grid-2 fade-in">
      <div>
        <h3>Tide sensor (ultrasonic)</h3>
        <ul class="bullets">
          <li>Sends echo pulses and measures time-of-flight to the water surface.</li>
          <li>Farther echo → <em>smaller</em> tide; closer echo → <em>bigger</em> tide.</li>
        </ul>
      </div>
      <div>
        <h3>Rain sensor (tipping-bucket)</h3>
        <ul class="bullets">
          <li>Funnel fills a seesaw bucket; each tip equals a fixed millimetres of rain.</li>
          <li>Fewer tips → light rain; more tips → heavy rain.</li>
        </ul>
      </div>
<div class="img-two-up span-2">
  <figure class="sensor">
    <img src="/images/TideSensor.jpg" alt="Ultrasonic tide sensor (e.g., JSN-SR04T) mounted for tide level measurement" loading="lazy">
    <figcaption>Waterproof ultrasonic transducer. (DIYmall, n.d.)</figcaption>
  </figure>

  <figure class="sensor">
    <img src="/images/RainSensor.jpg" alt="Tipping-bucket rain gauge used to measure rainfall" loading="lazy">
    <figcaption>Tipping-bucket mechanism (Dunn et al., 2025).</figcaption>
  </figure>
</div>


    </div>

<!-- CALCULATION FORMULAS -->
<span class="eyebrow eyebrow--bar">5.2 CALCULATION FORMULAS</span>
<div class="section-card fade-in">
  <div class="grid grid-2">
    <!-- Tide sensor (boxed) -->
    <div class="card">
      <div class="card__body">
        <h4>Tide sensor</h4>

        <p><strong>What is measured:</strong> the echo time <em>T</em>.</p>

        <p>
          <strong>Step 1 — distance to water (cm) (Bakker, 2021):</strong><br>
          <code>Distance (cm) = (T (µs) × speed of sound (cm/µs)) ÷ 2</code><br>
          <span class="small muted">Use ≈ 0.0343&nbsp;cm/µs at 20&nbsp;°C; adjust for temperature if available.</span>
        </p>

        <p>
          <strong>Step 2 — tide height (cm):</strong><br>
          <code>Tide height (cm) = H<sub>ref</sub> (cm) − Distance (cm)</code><br>
          <span class="micro">H<sub>ref</sub> is the sensor’s mounting height above the local zero level.</span>
        </p>

        <p class="warn">
          <strong>Warning:</strong> Tide height &gt; <strong>386&nbsp;cm (HAT)</strong> (Department of Transport and Main Roads, 2024).
        </p>
      </div>
    </div>

    <!-- Rain sensor (boxed) -->
    <div class="card">
      <div class="card__body">
        <h4>Rain sensor</h4>

        <p><strong>What is measured:</strong> number of bucket tips <em>N</em>.</p>

        <p>
          <strong>Step 1 — Pre-calc once (mm per tip) (Paulph, 2019):</strong><br>
          <code>mm_per_tip = (bucket_volume (mL) ÷ funnel_area (cm²)) × 10</code>
        </p>

        <p>
          <strong>Step 2 — Rain total (mm):</strong><br>
          <code>Rain total (mm) = N × mm_per_tip</code>
        </p>

        <p class="warn">
          <strong>Warning:</strong> Rain total (mm) &gt; <strong>120&nbsp;mm</strong> (in a 24-hour period).
        </p>
      </div>
    </div>
  </div>
</div>

  </section>
  `;

  res.render("index", { title: "Overview — EWB Saibai EWS", body, theme: "sunset" });
});

export default router;
