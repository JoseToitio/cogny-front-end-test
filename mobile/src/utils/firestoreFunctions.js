import { db } from '../services/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { products } from './productsData';


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

    console.log("Products added successfully!");
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
