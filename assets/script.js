// Data de início do relacionamento
const START_DATE = new Date('2023-12-17T00:00:00');

// Elementos do contador
const elements = {
    years: document.getElementById('years'),
    months: document.getElementById('months'),
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    totalDays: document.getElementById('totalDays')
};

// Função para calcular o tempo
function updateCounter() {
    const now = new Date();
    const diff = now - START_DATE;
    
    // Cálculo completo
    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    
    // Anos, meses e dias restantes
    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const days = totalDays % 30;
    
    // Horas, minutos e segundos atuais
    const hours = String(totalHours % 24).padStart(2, '0');
    const minutes = String(totalMinutes % 60).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    
    // Atualizar elementos
    elements.years.textContent = years;
    elements.months.textContent = months;
    elements.days.textContent = days;
    elements.hours.textContent = hours;
    elements.minutes.textContent = minutes;
    elements.seconds.textContent = seconds;
    elements.totalDays.textContent = totalDays.toLocaleString();
}

// Inicializar e atualizar a cada segundo
document.addEventListener('DOMContentLoaded', () => {
    updateCounter();
    setInterval(updateCounter, 1000);
    
    // Smooth scroll para navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Atualizar navegação ativa
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
});