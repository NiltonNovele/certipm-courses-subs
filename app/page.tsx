"use client";

import { useState } from "react";
import Image from "next/image";
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
} from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = type === "checkbox" ? target.checked : undefined;

    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Registration submitted successfully!");
  };

  const navItems = [
    { label: "Home", icon: Home, link: "https://www.certipm.com" },
    { label: "Courses", icon: BookOpenText, link: "https://www.certipm.com/courses" },
    { label: "Practice", icon: Brain, link: "https://www.certipm.com/choice" },
    { label: "Consultancy", icon: Compass, link: "https://www.certipm.com/services" },
    { label: "Contact", icon: Contact, link: "https://www.certipm.com/contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <nav className="bg-[#7A0A0A] shadow-lg sticky top-0 z-50 border-b border-[#9c1d1d] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <BadgeCheck className="w-9 h-9 text-white" />
              <div>
                <span className="text-2xl font-extrabold text-white tracking-wide uppercase">
                  CertiPM
                </span>
                <div className="text-xs text-red-200 font-medium tracking-widest">
                  By Project Direct Lda.
                </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-4">
              {navItems.map(({ label, icon: Icon, link }) => (
                <a
                  key={label}
                  href={link}
                  className="flex items-center space-x-2 px-5 py-3 rounded-lg text-sm font-semibold text-red-100 hover:text-white hover:bg-[#8d1313] uppercase tracking-wide transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-red-100 hover:text-white hover:bg-[#8d1313] transition-all duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-[#9c1d1d] bg-[#7A0A0A] flex flex-col">
              {navItems.map(({ label, icon: Icon, link }) => (
                <a
                  key={label}
                  href={link}
                  className="flex items-center space-x-3 px-4 py-4 text-sm font-semibold uppercase tracking-wide text-red-100 hover:text-white hover:bg-[#8d1313]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Course Registration
            </h1>
            <p className="mt-1 text-gray-600 text-sm md:text-base">
              Fill out the form below to join our professional certification courses.
            </p>
          </div>

          <form action="https://formsubmit.co/patricioinaciodba@gmail.com" method="POST" className="grid gap-4">
            {/* Name Fields */}
            <div className="grid gap-3 md:grid-cols-3">
              {["firstName", "middleName", "lastName"].map((field) => (
                <div key={field} className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" />
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

            {/* Email & Phone */}
            <div className="grid gap-3 md:grid-cols-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" />
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
                <Phone className="absolute left-3 top-3 text-gray-400" />
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

            {/* WhatsApp */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <label className="flex items-center space-x-2 text-gray-700">
                <input
                  type="checkbox"
                  name="hasWhatsapp"
                  checked={form.hasWhatsapp}
                  onChange={handleChange}
                  className="w-5 h-5 accent-red-600"
                />
                <span>This is a WhatsApp number</span>
              </label>
              {!form.hasWhatsapp && (
                <div className="relative mt-2 md:mt-0 flex-1">
                  <Phone className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="tel"
                    name="alternateWhatsapp"
                    placeholder="Alternative WhatsApp Number"
                    onChange={handleChange}
                    className="input pl-10"
                  />
                </div>
              )}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="text-gray-400 hover:text-red-600 transition ml-2 mt-2 md:mt-0"
              >
                <HelpCircle className="w-5 h-5" />
              </button>
            </div>

            {/* Course & Start Date */}
            <div className="grid gap-3 md:grid-cols-2">
              <div className="relative">
                <BookOpenText className="absolute left-3 top-3 text-gray-400" />
                <select
                  name="course"
                  required
                  onChange={handleChange}
                  className="input pl-10"
                >
                  <option value="">Select a course</option>
                  <option value="pmp">PMP® – Project Management Professional</option>
                  <option value="capm">CAPM® – Certified Associate in Project Management</option>
                  <option value="scrum">Scrum Master Certification</option>
                </select>
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gray-400" />
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
            </div>

            {/* Weekly Hours */}
            <div className="relative">
              <Clock className="absolute left-3 top-3 text-gray-400" />
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

            {/* Notes */}
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 text-gray-400" />
              <textarea
                name="notes"
                rows={3}
                placeholder="Additional notes (optional)"
                onChange={handleChange}
                className="input pl-10 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-red-600 py-3 md:py-4 font-semibold text-white shadow-lg hover:bg-red-700 transition"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </main>

      {/* WhatsApp Info Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-md mx-4 relative">
            <h2 className="text-xl font-bold mb-4">Why we collect WhatsApp number</h2>
            <p className="text-gray-700 mb-4">
              We use your WhatsApp number to send important course updates and notifications.
              By providing it, you agree to our{" "}
              <a href="/terms" className="text-red-600 underline">
                Terms & Conditions
              </a>.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-600 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-300 py-12 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BadgeCheck className="w-7 h-7 text-[#8b0d0d]" />
                <h3 className="text-xl font-extrabold text-[#7a0b0b]">CertiPM</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                First digital platform that drives professionals to accomplishing
                their world-recognized certifications, from Mozambique, led by
                Patricio Inacio — a reference in project management in Mozambique.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#7a0b0b] mb-3">Contact</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#8b0d0d]" />
                  <span>info@certipm.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#8b0d0d]" />
                  <span>+258 85 802 9205</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#8b0d0d]" />
                  <span>Maputo, Mozambique</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#7a0b0b] mb-3">Social Media</h3>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100064025047744#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#8b0d0d] transition-colors"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/projectdirect3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#8b0d0d] transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/projectdirect9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#8b0d0d] transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/project-direct-lda/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#8b0d0d] transition-colors"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-300 text-center">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Project Direct Lda. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">
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
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          font-size: 1rem;
          color: #111827;
          background-color: #f9fafb;
          transition: border 0.2s, box-shadow 0.2s;
        }

        .input:focus {
          outline: none;
          border-color: #dc2626;
          box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.2);
          background-color: #fff;
        }

        textarea.input {
          background-color: #f9fafb;
        }
      `}</style>
    </div>
  );
}
