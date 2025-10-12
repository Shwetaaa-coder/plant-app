// src/components/PlantJournal.js
import React, { useState, useEffect } from 'react';

const PlantJournal = () => {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('plantJournalEntries');
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState({
    plantName: '',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.plantName || !form.date) {
      alert('Please enter plant name and date.');
      return;
    }
    const newEntry = {
      id: Date.now(),
      ...form
    };
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('plantJournalEntries', JSON.stringify(updatedEntries));
    setForm({ plantName: '', date: '', notes: '' });
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '0 1rem', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <h1>My Plant Journal</h1>
      <p>Log your plant care and observations here.</p>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', marginBottom: '0.3rem' }}>
          Plant Name *
          <input
            type="text"
            name="plantName"
            value={form.plantName}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', boxSizing: 'border-box' }}
            required
          />
        </label>

        <label style={{ display: 'block', marginBottom: '0.3rem' }}>
          Date *
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', boxSizing: 'border-box' }}
            required
          />
        </label>

        <label style={{ display: 'block', marginBottom: '0.3rem' }}>
          Notes
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={4}
            style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
            placeholder="Add your observations or care details..."
          />
        </label>

        <button type="submit" style={{
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          padding: '0.7rem 1.5rem',
          cursor: 'pointer',
          borderRadius: 4,
          fontSize: '1rem'
        }}>
          Add Entry
        </button>
      </form>

      <h2>Entries</h2>
      {entries.length === 0 && <p>No journal entries yet.</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {entries.map(({ id, plantName, date, notes }) => (
          <li key={id} style={{
            background: '#f9f9f9',
            marginBottom: '1rem',
            padding: '1rem',
            borderRadius: 8,
            boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
          }}>
            <strong>{plantName}</strong> — <em>{date}</em>
            {notes && <p style={{ marginTop: '0.5rem', whiteSpace: 'pre-wrap' }}>{notes}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantJournal;
