import { useEffect, useState, useCallback } from "react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

export default function Comunidad() {
  const auth = getAuth();

  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    foto: "",
    uid: "",
  });

  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaFoto, setNuevaFoto] = useState("");

  const [contenidoPost, setContenidoPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [cargando, setCargando] = useState(true);

  const [editandoID, setEditandoID] = useState(null);
  const [nuevoContenido, setNuevoContenido] = useState("");

  const formatearFecha = useCallback((fecha) => {
    if (!fecha) return "";
    const d = fecha.toDate();
    return d.toLocaleDateString("es-PE", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  // Obtener datos de usuario
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        setUserData({
          uid,
          email,
          nombre: displayName || "Usuario sin nombre",
          foto: photoURL || "user.webp",
        });
        setNuevoNombre(displayName || "");
        setNuevaFoto(photoURL || "");
      } else {
        setUserData({ nombre: "", email: "", foto: "", uid: "" });
      }
      setCargando(false);
    });
    return unsubscribe;
  }, []);

  // Escuchar posts
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("fecha", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  const actualizarPerfil = async () => {
    const user = auth.currentUser;
    if (!user) return alert("No hay un usuario activo");

    await updateProfile(user, {
      displayName: nuevoNombre || user.displayName,
      photoURL: nuevaFoto || user.photoURL,
    });

    setUserData((prev) => ({
      ...prev,
      nombre: nuevoNombre,
      foto: nuevaFoto,
    }));

    alert("Perfil actualizado");
  };

  const crearPost = async () => {
    if (!contenidoPost.trim()) return;

    await addDoc(collection(db, "posts"), {
      contenido: contenidoPost,
      fecha: serverTimestamp(),
      autor: userData.nombre,
      autorFoto: userData.foto,
      autorUid: userData.uid,
    });

    setContenidoPost("");
  };

  const guardarEdicion = async (id) => {
    await updateDoc(doc(db, "posts", id), { contenido: nuevoContenido });
    setEditandoID(null);
    setNuevoContenido("");
  };

  const eliminarPost = async (id) => {
    if (confirm("¿Deseas eliminar este post?")) {
      await deleteDoc(doc(db, "posts", id));
    }
  };

  if (cargando)
    return <p className="text-center p-4 text-blue-300 text-lg animate-pulse">Cargando datos...</p>;

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 text-gray-900 dark:text-blue-50 transition-all font-sans">
      {/* Perfil */}
      <div className="bg-gradient-to-tr from-blue-100/70 via-blue-200/50 to-blue-300/60 dark:from-blue-900/70 dark:via-blue-800/50 dark:to-blue-700/60 backdrop-blur-xl shadow-2xl rounded-3xl p-6 flex flex-col items-center mb-6 transform hover:scale-[1.05] transition-all duration-500 hover:shadow-blue-300/50">
        <img src={userData.foto} className="w-28 h-28 rounded-full object-cover mb-3 ring-4 ring-blue-200 dark:ring-blue-400 shadow-md" />
        <h1 className="text-3xl font-extrabold text-blue-700 dark:text-blue-200 mb-2 animate-pulse">Bienvenido a la comunidad</h1>
        <p className="text-blue-600 dark:text-blue-100 text-lg">Hola, <strong>{userData.nombre}</strong></p>
        <p className="text-blue-400 dark:text-blue-300 text-sm">{userData.email}</p>
      </div>

      {/* Editar perfil */}
      <div className="bg-gradient-to-tr from-blue-100/50 via-blue-200/30 to-blue-300/40 dark:from-blue-900/50 dark:via-blue-800/30 dark:to-blue-700/40 backdrop-blur-2xl shadow-xl rounded-3xl p-6 mb-6">
        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-4 animate-pulse">Editar perfil</h2>

        <input
          type="text"
          placeholder="Actualizar nombre"
          className="border p-3 rounded-xl w-full mb-3 bg-blue-50 dark:bg-blue-900"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="URL de nueva foto"
          className="border p-3 rounded-xl w-full mb-3 bg-blue-50 dark:bg-blue-900"
          value={nuevaFoto}
          onChange={(e) => setNuevaFoto(e.target.value)}
        />

        <button onClick={actualizarPerfil} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-xl transform hover:scale-105 transition-all">Guardar cambios</button>
      </div>

      {/* Crear post */}
      <div className="bg-gradient-to-tr from-blue-100/50 via-blue-200/30 to-blue-300/50 dark:from-blue-900/50 dark:via-blue-800/30 dark:to-blue-700/50 shadow-xl rounded-3xl p-6 mb-6">
        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-4 animate-pulse">Crear publicación</h2>

        <textarea
          placeholder="¿Qué estás pensando?"
          className="border p-3 rounded-2xl w-full mb-3 resize-none bg-blue-50 dark:bg-blue-900"
          value={contenidoPost}
          onChange={(e) => setContenidoPost(e.target.value)}
        />

        <button onClick={crearPost} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-xl transform hover:scale-105 transition-all">Publicar</button>
      </div>

      {/* Lista de posts */}
      <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-4 animate-pulse">Publicaciones</h2>

      {posts.map((post) => (
        <div key={post.id} className="bg-gradient-to-tr from-blue-100/50 via-blue-200/30 to-blue-300/50 dark:from-blue-900/50 dark:via-blue-800/30 dark:to-blue-700/50 shadow-xl rounded-3xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-3">
            <img src={post.autorFoto} className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-200 dark:ring-blue-400" />
            <div>
              <p className="font-bold text-blue-800 dark:text-blue-100">{post.autor}</p>
              <p className="text-blue-500 dark:text-blue-300 text-sm">{formatearFecha(post.fecha)}</p>
            </div>
          </div>

          {editandoID === post.id ? (
            <div>
              <textarea
                value={nuevoContenido}
                onChange={(e) => setNuevoContenido(e.target.value)}
                className="border p-3 rounded-2xl w-full mb-3 bg-blue-50 dark:bg-blue-900"
              />
              <div className="flex gap-3">
                <button onClick={() => guardarEdicion(post.id)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">Guardar</button>
                <button onClick={() => setEditandoID(null)} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-full">Cancelar</button>
              </div>
            </div>
          ) : (
            <p className="text-blue-900 dark:text-blue-50 mb-3 whitespace-pre-wrap">{post.contenido}</p>
          )}

          {post.autorUid === userData.uid && editandoID !== post.id && (
            <div className="flex gap-3 mt-3">
              <button
                onClick={() => {
                  setEditandoID(post.id);
                  setNuevoContenido(post.contenido);
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full"
              >
                Editar
              </button>

              <button
                onClick={() => eliminarPost(post.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
              >
                Eliminar
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
