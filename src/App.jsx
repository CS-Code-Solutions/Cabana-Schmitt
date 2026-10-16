import React, { useState } from 'react';
import {
  Star, MapPin, Users, BedDouble, Bath, Wifi, CookingPot, Car,
  Wind, PawPrint, Telescope, Flame, Waves, Tv, Music2, Menu, X,
  ArrowUpRight, ChevronRight, Heart, CalendarDays, Instagram, MessageCircle
} from 'lucide-react';

const AIRBNB_URL = 'https://www.airbnb.com.br/rooms/1511092742388459827?viralityEntryPoint=1&s=76';
const WHATSAPP_NUMBER = '5551996105590';
const waLink = (message = 'Olá! Gostaria de saber mais sobre a Cabana Schmitt – Vista das Estrelas e consultar disponibilidade.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const photos = [
  { src: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1400&q=85', alt: 'Cabana de madeira cercada pela natureza', label: 'A cabana' },
  { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85', alt: 'Interior aconchegante com madeira e luz quente', label: 'Conforto e aconchego' },
  { src: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1000&q=85', alt: 'Banheira para relaxar', label: 'Seu momento de relaxar' },
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85', alt: 'Ambiente interno de estilo natural', label: 'Detalhes especiais' },
  { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85', alt: 'Paisagem de montanhas e natureza', label: 'Natureza ao redor' },
];

const amenities = [
  [CookingPot, 'Cozinha completa', 'Tudo para preparar suas refeições com tranquilidade.'],
  [Waves, 'Banheira com hidromassagem', 'Um convite para desacelerar e relaxar.'],
  [Telescope, 'Telescópio para observar estrelas', 'Contemple o céu estrelado nas noites limpas.'],
  [Flame, 'Área gourmet com churrasqueira', 'Churrasco ao ar livre com quem você gosta.'],
  [Wind, 'Ar-condicionado quente e frio', 'Conforto em todas as estações.'],
  [Wifi, 'Wi-Fi', 'Conectividade para quando você precisar.'],
  [Tv, 'TV com mais de 200 canais', 'Entretenimento para aproveitar a cabana.'],
  [Music2, 'Som ambiente', 'Bluetooth, USB e rádio para sua trilha sonora.'],
  [Car, 'Estacionamento gratuito', 'Mais praticidade durante a estadia.'],
  [PawPrint, 'Pet friendly', 'Animais de pequeno porte são bem-vindos.'],
];

const reviews = [
  { name: 'Roberto Carlos', when: 'Há pouco tempo', text: 'Foram dois dias incríveis em meio à natureza! A cabana é um verdadeiro refúgio para quem busca tranquilidade, descanso e momentos especiais longe da correria do dia a dia.' },
  { name: 'Célia', when: 'Recentemente', text: 'Lugar romântico, lindo, ótimo para relaxar e desestressar. Maico é gentil e prestativo.' },
  { name: 'Hóspedes do Airbnb', when: 'Avaliações verificadas no anúncio', text: 'Os hóspedes destacam a hospitalidade, o conforto, a localização tranquila e a experiência de estar em contato com a natureza.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement"><span className="announcement-star">✦</span> Um refúgio especial no interior de Maratá, RS <span className="announcement-star">✦</span></div>
      <header className="header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Cabana Schmitt início">
          <span className="brand-mark">CS</span>
          <span className="brand-copy"><strong>Cabana Schmitt</strong><small>VISTA DAS ESTRELAS</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
          {menuOpen ? <X size={23}/> : <Menu size={23}/>}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#experiencia" onClick={closeMenu}>A experiência</a>
          <a href="#galeria" onClick={closeMenu}>Galeria</a>
          <a href="#comodidades" onClick={closeMenu}>Comodidades</a>
          <a href="#localizacao" onClick={closeMenu}>Localização</a>
          <a className="nav-cta" href={AIRBNB_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>Consultar datas <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-image" role="img" aria-label="Cabana charmosa em meio à natureza ao entardecer" />
          <div className="hero-shade"/>
          <div className="hero-content">
            <div className="eyebrow light"><span/> UM LUGAR PARA SE REENCONTRAR</div>
            <h1>Onde a calma<br/>encontra <em>as estrelas.</em></h1>
            <p>Deixe a rotina para trás. Viva dias de aconchego, natureza e noites que parecem feitas só para você.</p>
            <div className="hero-actions">
              <a className="button button-gold" href={AIRBNB_URL} target="_blank" rel="noreferrer">Encontre sua data <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="#experiencia">Descubra a cabana <ChevronRight size={17}/></a>
            </div>
            <div className="hero-rating"><span className="rating-stars">★★★★★</span><span><strong>5,0/5</strong> · 32 avaliações no Airbnb</span></div>
          </div>
          <div className="hero-caption"><span className="caption-line"/> ESPERANÇA · MARATÁ · RS</div>
          <a className="scroll-cue" href="#experiencia"><span/> Role para descobrir</a>
        </section>

        <section className="trust-strip" aria-label="Destaques da hospedagem">
          <div><Star/><span><strong>5,0 de 5</strong><small>Avaliação no Airbnb</small></span></div>
          <div><Users/><span><strong>Até 4 hóspedes</strong><small>Espaço inteiro</small></span></div>
          <div><BedDouble/><span><strong>Conforto e privacidade</strong><small>Suíte aconchegante</small></span></div>
          <div><MapPin/><span><strong>Maratá, RS</strong><small>Interior e natureza</small></span></div>
        </section>

        <section className="intro section-wrap" id="experiencia">
          <div className="intro-image-wrap">
            <img src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1100&q=85" alt="Cabana cercada pela natureza" className="intro-image"/>
            <div className="image-note"><span className="note-icon">✦</span><span><strong>Seu tempo, no seu ritmo</strong><small>Natureza, conforto e privacidade</small></span></div>
          </div>
          <div className="intro-copy">
            <div className="eyebrow"><span/> UM REFÚGIO COM ALMA</div>
            <h2>Mais do que uma estadia.<br/><em>Uma lembrança para levar.</em></h2>
            <p className="lead">No interior de Maratá, existe um lugar onde o tempo parece passar mais devagar.</p>
            <p>A Cabana Schmitt – Vista das Estrelas foi pensada para quem deseja se desconectar da correria e se reconectar com o que importa. A madeira, a luz acolhedora, a paisagem rural e o céu estrelado criam o cenário perfeito para momentos especiais.</p>
            <p>Com aproximadamente 42 m², a cabana combina o charme do campo com comodidades para você aproveitar cada instante com conforto.</p>
            <a className="text-link" href="#comodidades">Conheça cada detalhe <ChevronRight size={17}/></a>
          </div>
        </section>

        <section className="gallery-section" id="galeria">
          <div className="section-wrap">
            <div className="section-heading">
              <div><div className="eyebrow"><span/> UM OLHAR POR DENTRO</div><h2>Seu próximo lugar <em>favorito.</em></h2></div>
              <p>Ambientes acolhedores, detalhes pensados com carinho e paisagens que convidam a ficar mais um pouco.</p>
            </div>
            <div className="gallery-grid">
              {photos.map((photo, i) => <button className={`gallery-photo photo-${i}`} key={photo.src} onClick={() => setActivePhoto(i)} aria-label={`Ampliar foto: ${photo.label}`}>
                <img src={photo.src} alt={photo.alt} loading={i === 0 ? 'eager' : 'lazy'}/>
                <span className="photo-label">{photo.label}</span>
              </button>)}
              <button className="gallery-more" onClick={() => setActivePhoto(0)}><span>✦</span><strong>Um convite para descobrir</strong><small>Explore os espaços da cabana</small><span className="gallery-more-link">Ver galeria <ArrowUpRight size={15}/></span></button>
            </div>
            <p className="photo-disclaimer">Imagens ilustrativas nesta versão inicial. Substituir pelas fotos oficiais da Cabana Schmitt antes da publicação.</p>
          </div>
        </section>

        <section className="experience-band">
          <div className="experience-bg"/>
          <div className="experience-content">
            <div className="eyebrow light"><span/> QUANDO A NOITE CHEGA</div>
            <h2>Um céu inteiro<br/>só para <em>você.</em></h2>
            <p>Apague as luzes, acomode-se na varanda e olhe para cima. Com o telescópio à disposição, cada noite de céu limpo pode virar uma memória inesquecível.</p>
            <div className="experience-tags"><span><Telescope/> Observação das estrelas</span><span><Heart/> Momentos a dois</span><span><Waves/> Pausa para relaxar</span></div>
          </div>
        </section>

        <section className="amenities section-wrap" id="comodidades">
          <div className="section-heading amenities-heading">
            <div><div className="eyebrow"><span/> CONFORTO EM CADA DETALHE</div><h2>Tudo para você <em>se sentir bem.</em></h2></div>
            <p>O charme do campo com os confortos que fazem a diferença na sua estadia.</p>
          </div>
          <div className="amenities-grid">
            {amenities.map(([Icon, title, description]) => <article className="amenity" key={title}><div className="amenity-icon"><Icon size={22}/></div><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <div className="amenities-footnote"><PawPrint size={17}/> Vai trazer seu pet? Consulte as condições com o anfitrião antes da reserva.</div>
        </section>

        <section className="countryside">
          <div className="countryside-photo"><img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85" alt="Paisagem natural de montanhas e água" loading="lazy"/></div>
          <div className="countryside-copy">
            <div className="eyebrow"><span/> A ESSÊNCIA DO INTERIOR</div>
            <h2>Respire fundo.<br/><em>Você chegou.</em></h2>
            <p>A propriedade reúne 15 hectares de paisagem rural, áreas de natureza, lavoura e pastagens. Um convite para desacelerar, observar os animais e viver um pouco do ritmo acolhedor do campo.</p>
            <p>Entre passeios pela região e momentos de descanso na varanda, descubra a simplicidade que faz bem.</p>
            <div className="land-stat"><strong>15 <small>hectares</small></strong><span>de paisagem rural<br/>para contemplar</span></div>
          </div>
        </section>

        <section className="reviews section-wrap" id="avaliacoes">
          <div className="reviews-summary">
            <div className="eyebrow"><span/> QUEM JÁ VIVEU A EXPERIÊNCIA</div>
            <h2>Histórias que<br/><em>ficam com a gente.</em></h2>
            <div className="big-rating"><span>5,0</span><div><div className="rating-stars">★★★★★</div><small>32 avaliações no Airbnb</small></div></div>
            <p>Os hóspedes destacam a hospitalidade, o conforto e a tranquilidade da cabana.</p>
            <a className="text-link" href={AIRBNB_URL} target="_blank" rel="noreferrer">Ler avaliações no Airbnb <ArrowUpRight size={16}/></a>
          </div>
          <div className="review-cards">
            {reviews.map((review, i) => <article className="review-card" key={review.name}><div className="review-top"><div className="review-avatar">{review.name.charAt(0)}</div><div><strong>{review.name}</strong><small>{review.when}</small></div><span className="review-stars">★★★★★</span></div><p>“{review.text}”</p>{i === 2 && <small className="review-note">Resumo dos temas mencionados pelos hóspedes.</small>}</article>)}
          </div>
        </section>

        <section className="location-section" id="localizacao">
          <div className="location-copy">
            <div className="eyebrow light"><span/> UM DESTINO PARA DESACELERAR</div>
            <h2>No coração tranquilo<br/>de <em>Maratá, RS.</em></h2>
            <p>Na localidade de Esperança, interior de Maratá. Um refúgio rural com sossego e acesso aos atrativos da região.</p>
            <div className="location-details"><MapPin/><div><strong>Esperança, Maratá</strong><span>Rio Grande do Sul · Brasil</span></div></div>
            <a className="button button-gold" href="https://www.google.com/maps/search/?api=1&query=Esperan%C3%A7a%2C+Marat%C3%A1%2C+RS" target="_blank" rel="noreferrer">Explorar a região <ArrowUpRight size={16}/></a>
            <small className="location-note">A localização exata é compartilhada conforme as orientações da reserva.</small>
          </div>
          <div className="distance-panel">
            <span className="distance-kicker">PERTO DE VOCÊ, LONGE DA CORRERIA</span>
            {[['Salvador do Sul','10 km'],['Montenegro','25 km'],['Carlos Barbosa','50 km'],['Lajeado','50 km'],['Novo Hamburgo','60 km'],['Porto Alegre','90 km']].map(([city, distance]) => <div className="distance-row" key={city}><span>{city}</span><strong>{distance}</strong></div>)}
            <small>Distâncias aproximadas informadas no anúncio.</small>
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-ornament">✦</div>
          <div className="eyebrow"><span/> SUA PAUSA ESTÁ ESPERANDO</div>
          <h2>Permita-se viver<br/><em>algo especial.</em></h2>
          <p>Escolha suas datas, prepare as malas e venha descobrir o encanto de uma noite estrelada no interior.</p>
          <div className="cta-actions"><a className="button button-dark" href={AIRBNB_URL} target="_blank" rel="noreferrer"><CalendarDays size={17}/> Consultar disponibilidade <ArrowUpRight size={16}/></a><a className="button button-outline" href={waLink()} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Falar pelo WhatsApp</a></div>
          <small>Valores e disponibilidade são confirmados diretamente nos canais de reserva.</small>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark">CS</span><span className="brand-copy"><strong>Cabana Schmitt</strong><small>VISTA DAS ESTRELAS</small></span></a>
        <span className="footer-motto">Feita para viver o extraordinário nas coisas simples.</span>
        <div className="footer-links"><a href={AIRBNB_URL} target="_blank" rel="noreferrer">Airbnb <ArrowUpRight size={13}/></a><a href={waLink()} target="_blank" rel="noreferrer">WhatsApp <MessageCircle size={13}/></a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Cabana Schmitt – Vista das Estrelas</span><span>Maratá · Rio Grande do Sul</span></div>
      </footer>

      <a className="floating-whatsapp" href={waLink()} target="_blank" rel="noreferrer" aria-label="Falar com a cabana pelo WhatsApp"><MessageCircle size={23}/><span>Fale conosco</span></a>

      {activePhoto !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeria de fotos" onClick={() => setActivePhoto(null)}>
        <button className="lightbox-close" onClick={() => setActivePhoto(null)} aria-label="Fechar galeria"><X/></button>
        <button className="lightbox-arrow left" onClick={(e) => {e.stopPropagation(); setActivePhoto((activePhoto + photos.length - 1) % photos.length)}} aria-label="Foto anterior">‹</button>
        <img src={photos[activePhoto].src.replace('w=1000','w=1600').replace('w=1400','w=1600')} alt={photos[activePhoto].alt} onClick={e => e.stopPropagation()}/>
        <button className="lightbox-arrow right" onClick={(e) => {e.stopPropagation(); setActivePhoto((activePhoto + 1) % photos.length)}} aria-label="Próxima foto">›</button>
        <div className="lightbox-caption">{photos[activePhoto].label} · {activePhoto + 1} de {photos.length}</div>
      </div>}
    </div>
  );
}

export default App;
