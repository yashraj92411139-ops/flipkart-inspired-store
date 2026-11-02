import { createContext, useContext, useMemo, useState } from 'react';
import { categories, initialAddresses, initialOrders, products } from '../data/mockData';

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(['p-2', 'p-5']);
  const [searchTerm, setSearchTerm] = useState('');
  const [addresses, setAddresses] = useState(initialAddresses);
  const [orders, setOrders] = useState(initialOrders);
  const [user, setUser] = useState({
    name: 'Guest User',
    email: 'guest@shoply.store',
    isLoggedIn: false,
  });

  const cartItems = useMemo(
    () =>
      cart
        .map((item) => {
          const product = products.find((entry) => entry.id === item.productId);
          return product ? { ...product, quantity: item.quantity } : null;
        })
        .filter(Boolean),
    [cart],
  );

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = subtotal > 0 ? 99 : 0;
  const total = subtotal + shippingFee;

  const addToCart = (product, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((item) => item.productId === product.id);
      if (existing) {
        return current.map((item) =>
          item.productId === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }
      return [...current, { productId: product.id, quantity }];
    });
  };

  const updateCartQuantity = (productId, quantity) => {
    setCart((current) => {
      if (quantity <= 0) {
        return current.filter((item) => item.productId !== productId);
      }
      return current.map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      );
    });
  };

  const removeFromCart = (productId) => {
    setCart((current) => current.filter((item) => item.productId !== productId));
  };

  const toggleWishlist = (productId) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  };

  const loginUser = (payload) => {
    setUser({
      name: payload.name || 'Shoply User',
      email: payload.email,
      isLoggedIn: true,
    });
  };

  const logoutUser = () => {
    setUser({
      name: 'Guest User',
      email: 'guest@shoply.store',
      isLoggedIn: false,
    });
  };

  const signupUser = (payload) => {
    setUser({
      name: payload.name,
      email: payload.email,
      isLoggedIn: true,
    });
  };

  const addAddress = (newAddress) => {
    setAddresses((current) => [newAddress, ...current]);
  };

  const placeOrder = (shippingAddress) => {
    const orderItems = cartItems.map((item) => ({
      productId: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));

    const newOrder = {
      id: `ord-${Date.now()}`,
      status: 'Confirmed',
      total: total,
      itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
      date: new Date().toISOString().slice(0, 10),
      eta: '4-5 days',
      items: orderItems,
      address: shippingAddress,
    };

    setOrders((current) => [newOrder, ...current]);
    setCart([]);
    return newOrder;
  };

  const value = {
    products,
    categories,
    cart,
    cartItems,
    cartCount,
    wishlist,
    wishlistCount,
    subtotal,
    shippingFee,
    total,
    searchTerm,
    setSearchTerm,
    user,
    addresses,
    orders,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    toggleWishlist,
    loginUser,
    logoutUser,
    signupUser,
    addAddress,
    placeOrder,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
