// group_declaration.js — Express router for Group Declaration page (ESM)

import { Router } from "express";
const router = Router();

router.get("/group-declaration", (req, res) => {
  const body = `
  <section class="section">
    <p class="kicker">Design & Group Details</p>

    <div class="card"><div class="card__body">
      <div class="grid grid-1">
        <p><strong>Design Area:</strong> 6.1 — Early Warning Systems</p>
        <p><strong>Project Opportunity:</strong> Opportunity exists to strengthen the integration of hazard monitoring, forecasting, disaster risk assessment, communication and preparedness activities, systems and processes. Improving early warning systems may, for example, involve reducing the need for active human input during times of crisis, or building robustness and redundancy into systems automation and other such measures. The objective is to enable communities, businesses, Government agencies and other actors to have access to timely early warnings and thus reduce the impact of disasters.</p>
        <p><strong>How Might We Statement:</strong> How might we design a hyper-local, automated early warning system for Saibai Island that delivers timely and bilingual flood and rainfall alerts, reducing reliance on mainland communication during emergencies?</p>
        <p><strong>Tutorial Number and Zone:</strong> Tutorial 4 (Wednesday 6-9 pm) - Pranavi</p>
        <p><strong>Group Name:</strong> Saibai ICT</p>
      </div>
    </div></div>

    <h2 class="mt-6 mb-4">Group Declaration</h2>
    <div class="card"><div class="card__body">
      <p class="justified">
        This declaration confirms that <strong>all website development, content writing, design layout, prototype diagrams,
        and documentation</strong> for the <em>EWB Challenge 2025 - Saibai Island Early Warning System</em> were
        completed solely by <strong>Anh Ve Pham (26153926)</strong>.
      </p>
      <p class="justified">
        No other individuals contributed to the website, report, or any associated deliverables.
        All text, diagrams, styling, and structure were independently designed and implemented by the author.
      </p>
    </div></div>

    <h2 class="mt-6 mb-4">Contributor Details</h2>
    <div class="card"><div class="card__body">
      <h3 class="card__title">Anh Ve Pham (26153926)</h3>
      <ul class="list-disc ml-5 mt-2">
        <li>Developed full Express + EJS web application</li>
        <li>Authored all written content and bilingual text</li>
        <li>Created and annotated prototype diagrams (3D models + CAD)</li>
        <li>Designed and styled <code>main.css</code> layout and responsive theme</li>
        <li>Compiled APA 7 references and document structure</li>
      </ul>
    </div></div>


    <h2 class="mt-6 mb-4">Acknowledgement of Country</h2>
      <div class="card ack-card"><div class="card__body">
        <p class="justified">
          We would like to acknowledge the Gadigal people of the Eora Nation upon whose ancestral lands our City campus now stands.
          We would also like to pay respect to the Elders both past and present, acknowledging them as the traditional custodians of knowledge for this land.
        </p>
      </div></div>
  </section>
  `;

  res.render("index", { title: "Group Declaration — EWB Saibai EWS", body });
});

export default router;