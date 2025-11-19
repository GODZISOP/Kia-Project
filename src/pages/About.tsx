import { Heart, Users, Sparkles, Target, ArrowRight } from 'lucide-react';
import Kia from '../images/kia.jpg'

interface AboutProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'contact') => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <>
      <section className="relative bg-gradient-to-br from-amber-50 via-neutral-50 to-stone-100 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-stone-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-amber-100 border border-amber-300 rounded-full">
            <span className="text-sm font-semibold text-amber-800 tracking-wide uppercase">About Us</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-neutral-900 mb-8 leading-tight tracking-tight">
            Our Approach
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
            Transforming lives through compassion, accountability, and proven methodology
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Founder Section */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <div className="inline-block px-4 py-1 bg-amber-50 border border-amber-200 rounded-full mb-2">
                  <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Founder & Coach</span>
                </div>
                <h2 className="text-5xl font-extrabold text-neutral-900 leading-tight">
                  Meet Kia
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-stone-400 rounded-full"></div>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Self-Sabotage Alchemy was born from a deep understanding of the hidden patterns that keep high-achievers stuck in cycles of self-doubt and missed opportunities.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  As a transformational coach, podcast host, and veteran advocate, Kia brings a unique perspective that combines lived experience with professional expertise. Her work through The Female Veterans Podcast and Hot Topics Live has touched thousands of lives.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Her methodology combines somatic awareness, behavioral psychology, and spiritual integration to create lasting change from the inside out.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-stone-400 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-stone-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                  <img 
                    src={Kia} 
                    alt="Kia - Founder of Self-Sabotage Alchemy"
                    className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative bg-gradient-to-br from-amber-50 to-stone-100 rounded-3xl p-12 border border-amber-200 mb-32 overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-stone-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Heart className="w-12 h-12 text-amber-700" />
                </div>
              </div>
              <h3 className="text-3xl font-extrabold text-neutral-900 mb-6 text-center">
                Our Mission
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed text-center max-w-3xl mx-auto">
                To help heart-centered achievers recognize, reprogram, and transcend self-sabotage patterns so they can step fully into their power, purpose, and potential.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-stone-100 border border-stone-200 rounded-full mb-4">
                <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider">What We Stand For</span>
              </div>
              <h2 className="text-5xl font-extrabold text-neutral-900 mb-4">
                Our Core Values
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-stone-400 rounded-full mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <ValueCard
                icon={<Sparkles className="w-10 h-10" />}
                title="Compassionate Awareness"
                description="We meet you where you are with non-judgment and genuine care, creating a safe space for deep transformation."
              />
              <ValueCard
                icon={<Target className="w-10 h-10" />}
                title="Accountability with Love"
                description="We hold you to your commitments while honoring your journey and celebrating every step forward."
              />
              <ValueCard
                icon={<Users className="w-10 h-10" />}
                title="Community Power"
                description="You're never alone. Our supportive community reflects back your brilliance and keeps you anchored through change."
              />
              <ValueCard
                icon={<Heart className="w-10 h-10" />}
                title="Holistic Integration"
                description="We work with your mind, body, energy, and spirit — because true transformation requires all of you."
              />
            </div>
          </div>

          {/* Why This Works */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-amber-50 border border-amber-200 rounded-full mb-4">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Our Method</span>
              </div>
              <h2 className="text-5xl font-extrabold text-neutral-900 mb-4">
                Why This Program Works
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-stone-400 rounded-full mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Evidence-Based Framework',
                  description: 'Our methodology draws from behavioral psychology, somatic therapy, neuroscience, and proven coaching techniques refined over thousands of client transformations.'
                },
                {
                  title: 'Personalized Guidance',
                  description: 'Your experience is unique. While we follow a structured framework, we adapt to your specific sabotage patterns and transformation needs.'
                },
                {
                  title: 'Continuous Support',
                  description: 'You get daily access to private messaging, weekly group coaching sessions, and a thriving community that holds space for your growth 24/7.'
                },
                {
                  title: 'Practical Tools & Rituals',
                  description: 'We don\'t just teach concepts. You\'ll receive workbooks, meditations, journaling prompts, and daily practices that make transformation tangible and sustainable.'
                },
                {
                  title: 'Lifetime Access',
                  description: 'Your transformation library is yours forever. Revisit materials, replay sessions, and continue evolving long after the 6 weeks end.'
                },
                {
                  title: 'Results-Oriented',
                  description: 'Participants consistently report breakthrough moments, restored confidence, improved decision-making, and the ability to take aligned action without hesitation.'
                }
              ].map((item, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 font-bold group-hover:bg-amber-200 transition-colors">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-amber-700 transition-colors">{item.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-br from-amber-600 to-stone-700 rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Ready to Begin?
              </h2>
              <p className="text-xl text-amber-50 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join a community of transformational achievers who are done with cycles and ready for real, lasting change.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-3 bg-white hover:bg-amber-50 text-amber-800 px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  );
}

function ValueCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-amber-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="inline-flex p-4 bg-amber-50 rounded-2xl text-amber-700 mb-6 group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-amber-700 transition-colors">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
}

function Footer({ onNavigate }: { onNavigate: (page: 'home' | 'about' | 'services' | 'contact') => void }) {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-amber-400 to-stone-400 bg-clip-text text-transparent">
              Kia
            </h3>
            <div className="space-y-3 text-neutral-400">
              <p className="hover:text-amber-400 transition-colors cursor-pointer">The Female Veterans Podcast</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">Hot Topics Live Podcast</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">Magnum Opus Multimedia</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <div className="space-y-3">
              <button onClick={() => onNavigate('home')} className="block hover:text-amber-400 transition-colors hover:translate-x-1 transform duration-200">Home</button>
              <button onClick={() => onNavigate('about')} className="block hover:text-amber-400 transition-colors hover:translate-x-1 transform duration-200">About</button>
              <button onClick={() => onNavigate('services')} className="block hover:text-amber-400 transition-colors hover:translate-x-1 transform duration-200">Services</button>
              <button onClick={() => onNavigate('contact')} className="block hover:text-amber-400 transition-colors hover:translate-x-1 transform duration-200">Contact</button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Connect</h3>
            <div className="space-y-3 text-neutral-400">
              <p className="hover:text-amber-400 transition-colors">Ph: 971-266-0104</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">www.thefemaleveteranspodcast.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-sm text-neutral-500">
            © 2025 Self-Sabotage Alchemy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}