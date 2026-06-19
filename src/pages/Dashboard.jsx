import { useState, useEffect } from 'react';
import AssetForm from '../components/AssetForm';
import AssetList from '../components/AssetList';

export default function Dashboard() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('assetForgeData');
    if (savedData) {
      setAssets(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('assetForgeData', JSON.stringify(assets));
  }, [assets]);

  const handleAdd = (newAsset) => {
    setAssets([newAsset, ...assets]);
  };

  const handleDelete = (id) => {
    setAssets(assets.filter(asset => asset.id !== id));
  };

  const handleUpdateStatus = (id, newStatus) => {
    setAssets(assets.map(asset => 
      asset.id === id ? { ...asset, status: newStatus } : asset
    ));
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <div className="mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-bold text-white tracking-tight">AssetForge Yönetim Paneli</h1>
        <p className="text-zinc-400 mt-2">Dijital Varlık ve Üretim Takip Sistemi</p>
      </div>

      <AssetForm onAdd={handleAdd} />
      
      <div>
        <h2 className="text-xl font-semibold mb-4 text-white">Sistemdeki Varlıklar</h2>
        <AssetList 
          assets={assets} 
          onDelete={handleDelete} 
          onUpdateStatus={handleUpdateStatus} 
        />
      </div>
    </div>
  );
}