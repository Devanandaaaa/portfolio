// JavaScript code to handle project details display and show/hide logic
function showProjectDetails(project) {
    // Hide the projects list and show project details
    document.getElementById('projects-list').style.display = 'none';
    document.getElementById('project-details').style.display = 'block';

    const detailsContainer = document.getElementById('details-container');

    if (project === 'spiceWhirl') {
        detailsContainer.innerHTML = `
            <h2>SpiceWhirl: A Recipe Website</h2>
            <p>This is a recipe website that showcases authentic Indian recipes with an interactive UI.</p>
            <p>Technologies used: HTML, CSS, JavaScript, and animations.</p>
        `;
    } else if (project === 'portfolio') {
        detailsContainer.innerHTML = `
            <h2>Portfolio Website</h2>
            <p>This is the very website you're currently browsing, built with HTML, CSS, and JavaScript.</p>
            <p>Technologies used: HTML, CSS, JavaScript, and responsive design.</p>
        `;
       
    } else if (project === 'fungame') {
        detailsContainer.innerHTML = `
        <h2>fungame</h2>
        <p>This is a simple game made with html and css</p>
    
       `;
      
    } else if (project === 'useless buttons'){
        detailsContainer.innerHTML = `
    }  
        <h2>useless buttons</h2>
        <p>This is a fun useless project made with html and css</p>
      `;
      
    }else {
        detailsContainer.innerHTML = `<p>No project details found.</p>`;
    }
}

function showProjectsList() {
    // Show the projects list and hide project details
    document.getElementById('projects-list').style.display = 'block';
    document.getElementById('project-details').style.display = 'none';
}


// Show project details
function showProjectDetails(project) {
    document.getElementById('projects-list').style.display = 'none';
    document.getElementById('project-details').style.display = 'block';
    const detailsContainer = document.getElementById('details-container');

    const projectData = {
        spiceWhirl: `
            <h2>SpiceWhirl: A Recipe Website</h2>
            <p>Showcases authentic Indian recipes with interactive UI.</p>
            <p>Tech: HTML, CSS, JavaScript, animations.</p>
        `,
        portfolio: `
            <h2>Portfolio Website</h2>
            <p>The very website you're viewing now.</p>
            <p>Tech: HTML, CSS, JavaScript, responsive design.</p>
        `,
        fungame: `
            <h2>Fun Game</h2>
            <p>A small HTML & CSS game for fun.</p>
        `,
        uselessButtons: `
            <h2>Useless Buttons</h2>
            <p>A playful project with buttons that do... well, nothing useful.</p>
        `
    };

    detailsContainer.innerHTML = projectData[project] || `<p>No project details found.</p>`;
}

// Back to project list
function showProjectsList() {
    document.getElementById('projects-list').style.display = 'block';
    document.getElementById('project-details').style.display = 'none';
}

// Fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");

    function revealOnScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
// Scroll animation
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
