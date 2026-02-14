const ArtistItem = ({ artist, onDelete, onEdit }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-xl p-4 flex justify-between items-center shadow-md hover:shadow-xl transition">
      
      {/* SOL TARAF */}
      <div>
        <p className="text-lg font-semibold text-white">
          🎵 {artist.name}
        </p>

        <span className="inline-block mt-1 px-3 py-1 text-sm rounded-full bg-purple-600/20 text-purple-300 border border-purple-500">
          Tür: {artist.genre}
        </span>
      </div>

      {/* SAĞ TARAF BUTONLAR */}
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(artist)}
          className="px-3 py-1 text-sm rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500 hover:bg-blue-600/40 transition"
        >
          Düzenle
        </button>

        <button
          onClick={() => onDelete(artist.id)}
          className="px-3 py-1 text-sm rounded-lg bg-red-600/20 text-red-300 border border-red-500 hover:bg-red-600/40 transition"
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default ArtistItem;
