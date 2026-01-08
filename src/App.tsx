import { User, MapPin, ChevronLeft, ChevronRight, Star, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import './animations.css';
import { BookingModal } from './components/BookingModal';
import { OptimizedImage } from './components/OptimizedImage';

function App() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  useEffect(() => {
    const heroImageMobile = new Image();
    const heroImageDesktop = new Image();

    heroImageMobile.src = 'https://barbertime.online/wp-content/uploads/2025/12/secao-1-1-1.jpg';
    heroImageDesktop.src = 'https://barbertime.online/wp-content/uploads/2025/12/page-1-4.jpg';

    const checkLoaded = () => {
      if (heroImageMobile.complete && heroImageDesktop.complete) {
        setHeroImageLoaded(true);
      }
    };

    heroImageMobile.onload = checkLoaded;
    heroImageDesktop.onload = checkLoaded;
    checkLoaded();
  }, []);


  const testimonials = [
    {
      id: 1,
      name: 'Isabela',
      text: 'Experiência incrível! Cada detalhe foi perfeito. Voltarei com certeza para meu próximo agendamento. Muito obrigada!',
      rating: 5,
      type: 'audio',
      audioUrl: 'https://barbertime.online/wp-content/uploads/2025/12/WhatsApp-Audio-2025-12-09-at-14.08.41.mp4',
      avatar: 'https://barbertime.online/wp-content/uploads/2025/12/Design-sem-nome-53.jpg'
    },
    {
      id: 2,
      name: 'Brenda Castro',
      text: 'Falar do Caisa Linda é falar de um lugar que acolhe não só o corpo, mas também o coração. Cada visita é uma pausa necessária na correria da vida, onde eu me sinto cuidada, vista e valorizada. Não é apenas estética, é afeto, é atenção, é aconchego. Desde o momento em que chego, sempre já esperada com tanto carinho e organização, sinto que ali existe um cuidado verdadeiro. A Lidy tem um jeito especial de receber, respeitar minhas escolhas e me fazer sentir completamente à vontade. E, no meio dos atendimentos, aquela conversa leve, espontânea e cheia de sensibilidade transforma tudo em um momento de paz e a presença de Deus é real. É como se a alma respirasse. Saio do Coisa linda sempre mais leve, e com o coração aquecido pelas trocas vivenciadas . É um lugar para onde a gente deseja voltar antes mesmo de ir embora. E isso só é possível porque a Lidy  coloca amor em cada detalhe. Sou profundamente grata por esse cuidado tão único. Amo ser cuidada pela Lidy ( coisa linda)',
      rating: 5,
      type: 'text',
      avatar: 'https://barbertime.online/wp-content/uploads/2025/12/Captura-de-tela-2025-12-11-164813.png'
    },
  ];

  const faqs = [
    {
      question: 'Como funciona o agendamento?',
      answer: 'O agendamento é simples e rápido! Você pode entrar em contato pelo WhatsApp ou redes sociais. Escolha o dia e horário que melhor se encaixa na sua rotina e reserve seu momento de autocuidado. Trabalho com horários flexíveis para atender melhor você.'
    },
    {
      question: 'Quanto tempo dura cada sessão?',
      answer: 'Cada sessão tem duração média de 1h30 a 2h, dependendo do serviço escolhido. Para unhas de gel e nail art mais elaborada, pode levar um pouco mais. O importante é que você tenha um momento tranquilo, sem pressa, para receber todo o cuidado que merece.'
    },
    {
      question: 'Quais produtos são utilizados?',
      answer: 'Trabalho exclusivamente com produtos de alta qualidade e marcas reconhecidas no mercado. Todos os materiais são esterilizados e seguem os mais rigorosos padrões de higiene e segurança. Sua saúde e bem-estar são prioridade.'
    },
    {
      question: 'Quanto tempo dura a unha de gel?',
      answer: 'As unhas de gel têm durabilidade média de 20 a 30 dias, dependendo dos seus cuidados diários e do crescimento natural da unha. Para manter sempre impecável, recomendo manutenção mensal. Te oriento sobre os cuidados necessários para prolongar a durabilidade.'
    },
    {
      question: 'Aceita cartão ou é apenas dinheiro?',
      answer: 'Aceito diversas formas de pagamento: dinheiro, Pix e cartões de débito/crédito. Seu conforto e praticidade são importantes para mim, então você pode escolher a forma que for mais conveniente.'
    },
    {
      question: 'Posso levar uma referência de nail art?',
      answer: 'Com certeza! Adoraria ver suas referências e ideias. Pode trazer fotos, prints ou me enviar antes pelo WhatsApp. Assim consigo me preparar melhor e criar exatamente o que você sonhou. Seu desejo é minha inspiração.'
    },
    {
      question: 'Atende em domicílio?',
      answer: 'Atualmente trabalho em espaço próprio, preparado especialmente para oferecer a melhor experiência. Aqui você encontra um ambiente acolhedor, higienizado e pensado em cada detalhe para seu conforto e relaxamento.'
    },
    {
      question: 'Preciso fazer algum preparo antes?',
      answer: 'Não precisa de nenhum preparo especial! Apenas venha como está. Caso tenha esmalte, removerei com cuidado. Se tiver unhas de gel ou acrigel de outro lugar, também faço a remoção segura. Tudo será preparado aqui com carinho e atenção.'
    }
  ];


  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen font-inter">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 pt-2 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-4 sm:px-6 py-2 sm:py-2.5 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="text-white font-semibold text-sm">Coisalinda</div>
              <nav className="hidden sm:flex items-center gap-6">
                <a href="#" className="text-white/80 hover:text-white text-xs transition">Sobre</a>
                <a href="#" className="text-white/80 hover:text-white text-xs transition">Benefícios</a>
                <a href="#" className="text-white/80 hover:text-white text-xs transition">Contato</a>
              </nav>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-[#a5855a] hover:bg-[#8d6f48] text-white font-medium px-3 sm:px-4 py-1.5 rounded-lg text-xs transition"
              >
                Agendar
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative flex items-center min-h-screen bg-black overflow-hidden pt-24">

        {/* BACKGROUND - MOBILE */}
        <div className="absolute inset-0 block md:hidden">
          <img
            src="https://barbertime.online/wp-content/uploads/2025/12/secao-1-1-1.jpg"
            alt=""
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              heroImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* BACKGROUND - DESKTOP */}
        <div className="absolute inset-0 hidden md:block">
          <img
            src="https://barbertime.online/wp-content/uploads/2025/12/page-1-4.jpg"
            alt=""
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              heroImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

{/* CONTENT - DESKTOP */}
<div className="relative z-20 w-full max-w-5xl mx-auto px-4 py-12 flex items-center mt-8 hidden md:flex">
  <div className="max-w-[500px]">

    {/* LABEL */}
    <div className="flex items-center gap-2 mb-4">
      <MapPin className="w-4 h-4 text-amber-400" />
      <span className="text-white/90 text-[10px] uppercase tracking-wider">
        São Raimundo Nonato
      </span>
    </div>

    {/* HEADLINE */}
    <h1 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight content-heading">
      <span className="text-[#a5855a] block">A Beleza das Suas Unhas </span>
      <span className="text-white block">Elevada ao Nível Premium</span>
      <span className="text-white block"></span>
    </h1>

    {/* TAGLINE */}
    <p className="text-[#a5855a] text-sm sm:text-base font-light mb-6 tracking-wide content-tagline">A experiência que transforma seu momento de autocuidado em um ritual de luxo</p>

    {/* SUBHEAD */}
    <p className="text-white/90 text-sm mb-8 leading-relaxed content-heading">
      Imagine entrar em um espaço onde cada detalhe foi pensado para você — onde suas unhas não são apenas feitas, mas celebradas.
Aqui, você não marca uma manicure… você vive uma Experiência Premium.
    </p>

    {/* CTA */}
    <button
      onClick={() => setIsBookingModalOpen(true)}
      className="group bg-[#a5855a] hover:bg-[#8d6f48] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all inline-flex items-center gap-2 shadow-lg mb-4 content-cta"
    >
      Quero minha experiência premium agora
      <span className="bg-white/20 rounded p-1 group-hover:translate-x-1 transition-transform">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </button>

    {/* USER */}
    <div className="flex items-center gap-1.5 text-amber-400 text-[11px]">
      <User className="w-3 h-3" />
      <span>Bem-vinda ao Coisa Linda Nail Designer.</span>
    </div>

  </div>
</div>

{/* CONTENT - MOBILE */}
<div className="relative z-20 w-full max-w-5xl mx-auto px-4 py-12 flex items-center justify-center md:hidden mt-12">
  <div className="w-full max-w-sm backdrop-blur-lg bg-white/10 border border-white/30 rounded-3xl px-6 py-8 shadow-2xl hover:border-white/50 transition-all duration-300">

    {/* LABEL */}
    <div className="flex items-center justify-center gap-2 mb-4">
      <MapPin className="w-4 h-4 text-amber-400" />
      <span className="text-white/90 text-[10px] uppercase tracking-wider">
        São Raimundo Nonato
      </span>
    </div>

    {/* HEADLINE */}
    <h1 className="text-2xl font-bold mb-6 leading-tight text-center">
      <span className="text-[#a5855a] block">A Beleza das Suas Unhas </span>
      <span className="text-white block">Elevada ao Nível Premium</span>
    </h1>

    {/* SUBHEAD */}
    <p className="text-white/90 text-xs mb-6 leading-relaxed text-center">
      Imagine entrar em um espaço onde cada detalhe foi pensado para você — onde suas unhas não são apenas feitas, mas celebradas. Aqui, você vive uma Experiência Premium.
    </p>

    {/* CTA */}
    <button
      onClick={() => setIsBookingModalOpen(true)}
      className="group bg-[#a5855a] hover:bg-[#8d6f48] text-white font-semibold px-4 py-2.5 rounded-lg text-xs transition-all flex items-center justify-center gap-2 shadow-lg w-full"
    >
      Quero minha experiência premium
      <span className="bg-white/20 rounded p-1 group-hover:translate-x-1 transition-transform">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </button>

  </div>
</div>

</section>

      {/* IMAGE SECTION */}
      <section className="relative w-full overflow-hidden">
        {/* Mobile image */}
        <OptimizedImage
          src="https://barbertime.online/wp-content/uploads/2025/12/secao-2.jpg"
          alt="Coisa Linda"
          className="w-full h-auto object-cover block md:hidden"
          priority={false}
        />
        {/* Desktop image */}
        <OptimizedImage
          src="https://barbertime.online/wp-content/uploads/2025/12/page-1-3.jpg"
          alt="Coisa Linda"
          className="w-full h-auto object-cover hidden md:block"
          priority={false}
        />
      </section>

      {/* VIDEO SECTION */}
      <section className="relative py-4 sm:py-12 md:py-20 px-4 sm:px-6 min-h-0 sm:min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{
        backgroundColor: '#f5f2ed'
      }}>

        {/* PREMIUM DEPTH LAYERS */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large soft shadow circles */}
          <div className="absolute -top-96 -left-96 w-96 h-96 rounded-full" style={{
            background: 'radial-gradient(circle, rgba(212, 207, 197, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}></div>
          <div className="absolute -bottom-96 -right-96 w-96 h-96 rounded-full" style={{
            background: 'radial-gradient(circle, rgba(201, 191, 180, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}></div>
          <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full" style={{
            background: 'radial-gradient(circle, rgba(232, 227, 217, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}></div>

          {/* Atmospheric layers */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(245, 242, 237, 0.3) 0%, transparent 30%, transparent 70%, rgba(212, 207, 197, 0.15) 100%)',
            backdropFilter: 'blur(1px)'
          }}></div>

          {/* Texture overlay */}
          <div className="absolute inset-0" style={{
            background: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(0, 0, 0, 0.03) 2px,
                rgba(0, 0, 0, 0.03) 4px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0, 0, 0, 0.02) 2px,
                rgba(0, 0, 0, 0.02) 4px
              )
            `,
            opacity: 0.6
          }}></div>

          {/* Vignette effect */}
          <div className="absolute inset-0" style={{
            background: `
              radial-gradient(ellipse at center, transparent 0%, rgba(212, 207, 197, 0.12) 70%, rgba(212, 207, 197, 0.2) 100%)
            `
          }}></div>

          {/* Additional depth with multiple radials */}
          <div className="absolute inset-0" style={{
            background: `
              radial-gradient(ellipse 600px 400px at 30% 20%, rgba(232, 227, 217, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 700px 500px at 70% 80%, rgba(201, 191, 180, 0.1) 0%, transparent 50%)
            `
          }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center">

         {/* HEADING */}
<div className="text-center mb-8 sm:mb-12 animate-slide-up">
  <h2 className="text-gray-900 block text-xl sm:text-2xl lg:text-3xl font-light mb-2 sm:mb-3">
    Permita-se Viver um Momento <br /> Feito Só Para Você
  </h2>
  <p className="text-gray-600 text-[10px] sm:text-xs uppercase tracking-wide">
    APERTE O PLAY
  </p>
</div>


          {/* VIDEO SHORTS - FIXED SIZE WITH PREMIUM DEPTH */}
          <div className="relative w-full max-w-3xl mb-12 sm:mb-16 aspect-video group video-thumbnail rounded-xl sm:rounded-2xl overflow-hidden">
            {/* Shadow layers for depth */}
            <div className="absolute -inset-2 sm:-inset-4 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-black/5 to-black/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 sm:-inset-2 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-black/10 via-transparent to-black/5 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

            {/* Main video container */}
            <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4),0_20px_40px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:shadow-[0_50px_100px_-25px_rgba(0,0,0,0.5)]">
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div style={{ paddingBottom: '56.25%', position: 'relative', height: 0, overflow: 'hidden' }}>
                <iframe
                  src="https://player.vimeo.com/video/1151071011?badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Permita-se Viver um Momento Feito Só Para Você"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
            </div>
          </div>

          

          {/* CTA BUTTON */}
          <div className="text-center animate-slide-in-up">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="group bg-[#a5855a] hover:bg-[#8d6f48] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-xs sm:text-sm transition-all inline-flex items-center gap-2 sm:gap-3 shadow-lg uppercase tracking-wide"
            >
              AGENDAR AGORA!
              <span className="bg-white/20 rounded p-1 sm:p-1.5 group-hover:translate-x-1 transition-transform">
                <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden" style={{
        backgroundColor: '#fdfcfb'
      }}>
        {/* BACKGROUND TEXTURE */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(165, 133, 90, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(165, 133, 90, 0.05) 0%, transparent 50%)
            `
          }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a5855a]/20" style={{
                backgroundColor: 'rgba(165, 133, 90, 0.05)'
              }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#a5855a]"></span>
                <span className="text-[#a5855a] text-[10px] uppercase tracking-wider font-medium">Nossos Trabalhos</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-gray-900 leading-tight">
              Arte nas Suas Mãos
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Cada unha é uma tela em branco onde criamos verdadeiras obras de arte.
              Conheça alguns dos nossos trabalhos mais recentes.
            </p>
          </div>

          {/* VIDEO SECTION */}
          <div className="w-full max-w-3xl mx-auto mb-12">

            {/* VIDEO CONTAINER */}
            <div className="relative group">

              {/* Shadow layers for depth */}
              <div className="absolute -inset-2 sm:-inset-4 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#a5855a]/10 to-[#a5855a]/5 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 sm:-inset-2 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#a5855a]/15 via-transparent to-[#a5855a]/5 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Main video container */}
              <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(165,133,90,0.3),0_20px_40px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:shadow-[0_50px_100px_-25px_rgba(165,133,90,0.4)]">

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#a5855a]/20 via-transparent to-[#a5855a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Vimeo video */}
                <div style={{ paddingBottom: '56.25%', position: 'relative', height: 0, overflow: 'hidden' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1151073694?badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Arte nas Suas Mãos"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-slide-in-up">
            <p className="text-gray-600 text-sm mb-6">Quer ver seu trabalho aqui também?</p>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="group bg-[#a5855a] hover:bg-[#8d6f48] text-white font-semibold px-8 py-4 rounded-lg text-sm transition-all inline-flex items-center gap-3 shadow-lg uppercase tracking-wide"
            >
              AGENDE SUA SESSÃO
              <span className="bg-white/20 rounded p-1.5 group-hover:translate-x-1 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden" style={{
        backgroundColor: '#f5f2ed'
      }}>
        {/* BACKGROUND TEXTURE */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 80% 20%, rgba(165, 133, 90, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(165, 133, 90, 0.05) 0%, transparent 50%)
            `
          }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a5855a]/20" style={{
                backgroundColor: 'rgba(165, 133, 90, 0.05)'
              }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#a5855a]"></span>
                <span className="text-[#a5855a] text-[10px] uppercase tracking-wider font-medium">Depoimentos</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-gray-900 leading-tight">
              O que Nossas Clientes Dizem
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Histórias reais de clientes que experimentaram nossa experiência premium e voltaram para mais.
            </p>
          </div>

          {/* TESTIMONIALS CAROUSEL */}
          <div className="w-full max-w-3xl mx-auto mb-12">

            {/* CAROUSEL CONTAINER */}
            <div className="relative group">

              {/* Shadow layers for depth */}
              <div className="absolute -inset-2 sm:-inset-4 rounded-3xl bg-gradient-to-br from-[#a5855a]/10 to-[#a5855a]/5 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 sm:-inset-2 rounded-3xl bg-gradient-to-tr from-[#a5855a]/15 via-transparent to-[#a5855a]/5 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Main testimonial container */}
              <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(165,133,90,0.3),0_20px_40px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:shadow-[0_50px_100px_-25px_rgba(165,133,90,0.4)]" style={{
                backgroundColor: '#ffffff',
                minHeight: '280px'
              }}>

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#a5855a]/20 via-transparent to-[#a5855a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Content */}
                <div className="relative p-8 sm:p-12 h-full flex flex-col justify-center">

                  {testimonials[currentTestimonialIndex].type === 'audio' ? (
                    /* AUDIO TESTIMONIAL */
                    <div className="flex flex-col items-center text-center">
                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonials[currentTestimonialIndex].rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-[#a5855a]"
                            fill="#a5855a"
                          />
                        ))}
                      </div>

                      {/* Avatar */}
                      <div className="mb-4">
                        <OptimizedImage
                          src={testimonials[currentTestimonialIndex].avatar}
                          alt={testimonials[currentTestimonialIndex].name}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-4 ring-[#a5855a]/30"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                        Ouça o Depoimento de {testimonials[currentTestimonialIndex].name}
                      </h3>

                      {/* Audio Player */}
                      <div className="w-full max-w-md mb-6">
                        <audio
                          controls
                          className="w-full"
                          style={{
                            filter: 'sepia(20%) saturate(70%) hue-rotate(15deg)',
                          }}
                        >
                          <source src={testimonials[currentTestimonialIndex].audioUrl} type="audio/mpeg" />
                          Seu navegador não suporta o elemento de áudio.
                        </audio>
                      </div>

                      {/* Author */}
                      <div className="border-t border-gray-200 pt-6 w-full">
                        <p className="text-gray-900 font-semibold text-sm sm:text-base">
                          {testimonials[currentTestimonialIndex].name}
                        </p>
                        <p className="text-[#a5855a] text-xs sm:text-sm">Cliente Satisfeita</p>
                      </div>
                    </div>
                  ) : (
                    /* TEXT TESTIMONIAL WITH AVATAR */
                    <div className="flex flex-col">
                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonials[currentTestimonialIndex].rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-[#a5855a]"
                            fill="#a5855a"
                          />
                        ))}
                      </div>

                      {/* Quote text */}
                      <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-8 italic">
                        "{testimonials[currentTestimonialIndex].text}"
                      </p>

                      {/* Author with Avatar */}
                      <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
                        <OptimizedImage
                          src={testimonials[currentTestimonialIndex].avatar}
                          alt={testimonials[currentTestimonialIndex].name}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-[#a5855a]/20"
                        />
                        <div>
                          <p className="text-gray-900 font-semibold text-sm sm:text-base">
                            {testimonials[currentTestimonialIndex].name}
                          </p>
                          <p className="text-[#a5855a] text-xs sm:text-sm">Cliente Satisfeita</p>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* NAVIGATION BUTTONS */}
              <button
                onClick={prevTestimonial}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 opacity-0 group-hover:opacity-100 z-10"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#a5855a]" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 opacity-0 group-hover:opacity-100 z-10"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#a5855a]" />
              </button>
            </div>

            {/* DOTS INDICATORS */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className="group/dot transition-all duration-300"
                >
                  <div className={`rounded-full transition-all duration-300 ${
                    index === currentTestimonialIndex
                      ? 'w-8 h-2 bg-[#a5855a]'
                      : 'w-2 h-2 bg-gray-300 group-hover/dot:bg-[#a5855a]/50'
                  }`}></div>
                </button>
              ))}
            </div>

            {/* TESTIMONIAL COUNTER */}
            <div className="text-center mt-4">
              <span className="text-gray-600 text-sm">
                {currentTestimonialIndex + 1} / {testimonials.length}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-slide-in-up">
            <p className="text-gray-600 text-sm mb-6">Pronta para viver essa experiência?</p>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="group bg-[#a5855a] hover:bg-[#8d6f48] text-white font-semibold px-8 py-4 rounded-lg text-sm transition-all inline-flex items-center gap-3 shadow-lg uppercase tracking-wide"
            >
              MARQUE SUA SESSÃO AGORA
              <span className="bg-white/20 rounded p-1.5 group-hover:translate-x-1 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden" style={{
        backgroundColor: '#fdfcfb'
      }}>
        {/* BACKGROUND TEXTURE */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 40%, rgba(165, 133, 90, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(165, 133, 90, 0.05) 0%, transparent 50%)
            `
          }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a5855a]/20" style={{
                backgroundColor: 'rgba(165, 133, 90, 0.05)'
              }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#a5855a]"></span>
                <span className="text-[#a5855a] text-[10px] uppercase tracking-wider font-medium">Quem Sou Eu</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-gray-900 leading-tight">
              Sobre Mim
            </h2>
          </div>

          {/* CONTENT LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* IMAGE */}
            <div className="relative group animate-slide-up">
              {/* Shadow layers for depth */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-br from-[#a5855a]/10 to-[#a5855a]/5 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-tr from-[#a5855a]/15 via-transparent to-[#a5855a]/5 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Main image container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(165,133,90,0.3),0_20px_40px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:shadow-[0_50px_100px_-25px_rgba(165,133,90,0.4)]">
                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#a5855a]/20 via-transparent to-[#a5855a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

                <OptimizedImage
                  src="https://barbertime.online/wp-content/uploads/2025/12/Design-sem-nome-55.jpg"
                  alt="Profissional de Unhas"
                  className="w-full h-auto aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={true}
                />
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div className="flex flex-col gap-6 animate-slide-in-up">

              <div>
                <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-900">
                  Criando Beleza com Paixão e Cuidado
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  Meu nome é Lidyane Resende. Sou manicure profissional há mais de 15 anos e, desde então, dedico meu trabalho a cuidar de mulheres que desejam unhas bonitas, bem feitas e um momento especial só para elas.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  Fui construindo meu nome no ramo das unhas pelo meu jeito de atender: com carinho, escuta, acolhimento e muito capricho. Sempre acreditei que fazer unhas vai muito além de esmalte — é sobre autoestima, bem-estar e a sensação de ser cuidada.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  Com o tempo, minhas clientes passaram a reconhecer isso. A minha cutilagem delicada, o esmalte impecável e o acabamento fino em unhas de gel fazem com que muitas voltem mês após mês, porque sabem que aqui elas encontram qualidade, confiança e um ambiente onde realmente se sentem bem.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  Cada cliente que chega até mim é recebida com atenção e respeito. Faço questão de ouvir, entender o que ela deseja e entregar unhas tão naturais e bem finalizadas que sempre rendem elogios e aquela pergunta clássica: "Nossa, é sua unha mesmo?"
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  Este é o meu propósito: proporcionar uma experiência única, onde você sai não só com unhas lindas, mas também mais leve, renovada e segura da sua beleza.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  E se você ainda não me conhece, será um prazer te receber e te mostrar, na prática, o cuidado e o carinho que colocarei em cada detalhe das suas unhas.
                </p>
              </div>

              {/* HIGHLIGHTS */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(165, 133, 90, 0.08)' }}>
                  <p className="text-[#a5855a] font-semibold text-sm sm:text-base">15+</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Anos de Experiência</p>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(165, 133, 90, 0.08)' }}>
                  <p className="text-[#a5855a] font-semibold text-sm sm:text-base">3000+</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Atendimentos</p>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(165, 133, 90, 0.08)' }}>
                  <p className="text-[#a5855a] font-semibold text-sm sm:text-base">100%</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Produtos Premium</p>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(165, 133, 90, 0.08)' }}>
                  <p className="text-[#a5855a] font-semibold text-sm sm:text-base">5★</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Avaliação Média</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-4">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="group bg-[#a5855a] hover:bg-[#8d6f48] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-xs sm:text-sm transition-all inline-flex items-center gap-2 sm:gap-3 shadow-lg uppercase tracking-wide w-full sm:w-auto justify-center"
                >
                  Conhecer Meu Portfólio
                  <span className="bg-white/20 rounded p-1 sm:p-1.5 group-hover:translate-x-1 transition-transform">
                    <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden" style={{
        backgroundColor: '#f5f2ed'
      }}>
        {/* BACKGROUND TEXTURE */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(165, 133, 90, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(165, 133, 90, 0.05) 0%, transparent 50%)
            `
          }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a5855a]/20" style={{
                backgroundColor: 'rgba(165, 133, 90, 0.05)'
              }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#a5855a]"></span>
                <span className="text-[#a5855a] text-[10px] uppercase tracking-wider font-medium">Dúvidas Frequentes</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-gray-900 leading-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Tire suas dúvidas sobre nossos serviços, agendamentos e procedimentos.
              Se precisar de mais informações, estou à disposição.
            </p>
          </div>

          {/* FAQ ACCORDION */}
          <div className="space-y-4 animate-slide-in-up">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Shadow layers for depth */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#a5855a]/5 to-[#a5855a]/2 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Main FAQ container */}
                <div className="relative rounded-xl overflow-hidden transition-all duration-300" style={{
                  backgroundColor: '#ffffff',
                  boxShadow: openFaqIndex === index
                    ? '0 20px 40px -10px rgba(165, 133, 90, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1)'
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
                }}>

                  {/* Border glow effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-[#a5855a]/10 via-transparent to-[#a5855a]/5 transition-opacity duration-300 pointer-events-none ${
                    openFaqIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>

                  {/* Question Button */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="relative w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors duration-300 hover:bg-[#a5855a]/5"
                  >
                    <span className="text-gray-900 font-medium text-sm sm:text-base leading-relaxed pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`flex-shrink-0 w-5 h-5 text-[#a5855a] transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: openFaqIndex === index ? '500px' : '0',
                      opacity: openFaqIndex === index ? 1 : 0
                    }}
                  >
                    <div className="px-6 pb-5 pt-2">
                      <div className="border-t border-[#a5855a]/10 pt-4">
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-slide-in-up">
            <p className="text-gray-600 text-sm mb-6">Ainda tem dúvidas? Entre em contato!</p>
            <button className="group bg-[#a5855a] hover:bg-[#8d6f48] text-white font-semibold px-8 py-4 rounded-lg text-sm transition-all inline-flex items-center gap-3 shadow-lg uppercase tracking-wide">
              FALAR PELO WHATSAPP
              <span className="bg-white/20 rounded p-1.5 group-hover:translate-x-1 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden" style={{
        backgroundColor: '#2a2420'
      }}>
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(165, 133, 90, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(165, 133, 90, 0.1) 0%, transparent 50%)
            `
          }}></div>
        </div>

        <div className="relative z-10">
          {/* MAIN CONTENT */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">

              {/* BRAND SECTION */}
              <div className="flex flex-col">
                <h3 className="text-white font-semibold text-lg mb-4">Coisalinda</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Experiência premium em cuidado com unhas. Beleza, carinho e atenção em cada detalhe.
                </p>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#a5855a]"></span>
                  <span className="text-[#a5855a] text-xs uppercase tracking-wide font-medium">
                    São Raimundo Nonato, PI
                  </span>
                </div>
              </div>

              {/* NAVIGATION */}
              <div className="flex flex-col">
                <h4 className="text-white font-semibold text-base mb-6">Menu</h4>
                <nav className="flex flex-col gap-3">
                  <a href="#" className="text-white/70 hover:text-[#a5855a] text-sm transition duration-300">
                    Sobre Mim
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#a5855a] text-sm transition duration-300">
                    Portfólio
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#a5855a] text-sm transition duration-300">
                    Depoimentos
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#a5855a] text-sm transition duration-300">
                    Perguntas Frequentes
                  </a>
                </nav>
              </div>

              {/* SERVICES */}
              <div className="flex flex-col">
                <h4 className="text-white font-semibold text-base mb-6">Serviços</h4>
                <nav className="flex flex-col gap-3">
                  <a href="#" className="text-white/70 hover:text-[#a5855a] text-sm transition duration-300">
                    Manicure Premium
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#a5855a] text-sm transition duration-300">
                    Unhas de Gel
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#a5855a] text-sm transition duration-300">
                    Nail Art
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#a5855a] text-sm transition duration-300">
                    Manutenção
                  </a>
                </nav>
              </div>

              {/* CONTACT */}
              <div className="flex flex-col">
                <h4 className="text-white font-semibold text-base mb-6">Contato</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#a5855a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:" className="text-white/70 hover:text-[#a5855a] text-sm transition duration-300">
                      contato@coisa<br />linda.com 
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#a5855a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:" className="text-white/70 hover:text-[#a5855a] text-sm transition duration-300">
                      +55 (32) 9 9167-1988
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#a5855a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 5.343L12 11m0 0l-5.657-5.657M12 11v10m0-10l5.657 5.657M12 11l-5.657-5.657" />
                    </svg>
                    <span className="text-white/70 text-sm">
                      São Raimundo Nonato<br />Piauí, Brasil
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* DIVIDER */}
            <div className="border-t border-white/10 my-8"></div>

            {/* BOTTOM SECTION */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

              {/* SOCIAL LINKS */}
              <div className="flex items-center gap-4">
                <span className="text-white/70 text-sm">Siga-me:</span>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#a5855a] flex items-center justify-center transition duration-300"
                    title="Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#a5855a] flex items-center justify-center transition duration-300"
                    title="WhatsApp"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.223-4.717 5.889-4.717 9.853 0 1.634.331 3.276 1.003 4.827l-1.083 3.951 4.047-1.061c1.464.886 3.422 1.694 5.629 1.694 3.905 0 7.236-2.226 9.267-5.646 2.031-3.42 2.031-8.108 0-11.528-2.031-3.419-5.362-5.646-9.267-5.646zm8.476 18.86c-2.41 1.823-5.64 2.944-9.028 2.944-1.882 0-3.714-.383-5.39-1.138l-.385-.214-4.001 1.048.867-3.162-.268-.422C2.505 20.554 2.082 17.694 2.082 14.71c0-4.563 1.86-8.645 4.729-11.45 2.868-2.806 6.732-4.357 10.791-4.357 4.06 0 7.923 1.55 10.791 4.357 2.868 2.805 4.729 6.887 4.729 11.45 0 4.563-1.86 8.645-4.729 11.45z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#a5855a] flex items-center justify-center transition duration-300"
                    title="Facebook"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#a5855a] flex items-center justify-center transition duration-300"
                    title="TikTok"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.498 3.094c1.871 0 2.683.889 2.683 2.682v1.47c0 1.974-.807 3.144-2.683 3.144.9 0 1.935.158 2.683.79v2.457c-.9-.632-1.668-.79-2.683-.79-1.871 0-3.606 1.326-3.606 3.144 0 1.99 1.735 3.144 3.606 3.144 1.884 0 3.606-1.262 3.606-3.144v-8.221c.632 1.326 2.25 2.682 3.144 2.682v-2.457c-.632 0-2.092-.632-2.683-1.79v-1.157c0-1.793.812-2.682 2.683-2.682h1.47V3.094h-1.47c-3.606 0-5.076 1.326-5.076 4.47v1.157c-.632-1.262-2.092-2.682-3.144-2.682-1.974 0-3.606 1.326-3.606 3.144 0 1.99 1.632 3.144 3.606 3.144 1.052 0 2.512-1.42 3.144-2.682v-1.157c0-3.144-1.47-4.47-5.076-4.47z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* COPYRIGHT */}
              <div className="text-center sm:text-right">
                <p className="text-white/60 text-xs mb-1">
                  © 2025 Coisalinda Nail Designer. Todos os direitos reservados.
                </p>
                <p className="text-white/50 text-xs">
                  Criado com cuidado por
                  <a href="#" className="text-[#a5855a] hover:text-white transition duration-300 ml-1">
                    Bolt
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </footer>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

    </div>
  );
}

export default App;
