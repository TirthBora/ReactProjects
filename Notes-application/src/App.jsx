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
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={submitHandler}
        className="flex p-10 flex-col lg:w-1/2 gap-5"
      >
        <input
          type="text"
          className="px-5 py-2 w-full font-medium outline-none border-2 rounded"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="px-5 py-2 w-full font-medium outline-none h-32 border-2 rounded"
          placeholder="Write Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="bg-white font-medium text-black w-full px-5 py-2">
          Add Notes
        </button>
      </form>

      <div className="lg:border-l-2 lg:w-1/2 p-10">
        <h1 className="text-3xl font-bold">Your Notes:</h1>

        <div className="flex flex-wrap overflow-auto h-[85%] gap-8 mt-5">
          {notes.length === 0 ? (
            <p className="text-gray-400">No notes yet...</p>
          ) : (
            notes.map((note) => (
              <div
                key={note.id}
                className="w-60 min-h-[220px] bg-white text-black rounded-2xl p-5 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <h2 className="font-bold text-lg">{note.title}</h2>

                  <p className="text-sm mt-2 break-words">{note.details}</p>
                </div>

                <button
                  onClick={() => deleteNote(note.id)}
                  className="bg-red-500 text-white w-full py-2 rounded-lg mt-4 hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
