import { useState } from "react";
import ArtistItem from "../components/ArtistItem";

const ConcertHall = () => {
  const [artists, setArtists] = useState([]);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !genre) return;

    if (editingId) {
      setArtists(
        artists.map((artist) =>
          artist.id === editingId
            ? { ...artist, name, genre }
            : artist
        )
      );
      setEditingId(null);
    } else {
      setArtists([
        ...artists,
        { id: Date.now(), name, genre },
      ]);
    }

    setName("");
    setGenre("");
  };

  const handleDelete = (id) => {
    setArtists(artists.filter((artist) => artist.id !== id));
  };

  const handleEdit = (artist) => {
    setName(artist.name);
    setGenre(artist.genre);
    setEditingId(artist.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center pt-16 px-4">
      <div className="w-full max-w-lg">

        {/* BAŞLIK */}
        <h1 className="text-3xl font-bold text-center text-white mb-10 tracking-wide">
          🎤 Konser Sanatçı Yönetimi
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg mb-10"
        >
          <input
            type="text"
            placeholder="Sanatçı adı"
            className="w-full mb-3 px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Müzik türü"
            className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition"
          >
            {editingId ? "Güncelle" : "Sanatçı Ekle"}
          </button>
        </form>

        {/* LİSTE */}
        <div className="space-y-4">
          {artists.length === 0 && (
            <p className="text-center text-gray-400">
              Henüz sanatçı eklenmedi.
            </p>
          )}

          {artists.map((artist) => (
            <ArtistItem
              key={artist.id}
              artist={artist}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ConcertHall;
