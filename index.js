// index.js (Express + EJS server)
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import overviewRouter from "./overview.js";
import implementationRouter from "./implementation.js";
import costFundingRouter from "./cost_funding.js";
import prototypeRouter from "./prototype.js";
import referencesRouter from "./references.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files (serves /public/main.css etc.)
app.use(express.static(path.join(__dirname, "public")));

// Home route -> render views/index.ejs
app.get("/", (req, res) => {
  // NOTE: index.ejs expects a `title` and a `body` placeholder.
  // We’ll pass a simple landing section into <%- body %> for now.
  const body = `
    <section class="section">
      <p class="kicker">Proposal Summary</p>
      <h2 class="mb-4">Hyper-local tide & rain alerts for Saibai</h2>
      <p class="lead mb-4">
        A solar-powered IoT early warning system that measures real water levels and rainfall on Saibai Island
        and automatically pushes bilingual alerts across PA/sirens, SMS and radio.
      </p>
      <div class="stack-sm">
        <a class="btn" href="/overview">See the Design</a>
        <a class="btn btn--ghost" href="/implementation">Implementation Plan</a>
      </div>
    </section>
  `;
  res.render("index", { title: "Saibai Early Warning System", body });
});

app.use(overviewRouter);

app.use(implementationRouter);

app.use(costFundingRouter);

app.use(prototypeRouter);

app.use(referencesRouter);

// (Optional) stub routes so your nav doesn’t 404 while you fill pages
app.get("/overview", (req, res) =>
  res.render("index", { title: "Overview", body: "<h2>Overview</h2><p class='muted'>Coming soon.</p>" })
);
app.get("/prototype", (req, res) =>
  res.render("index", { title: "Prototype", body: "<h2>Prototype</h2><p class='muted'>Coming soon.</p>" })
);
app.get("/implementation", (req, res) =>
  res.render("index", { title: "Implementation", body: "<h2>Implementation Plan</h2><p class='muted'>Coming soon.</p>" })
);
app.get("/references", (req, res) =>
  res.render("index", { title: "References (APA 7)", body: "<h2>References</h2><p class='muted'>Add APA list here.</p>" })
);
app.get("/appendices", (req, res) =>
  res.render("index", { title: "Appendices", body: "<h2>Appendices</h2><p class='muted'>Charter, Minutes, Prompt Log.</p>" })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running → http://localhost:${PORT}`));