//Normalizes the contact to prevent missing or undefined fields

function normalizeContacts(contact = {}) {
  const safe = typeof contact === "object" && contact !== null ? contact : {};

  return {
    professionalName: safe.professionalName || "Unknown",
    base64Image: safe.base64Image || "",
    primaryDescription: safe.primaryDescription || "",
    workDescription1: safe.workDescription1 || "",
    workDescription2: safe.workDescription2 || "",
    linkTitleText: safe.linkTitleText || "Connect",
    linkedInLink: {
      text: safe.linkedInLink?.text || "LinkedIn",
      link: safe.linkedInLink?.link || "#",
    },
    githubLink: {
      text: safe.githubLink?.text || "GitHub",
      link: safe.githubLink?.link || "#",
    },
    nameLink: {
      firstName: safe.nameLink?.firstName || safe.professionalName || "Unknown",
      url: safe.nameLink?.url || "#",
    },
  };
}

module.exports = { normalizeContacts };