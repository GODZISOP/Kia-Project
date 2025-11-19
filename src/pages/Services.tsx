import { Check, Sparkles, Users, MessageCircle, BookOpen, Moon, Flame, Leaf, Sun } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'contact') => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <>
      <section className="relative bg-gradient-to-br from-amber-50 via-neutral-100 to-stone-200 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-stone-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            The 6-Week Immersion
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            A comprehensive transformation program designed to break self-sabotage cycles and rebuild unshakeable self-trust
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-neutral-900 mb-16 text-center">
            Program Components
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <ServiceCard
              icon={<Users className="w-8 h-8" />}
              title="6 Live Weekly Zoom Sessions"
              description="Join us every week for interactive group coaching sessions where you'll learn breakthrough strategies, ask questions, and experience guided activations. Each session is tailored to the current phase of your transformation."
              benefits={[
                'Live group coaching with expert guidance',
                'Real-time Q&A and support',
                'Guided meditations and visualizations',
                'Accountability check-ins',
                'Recorded for lifetime access'
              ]}
            />

            <ServiceCard
              icon={<MessageCircle className="w-8 h-8" />}
              title="Private Messaging Access"
              description="Direct, personalized support when you need it. Get real-time guidance via Messenger, WhatsApp, or Telegram for accountability, breakthrough moments, and day-to-day challenges."
              benefits={[
                'Direct one-on-one messaging',
                'Rapid response to your questions',
                'Personalized guidance and support',
                'Celebration of your wins',
                'Crisis support when needed'
              ]}
            />

            <ServiceCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Transformation Workbooks & Journals"
              description="Comprehensive weekly workbooks guide you through each phase with exercises, prompts, and integration practices designed to deepen your transformation."
              benefits={[
                'Phase-specific workbooks',
                'Daily journaling prompts',
                'Reflection exercises',
                'Action planning templates',
                'Progress tracking tools'
              ]}
            />

            <ServiceCard
              icon={<MessageCircle className="w-8 h-8" />}
              title="Private Discord Community"
              description="Join 50-200+ heart-centered achievers in our exclusive Discord space. Share breakthroughs, celebrate wins, ask questions, and feel supported 24/7."
              benefits={[
                'Access to supportive community',
                'Daily check-in channels',
                'Resource sharing',
                'Accountability partners',
                'Lifetime membership access'
              ]}
            />
          </div>

          <div className="bg-gradient-to-br from-stone-100 to-amber-50 rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">
              Additional Resources Included
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ResourceBox
                title="Guided Meditations"
                description="10+ audio meditations including breath work, visualization, and somatic practices to ground your transformation."
              />
              <ResourceBox
                title="Self-Trust Rituals"
                description="Daily and weekly rituals to strengthen your integrity and rebuild your word to yourself."
              />
              <ResourceBox
                title="Integration Practices"
                description="Embodiment exercises to move your insights from head to heart and transform them into real action."
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">
              The 4-Phase Journey
            </h2>
            <div className="space-y-6">
              <PhaseDetail
                phase="PHASE 1: Awakening the Pattern"
                icon={<Moon className="w-8 h-8" />}
                duration="Weeks 1-2"
                focus="Recognition & Awareness"
                description="You'll identify your unique sabotage patterns and the hidden self-betrayal driving them. Through guided exercises and community sharing, you'll build compassionate awareness and start creating micro-trust — small daily actions that prove to yourself you can keep your word."
                gradient="from-slate-600 to-stone-500"
              />

              <PhaseDetail
                phase="PHASE 2: Reprogramming the Narrative"
                icon={<Flame className="w-8 h-8" />}
                duration="Weeks 2-3"
                focus="Belief Transformation"
                description="Here's where the magic happens. You'll shift your inner dialogue, dissolve limiting beliefs, and rewire your mind for confidence and clarity. Through powerful somatic practices and cognitive reframing, you'll reprogram the stories that have been holding you back."
                gradient="from-amber-600 to-orange-500"
              />

              <PhaseDetail
                phase="PHASE 3: Embodiment & Accountability"
                icon={<Leaf className="w-8 h-8" />}
                duration="Weeks 4-5"
                focus="Integration & Action"
                description="Transform awareness into action. You'll anchor your growth through rituals, routines, and aligned habits that make integrity your new normal. Accountability partnerships and check-ins ensure you're following through on your commitments."
                gradient="from-green-700 to-emerald-600"
              />

              <PhaseDetail
                phase="PHASE 4: Mastery & Momentum"
                icon={<Sun className="w-8 h-8" />}
                duration="Week 6"
                focus="Integration & Celebration"
                description="Integrate your new identity. You'll move through life grounded in self-trust, confidence, and calm power. We celebrate how far you've come and design your path forward to maintain momentum long after the program ends."
                gradient="from-yellow-500 to-amber-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-stone-200 via-neutral-100 to-amber-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">
            Program Outcomes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Recognize and interrupt self-sabotage patterns in real-time',
              'Rebuild deep, unshakeable self-trust and confidence',
              'Make decisions from intuition and clarity, not fear',
              'Take consistent action aligned with your vision',
              'Build habits and routines that support your goals',
              'Create accountability without perfectionism',
              'Access your full potential and step into your power',
              'Join a lifetime community of transformation partners'
            ].map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md border border-neutral-200">
                <Check className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-800 text-lg">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">
            Investment & Options
          </h2>
          <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-2xl p-8 md:p-12 border-2 border-amber-200 mb-12">
            <div className="text-5xl md:text-6xl font-bold text-amber-800 mb-4">
              $1,250
            </div>
            <p className="text-xl text-neutral-700 mb-6">
              Full Program Investment (6 weeks, lifetime access to all materials)
            </p>
            <div className="bg-white rounded-xl p-6 inline-block">
              <p className="text-neutral-800 font-semibold mb-2">Payment Plans Available</p>
              <p className="text-neutral-700">
                3-payment plan: $450/month or 5-payment plan: $300/month
              </p>
            </div>
          </div>

          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            What's included is everything you need to transform your relationship with yourself and finally step into your full potential.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-amber-700 hover:bg-amber-800 text-white px-12 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start Your Transformation
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  );
}

