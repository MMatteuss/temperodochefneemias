// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Menu Tab Filter
const tabBtns = document.querySelectorAll('.tab-btn');
const menuItems = document.querySelectorAll('.menu-item');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        
        // Filter menu items
        menuItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});


// Contato
function enviarWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    // Montar texto antes da codificação
    const textoOriginal = `Olá, Chef Neemias!\n\nMeu nome é *${nome}*.\n${mensagem}`;
    
    // Codifica o texto inteiro
    const textoFinal = encodeURIComponent(textoOriginal);

    // Link universal
    const urlWhatsApp = `https://wa.me/5582996509948?text=${textoFinal}`;

    // Verifica se é celular
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = `whatsapp://send?phone=5582996509948&text=${textoFinal}`;
    } else {
        window.open(urlWhatsApp, '_blank');
    }
}


// Função para carregar os depoimentos
async function loadTestimonials() {
    const slider = document.getElementById('testimonial-slider');
    
    try {
        // Usando um serviço proxy para contornar CORS (exemplo com AllOrigins)
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://restaurantguru.com.br/Tempero-do-Chef-Maceio-2')}`);
        const data = await response.json();
        
        // Criar um elemento DOM temporário para parsear o HTML
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data.contents, 'text/html');
        
        // Extrair as avaliações (ajuste os seletores conforme necessário)
        const reviews = htmlDoc.querySelectorAll('.review-item');
        
        if (reviews.length === 0) {
            slider.innerHTML = '<div class="no-reviews">Não foi possível carregar as avaliações no momento.</div>';
            return;
        }
        
        // Limpar o slider
        slider.innerHTML = '';
        
        // Processar cada avaliação (limitando a 3 para exemplo)
        reviews.slice(0, 3).forEach(review => {
            const author = review.querySelector('.user-name')?.textContent || 'Anônimo';
            const text = review.querySelector('.review-text')?.textContent || 'Ótimo restaurante!';
            const rating = review.querySelector('.rating-star')?.style.width || '0%'; // Ex: "80%"
            const avatar = review.querySelector('.user-avatar img')?.src || `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`;
            
            // Converter rating de porcentagem para estrelas (ex: 80% = 4 estrelas)
            const starCount = Math.round(parseInt(rating) / 20);
            
            // Criar elemento de slide
            const slide = document.createElement('div');
            slide.className = 'testimonial-slide';
            slide.innerHTML = `
                <div class="testimonial-avatar">
                    <img src="${avatar}" alt="${author}">
                </div>
                <p class="testimonial-text">"${text}"</p>
                <h4 class="testimonial-author">${author}</h4>
                <div class="testimonial-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(starCount)}
                    ${'<i class="far fa-star"></i>'.repeat(5 - starCount)}
                </div>
            `;
            
            slider.appendChild(slide);
        });
        
    } catch (error) {
        console.error('Erro ao carregar avaliações:', error);
        slider.innerHTML = `
            <div class="error-message">
                Não foi possível carregar as avaliações em tempo real. Aqui estão algumas avaliações de exemplo.
            </div>
            ${slider.innerHTML} <!-- Mantém as avaliações padrão caso existam -->
        `;
    }
}

// Carregar as avaliações quando a página carregar
document.addEventListener('DOMContentLoaded', loadTestimonials);

// Opcional: Atualizar a cada 30 minutos
setInterval(loadTestimonials, 30 * 60 * 1000);