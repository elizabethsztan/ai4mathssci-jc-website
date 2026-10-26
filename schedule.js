// Edit session details here. Leave unknown fields as empty strings.
// Dates use YYYY-MM-DD. Times are plain text, e.g. "14:00–15:00".
window.journalClub = {
  sessions: [
    { date: "2026-10-20", title: "Accessible, Portable, and Formally-Verified Proofwriting with Visual Lean", speaker: "Autumn Mapes (1st year PhD; DAMTP)", abstract: "Interactive theorem provers (ITPs) are programming languages built to represent and prove mathematical theorems. One particular ITP, Lean 4, has exploded in popularity among mathematicians as a means of deterministic proof evaluation. However, because of the technical nature of Lean 4 proofs, adoption outside of research mathematics has been slow. Autumn Mapes will be showing off Visual Lean, a drag-and-drop web interface for writing Lean 4 proofs in any web browser.", contact: "rm2264@cam.ac.uk", location: "MR4", time: "4–5pm" },
    { date: "2026-10-27", title: "Are neural networks actually clean?", speaker: "Rachel Zhang (2nd year PhD; DAMTP)", abstract: "Mechanistic interpretability has largely assumed that individual neurons in neural networks can’t be studied directly, because they appear to mix unrelated concepts — a phenomenon attributed to “superposition.” In this recent essay, https://already-clean.goodfire.com/, they argue the field misread its own evidence: the canonical examples were misinterpreted, the mess came from architecture and tools rather than the network, and in modern models most neurons do roughly one job. I’ll give a short introduction to interpretability, summarise the essay’s main claims, and go through some of the debate it has sparked among researchers. No background in interpretability needed.", contact: "rcz20@cam.ac.uk", location: "MR19 (Potter Room)", time: "4–5pm" },
    { date: "2026-11-03", title: "", speaker: "", abstract: "", location: "MR19", time: "4–5pm" },
    { date: "2026-11-10", title: "", speaker: "", abstract: "", location: "Alternative room to be confirmed", time: "4–5pm" },
    { date: "2026-11-17", title: "", speaker: "", abstract: "", location: "Alternative room to be confirmed", time: "4–5pm" },
    { date: "2026-11-24", title: "", speaker: "", abstract: "", location: "MR19", time: "4–5pm" },
    { date: "2026-12-01", title: "", speaker: "", abstract: "", location: "MR19", time: "4–5pm" }
  ],
  // Add past-speaker resources like:
  // { title: "Talk title", speaker: "Speaker name", links: [
  //   { label: "Paper", url: "https://example.org/paper" },
  //   { label: "Slides", url: "https://example.org/slides" }
  // ] }
  resources: [
    {
      title: "Accessible, Portable, and Formally-Verified Proofwriting with Visual Lean",
      speaker: "Autumn Mapes · 20 October 2026",
      links: [
        { label: "Download slides (PowerPoint)", url: "resources/autumn-mapes-visual-lean.pptx", download: true }
      ]
    }
  ]
};
