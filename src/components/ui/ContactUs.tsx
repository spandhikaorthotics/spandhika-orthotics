"use client";
import { useState } from "react";
import { Turnstile } from "nextjs-turnstile";
import { AlertCircle, ArrowRight, Check, ChevronDown, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { montserrat } from "@/lib/fonts";

// --- Form primitives ---
const fieldClass =
  "w-full rounded-xl border border-border bg-[color-mix(in_oklab,var(--secondary)_55%,white)] px-4 py-3 text-[15px] text-foreground transition-all placeholder:text-muted-foreground/60 hover:border-[color-mix(in_oklab,var(--primary)_35%,var(--border))] focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_12%,transparent)]";

const Label = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
  <label className="mb-2 block text-[13px] font-medium text-foreground/80">
    {children}
    {required && <span className="ml-0.5 text-[var(--brand-green)]">*</span>}
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
}) => <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className={fieldClass} />;

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
      className={`${fieldClass} cursor-pointer appearance-none pr-10 ${value ? "" : "text-muted-foreground/60"}`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="text-foreground">
          {opt}
        </option>
      ))}
    </select>
    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
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
}) => <textarea rows={4} name={name} placeholder={placeholder} value={value} onChange={onChange} className={`${fieldClass} resize-y`} />;

// --- Feedback Banner ---
type FeedbackState = { type: "success" | "error"; message: string } | null;

