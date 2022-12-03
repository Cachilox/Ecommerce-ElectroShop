import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);
const auth = getAuth(app)

const cargarBDD = async () => {
  const promise = await fetch("./json/productos.json");
  const productos = await promise.json();

  productos.forEach(async (prod) => {
    await addDoc(collection(database, "productos"), {
      idCategoria: prod.idCategoria,
      description: prod.description,
      name: prod.name,
      price: prod.price,
      stock: prod.stock,
      img: prod.img,
      img2: prod.img2,
      name2: prod.name2,
      model: prod.model,
      color: prod.color,
      processor: prod.processor,
      memory: prod.memory,
      primaryStorage: prod.primaryStorage,
      secondaryStorage: prod.secondaryStorage,
      graph: prod.graph,
      keyboard: prod.keyboard,
      screen: prod.screen,
      conector: prod.conector,
      wifi: prod.wifi,
      cam: prod.cam,
      battery: prod.battery,
      dimensions: prod.dimensions,
      weigth: prod.weigth,
      operatingSystem: prod.operatingSystem,
      warranty: prod.warranty
    });
  });
};

// READ PRODUCTO
const getProducts = async () => {
  const productos = await getDocs(collection(database, "productos"));
  const items = productos.docs.map(prod => {return  {id: prod.id, ...prod.data()}})
  return items;
};

const getProduct = async (id) =>  {
  const prod = await getDoc(doc(database, "productos", id))
  let item
  if (prod.data()) {
    item = {...prod.data(), id: prod.id}
  }else {
    item = "Producto no encontrado"
  }
  return item
}

// CREATE PRODUCTO

const createProduct = async (objProduct) => {
  const estado = await addDoc(collection(database, "productos"), {
    idCategoria: objProduct.idCategoria,
    description: objProduct.description,
    name: objProduct.name,
    price: objProduct.price,
    stock: objProduct.stock,
    img: objProduct.img,
    name2: objProduct.name2,
    model: objProduct.model,
    color: objProduct.color,
    processor: objProduct.processor,
    memory: objProduct.memory,
    primaryStorage: objProduct.primaryStorage,
    secondaryStorage: objProduct.secondaryStorage,
    graph: objProduct.graph,
    keyboard: objProduct.keyboard,
    screen: objProduct.screen,
    conector: objProduct.conector,
    wifi: objProduct.wifi,
    cam: objProduct.cam,
    battery: objProduct.battery,
    dimensions: objProduct.dimensions,
    weigth: objProduct.weigth,
    operatingSystem: objProduct.operatingSystem,
    warranty: objProduct.warranty
  })
  return estado
}

// UPDATE PRODUCTO

const updateProduct = async (id, info) => {
  const estado = await updateDoc(doc(database, "productos", id), info)
  return estado
}

// DELETE Producto
const deleteProduct = async(id) => {
  const state = await deleteDoc(doc(database, "productos", id))
  return state
}

// CREATE AND READ BUY ORDER


// const createPurchaseOrder = async (client, date, preTotal, items) => {
//   try {
//     const buyOrder = await addDoc(collection(database, "orders"), {
//       name: client.name,
//       email: client.email,
//       dni: client.dni,
//       address: client.address,
//       date: date,
//       totalPrice: preTotal,
//       items: items,
//     })
//     return buyOrder
//   } catch (error) {
//     console.error(error);
//   }
// }

const getOrderBuy = async (id) => {
  const item = await getDoc(doc(database, "orders", id))
  const buyOrder = {...item.data(), id: item.id}
  return buyOrder
}

export { cargarBDD, getProducts, getProduct, createProduct, updateProduct, deleteProduct, getOrderBuy, database, auth };
