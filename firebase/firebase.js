import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2lVdQcTgjrczj4Sah8iMLEdAuC9SSGSo",
  authDomain: "blessed-calcos.firebaseapp.com",
  projectId: "blessed-calcos",
  storageBucket: "blessed-calcos.appspot.com",
  messagingSenderId: "426540625149",
  appId: "1:426540625149:web:4045ef21425a23abd2e294",
};

const app = initializeApp(firebaseConfig);
const bd = getFirestore(app);
const storage = getStorage();

export async function fetchCalcos() {
  let calcos = [];
  try {
    const calcosRef = collection(bd, "calcos");
    const querySnapshot = await getDocs(calcosRef);
    calcos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching calcos:", error);
  }
  return calcos;
}

export async function actualizarCalco(calcoID, imagen, nombre, categoria) {
  let nuevaURL = "";

  try {
    if (imagen) {
      const nombreArchivo = nombre + "_" + new Date().getTime();
      const storageRef = ref(storage, nombreArchivo);
      await uploadBytes(storageRef, imagen);
      nuevaURL = await getDownloadURL(storageRef);
    } else {
      console.log("No se ha seleccionado ninguna imagen.");
    }
  } catch (error) {
    console.error("Error al subir la imagen:", error);
  }

  const collectionName = "calcos";
  const idDoc = calcoID;

  const docRef = doc(bd, collectionName, idDoc);

  const newData = {
    nombre: nombre,
    categoria: categoria,
    imagen: nuevaURL,
  };

  try {
    await updateDoc(docRef, newData);
    console.log("actualizado exitosamente");
  } catch (error) {
    console.log(error);
  }
}

export async function cargarCalco(nombre, categoria, imagen) {
  let nuevaURL = "";
  try {
    const nombreArchivo = nombre + "_" + new Date().getTime();
    const storageRef = ref(storage, nombreArchivo);
    await uploadBytes(storageRef, imagen);
    nuevaURL = await getDownloadURL(storageRef);
  } catch (error) {
    console.error("Error al subir la imagen:", error);
  }

  const newDoc = await addDoc(collection(bd, "calcos"), {
    nombre: nombre,
    categoria: categoria,
    imagen: nuevaURL,
  });
  console.log("el documento tiene el ID: " + newDoc.id);
}

export async function eliminarCalco(calcoID) {
  try {
    const collectionName = "calcos";
    const idDoc = calcoID;

    const docRef = doc(bd, collectionName, idDoc);

    await deleteDoc(docRef);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchOfertas() {
  let ofertas = [];
  try {
    const ofertasRef = collection(bd, "ofertas");
    const querySnapshot = await getDocs(ofertasRef);
    ofertas = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
  } catch (error) {
    console.log(error);
  }
  return ofertas;
}

export async function cargarOFerta(ofertaString, categoriaString) {
  const newDoc = await addDoc(collection(bd, "ofertas"), {
    nombre: ofertaString,
    categoria: categoriaString,
  });
}

export default bd;
