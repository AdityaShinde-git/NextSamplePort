'use client';

import React, { useState, useRef, useEffect } from 'react';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = { name: '', email: '', message: '' };

// Notification Component
type NotificationProps = {
  message: string;
  duration: number; // in seconds
  onClose: () => void;
};

const Notification: React.FC<NotificationProps> = ({ message, duration, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onClose();
      return;
    }
    const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft, onClose]);

  const progress = (timeLeft / duration) * 100;

  return (
    <div className="absolute mt-[300px] right-4 bg-gray-800 text-white p-4 rounded shadow-lg w-80 z-[100]">
      <div className="flex justify-between items-center mb-2">
        <span>{message}</span>
        <button
          onClick={onClose}
          aria-label="Close notification"
          className="ml-4 font-bold hover:text-red-500"
        >
          &times;
        </button>
      </div>
      <div className="h-1 bg-gray-600 rounded">
        <div
          className="h-1 bg-green-500 rounded transition-all duration-1000"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

// Main ContactModal Component
const ContactModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);

  // Notification state
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus trap and background scroll lock
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNotificationMessage(`Thank you, ${form.name || 'Guest'}! We’ll be in touch.`);
    setShowNotification(true);
    setForm(initialForm);
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full font-medium shadow hover:scale-105 transition"
      >
        Book Now
      </button>

      {isOpen && (
        <div
          className="fixed  inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-lg mt-[300px]"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-zinc-900 rounded-xl w-full max-w-md p-6 relative shadow-lg">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-red-500"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center">Let's Connect</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                ref={firstInputRef}
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border dark:bg-zinc-800"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border dark:bg-zinc-800"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border dark:bg-zinc-800"
              />
              <button
                type="submit"
                className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-md font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {showNotification && (
        <Notification
          message={notificationMessage}
          duration={5} // seconds
          onClose={() => setShowNotification(false)}
        />
      )}
    </>
  );
};

export default ContactModal;
