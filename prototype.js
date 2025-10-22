// prototype.js — Express router for Prototype page (ESM)
// Usage in index.js:
//   import prototypeRouter from "./prototype.js";
//   app.use(prototypeRouter);

import { Router } from "express";

const router = Router();

router.get("/prototype", (req, res) => {
  const body = `
  <section class="section">
    <p class="kicker">Prototyping overview</p>
    <h2 class="mb-4">3D-modelled design of the Saibai rainfall & tide monitoring unit</h2>

    <p>The prototype integrates two measurement subsystems - a <strong>tipping-bucket rain gauge</strong> and a <strong>tide level ultrasonic sensor</strong> - mounted in weather-resistant PVC enclosures for long-term coastal deployment. All diagrams below are drawn and modelled by <em>Anh Ve Pham (2025)</em> unless otherwise cited.</p>

    <div class="gallery mt-4">
        <figure>
            <img src="/images/prototype1.png" alt="Top view funnel of rain gauge with dimensions" />
            <figcaption>Rain gauge funnel - inner collector diameter 80 mm, outlet 10 mm, wall thickness 2 mm. (Anh Ve Pham, 2025)</figcaption>
        </figure>

        <figure>
            <img src="/images/prototype2.png" alt="Rain gauge side section showing funnel and base" />
            <figcaption>Section view: total height 200 mm, funnel 80 mm, base 10 mm. (Anh Ve Pham, 2025)</figcaption>
        </figure>

        <figure>
            <img src="/images/prototype3.png" alt="Base internal mounting layout of rain gauge" />
            <figcaption>Base internal mounting layout - reed switch and magnet alignment. (EricSimerman, 2020)</figcaption>
        </figure>

        <figure>
            <img src="/images/prototype8.png" alt="Top view of sea level sensor housing" />
            <figcaption>Top view of ultrasonic tide sensor housing - outer radius 75 mm, inner 45 mm (PVC stilling well). (Anh Ve Pham, 2025)</figcaption>
        </figure>

        <figure>
            <img src="/images/prototype4.png" alt="Ultrasonic tide sensor PVC housing with canopy" />
            <figcaption>Tide sensor assembly in PVC pipe (height 1200 mm, clearance ≥ 300 mm, canopy + driver board). (Anh Ve Pham, 2025)</figcaption>
        </figure>

        <figure>
            <img src="/images/prototype5.png" alt="System connection overview" />
            <figcaption>System overview: rain gauge (left), tide sensor (centre), ESP32 control unit (right). (Anh Ve Pham, 2025)</figcaption>
        </figure>
    </div>
  </section>

  <section class="section">
    <p class="kicker">Rain gauge mechanism</p>
    <h2 class="mb-4">Tipping-bucket operation principle</h2>

    <div class="grid grid-2">
      <div>
        <p>The internal mechanism is adapted from <em>Dunn, Fowler, Green, & Lewis (2025)</em>, showing a twin-bucket design on a pivot. Each tip represents a fixed volume (e.g. 0.2 mm rainfall). A magnet passes the reed switch each time the bucket tips, generating a digital pulse counted by the ESP32 controller.</p>
        <ul class="list-disc ml-5 mt-2">
          <li><strong>Bucket volume calibration</strong>: Adjustable stop screw allows 0.1–0.5 mm/tip precision.</li>
          <li><strong>Reed switch durability</strong>: Gold-plated contacts rated 10⁷ operations.</li>
          <li><strong>Self-drainage</strong>: Dual outlets prevent stagnation and biofouling.</li>
        </ul>
      </div>
        <figure class="tipping-diagram">
            <img src="/images/prototype6.png" alt="Tipping bucket diagram showing magnet and reed switch" />
            <figcaption>Tipping-bucket mechanism (Dunn et al., 2025).</figcaption>
        </figure>
    </div>
  </section>

  <section class="section">
    <p class="kicker">Ultrasonic tide sensor</p>
    <h2 class="mb-4">JSN-SR04T integration inside stilling well</h2>

    <div class="grid grid-2">
      <figure class="sensor-circle">
        <img src="/images/prototype7.png" alt="JSN-SR04T ultrasonic sensor circular head design" />
        <figcaption>Top view of JSN-SR04T sensor head and cable mount — waterproof ultrasonic transducer. (DIYmall, n.d.)
      </figcaption>
    </figure>
      <div>
        <p>The waterproof ultrasonic sensor measures water level by echo timing. It is enclosed within a 50 mm PVC stilling pipe to reduce wave noise, with the controller housed above flood level under a canopy.</p>
        <ul class="list-disc ml-5 mt-2">
          <li>Sensor height: ~1.2 m above base (prevents submersion)</li>
          <li>Echo distance range: 20–6000 mm</li>
          <li>Accuracy: ± 3 mm</li>
          <li>Power: 5 V @ 2 mA avg</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section">
    <p class="kicker">Electronics and integration</p>
    <h2 class="mb-4">ESP32 controller and data routing</h2>

    <p>The ESP32 microcontroller aggregates rainfall and tide data, applies smoothing and threshold comparison, then triggers alerts via SMS and PA systems. Data logging is implemented on SD card, with optional LoRa backhaul for redundancy.</p>

    <ul class="list-disc ml-5 mt-2">
      <li>ADC inputs: 2 channels (rain, tide)</li>
      <li>Outputs: relay x 2 (PA siren, beacon), UART for SMS module</li>
      <li>Firmware written in C++, includes bilingual alert messages</li>
    </ul>

    <p class="mt-4">All electronic boards are mounted on a driver platform under a weatherproof canopy for ease of inspection and maintenance (Anh Ve Pham, 2025).</p>
    <figure class="controller-img">
        <img src="/images/prototype9.png" alt="ESP32 controller and wiring diagram" />
        <figcaption>ESP32 microcontroller unit integrating rain and tide sensor inputs with relay outputs and SD data logging. (DIYmall, n.d.)
    </figcaption>
    </figure>
  </section>

  <section class="section">
    <p class="kicker">Prototype summary</p>
    <div class="card"><div class="card__body">
      <ul class="list-disc ml-5">
        <li>Modular 3D design enables local fabrication and rapid repair.</li>
        <li>Each sensor uses low-cost, off-the-shelf components under $50.</li>
        <li>Integration verified through CAD fit-testing and simulation.</li>
        <li>All images (except cited) © Anh Ve Pham 2025.</li>
      </ul>
    </div></div>
  </section>
  `;

  res.render("index", { title: "Prototype", body });
});

export default router;