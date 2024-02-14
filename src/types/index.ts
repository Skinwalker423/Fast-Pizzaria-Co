export type Order = {
  pizzaId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
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
