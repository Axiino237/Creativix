import { useState } from "react";
import ChatbotButton from "./ChatbotButton";
import ChatbotWindow from "./ChatbotWindow";

// ─── Creativix Complete FAQ Knowledge Base ─────────────────────────────────

const FAQ = [
  // ── Identity & About ──
  {
    keywords: ["what is creativix", "creativix", "about", "who are you", "who is", "tell me about", "introduction", "agency", "company", "studio"],
    answer: "🎨 Creativix is an award-winning creative agency with 8+ years of experience!\n\nWe specialise in:\n• Graphic Design\n• Brand Identity\n• Social Media Marketing\n• Print Design\n\n150+ projects | 50+ happy clients | 25+ awards 🏆",
  },

  // ── Greetings ──
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "greetings", "howdy"],
    answer: "Hi there! 👋 Welcome to Creativix Studio!\n\nI can help you with:\n• Our services & pricing\n• How we work\n• Getting started\n• Contacting our team\n\nWhat would you like to know?",
  },

  // ── Thank You ──
  {
    keywords: ["thank", "thanks", "thank you", "appreciate", "helpful", "great", "awesome", "perfect"],
    answer: "You're welcome! 😊 It's our pleasure to help. Is there anything else you'd like to know about Creativix? We're always happy to assist!",
  },

  // ── Goodbye ──
  {
    keywords: ["bye", "goodbye", "see you", "later", "take care", "ciao", "that's all"],
    answer: "Goodbye! 👋 Thanks for chatting with Creativix. Feel free to come back anytime. Have a wonderful day! 🌟",
  },

  // ── Services Overview ──
  {
    keywords: ["service", "offer", "what do you do", "provide", "speciali", "capability"],
    answer: "🎨 Our core services:\n\n🖼️ Graphic Design — logos, posters, brochures, banners\n🏆 Branding — full brand identity & guidelines\n📱 Social Media — strategy, design & management\n🖨️ Print Design — business cards, packaging, flyers\n\nNeed details on any specific service?",
  },

  // ── Logo Design ──
  {
    keywords: ["logo", "logo design", "create logo", "need a logo", "logo maker"],
    answer: "✨ Our Logo Design service includes:\n\n• Multiple unique concepts\n• Colour & black-and-white versions\n• Full revision rounds\n• Final files in PNG, SVG, AI, PDF\n\nA great logo is the foundation of your brand. Let's create yours! 🚀",
  },

  // ── Branding ──
  {
    keywords: ["branding", "brand identity", "brand guideline", "brand strategy", "rebrand"],
    answer: "🏆 Our Branding package covers:\n\n• Logo design\n• Colour palette & typography\n• Brand voice & messaging\n• Complete brand guideline document\n• Business card & stationery design\n\nEverything for a consistent, professional brand presence!",
  },

  // ── Social Media ──
  {
    keywords: ["social media", "instagram", "facebook", "linkedin", "twitter", "content", "post", "reel", "story", "campaign"],
    answer: "📱 Our Social Media services include:\n\n• Content strategy & calendar\n• Post & Story design\n• Caption writing\n• Scheduling & publishing\n• Monthly analytics report\n\nWe manage Instagram, Facebook, LinkedIn, Twitter & more!",
  },

  // ── Graphic Design ──
  {
    keywords: ["graphic design", "poster", "brochure", "flyer", "banner", "album", "packaging", "product design"],
    answer: "🖼️ Our Graphic Design covers:\n\n• Posters & flyers\n• Brochures & catalogues\n• Banners (digital & print)\n• Album & packaging design\n• Product mockups\n\nAll delivered in print-ready formats with proper bleed & colour profiles.",
  },

  // ── Print ──
  {
    keywords: ["print", "business card", "visiting card", "letterhead", "stationery", "signage", "flex", "hoarding"],
    answer: "🖨️ We handle all print design needs:\n\n• Business / visiting cards\n• Letterheads & stationery\n• Signage, flex & hoardings\n• Packaging design\n• Roll-up banners\n\nWe provide print-ready files so your printer gets it right every time!",
  },

  // ── Pricing ──
  {
    keywords: ["price", "cost", "rate", "package", "how much", "charges", "fee", "budget", "quote", "estimate"],
    answer: "💰 Our pricing is tailored to each project. Here's a rough guide:\n\n• Logo Design — starts at $299\n• Full Branding — starts at $799\n• Social Media (monthly) — from $499/mo\n• Graphic Design — from $99/project\n\nContact us for a FREE custom quote!\n📧 hello@creativix.studio",
  },

  // ── Discount / Offer ──
  {
    keywords: ["discount", "offer", "deal", "promo", "free", "trial", "coupon"],
    answer: "🎁 We occasionally run special offers for new clients and bundled packages! Contact us to ask about current promotions:\n📧 hello@creativix.studio\n📞 +1 (555) 123-4567",
  },

  // ── Process / How it works ──
  {
    keywords: ["process", "how it works", "how do you work", "steps", "workflow", "procedure"],
    answer: "🔄 How we work:\n\n1️⃣ Discovery call — understand your goals\n2️⃣ Proposal & timeline sent\n3️⃣ Initial design concepts\n4️⃣ Your feedback & revisions\n5️⃣ Final approval & file delivery\n\nYou're involved at every step!",
  },

  // ── Timeline / Delivery ──
  {
    keywords: ["time", "timeline", "how long", "delivery", "turnaround", "deadline", "days", "weeks", "duration"],
    answer: "⏱️ Typical timelines:\n\n• Logo Design — 5–7 business days\n• Full Branding — 2–3 weeks\n• Social Media setup — 1 week\n• Poster / Flyer — 2–3 days\n• Brochure — 4–5 days\n\nNeed it faster? Ask us about rush delivery! 🏃",
  },

  // ── Rush / Urgent ──
  {
    keywords: ["rush", "urgent", "asap", "emergency", "fast", "quickly", "tomorrow", "today"],
    answer: "🏃 Rush orders are available! We can fast-track most projects for an additional rush fee. Contact us directly to discuss your deadline:\n📧 hello@creativix.studio\n📞 +1 (555) 123-4567",
  },

  // ── Revisions ──
  {
    keywords: ["revision", "change", "modify", "update", "edit", "redo", "feedback", "amend"],
    answer: "✏️ Every package includes a set number of revision rounds. We work until you're 100% happy!\n\n• Logo — 3 revisions included\n• Branding — unlimited during the project\n• Graphic Design — 2 revisions included\n\nAdditional revisions available at a small fee.",
  },

  // ── File Formats ──
  {
    keywords: ["file", "format", "source", "ai", "psd", "pdf", "svg", "png", "jpg", "vector", "editable"],
    answer: "📁 We deliver all files you need:\n\n• PNG & JPG — for digital use\n• SVG & AI — vector/scalable\n• PDF — for print\n• PSD — layered Photoshop file\n\nJust let us know what formats you need and we'll provide them all!",
  },

  // ── Payment ──
  {
    keywords: ["payment", "pay", "invoice", "paypal", "bank", "transfer", "credit card", "deposit"],
    answer: "💳 We accept multiple payment methods:\n\n• Bank transfer\n• PayPal\n• Credit / Debit card\n\nWe typically require a 50% deposit to begin work, with the balance due on delivery.",
  },

  // ── Contact ──
  {
    keywords: ["contact", "reach", "email", "call", "talk", "speak", "get in touch", "phone", "number", "message", "whatsapp"],
    answer: "📬 Get in touch with us:\n\n📧 hello@creativix.studio\n📞 +1 (555) 123-4567\n🕐 Mon–Fri, 9am–6pm EST\n\nOr fill in our Contact form on the website — we respond within 24 hours!",
  },

  // ── Location ──
  {
    keywords: ["location", "where", "office", "address", "city", "country", "based", "headquarter", "visit"],
    answer: "📍 Creativix is a global creative studio working with clients worldwide — both in-person and remotely.\n\nContact us to discuss your project regardless of where you're located!\n📧 hello@creativix.studio",
  },

  // ── Portfolio / Work Examples ──
  {
    keywords: ["portfolio", "work", "example", "project", "previous", "sample", "showcase", "case study"],
    answer: "🗂️ Check out our Portfolio page to see our past work across:\n\n• Brand identities\n• Logo collections\n• Print designs\n• Social media campaigns\n\n150+ successful projects delivered! Head to the Portfolio tab in the menu. 🌟",
  },

  // ── Clients / Industries ──
  {
    keywords: ["client", "industry", "sector", "who do you work with", "business type", "startup", "small business"],
    answer: "🤝 We work with businesses of all sizes:\n\n• Startups & entrepreneurs\n• Small & medium businesses\n• Restaurants & hospitality\n• Retail & e-commerce\n• Healthcare & wellness\n• Real estate agencies\n\n...and many more! Every brand has a story — we help tell it.",
  },

  // ── Experience / Awards / Team ──
  {
    keywords: ["experience", "years", "award", "team", "expert", "professional", "skilled", "background"],
    answer: "🏅 Creativix by the numbers:\n\n• 8+ years of creative experience\n• 150+ successful projects\n• 50+ happy clients\n• 25+ industry awards\n\nOur team of designers and strategists are passionate about craft and results.",
  },

  // ── Why choose us ──
  {
    keywords: ["why", "why you", "why creativix", "what makes you", "different", "unique", "better", "advantage"],
    answer: "💡 Why clients choose Creativix:\n\n✅ 8+ years of award-winning experience\n✅ Dedicated project manager per client\n✅ Fast turnaround times\n✅ Unlimited communication\n✅ All source files delivered\n✅ Post-delivery support\n\nWe don't just design — we build brands that grow! 🚀",
  },

  // ── Testimonials / Reviews ──
  {
    keywords: ["review", "testimonial", "feedback", "rating", "what do clients say", "trust"],
    answer: "⭐ Our clients love us! We've maintained a strong track record of happy clients across 8+ years.\n\nVisit our Portfolio page for case studies, or contact us for references:\n📧 hello@creativix.studio",
  },

  // ── Getting Started ──
  {
    keywords: ["start", "begin", "get started", "hire", "book", "onboard", "how to start", "next step"],
    answer: "🚀 Ready to get started? Here's how:\n\n1. Reach out via our Contact page\n2. We'll schedule a free discovery call\n3. We send you a proposal & quote\n4. Once approved — we get to work!\n\n📧 hello@creativix.studio\n📞 +1 (555) 123-4567",
  },

  // ── Support / After Delivery ──
  {
    keywords: ["support", "after", "maintenance", "ongoing", "long term", "retainer", "help after"],
    answer: "🛠️ Yes! We offer ongoing support and retainer packages for clients who need regular design work.\n\nWhether it's monthly social media, seasonal campaigns, or ad-hoc updates — we've got you covered. Contact us to discuss a retainer plan!",
  },
];

