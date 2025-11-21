import { Sparkles, Heart, Flame, Moon, Sun, Leaf, MessageCircle, Users, BookOpen, Headphones, ArrowRight, Check, Star } from 'lucide-react';
import PayPalButton from './PayPalButton';

interface HomeProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'contact') => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <>
      {/* ---------- Hero Section ---------- */}
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

      {/* ---------- Journey Section ---------- */}
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
        </div>
      </section>

      {/* ---------- Pricing Section ---------- */}
      <section className="py-24 bg-gradient-to-br from-stone-100 via-neutral-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-neutral-900 mb-4">Choose Your Coaching Plan</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Secure your spot with our safe and easy PayPal payment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Small Group Coaching */}
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
              popular
            >
             <PayPalButton
  id="paypal-small-group"
  amount="995.00"
  onSuccess={(details) => alert(`Small Group Paid by ${details.payer.name.given_name}`)}
/>


            </PricingCard>

            {/* One-on-One Coaching */}
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
              premium
            >
              <PayPalButton
  id="paypal-one-on-one" // unique
  amount="1195.00"
  onSuccess={(details) => console.log("One-on-One Paid:", details)}
/>
            </PricingCard>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  );
}

// ------------------ Components ------------------

function PricingCard({ 
  title, icon, originalPrice, discountedPrice, features, popular, premium, children 
}: any) {
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
          <div className={popular ? 'text-amber-700' : 'text-stone-700'}>{icon}</div>
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
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`flex-shrink-0 w-6 h-6 ${popular ? 'bg-amber-100' : 'bg-stone-100'} rounded-full flex items-center justify-center mt-0.5`}>
              <Check className={`w-4 h-4 ${popular ? 'text-amber-700' : 'text-stone-700'}`} />
            </div>
            <span className="text-neutral-700 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* PayPal Button */}
      {children && <div className="mt-4">{children}</div>}

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
