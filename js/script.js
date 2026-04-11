document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // 2. Sticky Navbar & Active Link state
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        // Navbar style
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled'); // Better to use a class for styles
            navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
        }

        // Active link highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust offset to trigger highlighting slightly later
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href').substring(1); // Remove '#'
            if (current && href === current) {
                item.classList.add('active');
            }
        });
    });

    // --- RENDER DATA FROM portfolioData --- //

    // 3. Render Hero Profiles
    const profilesContainer = document.getElementById('hero-profiles-container');
    if (profilesContainer && portfolioData.personalInfo.profiles) {
        portfolioData.personalInfo.profiles.forEach(profile => {
            const a = document.createElement('a');
            a.href = profile.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.className = "profile-icon";
            a.title = profile.name;
            a.setAttribute("aria-label", profile.name);
            a.innerHTML = `<i class="${profile.icon}"></i>`;
            profilesContainer.appendChild(a);
        });
    }

    // 4. Render About
    const aboutText = document.getElementById('about-text');
    if (aboutText) aboutText.textContent = portfolioData.personalInfo.about;

    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer && portfolioData.skills) {
        portfolioData.skills.forEach(skill => {
            const span = document.createElement('span');
            span.className = 'skill-tag';
            span.textContent = skill;
            skillsContainer.appendChild(span);
        });
    }

    // 5. Render Experience
    const expContainer = document.getElementById('experience-container');
    if (expContainer && portfolioData.experience) {
        portfolioData.experience.forEach(exp => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-date">${exp.duration}</div>
                    <h4>${exp.role}</h4>
                    <div class="inst">${exp.institution}</div>
                    <div class="dept">${exp.department}</div>
                </div>
            `;
            expContainer.appendChild(item);
        });
    }

    // 6. Render Roles & Achievements
    const rolesContainer = document.getElementById('roles-container');
    if (rolesContainer && portfolioData.roles) {
        portfolioData.roles.forEach(role => {
            const li = document.createElement('li');
            li.textContent = role;
            rolesContainer.appendChild(li);
        });
    }

    const achContainer = document.getElementById('achievements-container');
    if (achContainer && portfolioData.achievements) {
        portfolioData.achievements.forEach(ach => {
            const li = document.createElement('li');
            li.textContent = ach;
            achContainer.appendChild(li);
        });
    }

    // 7. Render Education
    const eduContainer = document.getElementById('education-container');
    if (eduContainer && portfolioData.education) {
        portfolioData.education.forEach(edu => {
            const card = document.createElement('div');
            card.className = 'edu-card glass-card';
            
            // Icon logic
            let iconClass = 'fas fa-graduation-cap';
            if(edu.degree.includes('Ph.D') || edu.degree.includes('Post-Doc')) {
                iconClass = 'fas fa-user-graduate';
            }

            let extraMeta = '';
            if(edu.score) extraMeta += `<span>Score: ${edu.score}</span>`;
            if(edu.topic) extraMeta += `<div class="edu-topic"><strong>Topic:</strong> ${edu.topic}</div>`;

            card.innerHTML = `
                <i class="edu-icon ${iconClass}"></i>
                <h3 class="edu-degree">${edu.degree}</h3>
                <div class="edu-field">${edu.field}</div>
                <div class="edu-inst">${edu.institution}</div>
                <div class="edu-meta">
                    <span><i class="far fa-calendar-alt"></i> ${edu.duration}</span>
                    ${extraMeta}
                </div>
            `;
            eduContainer.appendChild(card);
        });
    }

    // 8. Render Patents & Copyrights
    const patContainer = document.getElementById('patents-container');
    if (patContainer && portfolioData.patents) {
        portfolioData.patents.forEach(pat => {
            const card = document.createElement('div');
            card.className = 'patent-card';
            
            const iconType = pat.type === 'Copyright' ? 'fa-copyright' : 'fa-certificate';
            const extraDetails = pat.details ? `<div class="patent-details" style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">${pat.details}</div>` : '';
            
            card.innerHTML = `
                <div class="patent-icon"><i class="fas ${iconType}"></i></div>
                <div class="patent-info">
                    <h4>${pat.title}</h4>
                    <div class="patent-year">Granted / Filed: ${pat.year}</div>
                    ${extraDetails}
                </div>
            `;
            patContainer.appendChild(card);
        });
    }

    // Insert Detailed Personal Info dynamically if requested
    const aboutTextDiv = document.getElementById('about-text');
    if (aboutTextDiv && portfolioData.personalInfo.detailedInfo) {
        const infoContainer = document.createElement('div');
        infoContainer.className = 'personal-details-grid';
        infoContainer.style.cssText = 'text-align: left; background: var(--bg-main); padding: 20px; border-radius: 10px; box-shadow: var(--shadow-sm); margin-top: 30px; margin-bottom: 30px; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; border: 1px solid var(--border-color);';
        
        for (const [key, value] of Object.entries(portfolioData.personalInfo.detailedInfo)) {
            const item = document.createElement('div');
            item.innerHTML = `<strong style="color: var(--primary-blue);">${key}:</strong> <span style="color: var(--text-light);">${value}</span>`;
            infoContainer.appendChild(item);
        }
        
        // Insert right after the about description
        aboutTextDiv.parentNode.insertBefore(infoContainer, aboutTextDiv.nextSibling);
    }

    // 9. Render Publications & Filtering Logic
    const pubContainer = document.getElementById('publications-container');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const viewMoreBtn = document.getElementById('view-more-btn');
    
    let currentFilter = 'all';
    let publicationsShowing = 5;
    
    function renderPublications() {
        if (!pubContainer) return;
        pubContainer.innerHTML = '';
        
        let filteredPubs = portfolioData.publications;
        
        if (currentFilter !== 'all') {
            if (currentFilter === 'highlight') {
                filteredPubs = filteredPubs.filter(p => p.highlight);
            } else {
                filteredPubs = filteredPubs.filter(p => p.type === currentFilter);
            }
        }
        
        // Slice for "View More" logic
        const pubsToRender = filteredPubs.slice(0, publicationsShowing);
        
        pubsToRender.forEach(pub => {
            const item = document.createElement('div');
            item.className = `pub-item ${pub.highlight ? 'highlight' : ''}`;
            
            // Format icon based on type
            const iconClass = pub.type === 'journal' ? 'fas fa-newspaper' : 'fas fa-users';
            
            item.innerHTML = `
                <div class="pub-title">${pub.title}</div>
                <div class="pub-authors">${pub.authors}</div>
                <div class="pub-venue"><i class="${iconClass}"></i> ${pub.venue}</div>
                <div class="pub-meta">
                    <span class="pub-tag year"><i class="far fa-calendar-alt"></i> ${pub.year}</span>
                    <span class="pub-tag indexing">${pub.indexing}</span>
                    ${pub.highlight ? '<span class="pub-tag" style="background-color: #FEF08A; color: #975A16;"><i class="fas fa-star"></i> Highlight</span>' : ''}
                </div>
            `;
            pubContainer.appendChild(item);
        });
        
        // View More button logic
        if (publicationsShowing >= filteredPubs.length) {
            viewMoreBtn.style.display = 'none';
        } else {
            viewMoreBtn.style.display = 'inline-block';
            viewMoreBtn.textContent = `View More (${filteredPubs.length - publicationsShowing} left)`;
        }
    }
    
    // Initial Render
    if(portfolioData.publications) renderPublications();
    
    // Filter click handles
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');
            
            currentFilter = btn.getAttribute('data-filter');
            publicationsShowing = 5; // Reset to 5 on new filter
            renderPublications();
        });
    });
    
    // View more handle
    if(viewMoreBtn) {
        viewMoreBtn.addEventListener('click', () => {
            publicationsShowing += 10;
            renderPublications();
        });
    }
});
