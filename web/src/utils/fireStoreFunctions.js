import { collection, getDocs } from 'firebase/firestore';
import { db } from "../services/firebase";


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