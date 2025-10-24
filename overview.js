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
    <span class="eyebrow eyebrow--bar">4 DESIGN CRITERIA</span>
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
  </section>
  
      <!-- HOW IT WORKS -->
    <span class="eyebrow eyebrow--bar">5. HOW IT WORKS</span>
    <div id="how-it-works" class="section-card grid grid-2 fade-in">
      <div>
        <h3>End-to-end flow</h3>
        <ol class="steps">
          <li><strong>Sensors</strong> capture local <em>water level</em> and <em>rainfall</em>.</li>
          <li><strong>Processor</strong> filters readings and compares them to thresholds.</li>
          <li><strong>Trigger</strong> builds a bilingual alert payload with level, location, time, and recommended action.</li>
          <li><strong>Auto-send</strong> via PA/siren, SMS, and 4MW radio cut-ins.</li>
          <li><strong>Community</strong> receives timely local warnings—within seconds.</li>
        </ol>
        <p class="micro justified">Mainland forecasts can miss local effects; on-island sensors provide the real water level and rainfall.</p>
      </div>
      <figure class="media">
        <img src="/img/how-it-works/how-it-works-flow.png" alt="Flow diagram of the Saibai EWS from sensors to community alerts" loading="lazy">
        <figcaption>System flow at a glance.</figcaption>
      </figure>
    </div>

    <!-- SENSORS -->
    <span class="eyebrow eyebrow--bar">6. SENSORS</span>
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
      <figure class="media col-span-2">
        <img src="/img/how-it-works/sensors.png" alt="Ultrasonic tide sensor and tipping-bucket rain gauge" loading="lazy">
        <figcaption>Hardware used for local measurements.</figcaption>
      </figure>
    </div>

    <!-- CALCULATION FORMULAS -->
    <span class="eyebrow eyebrow--bar">7. CALCULATION FORMULAS</span>
    <div class="section-card grid grid-2 fade-in">
      <div>
        <h4>Tide height</h4>
        <p><strong>Distance (cm)</strong> = (T (μs) × speed of sound (cm/μs)) ÷ 2</p>
        <p><strong>Tide height (cm)</strong> = H<sub>ref</sub> (cm) − Distance (cm)</p>
        <p class="micro">H<sub>ref</sub> is the sensor’s mounting height above the local zero level.</p>
        <p class="warn">Warn when Tide height &gt; 386&nbsp;cm (HAT).</p>
      </div>
      <div>
        <h4>Rain accumulation</h4>
        <p><strong>mm per tip</strong> = (bucket volume (mL) ÷ funnel area (cm²)) × 10</p>
        <p><strong>Rain total (mm)</strong> = N × mm per tip</p>
        <p class="warn">Warn when daily total &gt; 120&nbsp;mm.</p>
      </div>
      <figure class="media col-span-2">
        <img src="/img/how-it-works/formulas.png" alt="Formulas for tide height and rain accumulation" loading="lazy">
        <figcaption>From device physics to thresholds.</figcaption>
      </figure>
    </div>
  </section>
  `;

  res.render("index", { title: "Overview — EWB Saibai EWS", body });
});

export default router;
