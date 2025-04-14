// ===== [1] INICIALIZACIÓN ===== 
document.addEventListener('DOMContentLoaded', function() {
    const defaultLang = 'es';
    const savedLang = localStorage.getItem('preferredLanguage') || defaultLang;
    
    setActiveLanguageButton(savedLang);
    changeLanguage(savedLang);
    setupLanguageSwitcher();
    setupEventListeners();
});
// ===== [2] CONFIGURACIÓN DEL CAMBIADOR DE IDIOMA ===== 
function setupLanguageSwitcher() {
    document.querySelectorAll('.btn-language').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            setActiveLanguageButton(lang);
            changeLanguage(lang);
            localStorage.setItem('preferredLanguage', lang);
            this.classList.add('animate__pulse');
            setTimeout(() => this.classList.remove('animate__pulse'), 500);
        });
    });
}

function setActiveLanguageButton(lang) {
    document.querySelectorAll('.btn-language').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) btn.classList.add('active');
    });
}

// ===== [3] SISTEMA DE TRADUCCIÓN =====
function changeLanguage(lang) {
    const translations = {
        es: {
            // Navegación
            "about": "Sobre mí",
            "experience": "Experiencia",
            "education": "Formación",
            "contact": "Contacto",
            
            // Sección principal
            "jobTitle": "Desarrolladora de Software | Programadora Junior",
            
            // Sobre mí
            "aboutText1": "Soy Virginia Sánchez, desarrolladora de software junior con 22 años. Actualmente estudio Programación en la UTN y me desempeño como desarrolladora freelance.",
            "aboutText2": "Cuento con experiencia en desarrollo web y backend, trabajando con tecnologías como:",
            "techList_1": "HTML, CSS, JavaScript (React.js, Angular)",
            "techList_2": "Python (Django, Flask), Node.js, PHP, .NET",
            "techList_3": "Bases de datos SQL (MySQL, PostgreSQL)",
            "aboutText3": "Además, tengo conocimientos en AWS, control de versiones con Git/GitHub/GitLab y diseño web centrado en la experiencia del usuario (UX/UI).",
            "frontend": "Frontend",
            "backend": "Backend",
            "databases": "Bases de datos",
            "devops": "DevOps",

            
            // Experiencia
            "job1Title": "Desarrolladora de Aplicaciones y Web (Freelance)",
            "job1Date": "Enero 2023 – Actualidad",
            "job1Desc1": "Desarrollo de aplicaciones y sitios web para clientes",
            "job1Desc2": "Tecnologías: HTML, CSS, JavaScript, Python (Flask, Django), Java, SQL, MySQL",
            "job1Desc3": "Control de versiones con Git/GitHub/GitLab",
            "job1Desc4": "Enfoque en soluciones eficientes y escalables",
            
            "job2Title": "Diseñadora Gráfica – UX/UI (Freelance)",
            "job2Date": "Enero 2021 – Enero 2023",
            "job2Desc1": "Diseño de interfaces y experiencias de usuario",
            "job2Desc2": "Creación de logotipos, bocetos y proyectos personalizados",
            "job2Desc3": "Experiencia en impresión 3D y animación",
            
            // Educación
            "myCourses": "Mis Cursos",
            "myCertificates": "Mis Certificados",
            "fundamentals": "Fundamentos",
            "programming": "Programación",
            "webDatabases": "Web & Bases de Datos",
            
            // Cursos
            "course1": "• Fundamentos de Ingeniería de Software – Platzi",
            "course2": "• Introducción a la Terminal y Línea de Comandos – Platzi",
            "course3": "• Pensamiento Lógico: Algoritmos – Platzi",
            "course4": "• Pensamiento Lógico: Manejo de Datos – Platzi",
            "course5": "• Pensamiento Lógico: Lenguajes – Platzi",
            "course6": "• Python – Platzi",
            "course7": "• Fundamentos de JavaScript – Platzi",
            "course8": "• JavaScript: Manipulación del DOM – Platzi",
            "course9": "• Testing con JavaScript – Platzi",
            "course10": "• Java SE: SQL y Bases de Datos – Platzi",
            "course11": "• Fundamentos .NET – Platzi",
            "course12": "• React.js – Platzi",
            "course13": "• Django – Platzi",
            "course14": "• Bases de Datos con SQL – Platzi",
            "course15": "• Básico de PHP – Platzi",
            "course16": "• Profesional de Git y GitHub – Platzi",
            
            // Certificados
            "certificate1": "Fundamentos .NET",
            "certificate2": "Ingeniería de Software",
            "certificate3": "Git & GitHub",
            "certificate4": "Java SE + SQL",
            "certificate5": "JavaScript",
            "certificate6": "JS Testing",
            "certificate7": "JS DOM",
            "certificate8": "Node.js",
            "certificate9": "Python",
            "certificate10": "Django",
            "certificate11": "React.js",
            "certificate12": "Bases de Datos",
            "certificate13": "Lógica: Algoritmos",
            "certificate14": "Lógica: Funciones",
            "certificate15": "Lógica: Lenguajes",
            "certificate16": "Amazon Web Services",
            "certificate17": "Computación Básica",
            
            // Botones
            "view": "Ver",
            "open": "Abrir",
            "testing": "Testing",
            "algorithms": "Algoritmos",
            "functions": "Funciones",
            "languages": "Lenguajes",
            "basics": "Básicos",
            
            // Footer
            "copyright": "2024 Virginia Sánchez. Todos los derechos reservados."    
        },
        en: {
            // Navigation
            "about": "About Me",
            "experience": "Experience",
            "education": "Education",
            "contact": "Contact",
            
            // Hero section
            "jobTitle": "Software Developer | Junior Programmer",
            
              // About me
            "aboutText1": "I'm Virginia Sánchez, a 22-year-old junior software developer. Currently studying Programming at UTN and working as a freelance developer.",
            "aboutText2": "I have experience in web and backend development, working with technologies such as:",
            "techList_1": "HTML, CSS, JavaScript (React.js, Angular)",
            "techList_2": "Python (Django, Flask), Node.js, PHP, .NET",
            "techList_3": "SQL databases (MySQL, PostgreSQL)",
            "aboutText3": "Additionally, I have knowledge in AWS, version control with Git/GitHub/GitLab and user experience centered web design (UX/UI).",
            "frontend": "Frontend",
            "backend": "Backend",
            "databases": "Databases",
            "devops": "DevOps",
        
              // Experience
            "job1Title": "Application and Web Developer (Freelance)",
            "job1Date": "January 2023 – Present",
            "job1Desc1": "Development of applications and websites for clients",
            "job1Desc2": "Technologies: HTML, CSS, JavaScript, Python (Flask, Django), Java, SQL, MySQL",
            "job1Desc3": "Version control with Git/GitHub/GitLab",
            "job1Desc4": "Focus on efficient and scalable solutions",
        
            "job2Title": "Graphic Designer – UX/UI (Freelance)",
            "job2Date": "January 2021 – January 2023",
            "job2Desc1": "User interface and experience design",
            "job2Desc2": "Creation of logos, sketches and customized projects",
            "job2Desc3": "Experience in 3D printing and animation",
            
              // Education
            "myCourses": "My Courses",
            "myCertificates": "My Certificates",
            "fundamentals": "Fundamentals",
            "programming": "Programming",
            "webDatabases": "Web & Databases",
        
              // Courses
            "course1": "• Software Engineering Fundamentals – Platzi",
            "course2": "• Introduction to Terminal and Command Line – Platzi",
            "course3": "• Logical Thinking: Algorithms – Platzi",
            "course4": "• Logical Thinking: Data Handling – Platzi",
            "course5": "• Logical Thinking: Languages – Platzi",
            "course6": "• Python – Platzi",
            "course7": "• JavaScript Fundamentals – Platzi",
            "course8": "• JavaScript: DOM Manipulation – Platzi",
            "course9": "• Testing with JavaScript – Platzi",
            "course10": "• Java SE: SQL and Databases – Platzi",
            "course11": "• .NET Fundamentals – Platzi",
            "course12": "• React.js – Platzi",
            "course13": "• Django – Platzi",
            "course14": "• Databases with SQL – Platzi",
            "course15": "• PHP Basics – Platzi",
            "course16": "• Git and GitHub Professional – Platzi",
        
             // Certificates
            "certificate1": ".NET Fundamentals",
            "certificate2": "Software Engineering",
            "certificate3": "Git & GitHub",
            "certificate4": "Java SE + SQL",
            "certificate5": "JavaScript",
            "certificate6": "JS Testing",
            "certificate7": "JS DOM",
            "certificate8": "Node.js",
            "certificate9": "Python",
            "certificate10": "Django",
            "certificate11": "React.js",
            "certificate12": "Databases",
            "certificate13": "Logic: Algorithms",
            "certificate14": "Logic: Functions",
            "certificate15": "Logic: Languages",
            "certificate16": "Amazon Web Services",
            "certificate17": "Basic Computing",
        
             // Buttons
            "view": "View",
            "testing": "Testing",
            "open": "Open",
            "algorithms": "Algorithms",
            "functions": "Functions",
            "languages": "Languages",
            "basics": "Basics",
        
             // Footer
            "copyright": "2024 Virginia Sánchez. All rights reserved."
    }
};
document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang]?.[key]) {
        element.textContent = translations[lang][key];
    }
});
document.documentElement.lang = lang;
    document.body.classList.toggle('english-lang', lang === 'en');
    document.body.classList.toggle('spanish-lang', lang === 'es');
}

// ===== [4] CONFIGURACIÓN ADICIONAL ===== 
function setupEventListeners() {
    document.querySelectorAll('.certificate-overlay a').forEach(link => {
        link.addEventListener('click', (e) => e.stopPropagation());
    });
}
// ===== [5] FUNCIONALIDAD EXTRA ===== 
function showCertificate(imageName, title) {
    const img = document.getElementById('certificateModalImage');
    const titleEl = document.getElementById('certificateModalTitle');
    if (img) img.src = `/static/img/certificados/${imageName}`;
    if (titleEl) titleEl.textContent = title;
}
