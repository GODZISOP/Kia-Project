import { Sparkles, Heart, Flame, Moon, Sun, Leaf, MessageCircle, Users, BookOpen, Headphones, ArrowRight, Check, Star } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'contact') => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <>
      <section className="relative bg-gradient-to-br from-amber-50 via-neutral-50 to-stone-100 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-stone-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-800 px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
              <Sparkles className="w-4 h-4" />
              6-Week Immersion Program
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-neutral-900 mb-8 leading-tight tracking-tight">
              From Self-Sabotage<br />to Self-Trust
            </h1>
            <p className="text-2xl md:text-3xl text-neutral-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              What if the only thing standing between you and your next level... was you?
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl border border-neutral-200 mb-12 max-w-4xl mx-auto">
            <p className="text-xl text-neutral-700 mb-6 leading-relaxed">
              You know the feeling — you set the goal, you make the plan, you feel the fire…
            </p>
            <p className="text-xl text-neutral-700 mb-6 leading-relaxed">
              And then, right before the breakthrough, you find yourself pulling back.
              Delaying. Overthinking. Distracting. Saying "next time."
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
              <p className="text-2xl font-bold text-amber-900 mb-2">
                You're not lazy. You're not broken.
              </p>
              <p className="text-lg text-neutral-700">
                You're just caught in a pattern that once kept you safe — but now keeps you small.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold text-neutral-900 mb-8">
              This is your invitation to finally end that cycle and step into your power.
            </p>
            <button
              onClick={() => onNavigate('services')}
              className="group inline-flex items-center gap-3 bg-amber-700 hover:bg-amber-800 text-white px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Begin Your Transformation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1 bg-stone-100 border border-stone-200 rounded-full mb-6">
              <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider">The Journey</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-neutral-900 mb-8">
              Welcome to Self-Sabotage Alchemy
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-stone-400 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              A 6-week guided immersion to help you unravel the root of your resistance, rebuild your self-trust,
              and lead yourself with confidence — no more overthinking, self-doubt, or hesitation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-3xl p-10 md:p-14 mb-16 border border-amber-200">
            <p className="text-3xl text-center text-neutral-800 font-semibold mb-12 leading-relaxed">
              This isn't about forcing change through willpower.<br />
              <span className="text-amber-800 font-bold">It's about transforming from the inside out.</span>
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Recognize your unique sabotage triggers — and the hidden self-betrayal driving them',
                'Reprogram the beliefs that keep you cycling through the same patterns',
                'Build consistency and integrity through compassionate accountability',
                'Reconnect with your intuition and take action from trust, not fear',
                'Create momentum that lasts long after the program ends'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-amber-700" />
                  </div>
                  <p className="text-neutral-800 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('about')}
              className="group inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-bold text-xl transition-colors"
            >
              Learn More About Our Approach
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-stone-100 via-neutral-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1 bg-amber-100 border border-amber-200 rounded-full mb-6">
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">The Framework</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-neutral-900 mb-4">
              ⚗️ The Self-Sabotage Recovery Framework
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-stone-400 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600">
              The journey from self-sabotage to self-trust unfolds through 4 powerful phases:
            </p>
          </div>

             <div className="grid gap-8">
            <PhaseCard
              icon={<Moon className="w-10 h-10" />}
              phase="PHASE 1"
              title="Awakening the Pattern"
              description="See your sabotage clearly and understand the hidden self-betrayal underneath it. You'll build compassionate awareness and start creating micro-trust — small daily actions that rebuild your word to yourself."
              gradient="from-stone-600 to-stone-700"
            />

            <PhaseCard
              icon={<Flame className="w-10 h-10" />}
              phase="PHASE 2"
              title="Reprogramming the Narrative"
              description="Shift your inner dialogue, dissolve limiting beliefs, and rewire your mind for confidence, clarity, and follow-through."
              gradient="from-amber-600 to-amber-700"
            />

            <PhaseCard
              icon={<Leaf className="w-10 h-10" />}
              phase="PHASE 3"
              title="Embodiment & Accountability"
              description="Turn awareness into action. Anchor your growth through rituals, routines, and aligned habits that make integrity your new normal."
              gradient="from-stone-500 to-amber-600"
            />

            <PhaseCard
              icon={<Sun className="w-10 h-10" />}
              phase="PHASE 4"
              title="Mastery & Momentum"
              description="Integrate your new identity. Move through life grounded in self-trust, confidence, and calm power — no more self-sabotage cycles."
              gradient="from-amber-500 to-stone-600"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Small Group Coaching"
              icon={<Users className="w-12 h-12" />}
              originalPrice="$1,250"
              discountedPrice="$995"
              features={[
                '6 Live Weekly Zoom Group Sessions',
                'Private Discord Community Access',
                'Weekly Workbooks & Guided Meditations',
                'Private Messaging Support',
                'Lifetime Access to All Materials',
                'Connect with Like-Minded Achievers'
              ]}
              popular={true}
            />

            <PricingCard
              title="One-on-One Coaching"
              icon={<Star className="w-12 h-12" />}
              originalPrice="$1,995"
              discountedPrice="$1,195"
              features={[
                '6 Private 1:1 Zoom Sessions',
                'Fully Personalized Guidance & Strategy',
                'Unlimited Private Messaging Support',
                'Custom Workbooks & Practices',
                'Lifetime Access to All Materials',
                'Accelerated Transformation & Results'
              ]}
              premium={true}
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-400 text-sm">Payment plans available • Secure your spot today</p>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  );
}

