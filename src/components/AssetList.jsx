export default function AssetList({ assets, onDelete, onUpdateStatus }) {
  if (assets.length === 0) {
    return <p className="text-zinc-500">Henüz sisteme kayıtlı bir varlık bulunmuyor.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {assets.map((asset) => (
        <div key={asset.id} className="flex justify-between items-center p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
          <div>
            <h3 className="text-lg font-medium text-white">{asset.name}</h3>
            <span className="text-xs text-zinc-400 bg-zinc-800 px-2 py-1 rounded mt-1 inline-block">
              Kategori: {asset.category}
            </span>
          </div>
          
          <div className="flex gap-3 items-center">
            <select 
              value={asset.status}
              onChange={(e) => onUpdateStatus(asset.id, e.target.value)}
              className="bg-zinc-950 border border-zinc-700 text-sm p-2 rounded text-zinc-300 focus:outline-none"
            >
              <option value="Tasarlanıyor">Tasarlanıyor</option>
              <option value="Onay Bekliyor">Onay Bekliyor</option>
              <option value="Tamamlandı">Tamamlandı</option>
            </select>
            
            <button 
              onClick={() => onDelete(asset.id)}
              className="text-red-400 hover:text-red-300 text-sm font-medium border border-red-900/50 bg-red-900/20 px-3 py-2 rounded transition-colors"
            >
              Arşivle (Sil)
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}