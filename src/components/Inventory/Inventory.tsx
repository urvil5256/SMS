import React from 'react';
import ProductTable from './ProductTable';

const Inventory: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Inventory Management</h2>
        <p className="text-gray-600">Manage your product inventory, track stock levels, and monitor product performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">450</div>
            <div className="text-sm text-gray-600">Total Products</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">438</div>
            <div className="text-sm text-gray-600">In Stock</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">12</div>
            <div className="text-sm text-gray-600">Low Stock</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">$125,450</div>
            <div className="text-sm text-gray-600">Total Value</div>
          </div>
        </div>
      </div>

      <ProductTable />
    </div>
  );
};

export default Inventory;