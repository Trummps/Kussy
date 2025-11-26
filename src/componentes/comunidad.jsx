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

  const [imagen, setImagen] = useState(null); // Estado para la imagen del comprobante

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

  const handleImagen = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImagen(reader.result);
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        setUserData({
          uid,
          email,
          nombre: displayName || "Usuario",
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
    return (
      <p className="text-center p-4 text-blue-400 text-lg animate-pulse">
        Cargando...
      </p>
    );

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 text-gray-900 dark:text-blue-50 font-sans space-y-7">
      {/* PERFIL */}
      <div className="bg-white dark:bg-blue-900/40 border border-blue-200/40 dark:border-blue-700/40 rounded-3xl p-7 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex flex-col items-center gap-4 transition-all">
        <img
          src={userData.foto}
          className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-blue-200 dark:border-blue-600"
        />
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-blue-700 dark:text-blue-200">
            Hola, {userData.nombre}
          </h1>
          <p className="text-blue-500 dark:text-blue-300 text-sm mt-1">{userData.email}</p>
        </div>
      </div>

      {/* EDITAR PERFIL */}
      <div className="bg-white dark:bg-blue-900/40 border border-blue-200/40 dark:border-blue-700/40 rounded-3xl p-7 shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-200">
          Personaliza tu perfil
        </h2>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Nuevo nombre"
            className="w-full border p-3 rounded-xl bg-blue-50 dark:bg-blue-800/40 focus:ring-2 ring-blue-400 outline-none"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />

          <input
            type="text"
            placeholder="URL de foto"
            className="w-full border p-3 rounded-xl bg-blue-50 dark:bg-blue-800/40 focus:ring-2 ring-blue-400 outline-none"
            value={nuevaFoto}
            onChange={(e) => setNuevaFoto(e.target.value)}
          />
        </div>

        <button
          onClick={actualizarPerfil}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow transition-all"
        >
          Guardar cambios
        </button>
      </div>

      {/* COMPROBANTE */}
      <div className="p-6 bg-sky-50 border border-sky-200 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold text-sky-800 mb-4">Adjuntar Comprobante</h2>

        <div className="flex flex-col items-center gap-4">
          <label className="cursor-pointer bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-xl shadow-md transition text-lg">
            Seleccionar imagen
            <input type="file" accept="image/*" className="hidden" onChange={handleImagen} />
          </label>

          {imagen && (
            <img
              src={imagen}
              alt="comprobante"
              className="w-48 h-48 object-cover rounded-xl shadow-lg border border-sky-300"
            />
          )}
        </div>
      </div>

      {/* CREAR POST */}
      <div className="bg-white dark:bg-blue-900/40 border border-blue-200/40 dark:border-blue-700/40 rounded-3xl p-7 shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-200">
          Crear publicación
        </h2>

        <textarea
          placeholder="Comparte algo..."
          className="w-full border p-3 rounded-2xl bg-blue-50 dark:bg-blue-800/40 focus:ring-2 ring-blue-400 outline-none resize-none"
          rows={3}
          value={contenidoPost}
          onChange={(e) => setContenidoPost(e.target.value)}
        />

        <button
          onClick={crearPost}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow transition-all"
        >
          Publicar
        </button>
      </div>

      {/* POSTS */}
      <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-200">
        Publicaciones
      </h2>

      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white dark:bg-blue-900/40 border border-blue-200/40 dark:border-blue-700/40 rounded-3xl p-6 shadow space-y-5"
        >
          {/* Autor */}
          <div className="flex items-center gap-3">
            <img
              src={post.autorFoto}
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-200 dark:border-blue-600"
            />
            <div className="leading-tight">
              <p className="font-semibold text-blue-800 dark:text-blue-100">
                {post.autor}
              </p>
              <p className="text-blue-500 dark:text-blue-300 text-xs">
                {formatearFecha(post.fecha)}
              </p>
            </div>
          </div>

      {/* Contenido */}
{editandoID === post.id ? (
  <div className="space-y-3">
    

    {/* Subir imagen */}
    <div className="flex flex-col items-center gap-4">
      <label className="cursor-pointer bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-xl shadow-md transition text-lg">
        Seleccionar imagen
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImagen} // Función que guarda la imagen en estado
        />
      </label>

      {imagen && (
        <img
          src={imagen}
          alt="previsualización"
          className="w-48 h-48 object-cover rounded-xl shadow-lg border border-sky-300"
        />
      )}
    </div>

    {/* Botones */}
    <div className="flex gap-2">
      <button
        onClick={() => guardarEdicion(post.id)}
        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl"
      >
        Guardar
      </button>
      <button
        onClick={() => setEditandoID(null)}
        className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-xl"
      >
        Cancelar
      </button>
    </div>
  </div>
) : (
  <div>
    {/* Mostrar contenido de texto */}
    <p className="text-blue-900 dark:text-blue-50 leading-relaxed whitespace-pre-wrap">
      {post.contenido}
    </p>

    {/* Mostrar imagen si existe */}
    {post.imagen && (
      <img
        src={post.imagen}
        alt="post"
        className="w-48 h-48 object-cover rounded-xl shadow-lg border border-sky-300 mt-2"
      />
    )}
  </div>
)}

          {/* Botones */}
          {post.autorUid === userData.uid && editandoID !== post.id && (
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setEditandoID(post.id);
                  setNuevoContenido(post.contenido);
                }}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl"
              >
                Editar
              </button>
              <button
                onClick={() => eliminarPost(post.id)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl"
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
