import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'contact') => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const BACKEND_API = "https://kia-backendss.vercel.app";


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
 const res = await fetch(`${BACKEND_API}/api/contact`,  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Server error. Please try later.");
  }
};

  return (
    <>
      <section className="relative bg-gradient-to-br from-amber-50 via-neutral-100 to-stone-200 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-stone-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Ready to begin your transformation? Reach out to discuss how Self-Sabotage Alchemy can help you break free
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-12">
                <ContactInfo
                  icon={<Mail className="w-6 h-6" />}
                  title="Email"
                  details={['info@selffsabotagealchemy.com']}
                  description="We'll respond within 24 hours"
                />

                <ContactInfo
                  icon={<Phone className="w-6 h-6" />}
                  title="Phone"
                  details={['971-266-0104']}
                  description="Available Mon-Fri, 10am-6pm PT"
                />

                <ContactInfo
                  icon={<MapPin className="w-6 h-6" />}
                  title="Location"
                  details={['Portland, Oregon']}
                  description="Online program available worldwide"
                />
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-2xl p-8 border-2 border-amber-200">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Next Steps
                </h3>
                <ol className="space-y-3 text-neutral-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-700 flex-shrink-0">1.</span>
                    <span>Share your questions or needs using the form</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-700 flex-shrink-0">2.</span>
                    <span>We'll reach out within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-700 flex-shrink-0">3.</span>
                    <span>Schedule a discovery call at no cost</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-700 flex-shrink-0">4.</span>
                    <span>Enroll and begin your transformation</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 border border-neutral-200">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
                  <p className="text-green-800">
                    Thank you for reaching out. We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-700 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-700 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-700 transition-all"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-700 transition-all resize-none"
                      placeholder="Tell us about your situation, questions, or what you're hoping to achieve..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  <p className="text-xs text-neutral-600 text-center">
                    We respect your privacy. We'll only use your information to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-stone-200 via-neutral-100 to-amber-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-neutral-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="How does the program work?"
              answer="The 6-week immersion combines live weekly Zoom sessions, private messaging support, an exclusive Discord community, and comprehensive workbooks. You'll work through 4 phases of transformation with daily practices and guided exercises."
            />
            <FAQItem
              question="Do I need any experience?"
              answer="No! This program is designed for people at all levels. Whether you've never worked with a coach or you're experienced in personal development, you'll find value here. We meet you where you are."
            />
            <FAQItem
              question="Is this for men and women?"
              answer="Absolutely. This program is for anyone (men and women) who's ready to break self-sabotage cycles and step into their power. We create an inclusive, supportive space for all."
            />
            <FAQItem
              question="What if I can't attend a live session?"
              answer="All sessions are recorded and available for lifetime access. You can participate live, watch the replay, or use the workbooks at your own pace. We work with your schedule."
            />
            <FAQItem
              question="How much does it cost?"
              answer="The program investment is $1,250. Payment plans are available: either 3 payments of $450 or 5 payments of $300. This includes all materials, lifetime access, and community membership."
            />
            <FAQItem
              question="What if I want to know more before enrolling?"
              answer="Great! We offer free discovery calls to discuss your situation and see if this program is right for you. Reach out using the contact form above."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            The journey from self-sabotage to self-trust starts with one decision. You've taken the first step by learning about us. Now it's time to take the next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('services')}
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore the Program
            </button>
            <button
              onClick={() => setFormData({ ...formData, message: 'I am interested in enrolling' })}
              className="border-2 border-amber-700 text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  );
}

function ContactInfo({ icon, title, details, description }: {
  icon: React.ReactNode;
  title: string;
  details: string[];
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="text-amber-700 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
        {details.map((detail, idx) => (
          <p key={idx} className="text-neutral-700 font-medium">{detail}</p>
        ))}
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white rounded-xl border border-neutral-200 p-6 text-left hover:shadow-lg transition-all cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-lg font-bold text-neutral-900 pr-4">{question}</h3>
        <span className="text-2xl text-amber-700 flex-shrink-0">
          {open ? '−' : '+'}
        </span>
      </div>
      {open && (
        <p className="text-neutral-700 mt-4 leading-relaxed">{answer}</p>
      )}
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
