// references.js — Express router for References page (APA 7 format)
// Usage in index.js:
//   import referencesRouter from "./references.js";
//   app.use(referencesRouter);

import { Router } from "express";

const router = Router();

router.get("/references", (req, res) => {
  const body = `
  <section class="section">
    <p class="kicker">References</p>
    <h2 class="mb-4">Reference List (APA 7th Edition)</h2>

    <div class="card"><div class="card__body">
      <ol class="list-decimal ml-5 space-y-3">

        <li>Bakker, B. (2021). <em>How to use an HC-SR04 Ultrasonic Distance Sensor with Arduino</em>. Makerguides. <a href="https://saliterman.umn.edu/sites/saliterman.umn.edu/files/files/general/hc-sr04_ultrasonic_sensor_with_arduino_tutorial_5_examples.pdf" target="_blank">PDF</a></li>
        
        <li>Cuba, M., Durán, J., & Sanchiz, C. (2025). <em>Resilient Voices: Language as a Pillar in Indigenous Risk Management</em> – CLEAR Global. CLEAR Global. <a href="https://clearglobal.org/resilient-voices-language-as-a-pillar-in-indigenous-risk-management/" target="_blank">https://clearglobal.org/resilient-voices-language-as-a-pillar-in-indigenous-risk-management/</a></li>

        <li>Department of Transport and Main Roads. (2024). <em>BlueBook 2024 Torres Strait</em>.</li>

        <li>DIYmall. (n.d.). <em>Waterproof ultrasonic module JSN-SR04T water proof integrated distance measuring transducer sensor for Arduino</em>. Amazon Australia. <a href="https://www.amazon.com.au/Waterproof-Ultrasonic-JSN-SR04T-Integrated-Transducer/dp/B07FQCNXPP" target="_blank">https://www.amazon.com.au/Waterproof-Ultrasonic-JSN-SR04T-Integrated-Transducer/dp/B07FQCNXPP</a></li>

        <li>DIYmall. (n.d.). <em>DOIT DEVIT V1 ESP32-WROOM-32 development board ESP32 ESP-32S WiFi+Bluetooth-compatible dev module CP2102 for Arduino</em>. Amazon Australia. <a href="https://www.amazon.com.au/ESP32-WROOM-32-Development-ESP-32S-Bluetooth-Arduino/dp/B084KWNMM4" target="_blank">https://www.amazon.com.au/ESP32-WROOM-32-Development-ESP-32S-Bluetooth-Arduino/dp/B084KWNMM4</a></li>

        <li>Dunn, R. E., Fowler, H. J., Green, A. C., & Lewis, E. (2025). Tipping-bucket rain gauges: A review of the undercatch phenomenon, and methods for its reduction and correction. <em>Weather</em>. Advance online publication. <a href="https://doi.org/10.1002/wea.7736" target="_blank">https://doi.org/10.1002/wea.7736</a></li>

        <li>Engineers Without Borders. (2025). <em>EWB Challenge | Saibai Island, TSIRC</em>. EWB Challenge. <a href="https://ewbchallenge.org/challenge/saibai-island-tsirc/" target="_blank">https://ewbchallenge.org/challenge/saibai-island-tsirc/</a></li>

        <li>Foundation for Rural and Regional Renewal. (2025). <em>Strengthening Rural Communities – Small & Vital Program</em>. <a href="https://frrr.org.au/funding/src-small-vital" target="_blank">https://frrr.org.au/funding/src-small-vital</a></li>

        <li>Foundation for Rural and Regional Renewal & Telstra. (2024). <em>Telstra Connected Communities Program</em>. <a href="https://frrr.org.au/funding/telstra-connected-communities-program" target="_blank">https://frrr.org.au/funding/telstra-connected-communities-program</a></li>

        <li>National Emergency Management Agency. (2025). <em>Disaster Ready Fund Round Three 2025–26 Guidelines</em>. Australian Government. <a href="https://www.nema.gov.au/our-work/key-programs/disaster-ready-fund" target="_blank">https://www.nema.gov.au/our-work/key-programs/disaster-ready-fund</a></li>

        <li>Paulph. (2019). <em>A Simple Temperature and Rainfall Data Logger</em>. Arduino Project Hub. <a href="https://projecthub.arduino.cc/Paulph/a-simple-temperature-and-rainfall-data-logger-141214" target="_blank">https://projecthub.arduino.cc/Paulph/a-simple-temperature-and-rainfall-data-logger-141214</a></li>

        <li>ProSense Pty Ltd. (2023). <em>Low cost tipping bucket rain gauge [Product image]</em>. ProSense. <a href="https://www.prosense.com.au/product-page/low-cost-tipping-bucket-rain-gauge" target="_blank">https://www.prosense.com.au/product-page/low-cost-tipping-bucket-rain-gauge</a></li>

        <li>Rose, A., Wei, D., Machado, J., & Spencer, K. (2023). Benefit–Cost Analysis of Low-Cost Flood Inundation Sensors. <em>Natural Hazards Review, 24</em>(1). <a href="https://doi.org/10.1061/(asce)nh.1527-6996.0000596" target="_blank">https://doi.org/10.1061/(asce)nh.1527-6996.0000596</a></li>

        <li>Simerman, E. (2020). <em>Tipping bucket rain gauge</em>. GrabCAD. <a href="https://grabcad.com/library/tipping-bucket-rain-gauge-1" target="_blank">https://grabcad.com/library/tipping-bucket-rain-gauge-1</a></li>

        <li>United Nations Office for Disaster Risk Reduction. (2015). <em>Sendai Framework for Disaster Risk Reduction 2015–2030</em>. United Nations. <a href="https://www.undrr.org/publication/sendai-framework-disaster-risk-reduction-2015-2030" target="_blank">https://www.undrr.org/publication/sendai-framework-disaster-risk-reduction-2015-2030</a></li>

        <li>United Nations Environment Programme (UNEP). (2023). <em>An early warning system for disasters takes shape in Timor-Leste</em>. UNEP. <a href="https://www.unep.org/news-and-stories/story/early-warning-system-disasters-takes-shape-timor-leste" target="_blank">https://www.unep.org/news-and-stories/story/early-warning-system-disasters-takes-shape-timor-leste</a></li>
      </ol>
    </div></div>

    <p class="muted mt-6">All references are formatted in APA 7th edition. Accessed October 2025.</p>
  </section>
  `;

  res.render("index", { title: "References", body });
});

export default router;