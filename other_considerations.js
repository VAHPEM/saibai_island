// other_considerations.js — Express router for “Other Considerations & Recommendations”
import { Router } from "express";

const router = Router();

router.get("/considerations", (req, res) => {
  const body = `
  <section class="section">
    <p class="kicker">Other considerations</p>
    <h2 class="mb-4">Community, environment & operations</h2>

    <div class="grid grid-3">
      <div class="card"><div class="card__body">
        <h3 class="card__title">Community & culture</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Bilingual (Yumplatok/English) alerts; tone co-designed with elders.</li>
          <li>Local rangers as owners/operators to build trust and adoption.</li>
          <li>Ongoing check-ins with TSIRC to refine messages & thresholds.</li>
        </ul>
      </div></div>

      <div class="card"><div class="card__body">
        <h3 class="card__title">Environment & durability</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Marine-grade fasteners, sealed connectors, PVC stilling wells.</li>
          <li>Monthly visual checks; quarterly calibration; spare kits.</li>
          <li>Solar + LiFePO<sub>4</sub> ensures 24/7 operation in outages.</li>
        </ul>
      </div></div>

      <div class="card"><div class="card__body">
        <h3 class="card__title">Governance & data</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Simple O&M playbook; incident log; alert audit trail.</li>
          <li>Dashboard access for TSIRC; privacy for phone numbers.</li>
          <li>Spare-parts inventory and SLA targets (>90% uptime).</li>
        </ul>
      </div></div>
    </div>
  </section>

  <section class="section">
    <p class="kicker">Community reaction (journey map)</p>
    <h2 class="mb-4">From curiosity to confidence</h2>

    <div class="timeline">
      <div class="timeline__item">
        <div class="timeline__dot"></div>
        <div><strong>Before install</strong> — curiosity, questions about location and sound levels.</div>
      </div>
      <div class="timeline__item">
        <div class="timeline__dot"></div>
        <div><strong>During install</strong> — rangers’ visible role increases ownership and trust.</div>
      </div>
      <div class="timeline__item">
        <div class="timeline__dot"></div>
        <div><strong>First alerts</strong> — bilingual messages improve clarity; confidence rises.</div>
      </div>
      <div class="timeline__item">
        <div class="timeline__dot"></div>
        <div><strong>Long-term</strong> — alerts become routine; system seen as community-led safety net.</div>
      </div>
    </div>
  </section>

  <section class="section">
    <p class="kicker">8. Recommendations</p>
    <h2 class="mb-4">Next steps for TSIRC & partners</h2>

    <div class="grid grid-2">
      <div class="card"><div class="card__body">
        <h3 class="card__title">Actions outside project scope</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Add EWS to TSIRC Disaster Management Plan; define alert roles.</li>
          <li>Apply for funding (NEMA DRF, FRRR Small & Vital, Telstra CC).</li>
          <li>Set up shared support (school/TAFE) for firmware & dashboard.</li>
          <li>Plan replication to Boigu/Dauan after Saibai pilot review.</li>
        </ul>
      </div></div>

      <div class="card"><div class="card__body">
        <h3 class="card__title">Further research</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Long-term calibration/drift of JSN-SR04T & tipping-bucket gauges.</li>
          <li>User studies on alert tone, length, and bilingual phrasing.</li>
          <li>BOM interoperability for regional visibility & redundancy.</li>
          <li>Battery/e-waste end-of-life and recycling pathways.</li>
        </ul>
      </div></div>
    </div>
  </section>
  `;

  res.render("index", { title: "Other Considerations & Recommendations", body });
});

export default router;
