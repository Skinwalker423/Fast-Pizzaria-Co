export type CartItemProps = {
  addIngredients: string[];
  name: string;
  pizzaId: number;
  quantity: number;
  removeIngredients: string[];
  totalPrice: number;
  unitPrice: number;
};

export type OrderItem = {
  id: string;
  status: string;
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: Date;
  phone: string;
  cart: CartItemProps[];
};

export type ConfirmedOrder = {
  address: string;
  cart: CartItemProps[];
  createdAt: Date;
  customer: string;
  estimatedDelivery: string;
  id: string;
  orderPrice: 60;
  phone: string;
  priority: true;
  priorityPrice: number;
  status: string;
};

export type UpdateOrder = {
  name?: string;
  quantity?: number;
  unitPrice?: number;
  totalPrice?: number;
};

export type MenuItem = {
  id: string;
  imageUrl: string;
  name: string;
  soldOut: boolean;
  unitPrice: number;
  ingredients: [];
};

export type MenuData = MenuItem[];
