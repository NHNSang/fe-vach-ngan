import { message } from 'antd';
import { createContext, useContext, useState, useEffect } from 'react';

const ShoppingContext = createContext();

export const useShoppingContext = () => {
    return useContext(ShoppingContext);
}

export const ShoppingContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const jsonCartData = localStorage.getItem('shopping_cart');
        return jsonCartData ? JSON.parse(jsonCartData) : [];
    });

    useEffect(() => {
        localStorage.setItem('shopping_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);

    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

    const increaseQty = (id) => {
        console.log("increaseQty => ", id);
        const currentCartItem = cartItems.find(item => item.id === id);
        if (currentCartItem) {
            const newItems = cartItems.map(item => {
                if (item.id === id) {
                    return { ...item, qty: item.qty + 1 };
                } else {
                    return item;
                }
            });
            setCartItems(newItems);
        }
    }

    const decreaseQty = (id) => {
        console.log("decreaseQty => ", id);
        const currentCartItem = cartItems.find(item => item.id === id);
        if (currentCartItem) {
            if (currentCartItem.qty === 1) {
                removeCartItem(id);
            } else {
                const newItems = cartItems.map(item => {
                    if (item.id === id) {
                        return { ...item, qty: item.qty - 1 };
                    } else {
                        return item;
                    }
                });
                setCartItems(newItems);
            }
        }
    }

    const addCartItem = (product) => {
        console.log("product=> ", product);
        if (product) {
            const currentCartItem = cartItems.find(item => item.id === product.id);
            if (currentCartItem) {
                const newItems = cartItems.map(item => {
                    if (item.id === product.id) {
                        return { ...item, qty: item.qty + 1 };
                    } else {
                        return item;
                    }
                });
            setCartItems(newItems);
            message.success('Bạn đã thêm thành công');

            } else {
                const newItem = { ...product, qty: 1 };
                setCartItems([...cartItems, newItem]);
            }
        }
    }
    
    const removeCartItem = (id) => {
        console.log("removeCartItem => ", id);
        const currentCartItemIndex = cartItems.findIndex(item => item.id === id);
        const newItems = [...cartItems];
        if (currentCartItemIndex !== -1) { // Kiểm tra xem sản phẩm có tồn tại trong giỏ hàng không
            newItems.splice(currentCartItemIndex, 1);
            setCartItems(newItems);
            message.error('Sản phẩm đã được xoá khỏi giỏ hàng');
        } else {
            message.error('Không thể xoá sản phẩm khỏi giỏ hàng');
        }
    }

    const clearCart = () => {
        console.log("clearCart => ");
        setCartItems([]);
    }

    return (
        <ShoppingContext.Provider value={{ cartItems, cartQty, totalPrice, increaseQty, decreaseQty, addCartItem, removeCartItem, clearCart }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export default ShoppingContext;
