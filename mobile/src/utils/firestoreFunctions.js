import { db } from '../services/firebase';
import { collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore';
import { products } from './productsData';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';

export const addProductsToFirestore = async () => {
  try {
    const productsCollection = collection(db, 'products');
    products.forEach(async (product) => {
      await addDoc(productsCollection, {
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
      });
    });
  } catch (e) {
    console.error(e);
  }
};

export const getProductsFromFirestore = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const productsList = [];
    querySnapshot.forEach((doc) => {
      productsList.push({ id: doc.id, ...doc.data() });
    });
    return productsList;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const saveCartToFirestore = async (cartItems) => {
  try {
    const newCart = doc(db, 'cart', 'defaultCart');
    await setDoc(newCart, { items: cartItems }, { merge: true });
  } catch (error) {
    console.error('Erro ao salvar o carrinho:', error);
  }
};

export const saveFinishedOrderFirestore = async (cartItems) => {
  try {
    const orderId = uuidv4();
    const newOrder = doc(db, 'orders', orderId);
    await setDoc(newOrder, { items: cartItems }, { merge: true });
  } catch (error) {
    console.error('Erro ao salvar o pedido:', error);
  }
};
