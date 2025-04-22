// Dados completos dos depoimentos
const depoimentos = [
    // {
    //     nome: "Solange",
    //     estrelas: 1,
    //     comentario: "Péssimo. Falta de respeito deixar um pedido mais de hora esperando para depois cancelar.",
    //     data: "1 mês atrás",
    //     foto: "https://randomuser.me/api/portraits/women/68.jpg",
    //     detalhes: "Service: 1\nShow replies (1)"
    // },
    {
        nome: "Israel Moura",
        estrelas: 4,
        comentario: "Food: 4, Service: 5, Atmosphere: 4. Quiet, easy to talk.",
        data: "1 mês atrás",
        foto: "https://randomuser.me/api/portraits/men/32.jpg",
        detalhes: "Food: 4\nService: 5\nAtmosphere: 4\nReservation: Reservations not required\nNoise level: Quiet, easy to talk\nGroup size: 3-4 people\nWait time: No wait\nShow replies (1)"
    },
    {
        nome: "Naiara Souza",
        estrelas: 5,
        comentario: "Simplesmente perfeito, a comida é maravilhosa e preparada com bons ingredientes, tudo muito gostoso e muita variedade, Bom atendimento e um ambiente bastante aconchegante.",
        data: "3 meses atrás",
        foto: "https://randomuser.me/api/portraits/women/45.jpg",
        detalhes: "Service: Dine in\nMeal type: Lunch\nPrice per person: R$1–20\nFood: 5\nService: 5\nAtmosphere: 5"
    },
    {
        nome: "Alexandre Vasconcelos",
        estrelas: 5,
        comentario: "Local ótimo. Bom atendimento e boa comida.",
        data: "3 meses atrás",
        foto: "https://randomuser.me/api/portraits/men/40.jpg",
        detalhes: "Food: 5\nService: 5\nAtmosphere: 4\nShow replies (1)"
    },
    {
        nome: "Willams Nascimento",
        estrelas: 5,
        comentario: "Um excelente restaurante, recomendo muito, e tem um ambiente bonito e aconchegante.",
        data: "6 meses atrás",
        foto: "https://randomuser.me/api/portraits/men/22.jpg",
        detalhes: "Food: 5\nService: 5\nAtmosphere: 5"
    },
    {
        nome: "João Carlos JC",
        estrelas: 5,
        comentario: "Muito gostosa as comidas muito muito bom",
        data: "7 meses atrás",
        foto: "https://randomuser.me/api/portraits/men/35.jpg",
        detalhes: "Service: Takeaway\nFood: 5\nService: 5\nAtmosphere: 5"
    },
    {
        nome: "Lili",
        estrelas: 5,
        comentario: "Experiência maravilhosa, tudo perfeito!",
        data: "8 meses atrás",
        foto: "https://randomuser.me/api/portraits/women/33.jpg",
        detalhes: "Service: Dine in\nMeal type: Lunch\nPrice per person: R$20–40\nFood: 5\nService: 5\nAtmosphere: 5"
    },
    {
        nome: "F L Contabilidade",
        estrelas: 4,
        comentario: "Bom restaurante com ótima relação custo-benefício",
        data: "1 ano atrás",
        foto: "https://randomuser.me/api/portraits/men/60.jpg",
        detalhes: "Service: Dine in\nMeal type: Lunch\nPrice per person: R$20–40\nFood: 5\nService: 4\nAtmosphere: 4"
    },
    {
        nome: "Marcos Luciano",
        estrelas: 5,
        comentario: "Excelente atendimento e comida deliciosa",
        data: "1 ano atrás",
        foto: "https://randomuser.me/api/portraits/men/45.jpg",
        detalhes: "Service: Dine in\nMeal type: Lunch\nPrice per person: R$20–40\nFood: 5\nService: 5\nAtmosphere: 5"
    },
    {
        nome: "Igor Gama",
        estrelas: 5,
        comentario: "A comida é excelente. Você sente que o tempero é diferenciado. Recomendo pedir as iscas de carne e o filé de frango à parmegiana e, de sobremesa, o mousse de maracujá. Não vai se arrepender.",
        data: "1 ano atrás",
        foto: "https://randomuser.me/api/portraits/men/28.jpg",
        detalhes: "Service: Dine in\nMeal type: Lunch\nPrice per person: R$40–60\nFood: 5\nService: 5\nAtmosphere: 5"
    },
    {
        nome: "Leooliveirarita Rita",
        estrelas: 5,
        comentario: "Tudo de bom, gostei de tudo sem falar da comida tempero diferenciado.",
        data: "1 ano atrás",
        foto: "https://randomuser.me/api/portraits/women/65.jpg",
        detalhes: "Service: Delivery\nMeal type: Lunch\nPrice per person: R$1–20\nFood: 5\nService: 5\nAtmosphere: 5"
    },
    {
        nome: "Tulio Loureiro",
        estrelas: 2,
        comentario: "Gente cuidado quando forem fazer o pagamento no cartão. No cartão de crédito tem acréscimo. Mas eles estão passando no cartão de débito com acréscimo e não informam para os clientes.",
        data: "1 ano atrás",
        foto: "https://randomuser.me/api/portraits/men/30.jpg",
        detalhes: "Service: Takeaway\nMeal type: Lunch\nPrice per person: R$1–20\nFood: 2\nService: 1\nAtmosphere: 2"
    },
    {
        nome: "Mayara Losany",
        estrelas: 5,
        comentario: "Experiência incrível, superou minhas expectativas!",
        data: "1 ano atrás",
        foto: "https://randomuser.me/api/portraits/women/70.jpg",
        detalhes: "Food: 5\nService: 5\nAtmosphere: 5"
    },
    {
        nome: "VoxSapientiae",
        estrelas: 5,
        comentario: "Entrega rápida e comida quentinha, muito bom!",
        data: "1 ano atrás",
        foto: "https://randomuser.me/api/portraits/men/50.jpg",
        detalhes: "Service: Delivery\nMeal type: Lunch\nPrice per person: R$20–40\nFood: 5\nService: 5\nAtmosphere: 5"
    },
    {
        nome: "Alice Monteiro",
        estrelas: 5,
        comentario: "Lugar bonito e bem organizado, ótima comida e funcionários educados. Espero que cresça mais ainda.",
        data: "1 ano atrás",
        foto: "https://randomuser.me/api/portraits/women/40.jpg",
        detalhes: "Service: Dine in\nMeal type: Lunch\nPrice per person: R$20–40\nFood: 5\nService: 5\nAtmosphere: 4\nKid-friendliness: Existe uma área própria para crianças"
    },
    {
        nome: "Cicero Correia",
        estrelas: 5,
        comentario: "Muito bom. Ambiente familiar.",
        data: "2 anos atrás",
        foto: "https://randomuser.me/api/portraits/men/55.jpg",
        detalhes: "Service: Dine in\nPrice per person: R$20–40\nFood: 5\nService: 5\nAtmosphere: 5"
    },
    {
        nome: "Shirley Vieira",
        estrelas: 5,
        comentario: "Adorei o ambiente e a comida estava perfeita!",
        data: "2 anos atrás",
        foto: "https://randomuser.me/api/portraits/women/55.jpg",
        detalhes: "Service: Dine in\nMeal type: Lunch\nPrice per person: R$20–40\nFood: 5\nService: 5\nAtmosphere: 5\nParking options: Free of charge parking lot"
    },
    {
        nome: "Vitor Estevão",
        estrelas: 5,
        comentario: "Comida boa, ambiente agradável e simpatia no atendimento.",
        data: "2 anos atrás",
        foto: "https://randomuser.me/api/portraits/men/25.jpg",
        detalhes: "Food: 5\nService: 5\nAtmosphere: 5"
    },
    {
        nome: "Luciano Silva",
        estrelas: 5,
        comentario: "Comida ótima",
        data: "2 anos atrás",
        foto: "https://randomuser.me/api/portraits/men/65.jpg",
        detalhes: "Food: 5\nService: 5\nAtmosphere: 5"
    },
    {
        nome: "Weliton Silva",
        estrelas: 4,
        comentario: "Boa experiência, mas o estacionamento é complicado",
        data: "2 anos atrás",
        foto: "https://randomuser.me/api/portraits/men/70.jpg",
        detalhes: "Service: Dine in\nMeal type: Lunch\nPrice per person: R$20–40\nFood: 3\nService: 4\nAtmosphere: 4\nParking space: Somewhat difficult to find parking\nParking options: Free of charge street parking"
    },
    {
        nome: "Fernanda Pedrini",
        estrelas: 5,
        comentario: "Melhor almoço do Eustáquio",
        data: "2 anos atrás",
        foto: "https://randomuser.me/api/portraits/women/60.jpg",
        detalhes: ""
    },
    {
        nome: "Luis Eduardo Cavalcante",
        estrelas: 5,
        comentario: "Ótimas opções de refeições, bem temperado e no ponto certo, além de um preço bastante acessível...",
        data: "2 anos atrás",
        foto: "https://randomuser.me/api/portraits/men/40.jpg",
        detalhes: "Vegetarian options: Saladas variadas\nService: Dine in\nMeal type: Lunch\nPrice per person: R$20–40"
    }
];

