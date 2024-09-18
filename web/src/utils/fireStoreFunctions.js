import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from "../services/firebase";
import { v4 as uuidv4 } from 'uuid';

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
    console.log('Carrinho salvo com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar o carrinho:', error);
  }
};

export const saveFinishedOrderFirestore = async (cartItems) => {
  try {
    const orderId = uuidv4();
    const newOrder = doc(db, 'orders', orderId); 
    await setDoc(newOrder, { items: cartItems }, { merge: true });
    console.log('Pedido salvo com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar o pedido:', error);
  }
};