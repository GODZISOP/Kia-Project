import { Sparkles, Heart, Flame, Moon, Sun, Leaf, MessageCircle, Users, BookOpen, Headphones, ArrowRight, Check, Star, Zap, Target, TrendingUp, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import PayPalButton from './PayPalButton';
import { useRef } from 'react';
import Footer from './footer';

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
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-800 px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm animate-bounce">
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

          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl border border-neutral-200 mb-12 max-w-4xl mx-auto hover:shadow-3xl transition-shadow duration-500">
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

      {/* ---------- Stats Section ---------- */}
      <StatsSection />

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

      {/* ---------- Features Grid ---------- */}
      <FeaturesGrid />

      {/* ---------- Transformation Timeline ---------- */}
      <TransformationTimeline />

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
                id="paypal-one-on-one"
                amount="1195.00"
                onSuccess={(details) => console.log("One-on-One Paid:", details)}
              />
            </PricingCard>
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <TestimonialsSection />

      <Footer onNavigate={onNavigate} />
    </>
  );
}

// ------------------ Stats Section ------------------
function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-700 to-stone-700">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <StatCard number="6" label="Week Program" icon={<Zap className="w-8 h-8" />} />
          <StatCard number="100+" label="Lives Transformed" icon={<Target className="w-8 h-8" />} />
          <StatCard number="95%" label="Success Rate" icon={<TrendingUp className="w-8 h-8" />} />
          <StatCard number="24/7" label="Support Available" icon={<Heart className="w-8 h-8" />} />
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label, icon }: any) {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(number);

  useEffect(() => {
    if (isNaN(targetNumber)) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <div className="text-center group hover:scale-110 transition-transform duration-300">
      <div className="text-white mb-3 flex justify-center opacity-80 group-hover:opacity-100 transition-opacity">
        {icon}
      </div>
      <div className="text-5xl font-extrabold text-white mb-2">
        {isNaN(targetNumber) ? number : count}
        {number.includes('+') && '+'}
        {number.includes('%') && '%'}
      </div>
      <div className="text-amber-100 font-semibold">{label}</div>
    </div>
  );
}

// ------------------ Features Grid ------------------
function FeaturesGrid() {
  const features = [
    {
      icon: <Flame className="w-10 h-10" />,
      title: "Break the Pattern",
      description: "Identify and dissolve the unconscious patterns that keep you stuck",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Moon className="w-10 h-10" />,
      title: "Deep Inner Work",
      description: "Guided meditations and reflections to access your deeper wisdom",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Sun className="w-10 h-10" />,
      title: "Emerge Empowered",
      description: "Step into authentic confidence and self-leadership",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Sustainable Growth",
      description: "Build lasting habits and mindset shifts that stick",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} delay={idx * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, color, delay }: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`bg-gradient-to-br ${color} text-white p-4 rounded-xl mb-4 inline-block`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-neutral-900 mb-3">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
}

// ------------------ Transformation Timeline ------------------
function TransformationTimeline() {
  const weeks = [
    { week: 1, title: "Awareness", description: "Uncover your patterns and triggers" },
    { week: 2, title: "Understanding", description: "Learn why you self-sabotage" },
    { week: 3, title: "Release", description: "Let go of what no longer serves you" },
    { week: 4, title: "Rebuild", description: "Create new empowering beliefs" },
    { week: 5, title: "Practice", description: "Embody your new way of being" },
    { week: 6, title: "Integration", description: "Step fully into your power" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-neutral-900 mb-4">Your 6-Week Journey</h2>
          <p className="text-xl text-neutral-600">Each week builds on the last, creating lasting transformation</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 to-stone-400"></div>
          
          <div className="space-y-12">
            {weeks.map((week, idx) => (
              <TimelineItem key={idx} {...week} isLeft={idx % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ week, title, description, isLeft }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  // Intersection Observer
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Animate number counting
  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 800;
    const stepTime = 50;
    const steps = Math.ceil(duration / stepTime);
    const increment = week / steps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= week) {
        setCount(week);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [visible, week]);

  return (
    <div ref={ref} className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 hover:scale-105 inline-block">
          <div
            className={`font-bold mb-2 transition-all duration-700 ${
              visible ? 'text-amber-500 text-2xl scale-110' : 'text-neutral-400 text-xl'
            }`}
          >
            Week {count}
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-2">{title}</h3>
          <p className="text-neutral-600">{description}</p>
        </div>
      </div>

      <div className="relative z-10">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg text-white text-lg transition-all duration-700 ${
            visible
              ? 'bg-gradient-to-br from-amber-500 to-stone-400 scale-125 shadow-xl animate-pulse'
              : 'bg-neutral-300 text-neutral-500 scale-100'
          }`}
        >
          {count}
        </div>
      </div>

      <div className="flex-1"></div>
    </div>
  );
}


// ------------------ Testimonials ------------------
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Entrepreneur",
      text: "This program completely transformed how I show up for myself. I finally broke through the patterns that were holding me back for years.",
      rating: 5
    },
    {
      name: "Jessica L.",
      role: "Creative Professional",
      text: "The weekly sessions and community support gave me the courage to finally pursue my dreams without fear holding me back.",
      rating: 5
    },
    {
      name: "Amanda K.",
      role: "Business Owner",
      text: "I learned to trust myself again. The tools and insights from this program have become part of my daily life.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 to-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-neutral-900 mb-4">Success Stories</h2>
          <p className="text-xl text-neutral-600">See what others have achieved</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} delay={idx * 200} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, text, rating, delay }: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
        ))}
      </div>
      <p className="text-neutral-700 mb-6 italic">"{text}"</p>
      <div>
        <div className="font-bold text-neutral-900">{name}</div>
        <div className="text-sm text-neutral-600">{role}</div>
      </div>
    </div>
  );
}

// ------------------ Pricing Card ------------------
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

      {children && <div className="mt-4">{children}</div>}

      <p className="text-center text-sm text-neutral-500 mt-4">Payment plans available</p>
    </div>
  );
}