"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Gönderiliyor...");

    const res = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Mesaj başarıyla gönderildi!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("Gönderilirken bir hata oluştu.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Ad Soyad"
        className="w-full p-2 border rounded"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Adresiniz"
        className="w-full p-2 border rounded"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Telefon"
        className="w-full p-2 border rounded"
        value={form.phone}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Mesajınız"
        className="w-full p-2 border rounded"
        rows="4"
        value={form.message}
        onChange={handleChange}
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Gönder
      </button>
      <p className="text-sm">{status}</p>
    </form>
  );
}
