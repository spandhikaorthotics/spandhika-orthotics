"use client";
import { useState } from "react";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-slate-500 text-xs font-semibold tracking-widest uppercase mb-6">
      <span className="h-px w-6 bg-[#10b981]" />
      {children}
    </div>
  );
}

// --- Reusable SVG Icons for the Left Section ---
function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

// --- Form Input Components (Light Theme, Medium Sized) ---
const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-[11px] font-bold tracking-[0.08em] text-gray-500 mb-1.5 uppercase">
    {children}
  </label>
);

const Input = ({
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}: {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 shadow-sm focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all placeholder:text-gray-400"
  />
);

const Select = ({
  placeholder,
  options,
  value,
  onChange,
  name,
}: {
  placeholder: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}) => (
  <div className="relative">
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 shadow-sm appearance-none focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all cursor-pointer"
    >
      <option value="" disabled className="text-gray-400">
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-gray-400">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

const Textarea = ({
  placeholder,
  value,
  onChange,
  name,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
}) => (
  <textarea
    rows={3}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 shadow-sm focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all placeholder:text-gray-400 resize-y"
  />
);

// --- Feedback Banner ---
type FeedbackState = { type: "success" | "error"; message: string } | null;

function FeedbackBanner({ feedback }: { feedback: FeedbackState }) {
  if (!feedback) return null;
  return (
    <div
      className={`rounded-lg px-4 py-3 text-sm font-medium mb-6 flex items-center gap-2 ${
        feedback.type === "success"
          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
          : "bg-red-50 text-red-800 border border-red-200"
      }`}
    >
      {feedback.type === "success" ? (
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
      {feedback.message}
    </div>
  );
}

// --- Initial State Factories ---
const initialSalesData = {
  fullName: "",
  email: "",
  organization: "",
  country: "",
  interest: "",
  message: "",
};

const initialSupportData = {
  fullName: "",
  email: "",
  accountId: "",
  service: "",
  issueCategory: "",
  message: "",
  priority: "",
};

export default function ContactUs() {
  const [tab, setTab] = useState<"sales" | "support">("sales");

  // --- Sales form state ---
  const [salesData, setSalesData] = useState(initialSalesData);
  const [salesLoading, setSalesLoading] = useState(false);
  const [salesFeedback, setSalesFeedback] = useState<FeedbackState>(null);

  // --- Support form state ---
  const [supportData, setSupportData] = useState(initialSupportData);
  const [supportLoading, setSupportLoading] = useState(false);
  const [supportFeedback, setSupportFeedback] = useState<FeedbackState>(null);

  // --- Generic change handlers ---
  const handleSalesChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setSalesData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSupportChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setSupportData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // --- Submit handlers ---
  const handleSalesSubmit = async () => {
    setSalesLoading(true);
    setSalesFeedback(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "sales", ...salesData }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSalesFeedback({ type: "success", message: "Your inquiry has been sent! We'll be in touch soon." });
        setSalesData(initialSalesData);
      } else {
        setSalesFeedback({ type: "error", message: data.message || "Something went wrong. Please try again." });
      }
    } catch {
      setSalesFeedback({ type: "error", message: "Network error. Please check your connection and try again." });
    } finally {
      setSalesLoading(false);
    }
  };

  const handleSupportSubmit = async () => {
    setSupportLoading(true);
    setSupportFeedback(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "support", ...supportData }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSupportFeedback({ type: "success", message: "Support request submitted! Our team will respond shortly." });
        setSupportData(initialSupportData);
      } else {
        setSupportFeedback({ type: "error", message: data.message || "Something went wrong. Please try again." });
      }
    } catch {
      setSupportFeedback({ type: "error", message: "Network error. Please check your connection and try again." });
    } finally {
      setSupportLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white text-[#051911] relative overflow-hidden">

      {/* ── BACKGROUND RADIANT GLOW ── */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[#6ee7b7]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-[#6ee7b7]/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-[1100px] px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:sticky lg:top-24">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 text-[#051911]">
              Let's start a <br className="hidden lg:block" /> conversation
            </h2>
            <p className="text-base text-gray-600 font-light leading-relaxed mb-10 max-w-sm">
              Whether you're looking to integrate SAARTHI into your clinical practice, or need technical assistance with your existing system, our team is ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#10b981] group-hover:scale-110 group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                  <MailIcon />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email Us</h4>
                  <a href="mailto:spandhikaorthotics@gmail.com" className="text-base font-medium text-[#051911] hover:text-[#10b981] transition-colors">
                    spandhikaorthotics@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#10b981] group-hover:scale-110 group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                  <PhoneIcon />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Call Us</h4>
                  <a href="tel:+919350026954" className="text-base font-medium text-[#051911] hover:text-[#10b981] transition-colors">
                    +91-93500-26954
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#10b981] group-hover:scale-110 group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                  <MapPinIcon />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Address</h4>
                  <p className="text-base font-medium text-[#051911]">Hamirpur, Himachal Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Form Card ── */}
          <div className="bg-white/90 backdrop-blur-xl rounded-[1.5rem] border border-white/50 p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.12)] relative overflow-hidden">

            {/* Tab Switcher */}
            <div className="flex bg-gray-50 rounded-full p-1.5 mb-8 border border-gray-200 shadow-inner">
              <button
                onClick={() => { setTab("sales"); setSalesFeedback(null); }}
                className={`flex-1 py-2.5 px-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  tab === "sales" ? "bg-[#0E3320] text-white shadow-md" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Sales & Partnership
              </button>
              <button
                onClick={() => { setTab("support"); setSupportFeedback(null); }}
                className={`flex-1 py-2.5 px-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  tab === "support" ? "bg-[#0E3320] text-white shadow-md" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Support & Help
              </button>
            </div>

            {/* ── SALES FORM ── */}
            {tab === "sales" && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <FeedbackBanner feedback={salesFeedback} />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name <span className="text-[#10b981]">*</span></Label>
                    <Input name="fullName" placeholder="Jane Smith" value={salesData.fullName} onChange={handleSalesChange} />
                  </div>
                  <div>
                    <Label>Work Email <span className="text-[#10b981]">*</span></Label>
                    <Input name="email" placeholder="jane@clinic.com" type="email" value={salesData.email} onChange={handleSalesChange} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Organisation <span className="text-[#10b981]">*</span></Label>
                    <Input name="organization" placeholder="Clinic, hospital, or institution" value={salesData.organization} onChange={handleSalesChange} />
                  </div>
                  <div>
                    <Label>Country <span className="text-[#10b981]">*</span></Label>
                    <Select name="country" placeholder="Select country..." options={["United States", "India", "United Kingdom", "Canada", "Australia"]} value={salesData.country} onChange={handleSalesChange} />
                  </div>
                </div>

                <div className="flex items-center py-2">
                  <div className="flex-grow border-t border-gray-100"></div>
                  <span className="flex-shrink-0 mx-4 text-[10px] font-bold tracking-[0.2em] text-[#10b981] uppercase">Interest</span>
                  <div className="flex-grow border-t border-gray-100"></div>
                </div>

                <div>
                  <Label>I'm interested in... <span className="text-[#10b981]">*</span></Label>
                  <Select name="interest" placeholder="Select a topic..." options={["Purchasing SAARTHI", "Bulk / Enterprise Order", "Partnership Program", "Requesting a Demo", "Other"]} value={salesData.interest} onChange={handleSalesChange} />
                </div>

                <div>
                  <Label>Tell us more</Label>
                  <Textarea name="message" placeholder="Briefly describe what you're looking to achieve..." value={salesData.message} onChange={handleSalesChange} />
                </div>

                <button
                  type="button"
                  onClick={handleSalesSubmit}
                  disabled={salesLoading}
                  className="w-full bg-[#0E3320] hover:bg-[#0a2316] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-bold tracking-wider uppercase rounded-lg py-3.5 flex items-center justify-center gap-2 transition-colors mt-2 shadow-lg shadow-[#051911]/10"
                >
                  {salesLoading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* ── SUPPORT FORM ── */}
            {tab === "support" && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <FeedbackBanner feedback={supportFeedback} />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name <span className="text-[#10b981]">*</span></Label>
                    <Input name="fullName" placeholder="Jane Smith" value={supportData.fullName} onChange={handleSupportChange} />
                  </div>
                  <div>
                    <Label>Email Address <span className="text-[#10b981]">*</span></Label>
                    <Input name="email" placeholder="jane@clinic.com" type="email" value={supportData.email} onChange={handleSupportChange} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Account / Order ID</Label>
                    <Input name="accountId" placeholder="e.g. BAL-00123 (optional)" value={supportData.accountId} onChange={handleSupportChange} />
                  </div>
                  <div>
                    <Label>Deployment / Service <span className="text-[#10b981]">*</span></Label>
                    <Select name="service" placeholder="Select..." options={["SAARTHI Hardware", "Mobile App", "Web Dashboard", "API / Integration"]} value={supportData.service} onChange={handleSupportChange} />
                  </div>
                </div>

                <div className="flex items-center py-2">
                  <div className="flex-grow border-t border-gray-100"></div>
                  <span className="flex-shrink-0 mx-4 text-[10px] font-bold tracking-[0.2em] text-[#10b981] uppercase">Issue Details</span>
                  <div className="flex-grow border-t border-gray-100"></div>
                </div>

                <div>
                  <Label>Issue Category <span className="text-[#10b981]">*</span></Label>
                  <Select name="issueCategory" placeholder="What best describes your issue?" options={["Connectivity / Bluetooth", "Sensor Calibration", "Software Bug", "Hardware Defect", "Billing & Account"]} value={supportData.issueCategory} onChange={handleSupportChange} />
                </div>

                <div>
                  <Label>Describe your issue <span className="text-[#10b981]">*</span></Label>
                  <Textarea name="message" placeholder="Please describe what happened, what you expected..." value={supportData.message} onChange={handleSupportChange} />
                </div>

                <div>
                  <Label>Priority</Label>
                  <Select name="priority" placeholder="Select urgency..." options={["Low - General Question", "Normal - Impedes workflow", "High - Completely blocked"]} value={supportData.priority} onChange={handleSupportChange} />
                </div>

                <button
                  type="button"
                  onClick={handleSupportSubmit}
                  disabled={supportLoading}
                  className="w-full bg-[#0E3320] hover:bg-[#0a2316] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-bold tracking-wider uppercase rounded-lg py-3.5 flex items-center justify-center gap-2 transition-colors mt-2 shadow-lg shadow-[#051911]/10"
                >
                  {supportLoading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting…
                    </>
                  ) : (
                    <>
                      Submit Support Request
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}