function PhaseCard({ icon, phase, title, description, gradient }: {
  icon: React.ReactNode;
  phase: string;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className={`bg-gradient-to-r ${gradient} text-white p-8 flex items-center gap-6`}>
        <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <p className="text-sm font-semibold opacity-90 uppercase tracking-wide">{phase}</p>
          <h3 className="text-3xl font-extrabold mt-1">{title}</h3>
        </div>
      </div>
      <div className="p-8">
        <p className="text-lg text-neutral-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function IncludedCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 border border-neutral-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-amber-700 transition-colors">{title}</h3>
      <p className="text-neutral-700 leading-relaxed text-lg">{description}</p>
    </div>
  );
}

function PricingCard({ title, icon, originalPrice, discountedPrice, features, popular, premium }: {
  title: string;
  icon: React.ReactNode;
  originalPrice: string;
  discountedPrice: string;
  features: string[];
  popular?: boolean;
  premium?: boolean;
}) {
  return (
    <div className={`relative bg-white rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:scale-105 ${
      popular ? 'border-4 border-amber-400' : premium ? 'border-4 border-stone-400' : 'border border-neutral-200'
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            MOST POPULAR
          </div>
        </div>
      )}
      {premium && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-amber-600 to-stone-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            PREMIUM
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <div className={`inline-flex p-4 ${popular ? 'bg-amber-100' : 'bg-stone-100'} rounded-2xl mb-4`}>
          <div className={popular ? 'text-amber-700' : 'text-stone-700'}>
            {icon}
          </div>
        </div>
        <h3 className="text-3xl font-extrabold text-neutral-900 mb-6">{title}</h3>
        
        <div className="mb-2">
          <span className="text-2xl text-neutral-500 line-through">{originalPrice}</span>
        </div>
        <div className="flex items-baseline justify-center gap-2 mb-2">
          <span className={`text-6xl font-extrabold ${popular ? 'text-amber-700' : 'text-stone-700'}`}>
            {discountedPrice}
          </span>
        </div>
        <div className="inline-block bg-red-100 border border-red-300 text-red-700 px-4 py-1 rounded-full text-sm font-bold">
          Save {parseInt(originalPrice.replace(/[^0-9]/g, '')) - parseInt(discountedPrice.replace(/[^0-9]/g, ''))} USD
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`flex-shrink-0 w-6 h-6 ${popular ? 'bg-amber-100' : 'bg-stone-100'} rounded-full flex items-center justify-center mt-0.5`}>
              <Check className={`w-4 h-4 ${popular ? 'text-amber-700' : 'text-stone-700'}`} />
            </div>
            <span className="text-neutral-700 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg ${
        popular 
          ? 'bg-amber-700 hover:bg-amber-800 text-white' 
          : 'bg-stone-700 hover:bg-stone-800 text-white'
      }`}>
        Secure Your Spot
      </button>

      <p className="text-center text-sm text-neutral-500 mt-4">Payment plans available</p>
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