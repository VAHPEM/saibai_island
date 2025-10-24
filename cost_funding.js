// cost_funding.js — Express router for Cost Analysis & Funding (ESM)
// Usage in index.js:
//   import costFundingRouter from "./cost_funding.js";
//   app.use(costFundingRouter);

import { Router } from "express";

const router = Router();

router.get(["/cost", "/cost-and-funding"], (req, res) => {
  const body = `
  <section class="section">
    <p class="kicker">Cost analysis</p>
    <h2 class="mb-4">Bill of Materials (per device)</h2>

    <div class="card"><div class="card__body">

      <!-- Bordered BoM table -->
      <div class="table-wrap">
        <table class="table table--bom w-full">
          <thead>
            <tr>
              <th>Component</th>
              <th>Spec / Notes</th>
              <th class="num">Qty</th>
              <th class="num">Unit (AUD)</th>
              <th class="num">Total (AUD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ultrasonic tide sensor</td>
              <td>JSN-SR04T + PVC stilling well</td>
              <td class="num">1</td>
              <td class="num">65</td>
              <td class="num">65</td>
            </tr>
            <tr>
              <td>Tipping-bucket rain gauge</td>
              <td>Magnet + reed switch; mm per tip calibration</td>
              <td class="num">1</td>
              <td class="num">120</td>
              <td class="num">120</td>
            </tr>
            <tr>
              <td>ESP32 DevKit</td>
              <td>Pre-flashed firmware</td>
              <td class="num">1</td>
              <td class="num">20</td>
              <td class="num">20</td>
            </tr>
            <tr>
              <td>Solar + battery kit</td>
              <td>Panel, charge controller, LiFePO<sub>4</sub></td>
              <td class="num">1</td>
              <td class="num">180</td>
              <td class="num">180</td>
            </tr>
            <tr>
              <td>Enclosure & mounts</td>
              <td>IP-rated box, brackets, gaskets, conduit</td>
              <td class="num">1</td>
              <td class="num">85</td>
              <td class="num">85</td>
            </tr>
            <tr>
              <td>Wiring & sundries</td>
              <td>Cable, fuses, crimps, sealant</td>
              <td class="num">1</td>
              <td class="num">40</td>
              <td class="num">40</td>
            </tr>
            <tr>
              <td colspan="4" class="card__title">Estimated per device</td>
              <td class="num card__title">470</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="small mt-2">Notes: unit prices are indicative from retail sources and slides; bulk buys may reduce costs. Transport & install not included.</p>
    </div></div>
  </section>

  <section class="section">
    <p class="kicker">Project budget</p>
    <h2 class="mb-4">Multi-site rollout estimate</h2>

    <div class="grid grid-3">
      <div class="card"><div class="card__body">
        <h3 class="card__title">Hardware (4 sites)</h3>
        <p class="mt-2">4 × devices @ $470 ≈ <strong>$1,880</strong></p>
        <ul class="list-disc ml-5 mt-2">
          <li>North, South, East, West coast placements</li>
          <li>Includes sensors, ESP32, solar, enclosure</li>
        </ul>
      </div></div>
      <div class="card"><div class="card__body">
        <h3 class="card__title">Deployment & spares</h3>
        <p class="mt-2">Install, freight, spares kit (≈ 35%) = <strong>$650</strong></p>
        <ul class="list-disc ml-5 mt-2">
          <li>Travel & consumables</li>
          <li>1 hot-spare per sensor type</li>
        </ul>
      </div></div>
      <div class="card"><div class="card__body">
        <h3 class="card__title">Comms integration</h3>
        <p class="mt-2">PA/siren & radio linkage + SMS gateway (year 1) = <strong>$900</strong></p>
        <ul class="list-disc ml-5 mt-2">
          <li>Existing PA/radio used where possible</li>
          <li>SMS gateway service fees</li>
        </ul>
      </div></div>
    </div>

    <div class="card mt-6"><div class="card__body">
      <table class="table w-full">
        <tbody>
          <tr><td><strong>Capital (setup)</strong></td><td class="num"><strong>$3,430</strong></td></tr>
          <tr><td>Operating (O&M per year)</td><td class="num">$100</td></tr>
          <tr><td>5-year total (incl. O&M)</td><td class="num">≈ $3,930</td></tr>
        </tbody>
      </table>
    </div></div>
  </section>

  <section class="section">
    <p class="kicker">Funding & sustainability</p>
    <h2 class="mb-4">How to pay for it</h2>

    <div class="grid grid-3">
      <div class="card"><div class="card__body">
        <h3 class="card__title">Grants</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Disaster Ready Fund (NEMA) - resilience infrastructure</li>
          <li>FRRR - Small & Vital - remote community safety projects</li>
          <li>Telstra Connected Communities - digital inclusion & safety</li>
        </ul>
      </div></div>

      <div class="card"><div class="card__body">
        <h3 class="card__title">Co-funding</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>TSIRC in-kind: ranger time, site access, existing PA/radio</li>
          <li>Partnerships: radio providers or BOM data sharing</li>
        </ul>
      </div></div>

      <div class="card"><div class="card__body">
        <h3 class="card__title">Financial outlook</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Low O&M (&lt; $100/year)</li>
          <li>5-year affordability well within council budgets</li>
          <li>Scalable to the $200k-$300k program if grant-funded</li>
        </ul>
      </div></div>
    </div>

    <div class="alert mt-6">
      <strong>Next steps:</strong> Confirm unit pricing with vendors (quotes), finalise transport costs, and align grant timelines with rollout phases.
    </div>
  </section>
  `;

  res.render("index", { title: "Cost & Funding", body });
});

export default router;
