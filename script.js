(() => {
  const data = window.journalClub;
  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };
  const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });
  for (const session of data.sessions) {
    const details = make("details", "session");
    const summary = make("summary", "session-summary");
    const date = make("div", "session-date");
    const dateLabel = make("time", "date-label", dateFormat.format(new Date(`${session.date}T12:00:00Z`)));
    dateLabel.dateTime = session.date;
    date.append(dateLabel, make("span", "weekday", "Tuesday"));
    const info = make("div", "session-info");
    info.append(make("h3", "", session.title || "Session to be announced"), make("p", "", session.speaker || "Speaker to be announced"));
    const expandIcon = make("span", "expand-icon", "+");
    expandIcon.setAttribute("aria-hidden", "true");
    summary.append(date, info, expandIcon);
    const body = make("div", "session-body");
    const abstract = make("div", "abstract");
    abstract.append(make("h4", "small-label", "ABSTRACT"), make("p", "", session.abstract || "The abstract for this session will be added soon."));
    const logistics = make("div", "logistics");
    logistics.append(make("h4", "small-label", "TIME & LOCATION"), make("p", "", session.time || "Time to be announced"), make("p", "", session.location || "Location to be announced"));
    if (session.contact) {
      const contact = make("p", "speaker-contact");
      const email = make("a", "", session.contact);
      email.href = `mailto:${session.contact}`;
      contact.append("Contact: ", email);
      abstract.append(contact);
    }
    body.append(abstract, logistics);
    details.append(summary, body);
    document.querySelector("#schedule").append(details);
  }
  const resources = data.resources || [];
  document.querySelector("#resources-empty").hidden = resources.length > 0;
  for (const resource of resources) {
    const row = make("article", "resource-row");
    const info = make("div");
    info.append(make("h3", "", resource.title), make("p", "", resource.speaker));
    const links = make("div", "resource-links");
    for (const link of resource.links || []) {
      try {
        // A safe base permits relative resource paths, including in local previews.
        const url = new URL(link.url, "https://resources.invalid/");
        if (!["https:", "http:"].includes(url.protocol)) continue;
        const anchor = make("a", "", `${link.label} ↗`);
        anchor.href = link.url;
        if (link.download) anchor.setAttribute("download", "");
        links.append(anchor);
      } catch { /* Leave incomplete links off the page until ready. */ }
    }
    row.append(info, links);
    document.querySelector("#resource-list").append(row);
  }
})();
