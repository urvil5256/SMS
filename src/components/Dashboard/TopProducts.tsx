import React from 'react';
import { mockTopProducts } from '../../data/mockData';

const TopProducts: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
        <p className="text-sm text-gray-600">Best performing products this month</p>
      </div>
      <div className="space-y-4">
        {mockTopProducts.map((product, index) => (
          <div key={product.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                {index + 1}
              </div>
              <div>
                <p className="font-medium text-gray-900">{product.name}</p>
                <p className="text-sm text-gray-600">{product.sales} units sold</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">${product.revenue.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;