// Função para formatar detalhes
function formatarDetalhes(detalhes) {
    if (!detalhes) return '';
    
    return detalhes.split('\n').map(item => {
        if (item.includes(':')) {
            const [key, value] = item.split(':');
            return `<strong>${key.trim()}:</strong> ${value.trim()}`;
        }
        return item;
    }).join('<br>');
}

// Função para criar card de depoimento
function criarDepoimento(dep) {
    const div = document.createElement('div');
    div.classList.add('testimonial-card');
    
    div.innerHTML = `
        <div class="testimonial-author">
            <div class="author-img">
                <img src="${dep.foto}" alt="${dep.nome}" loading="lazy">
            </div>
            <div class="author-info">
                <h4>${dep.nome}</h4>
                <span class="review-date">${dep.data}</span>
                <div class="rating">${'★'.repeat(dep.estrelas)}${'☆'.repeat(5-dep.estrelas)}</div>
            </div>
        </div>
        <p class="testimonial-text">${dep.comentario}</p>
        ${dep.detalhes ? `<div class="testimonial-details">${formatarDetalhes(dep.detalhes)}</div>` : ''}
        <br><br>
    `;
    
    return div;
}

// Carrega depoimentos no slider
function carregarDepoimentosSlider() {
    const container = document.getElementById('testimonial-slider');
    container.innerHTML = '';
    
    depoimentos.forEach(dep => {
        container.appendChild(criarDepoimento(dep));
    });
    
    // Configura navegação do slider
    configurarSliderNav();
}

// Carrega todos depoimentos no modal
function carregarTodosDepoimentos() {
    const container = document.getElementById('all-testimonials');
    container.innerHTML = '';
    
    depoimentos.forEach(dep => {
        container.appendChild(criarDepoimento(dep));
    });
}

// Configura navegação do slider
function configurarSliderNav() {
    const slider = document.querySelector('.testimonial-slider');
    const prevBtn = document.querySelector('.slider-nav.prev');
    const nextBtn = document.querySelector('.slider-nav.next');
    
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -350, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: 350, behavior: 'smooth' });
    });
}

// Configura modal
function configurarModal() {
    const modal = document.getElementById('avaliacoes-modal');
    const btn = document.getElementById('ver-mais-btn');
    const span = document.querySelector('.close-modal');
    
    btn.addEventListener('click', () => {
        carregarTodosDepoimentos();
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    });
    
    span.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });
    
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    carregarDepoimentosSlider();
    configurarModal();
});