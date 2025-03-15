// JavaScript for theme toggle, tooltips, etc.
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-mode");
    const themeIcon = document.querySelector(".theme-toggle i");
    if (body.classList.contains("light-mode")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
}

// Circular Progress Bar Animation
const circularProgressBars = document.querySelectorAll(".circular-progress");
circularProgressBars.forEach(progressBar => {
    const progressValue = progressBar.querySelector(".progress-value");
    const progress = progressBar.getAttribute("data-progress");
    progressBar.style.background = `conic-gradient(#ffcc00 ${progress}%, rgba(255, 255, 255, 0.2) ${progress}%)`;
    progressValue.textContent = `${progress}%`;
});

// Tooltip Functionality
const tooltips = document.querySelectorAll(".tooltip");
tooltips.forEach(tooltip => {
    tooltip.addEventListener("mouseover", () => {
        const tooltipText = tooltip.getAttribute("data-tooltip");
        const tooltipElement = document.createElement("div");
        tooltipElement.className = "tooltip-text";
        tooltipElement.innerText = tooltipText;
        tooltip.appendChild(tooltipElement);
    });
    tooltip.addEventListener("mouseout", () => {
        const tooltipElement = tooltip.querySelector(".tooltip-text");
        if (tooltipElement) {
            tooltip.removeChild(tooltipElement);
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Fade-In Animation on Scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.1, // Trigger when 10% of the section is visible
    }
);

sections.forEach((section) => {
    observer.observe(section);
});// JavaScript for theme toggle, tooltips, etc.
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-mode");
    const themeIcon = document.querySelector(".theme-toggle i");
    if (body.classList.contains("light-mode")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
}

// Circular Progress Bar Animation
const circularProgressBars = document.querySelectorAll(".circular-progress");
circularProgressBars.forEach(progressBar => {
    const progressValue = progressBar.querySelector(".progress-value");
    const progress = progressBar.getAttribute("data-progress");
    progressBar.style.background = `conic-gradient(#ffcc00 ${progress}%, rgba(255, 255, 255, 0.2) ${progress}%)`;
    progressValue.textContent = `${progress}%`;
});

// Tooltip Functionality
const tooltips = document.querySelectorAll(".tooltip");
tooltips.forEach(tooltip => {
    tooltip.addEventListener("mouseover", () => {
        const tooltipText = tooltip.getAttribute("data-tooltip");
        const tooltipElement = document.createElement("div");
        tooltipElement.className = "tooltip-text";
        tooltipElement.innerText = tooltipText;
        tooltip.appendChild(tooltipElement);
    });
    tooltip.addEventListener("mouseout", () => {
        const tooltipElement = tooltip.querySelector(".tooltip-text");
        if (tooltipElement) {
            tooltip.removeChild(tooltipElement);
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Fade-In Animation on Scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.1, // Trigger when 10% of the section is visible
    }
);

sections.forEach((section) => {
    observer.observe(section);
});
