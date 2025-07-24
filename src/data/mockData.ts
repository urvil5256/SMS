import { Product, Customer, Supplier, PurchaseOrder, Sale, User, DashboardStats } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'A4 Copy Paper',
    category: 'Paper',
    sku: 'PP-A4-001',
    price: 12.99,
    cost: 8.50,
    stock: 250,
    minStock: 50,
    supplier: 'Paper Plus Ltd',
    description: 'High quality A4 copy paper, 80gsm',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '2',
    name: 'Ballpoint Pen - Blue',
    category: 'Writing',
    sku: 'WR-BP-002',
    price: 1.99,
    cost: 0.75,
    stock: 15,
    minStock: 25,
    supplier: 'Write Well Co',
    description: 'Smooth writing ballpoint pen in blue ink',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-18')
  },
  {
    id: '3',
    name: 'Stapler Heavy Duty',
    category: 'Office Equipment',
    sku: 'OE-ST-003',
    price: 24.99,
    cost: 15.00,
    stock: 45,
    minStock: 10,
    supplier: 'Office Pro Inc',
    description: 'Heavy duty stapler for office use',
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-22')
  },
  {
    id: '4',
    name: 'Notebook Spiral A5',
    category: 'Paper',
    sku: 'PP-NB-004',
    price: 5.99,
    cost: 3.20,
    stock: 120,
    minStock: 30,
    supplier: 'Paper Plus Ltd',
    description: 'A5 spiral notebook with 200 pages',
    createdAt: new Date('2024-01-14'),
    updatedAt: new Date('2024-01-21')
  }
];

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'ABC Corporation',
    email: 'orders@abccorp.com',
    phone: '+1-555-0123',
    address: '123 Business Ave',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    totalOrders: 15,
    totalSpent: 2450.75,
    status: 'active',
    createdAt: new Date('2024-01-01')
  },
  {
    id: '2',
    name: 'XYZ School District',
    email: 'procurement@xyzschool.edu',
    phone: '+1-555-0456',
    address: '456 Education Blvd',
    city: 'Boston',
    state: 'MA',
    zipCode: '02101',
    totalOrders: 8,
    totalSpent: 1890.25,
    status: 'active',
    createdAt: new Date('2024-01-05')
  }
];

export const mockSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'Paper Plus Ltd',
    email: 'sales@paperplus.com',
    phone: '+1-555-7890',
    address: '789 Supply Chain Dr',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60601',
    contactPerson: 'John Smith',
    paymentTerms: 'Net 30',
    status: 'active',
    createdAt: new Date('2023-12-01')
  },
  {
    id: '2',
    name: 'Write Well Co',
    email: 'orders@writewell.com',
    phone: '+1-555-3456',
    address: '321 Pen Street',
    city: 'Detroit',
    state: 'MI',
    zipCode: '48201',
    contactPerson: 'Sarah Johnson',
    paymentTerms: 'Net 15',
    status: 'active',
    createdAt: new Date('2023-11-15')
  }
];

export const mockPurchaseOrders: PurchaseOrder[] = [
  {
    id: '1',
    orderNumber: 'PO-2024-001',
    supplierId: '1',
    supplierName: 'Paper Plus Ltd',
    items: [
      {
        id: '1',
        productId: '1',
        productName: 'A4 Copy Paper',
        quantity: 100,
        unitPrice: 8.50,
        totalPrice: 850.00
      }
    ],
    status: 'approved',
    totalAmount: 850.00,
    orderDate: new Date('2024-01-20'),
    expectedDate: new Date('2024-01-27'),
    createdBy: 'admin@company.com'
  }
];

export const mockSales: Sale[] = [
  {
    id: '1',
    invoiceNumber: 'INV-2024-001',
    customerId: '1',
    customerName: 'ABC Corporation',
    items: [
      {
        id: '1',
        productId: '1',
        productName: 'A4 Copy Paper',
        quantity: 20,
        unitPrice: 12.99,
        totalPrice: 259.80
      },
      {
        id: '2',
        productId: '2',
        productName: 'Ballpoint Pen - Blue',
        quantity: 50,
        unitPrice: 1.99,
        totalPrice: 99.50
      }
    ],
    status: 'completed',
    totalAmount: 359.30,
    discount: 0,
    tax: 35.93,
    finalAmount: 395.23,
    saleDate: new Date('2024-01-22'),
    paidDate: new Date('2024-01-22'),
    createdBy: 'staff@company.com'
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@company.com',
    role: 'admin',
    status: 'active',
    lastLogin: new Date('2024-01-23'),
    createdAt: new Date('2023-12-01')
  },
  {
    id: '2',
    name: 'Manager User',
    email: 'manager@company.com',
    role: 'manager',
    status: 'active',
    lastLogin: new Date('2024-01-22'),
    createdAt: new Date('2023-12-15')
  }
];

export const mockDashboardStats: DashboardStats = {
  totalRevenue: 15750.50,
  totalOrders: 125,
  totalProducts: 450,
  lowStockProducts: 12,
  pendingOrders: 8,
  activeCustomers: 35,
  revenueGrowth: 12.5,
  orderGrowth: 8.3
};

export const mockRevenueData = [
  { month: 'Jan', revenue: 12000, orders: 85 },
  { month: 'Feb', revenue: 14500, orders: 92 },
  { month: 'Mar', revenue: 13800, orders: 88 },
  { month: 'Apr', revenue: 16200, orders: 110 },
  { month: 'May', revenue: 15750, orders: 105 },
  { month: 'Jun', revenue: 18900, orders: 125 }
];

export const mockTopProducts = [
  { name: 'A4 Copy Paper', sales: 1250, revenue: 16237.50 },
  { name: 'Ballpoint Pen - Blue', sales: 980, revenue: 1950.20 },
  { name: 'Notebook Spiral A5', sales: 560, revenue: 3354.40 },
  { name: 'Stapler Heavy Duty', sales: 180, revenue: 4498.20 }
];