const subjectGrid = document.getElementById("subjectGrid");
const experimentSection = document.getElementById("experimentSection");
const experimentGrid = document.getElementById("experimentGrid");
const subjectTitle = document.getElementById("subjectTitle");
const searchInput = document.getElementById("searchInput");
const backBtn = document.getElementById("backBtn");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const copyBtn = document.getElementById("copyBtn");

let activeSubject = null;
let activeExperiment = null;

function renderSubjects(filter = "") {
  const q = filter.toLowerCase().trim();

  const items = LAB_DATA.filter(subject =>
    subject.name.toLowerCase().includes(q) ||
    subject.experiments.some(exp => exp.name.toLowerCase().includes(q))
  );

  subjectGrid.innerHTML = items.map(subject => `
    <article class="subject-card" data-subject="${subject.id}">
      <div class="subject-icon">${subject.icon}</div>
      <div class="card-title">${subject.name}</div>
      <div class="card-text">Maximum 15 experiments with code, screenshots and results.</div>
      <div class="card-meta">01 — 15 experiments →</div>
    </article>
  `).join("");

  if (!items.length) {
    subjectGrid.innerHTML = '<p class="empty">No subjects found.</p>';
  }

  document.querySelectorAll(".subject-card").forEach(card => {
    card.addEventListener("click", () => openSubject(card.dataset.subject));
  });
}

function openSubject(id) {
  activeSubject = LAB_DATA.find(s => s.id === id);
  if (!activeSubject) return;

  subjectTitle.textContent = activeSubject.name;

  experimentGrid.innerHTML = activeSubject.experiments.map(exp => `
    <article class="experiment-card" data-number="${exp.number}">
      <div class="experiment-num">EXPERIMENT ${String(exp.number).padStart(2,"0")}</div>
      <div class="card-title">${exp.name}</div>
      <div class="card-text">Open experiment details, code and screenshots.</div>
    </article>
  `).join("");

  document.querySelectorAll(".experiment-card").forEach(card => {
    card.addEventListener("click", () => {
      openExperiment(Number(card.dataset.number));
    });
  });

  experimentSection.classList.remove("hidden");
  window.scrollTo({top: experimentSection.offsetTop - 20, behavior:"smooth"});
}

function openExperiment(number) {
  activeExperiment = activeSubject.experiments.find(e => e.number === number);
  if (!activeExperiment) return;

  document.getElementById("modalSubject").textContent = activeSubject.name;
  document.getElementById("modalTitle").textContent = activeExperiment.name;
  document.getElementById("modalAim").textContent = activeExperiment.aim;
  document.getElementById("modalTheory").textContent = activeExperiment.theory;
  document.querySelector("#modalCode code").textContent = activeExperiment.code;
  document.getElementById("modalResult").textContent = activeExperiment.result;

  const shots = document.getElementById("modalScreenshots");

  if (!activeExperiment.screenshots || activeExperiment.screenshots.length === 0) {
    shots.innerHTML = '<div class="shot shot-empty">No screenshots added yet.</div>';
  } else {
    shots.innerHTML = activeExperiment.screenshots.map(file => `
      <div class="shot">
        <img src="${file}" alt="Experiment output screenshot">
      </div>
    `).join("");
  }

  copyBtn.textContent = "Copy Code";
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeExperiment() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

searchInput.addEventListener("input", e => renderSubjects(e.target.value));

backBtn.addEventListener("click", () => {
  experimentSection.classList.add("hidden");
  window.scrollTo({top:0, behavior:"smooth"});
});

closeModal.addEventListener("click", closeExperiment);

modal.addEventListener("click", e => {
  if (e.target === modal) closeExperiment();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeExperiment();
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(activeExperiment.code);
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy Code", 1200);
  } catch {
    copyBtn.textContent = "Copy failed";
  }
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.getElementById("themeBtn").textContent =
    document.body.classList.contains("light") ? "☀" : "☾";
});

renderSubjects();