function FeedbackBanner({ feedback }: { feedback: FeedbackState }) {
  if (!feedback) return null;
  const success = feedback.type === "success";
  return (
    <div
      role={success ? "status" : "alert"}
      className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium ${
        success
          ? "bg-[color-mix(in_oklab,var(--brand-green)_14%,white)] text-primary ring-1 ring-[color-mix(in_oklab,var(--brand-green)_35%,transparent)]"
          : "bg-red-50 text-red-800 ring-1 ring-red-200"
      }`}
    >
      {success ? <Check className="h-4 w-4 shrink-0" aria-hidden="true" /> : <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />}
      {feedback.message}
    </div>
  );
}

function SubmitButton({
  loading,
  disabled,
  onClick,
  label,
  loadingLabel,
}: {
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
  label: string;
  loadingLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-[15px] font-semibold text-primary-foreground shadow-[0_12px_24px_-12px_color-mix(in_oklab,var(--primary)_70%,transparent)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-12px_color-mix(in_oklab,var(--primary)_70%,transparent)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          {loadingLabel}
        </>
      ) : (
        <>
          {label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </>
      )}
    </button>
  );
}

const contactItems = [
  { icon: Mail, label: "Email us", value: "spandhikaorthotics@​gmail.com", href: "mailto:spandhikaorthotics@gmail.com" },
  { icon: Phone, label: "Call us", value: "+91-93500-26954", href: "tel:+919350026954" },
  { icon: MapPin, label: "Visit us", value: "Hamirpur, Himachal Pradesh" },
];

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
  
  // 2. Add Turnstile token state (used for both forms)
  const [token, setToken] = useState<string | null>(null);

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
    // 3. Block submission if no token
    if (!token) {
      setSalesFeedback({ type: "error", message: "Please complete the security check." });
      return;
    }

    setSalesLoading(true);
    setSalesFeedback(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // 4. Include the token in the body
        body: JSON.stringify({ type: "sales", token, ...salesData }),
      });
      const data = await res.json();
      
      if (res.ok && data.success) {
        setSalesFeedback({ type: "success", message: "Your inquiry has been sent! We'll be in touch soon." });
        setSalesData(initialSalesData);
      } else if (res.status === 429) {
        setSalesFeedback({ type: "error", message: data.message || "Too many requests. Please try again later." });
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
    // 3. Block submission if no token
    if (!token) {
      setSupportFeedback({ type: "error", message: "Please complete the security check." });
      return;
    }

    setSupportLoading(true);
    setSupportFeedback(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // 4. Include the token in the body
        body: JSON.stringify({ type: "support", token, ...supportData }),
      });
      const data = await res.json();
      
      if (res.ok && data.success) {
        setSupportFeedback({ type: "success", message: "Support request submitted! Our team will respond shortly." });
        setSupportData(initialSupportData);
      } else if (res.status === 429) {
        setSupportFeedback({ type: "error", message: data.message || "Too many requests. Please try again later." });
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
    <section id="contact" className={`${montserrat.className} lv-theme scroll-mt-24 py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_80px_-40px_color-mix(in_oklab,var(--primary)_45%,transparent)] lg:grid-cols-[0.85fr_1.15fr]">
          {/* ── LEFT: info panel ── */}
          <div className="relative overflow-hidden bg-primary px-7 py-10 text-primary-foreground sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--brand-green)] opacity-25 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[var(--primary-soft)] opacity-10 blur-3xl" aria-hidden="true" />

            <div className="relative flex h-full flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--deep-muted)]">Get in touch</p>
              <h2 className="mt-3 text-[32px] font-semibold leading-[1.12] sm:text-[40px]">
                Let&apos;s start a conversation
              </h2>
              <p className="mt-5 max-w-sm text-[16px] leading-[1.7] text-[var(--deep-muted)]">
                Whether you&apos;re looking to bring SAARTHI into your clinical practice or need help with your device, our team is ready to assist.
              </p>

              <ul className="mt-10 space-y-3">
                {contactItems.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15 transition-colors group-hover:bg-white group-hover:text-primary">
                        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--deep-muted)] opacity-80">{label}</span>
                        <span className="mt-0.5 block text-[15px] font-medium">{value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} className="group -m-2 flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-white/5">
                          {inner}
                        </a>
                      ) : (
                        <div className="group -m-2 flex items-center gap-4 rounded-2xl p-2">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <p className="mt-auto flex items-center gap-2 pt-10 text-sm text-[var(--deep-muted)]">
                <Clock className="h-4 w-4" aria-hidden="true" />
                We usually reply within one working day.
              </p>
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div className="px-6 py-8 sm:px-10 sm:py-12">
            {/* Tab switcher */}
            <div role="tablist" aria-label="Contact type" className="relative grid grid-cols-2 rounded-full bg-secondary p-1.5">
              <span
                aria-hidden="true"
                className={`absolute inset-y-1.5 left-1.5 w-[calc(50%-0.375rem)] rounded-full bg-primary shadow-md transition-transform duration-300 ease-out ${
                  tab === "support" ? "translate-x-full" : ""
                }`}
              />
              {(
                [
                  ["sales", "Sales & partnership"],
                  ["support", "Support & help"],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={tab === key}
                  onClick={() => {
                    setTab(key);
                    if (key === "sales") setSalesFeedback(null);
                    else setSupportFeedback(null);
                  }}
                  className={`relative z-10 cursor-pointer whitespace-nowrap rounded-full px-2 py-2.5 text-[12.5px] font-semibold transition-colors duration-300 sm:px-3 sm:text-sm ${
                    tab === key ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* ── SALES FORM ── */}
            {tab === "sales" && (
              <div key="sales" className="lv-swap mt-8 space-y-5">
                <FeedbackBanner feedback={salesFeedback} />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label required>Full name</Label>
                    <Input name="fullName" placeholder="Jane Smith" value={salesData.fullName} onChange={handleSalesChange} />
                  </div>
                  <div>
                    <Label required>Work email</Label>
                    <Input name="email" placeholder="jane@clinic.com" type="email" value={salesData.email} onChange={handleSalesChange} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label required>Organisation</Label>
                    <Input name="organization" placeholder="Clinic, hospital or institution" value={salesData.organization} onChange={handleSalesChange} />
                  </div>
                  <div>
                    <Label required>Country</Label>
                    <Select name="country" placeholder="Select country" options={["United States", "India", "United Kingdom", "Canada", "Australia"]} value={salesData.country} onChange={handleSalesChange} />
                  </div>
                </div>

                <div>
                  <Label required>I&apos;m interested in</Label>
                  <Select name="interest" placeholder="Select a topic" options={["Purchasing SAARTHI", "Bulk / Enterprise Order", "Partnership Program", "Requesting a Demo", "Other"]} value={salesData.interest} onChange={handleSalesChange} />
                </div>

                <div>
                  <Label>Tell us more</Label>
                  <Textarea name="message" placeholder="Briefly describe what you're looking to achieve…" value={salesData.message} onChange={handleSalesChange} />
                </div>

                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={(t) => {
                    setToken(t);
                    if (salesFeedback?.message === "Please complete the security check.") {
                      setSalesFeedback(null);
                    }
                  }}
                  onExpire={() => setToken(null)}
                  onError={() => setSalesFeedback({ type: "error", message: "Security verification failed. Please refresh." })}
                  theme="light"
                />

                <SubmitButton loading={salesLoading} disabled={salesLoading || !token} onClick={handleSalesSubmit} label="Send inquiry" loadingLabel="Sending…" />
              </div>
            )}

            {/* ── SUPPORT FORM ── */}
            {tab === "support" && (
              <div key="support" className="lv-swap mt-8 space-y-5">
                <FeedbackBanner feedback={supportFeedback} />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label required>Full name</Label>
                    <Input name="fullName" placeholder="Jane Smith" value={supportData.fullName} onChange={handleSupportChange} />
                  </div>
                  <div>
                    <Label required>Email address</Label>
                    <Input name="email" placeholder="jane@clinic.com" type="email" value={supportData.email} onChange={handleSupportChange} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label>Account / order ID</Label>
                    <Input name="accountId" placeholder="e.g. BAL-00123 (optional)" value={supportData.accountId} onChange={handleSupportChange} />
                  </div>
                  <div>
                    <Label required>Product / service</Label>
                    <Select name="service" placeholder="Select" options={["SAARTHI Hardware", "Mobile App", "Web Dashboard", "API / Integration"]} value={supportData.service} onChange={handleSupportChange} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label required>Issue category</Label>
                    <Select name="issueCategory" placeholder="What best describes it?" options={["Connectivity / Bluetooth", "Sensor Calibration", "Software Bug", "Hardware Defect", "Billing & Account"]} value={supportData.issueCategory} onChange={handleSupportChange} />
                  </div>
                  <div>
                    <Label>Priority</Label>
                    <Select name="priority" placeholder="Select urgency" options={["Low - General Question", "Normal - Impedes workflow", "High - Completely blocked"]} value={supportData.priority} onChange={handleSupportChange} />
                  </div>
                </div>

                <div>
                  <Label required>Describe your issue</Label>
                  <Textarea name="message" placeholder="What happened, and what did you expect?" value={supportData.message} onChange={handleSupportChange} />
                </div>

                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={(t) => {
                    setToken(t);
                    if (supportFeedback?.message === "Please complete the security check.") {
                      setSupportFeedback(null);
                    }
                  }}
                  onExpire={() => setToken(null)}
                  onError={() => setSupportFeedback({ type: "error", message: "Security verification failed. Please refresh." })}
                  theme="light"
                />

                <SubmitButton loading={supportLoading} disabled={supportLoading || !token} onClick={handleSupportSubmit} label="Submit support request" loadingLabel="Submitting…" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
