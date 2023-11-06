import axios from "axios";

export const formatPrice = (price: number ) => {
    const priceInUSD = price * 0.036;
    const formattedPrice = priceInUSD.toFixed(2);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return formatter.format(parseFloat(formattedPrice));
};

export const getCartItemsFromLocalStorage = () => {
    // Retrieve cart items from localStorage and parse the JSON string to an array
    return JSON.parse(localStorage.getItem('cartItems') || '[]');
};

export const fetchData = async () => {
    const response = await axios.get('http://localhost:4000/api/items');
    return response.data;
};