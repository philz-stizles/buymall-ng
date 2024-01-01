import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

type CartItem = {
  product: Product;
  amount: number;
  quantity: number;
};

type Cart = {
  items: CartItem[];
  totalAmount: number;
};

const initialCart: Cart = {
  items: [],
  totalAmount: 0,
};
initialCart;
export class CartService {
  // cart = new BehaviorSubject<Cart>(initialCart);
  cart = initialCart;

  add(product: Product) {
    const existingProduct = this.cart.items.findIndex(
      (item) => item.product.id === product.id
    );
  }

  remove(cart: Cart) {}

  clear(cart: Cart) {}
}
