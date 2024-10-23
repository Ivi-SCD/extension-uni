const contents = {
    ia: {
        title: "Inteligência Artificial",
        text: "Explore o fascinante mundo da I.A. e suas aplicações no futuro."
    },
    ensino: {
        title: "Plataformas de Ensino",
        text: "Descubra as mais avançadas plataformas de ensino digital."
    },
    organizacao: {
        title: "Organização Pessoal",
        text: "Aprenda técnicas futuristas de organização e produtividade."
    }
};

let currentSlide = 1;
const totalSlides = 3;

function nextSlide() {
    const currentSlideElement = document.querySelector(`[data-slide="${currentSlide}"]`);
    currentSlideElement.style.display = 'none';
    
    currentSlide++;
    
    if (currentSlide <= totalSlides) {
        const nextSlideElement = document.querySelector(`[data-slide="${currentSlide}"]`);
        nextSlideElement.style.display = 'block';
        
        if (currentSlide === totalSlides) {
            document.querySelector('.next-btn').style.display = 'none';
            document.querySelector('.start-btn').style.display = 'block';
        }
    }
}

function startExploration() {
    document.getElementById('introScreen').style.display = 'none';
    document.getElementById('mapContainer').style.display = 'block';
}

function showContent(area) {
    document.getElementById('mapContainer').style.display = 'none';
    document.getElementById('contentScreen').style.display = 'block';
    document.getElementById('contentTitle').textContent = contents[area].title;
    document.getElementById('contentText').textContent = contents[area].text;
}

function backToMap() {
    document.getElementById('contentScreen').style.display = 'none';
    document.getElementById('mapContainer').style.display = 'block';
}

// Adiciona efeito de glitch aos hotspots
document.querySelectorAll('.hotspot').forEach(hotspot => {
    hotspot.addEventListener('mouseover', () => {
        hotspot.classList.add('glitch-effect');
    });
    hotspot.addEventListener('mouseout', () => {
        hotspot.classList.remove('glitch-effect');
    });
});