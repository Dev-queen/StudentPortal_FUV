function login(event) {
  event.preventDefault();

  const role = document.getElementById("role").value;

  // Hide login section
  document.getElementById("loginSection").style.display = "none";

  // Hide all dashboards (remove active class)
  const dashboards = document.querySelectorAll(".dashboard");
  dashboards.forEach((d) => d.classList.remove("active"));

  // Show selected dashboard (add active class)
  if (role === "student") {
    document.getElementById("studentDashboard").classList.add("active");
  } else if (role === "teacher") {
    document.getElementById("teacherDashboard").classList.add("active");
  } else if (role === "admin") {
    const admin = document.getElementById("adminDashboard");
    if (admin) admin.classList.add("active");
  }
}

// Student profile preview + click-to-upload
(function () {
  const studentInput = document.getElementById("studentProfileInput");
  if (!studentInput) return;

  studentInput.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
      const img = document.getElementById("studentProfileImg");
      if (img) img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });

  const imgEl = document.getElementById("studentProfileImg");
  if (imgEl) {
    imgEl.style.cursor = "pointer";
    imgEl.addEventListener("click", function () {
      studentInput.click();
    });
  }
})();

function logout() {
  // Hide all dashboards (remove active class) and show login
  const dashboards = document.querySelectorAll(".dashboard");
  dashboards.forEach((d) => d.classList.remove("active"));

  // Show login again
  const login = document.getElementById("loginSection");
  if (login) login.style.display = "flex";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Refresh the student dashboard: reset forms and scroll to top
function refreshStudentDashboard() {
  const sd = document.getElementById("studentDashboard");
  if (!sd) return;

  // Ensure dashboard is visible
  sd.classList.add("active");

  // Reset any forms inside the student dashboard
  sd.querySelectorAll("form").forEach((f) => {
    try {
      f.reset();
    } catch (e) {
      // ignore
    }
  });

  // Reset any file inputs (except profile preview) so user can re-upload
  sd.querySelectorAll('input[type="file"]').forEach((fi) => {
    try {
      fi.value = "";
    } catch (e) {
      // ignore
    }
  });

  // Scroll dashboard content to top for a 'refresh' feel
  const content = sd.querySelector(".content");
  if (content) content.scrollIntoView({ behavior: "smooth" });
}

// Scroll to the submitted assignments section inside the student dashboard
function goToAssignments() {
  const sd = document.getElementById("studentDashboard");
  if (!sd) return;

  // Ensure dashboard is active and visible
  sd.classList.add("active");

  // Find the target section
  const target = document.getElementById("submittedAssignments");
  if (!target) return;

  // Scroll the target into view smoothly
  target.scrollIntoView({ behavior: "smooth", block: "start" });

  // Optionally give a brief highlight to indicate focus
  target.style.transition = "background-color 0.4s";
  const original = window.getComputedStyle(target).backgroundColor;
  target.style.backgroundColor = "#fff7cc";
  setTimeout(() => {
    target.style.backgroundColor = original;
  }, 600);
}
