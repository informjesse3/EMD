// Booking.jsx
import { useState } from "react";

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking request sent! We'll get back to you.");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-green-100 to-green-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Book Your Stay</h2>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 bg-white p-6 rounded-2xl shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border p-2 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
            onChange={handleChange}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="checkIn"
              className="border p-2 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="checkOut"
              className="border p-2 rounded"
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="number"
            name="guests"
            min="1"
            className="border p-2 rounded"
            value={form.guests}
            onChange={handleChange}
          />
          <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
