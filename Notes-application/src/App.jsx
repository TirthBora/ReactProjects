import React, { useState, useEffect } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !details) return;

    const newNote = {
      id: Date.now(),
      title,
      details,
    };

    setNotes([...notes, newNote]);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Antonio:wght@400;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Space Mono', monospace;
          background: #0a0a0a;
          color: #fff;
          overflow-x: hidden;
        }

        /* Animated grid background */
        @keyframes gridPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.08; }
        }

        .grid-bg {
          position: fixed;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          animation: gridPulse 8s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        .main-container {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 1024px) {
          .main-container {
            flex-direction: row;
          }
        }

        /* Form section */
        .form-section {
          position: relative;
          padding: 3rem 2rem;
          width: 100%;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 100%);
        }

        @media (min-width: 1024px) {
          .form-section {
            width: 50%;
            border-right: 2px solid rgba(0, 255, 255, 0.3);
          }
        }

        .form-title {
          font-family: 'Antonio', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #fff 0%, #00ffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .form-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards;
        }

        /* Input styling */
        .input-base {
          width: 100%;
          padding: 1rem 1.25rem;
          background: rgba(20, 20, 30, 0.8);
          border: 2px solid rgba(100, 100, 120, 0.3);
          border-radius: 0;
          color: #fff;
          font-family: 'Space Mono', monospace;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(10px);
        }

        .input-base::placeholder {
          color: rgba(255, 255, 255, 0.3);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }

        .input-base:focus {
          border-color: #00ffff;
          background: rgba(0, 255, 255, 0.05);
          box-shadow: 
            0 0 20px rgba(0, 255, 255, 0.3),
            inset 0 0 20px rgba(0, 255, 255, 0.05);
          transform: translateY(-2px);
        }

        .textarea-base {
          height: 180px;
          resize: none;
          font-family: 'Space Mono', monospace;
        }

        /* Button styling */
        .btn-add {
          position: relative;
          width: 100%;
          padding: 1.25rem;
          background: transparent;
          border: 3px solid #00ffff;
          color: #00ffff;
          font-family: 'Antonio', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .btn-add::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #00ffff;
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: -1;
        }

        .btn-add:hover {
          color: #0a0a0a;
          box-shadow: 
            0 0 30px rgba(0, 255, 255, 0.6),
            inset 0 0 30px rgba(0, 255, 255, 0.2);
          transform: translateY(-3px);
        }

        .btn-add:hover::before {
          transform: translateX(0);
        }

        .btn-add:active {
          transform: translateY(-1px);
        }

        /* Notes section */
        .notes-section {
          position: relative;
          padding: 3rem 2rem;
          width: 100%;
          background: #0a0a0a;
        }

        @media (min-width: 1024px) {
          .notes-section {
            width: 50%;
          }
        }

        .notes-header {
          font-family: 'Antonio', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin-bottom: 2rem;
          color: #00ffff;
          text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
          animation: slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .notes-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          max-height: 85vh;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        /* Custom scrollbar */
        .notes-grid::-webkit-scrollbar {
          width: 8px;
        }

        .notes-grid::-webkit-scrollbar-track {
          background: rgba(20, 20, 30, 0.5);
        }

        .notes-grid::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 255, 0.3);
          border-radius: 0;
        }

        .notes-grid::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 255, 0.5);
        }

        .empty-state {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Note card */
        @keyframes noteAppear {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .note-card {
          position: relative;
          width: 280px;
          min-height: 240px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 2px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: noteAppear 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .note-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00ffff, #ff00ff);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .note-card:hover {
          border-color: rgba(0, 255, 255, 0.5);
          transform: translateY(-5px) scale(1.02);
          box-shadow: 
            0 8px 30px rgba(0, 0, 0, 0.7),
            0 0 40px rgba(0, 255, 255, 0.2);
        }

        .note-card:hover::before {
          opacity: 1;
        }

        .note-title {
          font-family: 'Antonio', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          color: #fff;
          word-break: break-word;
        }

        .note-details {
          font-size: 0.85rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1rem;
          word-break: break-word;
        }

        .btn-delete {
          width: 100%;
          padding: 0.75rem;
          background: transparent;
          border: 2px solid #ff0066;
          color: #ff0066;
          font-family: 'Antonio', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .btn-delete::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #ff0066;
          transform: translateY(100%);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: -1;
        }

        .btn-delete:hover {
          color: #fff;
          box-shadow: 0 0 20px rgba(255, 0, 102, 0.5);
        }

        .btn-delete:hover::before {
          transform: translateY(0);
        }
      `}</style>

      <div className="grid-bg"></div>
      
      <div className="main-container">
        <div className="form-section">
          <h1 className="form-title">New Note</h1>
          
          <form onSubmit={submitHandler} className="form-container">
            <input
              type="text"
              className="input-base"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="input-base textarea-base"
              placeholder="Write your thoughts..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />

            <button type="submit" className="btn-add">
              Add Note
            </button>
          </form>
        </div>

        <div className="notes-section">
          <h1 className="notes-header">Your Notes</h1>

          <div className="notes-grid">
            {notes.length === 0 ? (
              <p className="empty-state">No notes yet. Create one.</p>
            ) : (
              notes.map((note, index) => (
                <div
                  key={note.id}
                  className="note-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div>
                    <h2 className="note-title">{note.title}</h2>
                    <p className="note-details">{note.details}</p>
                  </div>

                  <button
                    onClick={() => deleteNote(note.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;