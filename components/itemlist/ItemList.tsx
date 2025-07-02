'use client';
import { useState } from 'react';

type Item = { id: string; title: string };

const ItemList = () => {
  const [items, setItems] = useState<Item[]>([
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ]);

  const [success, setSuccess] = useState<string | null>(null);

  const deleteItem = async (id: string) => {
    const res = await fetch(`/api/items/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      setItems((prev) => prev.filter((item) => item.id !== id));
      setSuccess('Deleted successfully ✅');
      setTimeout(() => setSuccess(null), 3000);
    }
  };

  return (
    <>
      {success && (
        <div className="fixed top-0 w-full text-center bg-green-500 text-white px-4 py-2.5 rounded shadow z-50">
          {success}
        </div>
      )}
    <div className="max-w-7xl mx-auto">
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded p-4 flex justify-between items-center"
          >
            <span>{item.title}</span>
            <button
              onClick={() => deleteItem(item.id)}
              className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ItemList;
