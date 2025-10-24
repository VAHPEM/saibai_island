// appendices.js — Saibai EWS (deep-dive appendices to lift total word count)
import { Router } from "express";
const router = Router();

router.get("/appendices", (_req, res) => {
  const body = `
  <section class="exec-summary">

    <span class="eyebrow eyebrow--bar">Appendix A — Community Profile & Context</span>
    <div class="section-card fade-in">
      <p class="justified">
        Saibai Island sits close to the Papua New Guinea coastline and forms part of the Northern Island group of the Torres
        Strait. The community is predominantly Torres Strait Islander, with strong cultural ties to sea, reefs, mangrove
        flats and seasonal patterns. Daily life combines customary practices—fishing, gardening, community gatherings—with
        contemporary services such as schooling, clinics and council administration. The island’s very low elevation means
        that astronomical tides, storm surge and heavy rain can temporarily disrupt access to roads, clinics and stores.
        Elders, families with young children and shift workers each experience hazards differently; for example, fishing
        crews may leave early before sunrise, while older residents may rely more on radio and public address systems rather
        than smartphones. These human realities shape how warnings must be delivered: short, bilingual, consistent and
        always accessible even during comms outages.
      </p>
      <p class="justified">
        Seasonal change matters. The monsoon, trade winds and king tide windows are well understood locally, yet the exact
        timing and severity on any day is uncertain. A local system that senses <em>actual</em> water level and rainfall,
        interprets those readings against shared thresholds and immediately broadcasts the same message across multiple
        channels empowers the community to act together. It reduces contradictory rumours, removes reliance on a single
        message relay and builds a routine where people know what to expect when they hear a tone or phrase.
      </p>
    </div>

    <span class="eyebrow eyebrow--bar">Appendix B — Hazard & Risk Profile</span>
    <div class="section-card fade-in">
      <p class="justified">
        Saibai’s risk is multi-factor: astronomical tide height, wind set-up, barometric pressure, rainfall intensity and
        antecedent catchment wetness. A king tide event with onshore winds can overtop seawalls and fill low-lying areas,
        while a heavy overnight downpour can flood roads even without extreme tide. The Early Warning System focuses on two
        physical truths that strongly correlate with disruption: <strong>water level</strong> at key locations and
        <strong>rainfall accumulation</strong>. Together, these provide an island-scale picture that either corroborates
        regional forecasts or contradicts them when local effects dominate.
      </p>
      <ul class="bullets">
        <li><strong>Exposure:</strong> roads, causeways, yards, ground-level buildings, power distribution cabinets and the clinic access route.</li>
        <li><strong>Vulnerable groups:</strong> elders, people with limited mobility, families with infants, staff working night shifts.</li>
        <li><strong>Critical services:</strong> clinic, school, council workshops, stores, fuel and barge landing.</li>
        <li><strong>Consequence of delay:</strong> vehicle damage, saltwater ingress to equipment, missed clinical appointments, safety risks after dark.</li>
      </ul>
    </div>

    <span class="eyebrow eyebrow--bar">Appendix C — Users, Personas & Journeys</span>
    <div class="section-card fade-in">
      <p class="justified">
        To ensure alerts translate into timely action, we mapped the needs of representative users. The wording below is
        indicative and will be validated with community members.
      </p>
      <ul class="bullets">
        <li><strong>Ranger–Operator:</strong> Checks panels and housings weekly, responds to fault lights, runs siren test each quarter, and records notes in a paper log for handover.</li>
        <li><strong>Elder at home:</strong> Prefers clear PA audio in plain language; trusts the siren tone and expects a short spoken message that states the place, level and action.</li>
        <li><strong>Fisher preparing boat:</strong> Relies on SMS while away from the PA speaker; wants the same message in text with time and location to judge whether to delay or move gear.</li>
        <li><strong>Clinic staff:</strong> Need early notice to re-sequence patients, secure consumables above waterline and ensure vehicle access remains usable during peak tide.</li>
      </ul>
      <p class="justified">
        A typical journey: the system observes rising water and frequent rain tips; at the threshold, it composes a
        bilingual “Watch” and pushes PA plus SMS. If the level continues to rise, a “Warning” follows with a stronger tone
        and explicit actions—move vehicles, avoid seawall, check neighbours. Once the tide recedes, a short “All Clear”
        closes the loop and resets expectations.
      </p>
    </div>

    <!-- APPENDIX D — split into two boxes -->
<span class="eyebrow eyebrow--bar">APPENDIX D — FUNCTIONAL & NON-FUNCTIONAL REQUIREMENTS</span>

<div class="section-card fade-in">
  <div class="grid grid-2">
    <!-- Functional requirements -->
    <div class="card">
      <div class="card__body">
        <h3 class="card__title">Functional requirements</h3>
        <ul class="bullets">
          <li><strong>F1 — Sensing:</strong> Measure tide distance and rainfall tips at intervals, with data quality rules (timeouts, range clamp, spike filter).</li>
          <li><strong>F2 — Clock &amp; Logging:</strong> Maintain local time and store 10-min aggregates plus event log to SD/Flash for at least 6 months.</li>
          <li><strong>F3 — Thresholding:</strong> Evaluate configurable Watch/Warning levels for tide and daily rainfall, supporting hysteresis to prevent chatter.</li>
          <li><strong>F4 — Multi-channel Broadcast:</strong> Trigger siren/PA, SMS gateway (when available) and radio cut-ins within seconds of decision.</li>
          <li><strong>F5 — Bilingual Messaging:</strong> Use short, community-reviewed templates for PA and concise SMS phrasing with location, level and action.</li>
        </ul>
      </div>
    </div>

    <!-- Non-functional requirements -->
    <div class="card">
      <div class="card__body">
        <h3 class="card__title">Non-functional requirements</h3>
        <ul class="bullets">
          <li><strong>NF1 — Availability:</strong> Operate 24/7 on solar + battery, with graceful degradation under prolonged cloud cover.</li>
          <li><strong>NF2 — Maintainability:</strong> Modular housings, labelled cables, replaceable sensors and a spare-parts kit held locally.</li>
          <li><strong>NF3 — Usability:</strong> One-page SOP and clear fault indicators; no laptop required for everyday use.</li>
          <li><strong>NF4 — Resilience:</strong> Continue PA/radio alerts offline; cache unsent SMS and forward when signal returns.</li>
        </ul>
      </div>
    </div>
  </div>
</div>


    <span class="eyebrow eyebrow--bar">Appendix E — Data Model & Message Templates</span>
    <div class="section-card fade-in">
      <p class="justified">
        The event log stores timestamp, sensor source, raw values, derived height/accumulations, decision state and message
        ID. Example SMS (English): “<em>FLOOD WARNING — Saibai North 16:20. Tide above 3.9 m. Keep away from seawall; move
        vehicles and equipment higher now.</em>” PA scripts are even shorter, spoken slowly and repeated twice in English
        and the community’s preferred language. The same template IDs are used across channels so that post-event review can
        match what people heard with what was sent.
      </p>
    </div>

    <span class="eyebrow eyebrow--bar">Appendix F — Commissioning & Calibration</span>
    <div class="section-card fade-in">
      <ol class="bullets">
        <li>Survey the tide reference height (H<sub>ref</sub>) relative to a fixed mark; record in device config.</li>
        <li>Validate ultrasonic range using a measured staff level at low and high tide windows.</li>
        <li>Calibrate rain gauge mm-per-tip using a measured pour; compare to expected count and adjust factor.</li>
        <li>Run a dry-run alert by forcing a test threshold; confirm siren, PA and SMS sequencing and volume.</li>
      </ol>
      <p class="small">Results and photos are attached to the handover pack so future operators can repeat the same checks.</p>
    </div>

    <span class="eyebrow eyebrow--bar">Appendix G — Operations & Maintenance</span>
    <div class="section-card fade-in">
      <ul class="bullets">
        <li><strong>Weekly:</strong> Visual check of housings and mounts; quick wipe of rain funnel; confirm no vegetation blocks the ultrasonic path.</li>
        <li><strong>Monthly:</strong> Read device status light; review log summary; test PA at a known quiet time with a short bilingual script.</li>
        <li><strong>Pre-season:</strong> Confirm battery capacity, clean terminals, re-validate tide reference and mm-per-tip.</li>
        <li><strong>After events:</strong> Inspect for salt residue, listen for bearing noise in fans (if any), and note any false or missed alerts in the logbook.</li>
      </ul>
      <p class="justified">
        The maintenance kit includes spare sensor heads, a reed switch, cable glands, fuses, dielectric grease, stainless
        hardware and a laminated SOP. Consumables are sized so a single barge shipment restocks the kit for a year.
      </p>
    </div>

    <!-- APPENDIX H -->
<span class="eyebrow eyebrow--bar">APPENDIX H — GOVERNANCE, ROLES &amp; TRAINING</span>
<div class="section-card fade-in">
  <ul class="bullets">
    <li><strong>Ownership:</strong> Council (or the ranger unit) owns the equipment.</li>
    <li><strong>Ranger–Operator:</strong> Leads routine checks, runs siren tests, and maintains the cut-in readiness with the radio station.</li>
    <li><strong>Points of contact:</strong> School and clinic each nominate contacts for drills and messaging.</li>
    <li>
      <strong>Training (short modules):</strong>
      <ul>
        <li>System overview — 30 min</li>
        <li>Safety &amp; electrical awareness — 30 min</li>
        <li>Maintenance practical — 60 min</li>
        <li>Alert script practice — 30 min</li>
      </ul>
    </li>
    <li><strong>On-boarding:</strong> New staff can be brought up to speed in a single morning using the SOP and a structured checklist.</li>
  </ul>
</div>

<!-- APPENDIX I -->
<span class="eyebrow eyebrow--bar">APPENDIX I — LEGAL, SAFETY &amp; STANDARDS TOUCHPOINTS</span>
<div class="section-card fade-in">
  <ul class="bullets">
    <li><strong>Low-voltage design:</strong> Extra-low-voltage DC inside sealed enclosures.</li>
    <li><strong>Safe servicing:</strong> Labelled disconnection points and clear “lock-out before service” steps.</li>
    <li><strong>Cabling:</strong> UV-stable, clipped; speakers mounted away from walkways.</li>
    <li><strong>Noise practice:</strong> Test tones comply with local noise considerations.</li>
    <li><strong>Radio cut-ins:</strong> Follow existing station practices and approvals.</li>
    <li><strong>Cellular use:</strong> Any SIM/cellular use adheres to carrier terms.</li>
    <li><strong>Privacy:</strong> Logs store no personal data; only aggregate counts of sent messages and device status.</li>
  </ul>
</div>

<!-- APPENDIX J -->
<span class="eyebrow eyebrow--bar">APPENDIX J — SUSTAINABILITY &amp; ENVIRONMENTAL CARE</span>
<div class="section-card fade-in">
  <ul class="bullets">
    <li><strong>Corrosion resistance:</strong> Stainless fixings, sealed glands, and fresh-water rinse after spray events.</li>
    <li><strong>Electronics protection:</strong> Conformal-coated PCBs; desiccant packs replaced during pre-season service.</li>
    <li><strong>Batteries:</strong> Preference for safe chemistries with straightforward end-of-life handling.</li>
    <li>
      <strong>Avoided loss (biggest lever):</strong>
      <ul>
        <li>Earlier warnings reduce waste and damage,</li>
        <li>cut repair frequency and materials,</li>
        <li>and lower transport emissions for replacement parts.</li>
      </ul>
    </li>
  </ul>
</div>


    <span class="eyebrow eyebrow--bar">Appendix K — Monitoring, Evaluation & Learning</span>
    <div class="section-card fade-in">
      <ul class="bullets">
        <li><strong>KPIs:</strong> mean time to first alert from threshold crossing; percentage of events with PA + SMS + radio parity; equipment uptime; drill participation; and community satisfaction after the wet season.</li>
        <li><strong>Review cadence:</strong> monthly operator check-ins; quarterly multi-stakeholder review; post-event hot-wash within 72 hours.</li>
        <li><strong>Learning loop:</strong> minor firmware updates via SD; template tweaks agreed with Elders; and annual report to TSIRC.</li>
      </ul>
    </div>

    <span class="eyebrow eyebrow--bar">Appendix L — Roadmap & Future Options</span>
    <div class="section-card fade-in">
      <ul class="bullets">
        <li>Additional micro-sites for cross-island coverage and redundancy.</li>
        <li>Low-bandwidth satellite fallback for SMS equivalence during long outages.</li>
        <li>Simple web dashboard on the island intranet for trend viewing and drill planning.</li>
        <li>Integration with regional hazard portals while keeping local autonomy.</li>
      </ul>
    </div>

    <span class="eyebrow eyebrow--bar">Appendix M — Frequently Asked Questions</span>
    <div class="section-card fade-in">
      <p class="justified"><strong>Does the system work without internet?</strong> Yes. PA and radio operate completely offline. SMS is sent when a network is available; if not, messages queue and forward automatically later.</p>
      <p class="justified"><strong>Who changes thresholds?</strong> The Ranger–Operator or council designee using a simple SD config file and SOP. Any change is logged with time and reason.</p>
      <p class="justified"><strong>What if people ignore the siren?</strong> Repetition, bilingual clarity and regular drills build recognition. The same tone is always paired with a short spoken message so people know what to do.</p>
      <p class="justified"><strong>What breaks first?</strong> Typically cables or exposed fasteners in marine air. That’s why spares and stainless hardware are included, along with quarterly checks.</p>
    </div>

    <span class="eyebrow eyebrow--bar">Appendix N — Glossary (Plain Language)</span>
    <div class="section-card fade-in">
      <ul class="bullets">
        <li><strong>HAT:</strong> Highest Astronomical Tide; the highest predictable tide under normal conditions.</li>
        <li><strong>Debounce:</strong> A method to ignore very rapid on/off flickers from a mechanical switch so each “tip” counts once.</li>
        <li><strong>Hysteresis:</strong> A buffer that prevents alerts from flipping rapidly on and off near the threshold.</li>
        <li><strong>Cut-in:</strong> A radio system that interrupts normal audio to play a community safety message.</li>
      </ul>
    </div>

  </section>
  `;
  res.render("index", { title: "Appendices — EWB Saibai EWS", body, theme: "sunset" });
});

export default router;
