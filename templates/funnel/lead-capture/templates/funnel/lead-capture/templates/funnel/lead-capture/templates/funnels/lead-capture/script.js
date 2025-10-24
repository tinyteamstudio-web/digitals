// TinyTeamStudio Lead Capture Script 🌿
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leadForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");

    alert(`Thank you, ${name}! Check your inbox for your template download link.`);
    form.reset();
  });
});