// ─── Off-topic Guard ────────────────────────────────────────────────────────
const OFF_TOPIC_KEYWORDS = [
  "weather", "news", "sport", "movie", "music", "game", "joke", "recipe",
  "code", "programming", "python", "javascript", "react", "math", "history",
  "politics", "celebrity", "crypto", "bitcoin", "stock", "forex", "dating",
  "relationship", "girlfriend", "boyfriend", "travel", "hotel", "flight",
  "health", "medicine", "doctor", "religion", "war", "military",
];

const DEFAULT_REPLY =
  "I can only assist with questions about Creativix and our services. For anything else, please reach out to our customer support:\n📧 hello@creativix.studio\n📞 +1 (555) 123-4567\n\nOr try asking: 'What services do you offer?' | 'How much does branding cost?' | 'How do I get started?'";

const OFF_TOPIC_REPLY =
  "That's outside my knowledge area! 😅 I'm trained specifically to help with Creativix services and business.\n\nFor other queries, please contact our customer support:\n📧 hello@creativix.studio\n📞 +1 (555) 123-4567";

// ─── Quick Reply Suggestions ────────────────────────────────────────────────
export const QUICK_REPLIES = [
  "What services do you offer?",
  "How much does it cost?",
  "How long does delivery take?",
  "How do I get started?",
  "Show me your portfolio",
];

// ─── Matching Logic ─────────────────────────────────────────────────────────
const getAutoReply = (message) => {
  const lower = message.toLowerCase();
  if (OFF_TOPIC_KEYWORDS.some((kw) => lower.includes(kw))) return OFF_TOPIC_REPLY;
  for (const entry of FAQ) {
    if (entry.keywords.some((kw) => lower.includes(kw))) return entry.answer;
  }
  return DEFAULT_REPLY;
};

// ─── Component ──────────────────────────────────────────────────────────────
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 I'm the Creativix Assistant.\n\nAsk me anything about our services, pricing, process, or how to get started!",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMessage = { id: Date.now(), text, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: getAutoReply(text), isBot: true },
      ]);
    }, 1000);
  };

  const handleSend = () => sendMessage(inputValue);
  const handleQuickReply = (text) => sendMessage(text);

  return (
    <>
      <ChatbotButton onClick={() => setIsOpen(true)} isOpen={isOpen} />
      <ChatbotWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSend={handleSend}
        isTyping={isTyping}
        quickReplies={QUICK_REPLIES}
        onQuickReply={handleQuickReply}
      />
    </>
  );
};

export default Chatbot;