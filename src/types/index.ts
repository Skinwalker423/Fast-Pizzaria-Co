export type CartItemProps = {
  addIngredients: string[];
  name: string;
  pizzaId: string;
  quantity: number;
  removeIngredients: string[];
  totalPrice: number;
  unitPrice: number;
};

export type OrderItem = {
  id: string;
  status: "preparing order" | "delivered order" | "en route";
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: Date;
  phone: string;
  cart: CartItemProps[];
  address: string;
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
  status: "preparing order" | "delivered order" | "en route";
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