function ServiceCard({ icon, title, description, benefits }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}) {
  return (
    <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-6 border border-neutral-200">
      <div className="text-amber-700 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-neutral-900 mb-3">{title}</h3>
      <p className="text-neutral-700 mb-6 leading-relaxed">{description}</p>
      <div className="space-y-2">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-700 flex-shrink-0 mt-1" />
            <span className="text-sm text-neutral-700">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResourceBox({ title, description }: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-neutral-200">
      <h3 className="text-lg font-bold text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-700">{description}</p>
    </div>
  );
}

function PhaseDetail({ phase, icon, duration, focus, description, gradient }: {
  phase: string;
  icon: React.ReactNode;
  duration: string;
  focus: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
      <div className={`bg-gradient-to-r ${gradient} text-white p-6 flex items-center gap-4`}>
        <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold">{phase}</h3>
          <p className="text-sm opacity-90">{duration} • Focus: {focus}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-neutral-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function Footer({ onNavigate }: { onNavigate: (page: 'home' | 'about' | 'services' | 'contact') => void }) {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Kia</h3>
            <p className="mb-2">The Female Veterans Podcast</p>
            <p className="mb-2">Hot Topics Live Podcast</p>
            <p className="mb-2">Magnum Opus Multimedia</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => onNavigate('home')} className="hover:text-amber-700 transition-colors">Home</button>
              <button onClick={() => onNavigate('about')} className="block hover:text-amber-700 transition-colors">About</button>
              <button onClick={() => onNavigate('services')} className="block hover:text-amber-700 transition-colors">Services</button>
              <button onClick={() => onNavigate('contact')} className="block hover:text-amber-700 transition-colors">Contact</button>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-700 pt-8 text-center">
          <p className="text-sm mb-2">
            © 2025 Self-Sabotage Alchemy. All rights reserved.
          </p>
          <p className="text-sm">
            www.thefemaleveteranspodcast.com | Ph: 971-266-0104
          </p>
        </div>
      </div>
    </footer>
  );
}
