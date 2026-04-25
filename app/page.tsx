"use client";

import { useMemo, useState } from "react";
import {
  Home,
  Brain,
  Contact,
  Menu,
  X,
  BadgeCheck,
  BookOpenText,
  Compass,
  Mail,
  Phone,
  MapPin,
  User,
  Calendar,
  Clock,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  Info,
  Award,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const coreCourses = [
  {
    id: "pmp",
    title: "PMP® Certification Course",
    subtitle: "Project Management Professional",
    description:
      "Prepare for your PMP® certification with in-depth coverage of PMBOK® Guide 7th Edition, Agile, and Hybrid approaches.",
    instructor: "Patricio Inacio",
    tag: "Certification Course",
    features: [
      "PMBOK® Guide 7th Edition",
      "Agile & Hybrid approaches",
      "35 hours of live training",
      "Exam simulator",
      "Certificate of completion",
    ],
  },
  {
    id: "capm",
    title: "CAPM® Certification Course",
    subtitle: "Certified Associate in Project Management",
    description:
      "Build strong foundations in project management and prepare for the CAPM® exam with confidence.",
    instructor: "Patricio Inacio",
    tag: "Certification Course",
    features: [
      "PMBOK® Guide 7th Edition",
      "Agile & Hybrid practices",
      "23 hours of live training",
      "Exam simulator",
      "Certificate of completion",
    ],
  },
  {
    id: "scrum",
    title: "Scrum Master Certification",
    subtitle: "Agile & Scrum Framework",
    description:
      "Master Agile and Scrum principles and prepare for Scrum Master certification.",
    instructor: "Patricio Inacio",
    tag: "Certification Course",
    features: [
      "Scrum framework mastery",
      "Agile & Hybrid delivery",
      "14 hours of live training",
      "Exam simulator",
      "Certificate of completion",
    ],
  },
];

const safeCourses = [
  {
    id: "leading-safe",
    title: "Leading SAFe (SA)",
    subtitle: "SAFe Agilist Certification",
    description:
      "A 16-hour course designed for leaders driving Agile transformation across the enterprise.",
    instructor: "Certified SAFe Trainer",
    tag: "SAFe® Program",
    features: [
      "Understanding SAFe & Agile Release Trains (ARTs)",
      "Customer-centric mindset & alignment",
      "Strategic alignment & value flow",
      "Enterprise agility & leadership skills",
    ],
  },
  {
    id: "safe-scrum-master",
    title: "SAFe Scrum Master (SSM)",
    subtitle: "Scrum Master in a Scaled Agile Environment",
    description:
      "Learn how to facilitate Agile teams and support ARTs in complex enterprise environments.",
    instructor: "Certified SAFe Trainer",
    tag: "SAFe® Program",
    features: [
      "Scrum & Agile foundations",
      "Facilitating team collaboration",
      "PI Planning & iteration execution",
      "DevOps & continuous improvement",
    ],
  },
  {
    id: "safe-popm",
    title: "SAFe Product Owner / Product Manager (POPM)",
    subtitle: "Product Leadership in SAFe",
    description:
      "Learn how to manage backlogs, prioritise value, and align product strategy with business goals.",
    instructor: "Certified SAFe Trainer",
    tag: "SAFe® Program",
    features: [
      "Product ownership & backlog management",
      "PI Planning leadership",
      "Lean-Agile & customer centricity",
      "AI-supported product decisions",
    ],
  },
  {
    id: "safe-devops",
    title: "SAFe DevOps",
    subtitle: "Continuous Delivery & Value Flow",
    description:
      "Learn how to optimise delivery pipelines using CALMR principles and DevOps practices.",
    instructor: "Certified SAFe Trainer",
    tag: "SAFe® Program",
    features: [
      "CALMR DevOps model",
      "Value stream mapping",
      "Continuous integration & delivery",
      "Transformation roadmap creation",
    ],
  },
  {
    id: "safe-teams",
    title: "SAFe for Teams",
    subtitle: "SAFe Practitioner (SP)",
    description:
      "Designed for individuals working in or preparing to join Agile teams within a SAFe organisation.",
    instructor: "Certified SAFe Trainer",
    tag: "SAFe® Program",
    features: [
      "Working on an Agile Release Train (ART)",
      "Executing Iterations and PI Planning",
      "Cross-team collaboration and alignment",
      "Applying Lean-Agile principles in practice",
    ],
  },
];

const allCourses = [...coreCourses, ...safeCourses];

export default function Page() {
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    hasWhatsapp: true,
    alternateWhatsapp: "",
    startDate: "",
    weeklyHours: "",
    course: "",
    notes: "",
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedCourseModalId, setSelectedCourseModalId] = useState<string | null>(
    null
  );

  const selectedCourse = useMemo(
    () => allCourses.find((course) => course.id === form.course),
    [form.course]
  );

  const modalCourse = useMemo(
    () => allCourses.find((course) => course.id === selectedCourseModalId),
    [selectedCourseModalId]
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? target.checked : value,
    });
  };

  const navItems = [
    { label: "Home", icon: Home, link: "https://www.certipm.com" },
    {
      label: "Courses",
      icon: BookOpenText,
      link: "https://www.certipm.com/courses",
    },
    { label: "Practice", icon: Brain, link: "https://www.certipm.com/choice" },
    {
      label: "Consultancy",
      icon: Compass,
      link: "https://www.certipm.com/services",
    },
    { label: "Contact", icon: Contact, link: "https://www.certipm.com/contact" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f7f5] font-sans text-gray-900">
      <nav className="sticky top-0 z-50 border-b border-[#9c1d1d] bg-[#7A0A0A]/95 shadow-lg backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="https://www.certipm.com" className="flex items-center gap-3">
              <BadgeCheck className="h-9 w-9 text-white" />
              <div>
                <span className="text-2xl font-extrabold uppercase tracking-wide text-white">
                  CertiPM
                </span>
                <div className="text-xs font-medium tracking-widest text-red-200">
                  By Project Direct Lda.
                </div>
              </div>
            </a>

            <div className="hidden items-center gap-2 lg:flex">
              {navItems.map(({ label, icon: Icon, link }) => (
                <a
                  key={label}
                  href={link}
                  className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-red-100 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-2xl p-2 text-red-100 transition hover:bg-white/10 hover:text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="border-t border-white/10 py-3 lg:hidden">
              {navItems.map(({ label, icon: Icon, link }) => (
                <a
                  key={label}
                  href={link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-wide text-red-100 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-[28px] border border-gray-200 bg-white p-6 shadow-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#7A0A0A]">
                <Award className="h-4 w-4" />
                Register interest
              </div>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                Ready to join a programme?
              </h1>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Submit your details and our team will contact you with course
                availability, schedule options, and next steps.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Official certification-focused preparation",
                  "Instructor-led training and support",
                  "Practical exam simulations",
                  "Flexible learning planning",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#7A0A0A]" />
                    <span className="text-sm leading-6 text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-4">
                <p className="text-sm font-semibold text-[#7A0A0A]">
                  Need help choosing?
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Select a course in the form and click{" "}
                  <span className="font-semibold">View info</span> to see the
                  details before submitting.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-xl md:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7A0A0A]">
                  Course registration
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-gray-950">
                  Register your interest
                </h2>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Fill out the form below and choose the course you are interested
                  in.
                </p>
              </div>

              <form
                action="https://formsubmit.co/patricioinaciodba@gmail.com"
                method="POST"
                className="grid gap-4"
              >
                <div className="grid gap-3 md:grid-cols-3">
                  {["firstName", "middleName", "lastName"].map((field) => (
                    <div key={field} className="relative">
                      <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name={field}
                        placeholder={
                          field === "firstName"
                            ? "First Name"
                            : field === "middleName"
                              ? "Middle Name (optional)"
                              : "Last Name"
                        }
                        required={field !== "middleName"}
                        onChange={handleChange}
                        className="input pl-10"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      onChange={handleChange}
                      className="input pl-10"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile Number"
                      required
                      onChange={handleChange}
                      className="input pl-10"
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <input
                        type="checkbox"
                        name="hasWhatsapp"
                        checked={form.hasWhatsapp}
                        onChange={handleChange}
                        className="h-5 w-5 accent-red-700"
                      />
                      This is a WhatsApp number
                    </label>

                    <button
                      type="button"
                      onClick={() => setIsWhatsAppModalOpen(true)}
                      className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#7A0A0A]"
                    >
                      <HelpCircle className="h-4 w-4" />
                      Why we ask
                    </button>
                  </div>

                  {!form.hasWhatsapp && (
                    <div className="relative mt-3">
                      <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="alternateWhatsapp"
                        placeholder="Alternative WhatsApp Number"
                        onChange={handleChange}
                        className="input pl-10"
                      />
                    </div>
                  )}
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Course of interest
                  </label>

                  <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                    <div className="relative">
                      <BookOpenText className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <select
                        name="course"
                        required
                        value={form.course}
                        onChange={handleChange}
                        className="input pl-10"
                      >
                        <option value="">Select a course</option>
                        <optgroup label="Core certifications">
                          {coreCourses.map((course) => (
                            <option key={course.id} value={course.id}>
                              {course.title}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="SAFe® programmes">
                          {safeCourses.map((course) => (
                            <option key={course.id} value={course.id}>
                              {course.title}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    <button
                      type="button"
                      disabled={!selectedCourse}
                      onClick={() =>
                        selectedCourse && setSelectedCourseModalId(selectedCourse.id)
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#7A0A0A]/20 bg-white px-5 py-3.5 text-sm font-semibold text-[#7A0A0A] transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Info className="h-4 w-4" />
                      View info
                    </button>
                  </div>

                  {selectedCourse && (
                    <div className="mt-3 rounded-2xl bg-white p-4">
                      <p className="text-sm font-bold text-gray-950">
                        {selectedCourse.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        {selectedCourse.subtitle}
                      </p>
                    </div>
                  )}
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <select
                      name="startDate"
                      required
                      onChange={handleChange}
                      className="input pl-10"
                    >
                      <option value="">Planned start date</option>
                      <option value="immediately">Immediately</option>
                      <option value="30days">Within 30 days</option>
                      <option value="60days">Within 60 days</option>
                    </select>
                  </div>

                  <div className="relative">
                    <Clock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <select
                      name="weeklyHours"
                      required
                      onChange={handleChange}
                      className="input pl-10"
                    >
                      <option value="">Hours available per week</option>
                      <option value="2-4">2–4 hours</option>
                      <option value="5-7">5–7 hours</option>
                      <option value="8+">8+ hours</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Additional notes (optional)"
                    onChange={handleChange}
                    className="input resize-none pl-10"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#7A0A0A] py-4 font-semibold text-white shadow-lg transition hover:bg-[#8d1313]"
                >
                  Submit Registration
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {isWhatsAppModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-[28px] bg-white p-6 shadow-2xl">
            <button
              onClick={() => setIsWhatsAppModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 transition hover:text-[#7A0A0A]"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-xl font-bold text-gray-950">
              Why we collect WhatsApp numbers
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              We use your WhatsApp number to send important course updates,
              schedules, registration confirmations, and support messages. By
              providing it, you agree to our{" "}
              <a href="https://www.certipm.com/terms" className="font-semibold text-[#7A0A0A] underline">
                Terms & Conditions
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {modalCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setSelectedCourseModalId(null)}
              className="absolute right-4 top-4 text-gray-400 transition hover:text-[#7A0A0A]"
              aria-label="Close course info"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#7A0A0A]">
              <BookOpenText className="h-4 w-4" />
              {modalCourse.tag}
            </div>

            <h2 className="mt-5 pr-8 text-2xl font-extrabold text-gray-950 sm:text-3xl">
              {modalCourse.title}
            </h2>

            <p className="mt-1 text-sm font-semibold text-[#7A0A0A]">
              {modalCourse.subtitle}
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              {modalCourse.description}
            </p>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                Instructor
              </p>
              <p className="mt-1 text-sm font-bold text-gray-950">
                {modalCourse.instructor}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                What you’ll cover
              </p>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {modalCourse.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#7A0A0A]" />
                    <span className="text-sm leading-6 text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedCourseModalId(null)}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#7A0A0A] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#8d1313]"
            >
              Continue registration
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <BadgeCheck className="h-7 w-7 text-[#8b0d0d]" />
                <h3 className="text-xl font-extrabold text-[#7a0b0b]">
                  CertiPM
                </h3>
              </div>
              <p className="text-sm leading-7 text-gray-700">
                Professional project management training, certification
                preparation, and consultancy from Mozambique.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-bold text-[#7a0b0b]">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#8b0d0d]" />
                  <span>info@certipm.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#8b0d0d]" />
                  <span>+258 85 802 9205</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#8b0d0d]" />
                  <span>Maputo, Mozambique</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-bold text-[#7a0b0b]">
                Social Media
              </h3>
              <div className="mt-2 flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100064025047744#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="h-5 w-5 text-gray-700 transition hover:text-[#8b0d0d]" />
                </a>
                <a
                  href="https://x.com/projectdirect3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="h-5 w-5 text-gray-700 transition hover:text-[#8b0d0d]" />
                </a>
                <a
                  href="https://www.instagram.com/projectdirect9/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-5 w-5 text-gray-700 transition hover:text-[#8b0d0d]" />
                </a>
                <a
                  href="https://www.linkedin.com/company/project-direct-lda/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="h-5 w-5 text-gray-700 transition hover:text-[#8b0d0d]" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-6 text-center">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Project Direct Lda. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Developed by{" "}
              <a
                href="https://www.synctechx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#8b0d0d] hover:underline"
              >
                SyncTechX
              </a>
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid #e5e7eb;
          padding: 0.875rem 1rem 0.875rem 2.5rem;
          font-size: 0.95rem;
          color: #111827;
          background-color: #ffffff;
          transition: border 0.2s, box-shadow 0.2s;
        }

        .input:focus {
          outline: none;
          border-color: #7a0a0a;
          box-shadow: 0 0 0 4px rgba(122, 10, 10, 0.1);
        }
      `}</style>
    </div>
  );
}