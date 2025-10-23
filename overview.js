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
  `;

  res.render("index", { title: "Overview — EWB Saibai EWS", body });
});

export default router;