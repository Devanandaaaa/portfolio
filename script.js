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


