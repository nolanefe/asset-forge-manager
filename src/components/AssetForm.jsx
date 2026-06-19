import { useState } from 'react';

export default function AssetForm({ onAdd }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('3D Model');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    onAdd({ id: Date.now(), name, category, status: 'Tasarlanıyor' });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Yeni Varlık Ekle</h2>
      <div className="flex gap-4">
        <input 
          type="text" 
          placeholder="Varlık Adı (Örn: Ana Karakter Kılıcı)" 
          className="flex-1 bg-zinc-950 border border-zinc-700 p-3 rounded text-white focus:outline-none focus:border-zinc-500"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <select 
          className="bg-zinc-950 border border-zinc-700 p-3 rounded text-white focus:outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="3D Model">3D Model</option>
          <option value="Ses Dosyası">Ses Dosyası</option>
          <option value="Arayüz (UI)">Arayüz (UI)</option>
        </select>
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded transition-colors">
          Kayıt Et
        </button>
      </div>
    </form>
  );
}