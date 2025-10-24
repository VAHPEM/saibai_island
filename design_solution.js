// design_solution.js — Express router for Design Solution page (EWB Saibai EWS)

import { Router } from "express";
const router = Router();

router.get("/design-solution", (req, res) => {
  const body = `
  <section class="exec-summary">

    <!-- Section 6. Design Solution Options -->
    <span class="eyebrow eyebrow--bar">6. DESIGN SOLUTION OPTIONS</span>
    <div class="section-card fade-in">
      <p class="justified">
        In response to the challenges identified on Saibai Island, three distinct design options were considered during the ideation stage.
        Each concept aims to improve the speed, clarity, and reliability of early warnings during flood or heavy rainfall events.
        The designs vary in complexity, cost, and required maintenance but share the goal of empowering the Saibai community through
        localised, bilingual, and sustainable systems.
      </p>
    </div>

    <!-- Option 1 -->
    <span class="eyebrow eyebrow--bar">6.1.1 DESIGN OPTION 1 — Local Tide/Rain IoT Sensors + Auto Alerts</span>
    <div class="section-card fade-in">
      <p class="justified">
        This design involves deploying <strong>solar-powered IoT sensor stations</strong> equipped with an ultrasonic tide sensor (JSN-SR04T)
        and a tipping-bucket rain gauge. Each unit is connected to an <strong>ESP32 microcontroller</strong> that automatically sends data
        to a central dashboard and triggers bilingual alerts when predefined thresholds are exceeded.
      </p>
      <ul class="bullets">
        <li><strong>Advantages:</strong> Fully automated, minimal human input, real-time accuracy, scalable for future expansion.</li>
        <li><strong>Limitations:</strong> Requires initial setup cost and periodic calibration of sensors.</li>
        <li><strong>Adaptation to Saibai:</strong> Uses PVC housings and corrosion-resistant enclosures suitable for tropical marine climates.</li>
      </ul>
    </div>

    <!-- Option 2 -->
    <span class="eyebrow eyebrow--bar">6.1.2 DESIGN OPTION 2 — Bilingual Multi-Channel Warning Network</span>
    <div class="section-card fade-in">
      <p class="justified">
        This option focuses on <strong>enhancing communication redundancy</strong> through multi-channel alert broadcasting.
        It integrates existing loudspeakers, SMS broadcasts, and local FM radio cut-ins, transmitting bilingual audio warnings generated
        by text-to-speech modules and pre-recorded messages.
      </p>
      <ul class="bullets">
        <li><strong>Advantages:</strong> Maximises inclusivity through multiple channels and supports regional expansion.</li>
        <li><strong>Limitations:</strong> Depends on power and internet connectivity; requires coordination between TSIRC and radio operators.</li>
        <li><strong>Adaptation to Saibai:</strong> Bilingual message library tailored to local phrases and emergency terminology.</li>
      </ul>
    </div>

    <!-- Option 3 -->
    <span class="eyebrow eyebrow--bar">6.1.3 DESIGN OPTION 3 — VHF Marine + Radio Cut-ins + Loudhailer System</span>
    <div class="section-card fade-in">
      <p class="justified">
        This approach utilises <strong>existing VHF marine radio frequencies and 4MW broadcast radio cut-ins</strong> to deliver emergency alerts,
        supported by loudhailers installed at key village points. Messages are manually triggered by emergency staff or rangers during extreme conditions.
      </p>
      <ul class="bullets">
        <li><strong>Advantages:</strong> Leverages existing infrastructure and reliable communication range.</li>
        <li><strong>Limitations:</strong> Manual activation, limited automation, and maintenance of loudhailers required.</li>
        <li><strong>Adaptation to Saibai:</strong> Requires integration with local council communication protocols.</li>
      </ul>
    </div>

    <!-- Design Selection -->
    <!-- Design Selection -->
<span class="eyebrow eyebrow--bar">6.2 DESIGN SELECTION — Decision Matrix</span>
<div class="section-card fade-in">
  <p class="justified">
    To select the most suitable design for Saibai Island, all three options were evaluated using the five
    key design criteria: <em>Accuracy & reliability</em>, <em>Availability to locals</em>, <em>Affordability</em>,
    <em>Timeliness</em>, and <em>Sustainability</em>.  
    Each criterion was assigned a weight based on importance (1-5 scale), and each design option was scored
    accordingly. The weighted total determined the preferred solution.
  </p>

  <table class="table-matrix">
    <thead>
      <tr>
        <th rowspan="2" style="width:18%">Design Option</th>
        <th>Accuracy & reliability<br>(5)</th>
        <th>Availability to locals<br>(4)</th>
        <th>Affordability<br>(4)</th>
        <th>Timeliness<br>(3)</th>
        <th>Sustainability<br>(3)</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="option">A. Local tide/rain IoT sensors + auto alerts</th>
        <td>5 × 5<br><span class="matrix-score">(25)</span></td>
        <td>3 × 4<br><span class="matrix-score">(12)</span></td>
        <td>3 × 3<br><span class="matrix-score">(9)</span></td>
        <td>3 × 3<br><span class="matrix-score">(9)</span></td>
        <td>3 × 3<br><span class="matrix-score">(9)</span></td>
        <td><strong>75</strong></td>
      </tr>
      <tr>
        <th class="option">B. Bilingual multi-channel</th>
        <td>3 × 5<br><span class="matrix-score">(15)</span></td>
        <td>4 × 4<br><span class="matrix-score">(16)</span></td>
        <td>4 × 4<br><span class="matrix-score">(16)</span></td>
        <td>4 × 3<br><span class="matrix-score">(12)</span></td>
        <td>3 × 3<br><span class="matrix-score">(9)</span></td>
        <td><strong>68</strong></td>
      </tr>
      <tr>
        <th class="option">C. VHF marine + 4MW radio cut-ins + loudhailer</th>
        <td>3 × 5<br><span class="matrix-score">(15)</span></td>
        <td>4 × 4<br><span class="matrix-score">(16)</span></td>
        <td>2 × 4<br><span class="matrix-score">(8)</span></td>
        <td>3 × 3<br><span class="matrix-score">(9)</span></td>
        <td>4 × 3<br><span class="matrix-score">(12)</span></td>
        <td><strong>60</strong></td>
      </tr>
    </tbody>
  </table>

  <h3 class="mt-4">Rating scale & weights</h3>
<p class="justified">
  We applied a 1–5 performance scale (1 = poor, 5 = excellent) and criterion weights reflecting Saibai priorities:
</p>
<ul class="bullets">
  <li><strong>Accuracy & reliability (×5)</strong> — Highest importance: wrong/late signals risk safety and assets.</li>
  <li><strong>Availability to locals (×4)</strong> — System must be operable & maintainable on-island.</li>
  <li><strong>Affordability (×4)</strong> — Budget constraints require realistic capex/opex.</li>
  <li><strong>Timeliness (×3)</strong> — Rapid alerts matter, but accuracy/availability take precedence.</li>
  <li><strong>Sustainability (×3)</strong> — Solar, durability and corrosion resistance for tropical marine climate.</li>
</ul>

<h3 class="mt-4">Why each option received its scores</h3>

<!-- OPTION A -->
<div class="pad-4 border round mt-2">
  <p class="small"><strong>Option A — Local tide/rain IoT sensors + auto alerts</strong> (total 75)</p>
  <ul class="bullets">
    <li><strong>Accuracy & reliability (5×5=25)</strong> — On-island sensors (ultrasonic tide + tipping-bucket rain) provide
      real-time, ground-truth measurements; ESP32 filtering + hysteresis reduce false triggers.</li>
    <li><strong>Availability to locals (3×4=12)</strong> — Requires basic calibration and swap-outs; feasible for rangers after short training.</li>
    <li><strong>Affordability (3×3=9)</strong> — Low-cost components (ESP32, PVC stilling pipe, off-the-shelf gauges), but multiple stations add up.</li>
    <li><strong>Timeliness (3×3=9)</strong> — Automatic thresholds → alerts within minutes; slight debounce to avoid spurious spikes.</li>
    <li><strong>Sustainability (3×3=9)</strong> — Solar + LiFePO₄ and stainless/PVC housings; periodic maintenance still needed in salt air.</li>
  </ul>
</div>

<!-- OPTION B -->
<div class="pad-4 border round mt-4">
  <p class="small"><strong>Option B — Bilingual multi-channel</strong> (total 68)</p>
  <ul class="bullets">
    <li><strong>Accuracy & reliability (3×5=15)</strong> — Relies on upstream data/manual triggers, not local sensing; good reliability but not ground-truth.</li>
    <li><strong>Availability to locals (4×4=16)</strong> — Community can receive via PA/SMS/radio; ops simple once configured.</li>
    <li><strong>Affordability (4×4=16)</strong> — Leverages existing loudspeakers/radio infrastructure; mainly content + integration costs.</li>
    <li><strong>Timeliness (4×3=12)</strong> — Broadcasts are fast once initiated, but initiation can lag without automation.</li>
    <li><strong>Sustainability (3×3=9)</strong> — Ongoing dependence on power/comms; manageable but less autonomous than A.</li>
  </ul>
</div>

<!-- OPTION C -->
<div class="pad-4 border round mt-4">
  <p class="small"><strong>Option C — VHF marine + 4MW radio cut-ins + loudhailer</strong> (total 60)</p>
  <ul class="bullets">
    <li><strong>Accuracy & reliability (3×5=15)</strong> — Communication is robust, but accuracy ties to manual judgment/external sources.</li>
    <li><strong>Availability to locals (4×4=16)</strong> — Radios are familiar; activation procedures are clear for rangers.</li>
    <li><strong>Affordability (2×4=8)</strong> — Hardware, installs, and maintenance of loudhailers/antennae increase costs.</li>
    <li><strong>Timeliness (3×3=9)</strong> — Manual triggering introduces delay compared to automated thresholds.</li>
    <li><strong>Sustainability (4×3=12)</strong> — Radio gear is durable and weather-hardy; good long-term resilience.</li>
  </ul>
</div>

<p class="justified mt-4">
  The matrix and justifications show <strong>Option A</strong> best satisfies Saibai’s priorities: it delivers <em>local, automated, and accurate</em>
  detection with acceptable cost and manageable maintenance. Therefore, Option A is selected for detailed design and implementation.
</p>

  <p class="justified">
    The decision matrix clearly shows that <strong>Design Option A — Local tide/rain IoT sensors + auto alerts</strong> 
    scored the highest (75 points). This option offers superior accuracy, automation, and sustainability, 
    making it the most effective and scalable early warning solution for Saibai Island.
  </p>
</div>

    <!-- Detailed Design -->
<span class="eyebrow eyebrow--bar">6.3. DETAILED DESIGN — SELECTED SOLUTION</span>
<div class="section-card no-lift">
  <p class="justified">
    The selected design consists of two pilot <strong>IoT-based early warning stations</strong> — 
    one near the jetty and another near the airstrip. Each unit integrates a waterproof ultrasonic tide sensor 
    and a tipping-bucket rain gauge connected to an <strong>ESP32 microcontroller</strong> that continuously monitors 
    environmental data. The system operates entirely on solar energy with battery backup, ensuring 24/7 uptime.
  </p>

  <p class="justified">
    When thresholds are exceeded, the ESP32 triggers bilingual alerts via SMS, local PA system, 
    and VHF cut-ins. Data is stored on a lightweight web dashboard for real-time monitoring by TSIRC officers and rangers.
  </p>

  <figure class="figure flow">
  <svg viewBox="0 0 1100 420" role="img" aria-label="High-level functional flow of Saibai IoT Early Warning System">
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L10,3 L0,6 Z"></path>
      </marker>
      <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0e7490" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#164e63" stop-opacity="0.9"/>
      </linearGradient>
    </defs>

    <!-- Column guides (invisible) -->
    <!-- Sensors -->
    <g class="node" transform="translate(40,40)">
      <rect rx="14" ry="14" width="230" height="140"></rect>
      <text x="115" y="34" class="title">Sensors</text>
      <text x="115" y="70" class="item">Ultrasonic tide (JSN-SR04T)</text>
      <text x="115" y="98" class="item">Tipping-bucket rain gauge</text>
      <text x="115" y="126" class="item">Temp/voltage (health)</text>
      <g class="badge" transform="translate(10,10)">
        <rect rx="10" ry="10" width="84" height="22"></rect>
        <text x="42" y="16">INPUT</text>
      </g>
    </g>

    <!-- Controller -->
    <g class="node" transform="translate(315,60)">
      <rect rx="14" ry="14" width="220" height="110"></rect>
      <text x="110" y="40" class="title">ESP32 Controller</text>
      <text x="110" y="72" class="item">Read, filter, smooth</text>
      <text x="110" y="96" class="item">Solar + LiFePO₄ power</text>
    </g>

    <!-- Decision -->
    <g class="node" transform="translate(590,60)">
      <rect rx="14" ry="14" width="220" height="110"></rect>
      <text x="110" y="40" class="title">Decision / Thresholds</text>
      <text x="110" y="72" class="item">Compare to config.json</text>
      <text x="110" y="96" class="item">Debounce + hysteresis</text>
    </g>

    <!-- Alerts -->
    <g class="node" transform="translate(865,20)">
      <rect rx="14" ry="14" width="220" height="100"></rect>
      <text x="110" y="32" class="title">Alerts</text>
      <text x="110" y="60" class="item">PA/Siren • SMS • VHF/Radio</text>
      <g class="badge badge--accent" transform="translate(10,10)">
        <rect rx="10" ry="10" width="84" height="22"></rect>
        <text x="42" y="16">OUTPUT</text>
      </g>
    </g>

    <!-- Logging -->
    <g class="node" transform="translate(865,140)">
      <rect rx="14" ry="14" width="220" height="100"></rect>
      <text x="110" y="32" class="title">Data Logging</text>
      <text x="110" y="60" class="item">SD card • ring buffer</text>
    </g>

    <!-- Dashboard -->
    <g class="node" transform="translate(865,260)">
      <rect rx="14" ry="14" width="220" height="110"></rect>
      <text x="110" y="40" class="title">Dashboard (TSIRC)</text>
      <text x="110" y="72" class="item">Live charts & device health</text>
      <text x="110" y="96" class="item">Ack & audit trail</text>
    </g>

    <!-- Arrows -->
    <g class="arrows">
      <line x1="270" y1="110" x2="315" y2="110"></line>
      <line x1="535" y1="115" x2="590" y2="115"></line>
      <line x1="810" y1="70"  x2="865" y2="70"></line>
      <line x1="810" y1="115" x2="865" y2="190"></line>
      <line x1="810" y1="140" x2="865" y2="300"></line>
    </g>

    <!-- Legend -->
    <g class="legend" transform="translate(40,215)">
      <rect rx="10" ry="10" width="540" height="145"></rect>
      <text x="20" y="36" class="legend-title">Flow Legend</text>
      <text x="20" y="66" class="legend-item">Sensors → Controller: raw readings (tide, rainfall, health)</text>
      <text x="20" y="92" class="legend-item">Controller → Decision: filtered & smoothed values</text>
      <text x="20" y="118" class="legend-item">Decision → Outputs: alerts if thresholds exceeded; always log data</text>
    </g>
  </svg>
  <figcaption> High-level functional flow of the Saibai IoT Early Warning System.</figcaption>
</figure>

  <figure class="figure">
    <img src="/images/detailed-design.png" alt="Detailed 3D design model" onerror="this.closest('figure').remove()">
    <figcaption>Figure 4.2 — Conceptual 3D model showing sensor, housing, and communication modules (Source: Ve Anh Pham, 2025)</figcaption>
  </figure>

  <h3 class="mt-4">Community Concerns and Responses</h3>
  <ul class="bullets">
    <li><strong>Maintenance:</strong> Local ranger training ensures easy calibration and part replacement.</li>
    <li><strong>Power reliability:</strong> Solar + LiFePO₄ system with surge protection ensures 24/7 operation.</li>
    <li><strong>Cultural appropriateness:</strong> Messages co-developed with community elders for clarity and respect.</li>
    <li><strong>Environmental resilience:</strong> PVC housings and sealed electronics withstand tropical conditions.</li>
  </ul>
</div>

  </section>
  `;

  res.render("index", { title: "Design Solution — EWB Saibai EWS", body });
});

export default router;
