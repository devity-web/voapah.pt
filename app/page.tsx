'use client';

import {ArrowRight, MessageCircleMore, Moon, Sun} from 'lucide-react';
import Link from 'next/link';
import {useEffect, useRef, useState} from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            setActiveSection(entry.target.id);
          }
        });
      },
      {threshold: 0.3, rootMargin: '0px 0px -20% 0px'},
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {['intro', 'connect'].map(section => (
            <button
              type="button"
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({behavior: 'smooth'})
              }
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? 'bg-foreground'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 lg:px-16">
        <header
          id="intro"
          ref={el => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-16 w-full">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">
                  VOAPAH
                </div>
                <h1 className="text-6xl lg:text-7xl font-light tracking-tight">
                  Matheus
                  <br />
                  <span className="text-muted-foreground">Pedroni</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Experiências visuais únicas através de filmagens aéreas com
                  drones. Com{' '}
                  <span className="text-foreground">tecnologia</span>,{' '}
                  <span className="text-foreground">criatividade</span> e{' '}
                  <span className="text-foreground">precisão</span>,
                  transformamos cada projeto em imagens impactantes que revelam
                  novas perspectivas.
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Disponível - Leiria, PT
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-8">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  ATUALMENTE
                </div>
                <div className="space-y-2">
                  <div className="text-foreground">
                    Piloto de drones certificado
                  </div>
                  <div className="text-muted-foreground">@ ANAC (EASA UE)</div>
                  <div className="text-xs text-muted-foreground">
                    2023 — Presente
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  FEATURES
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'DJI Mini 3 Pro',
                    'Filmagens',
                    'Fotografia',
                    'Eventos',
                    'Casamentos',
                    'Imagem 4K',
                  ].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* <section
          id="thoughts"
          ref={el => (sectionsRef.current[2] = el)}
          className="min-h-screen py-32 opacity-0"
        >
          <div className="space-y-16">
            <h2 className="text-4xl font-light">Recent Work</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: 'The Future of Web Development',
                  excerpt:
                    'Exploring how AI and automation are reshaping the way we build for the web.',
                  date: 'Dec 2024',
                  readTime: '5 min',
                },
                {
                  title: 'Design Systems at Scale',
                  excerpt:
                    'Lessons learned from building and maintaining design systems across multiple products.',
                  date: 'Nov 2024',
                  readTime: '8 min',
                },
                {
                  title: 'Performance-First Development',
                  excerpt:
                    'Why performance should be a first-class citizen in your development workflow.',
                  date: 'Oct 2024',
                  readTime: '6 min',
                },
                {
                  title: 'The Art of Code Review',
                  excerpt:
                    'Building better software through thoughtful and constructive code reviews.',
                  date: 'Sep 2024',
                  readTime: '4 min',
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className="group p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Read more</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        <section
          id="connect"
          ref={el => (sectionsRef.current[3] = el)}
          className="py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Estou sempre interessado em novas oportunidades, colaborações
                  e conversas sobre produção de vídeo e drones.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:jordan@example.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-lg">voapah@gmail.com</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">
                ELSEWHERE
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[{name: 'Instagram', handle: '@voapah.pt', url: '#'}].map(
                  social => (
                    <Link
                      key={social.name}
                      href={social.url}
                      className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                    >
                      <div className="space-y-2">
                        <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                          {social.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {social.handle}
                        </div>
                      </div>
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2025 VOAPAH. All rights reserved.
              </div>
              <div className="text-xs text-muted-foreground">
                Desenvolvido por{' '}
                <a href="https://devity.pt" target="_blank" rel="noopener">
                  Devity
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
                type="button"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                ) : (
                  <Moon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                )}
              </button>

              <button
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                type="button"
              >
                <MessageCircleMore className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
