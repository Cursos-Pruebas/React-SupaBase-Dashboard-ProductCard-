import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import './AdminPanel.css'; // Asegurate de tener este CSS al lado

const AdminPanel = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    imagen_url: '',
    is_new: false
  });
  const [file, setFile] = useState(null);
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (!error) setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = product.imagen_url;

    if (file) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase
        .storage
        .from('product-images')
        .upload(filePath, file);

      if (uploadError) {
        alert('Error al subir la imagen: ' + uploadError.message);
        return;
      }

      const { data } = supabase
        .storage
        .from('product-images')
        .getPublicUrl(filePath);

      imageUrl = data.publicUrl;
    }

    const action = isEditing
  ? supabase.from('products').update({
      name: product.name,
      description: product.description,
      price: parseFloat(product.price),
      imagen_url: imageUrl,
      is_new: product.is_new
    }).eq('id', product.id)
  : (() => {
      // Excluimos el campo `id` del producto antes de insertarlo para evitar enviar un `null`
      const {  ...newProduct } = product;
      return supabase.from('products').insert([{
        ...newProduct,
        price: parseFloat(product.price),
        imagen_url: imageUrl
      }]);
    })();


    const { error } = await action;

    if (error) {
      alert('Error al guardar: ' + error.message);
    } else {
      alert(isEditing ? '¡Producto actualizado!' : '¡Producto guardado!');
      resetForm();
      fetchProducts();
    }
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (!error) {
      alert('Producto eliminado');
      fetchProducts();
    }
  };

  const handleEdit = (prod) => {
    setProduct({ ...prod });
    setIsEditing(true);
    setFile(null);
    window.scrollTo(0, 0);
  };

  const resetForm = () => {
    setProduct({
      id: null,
      name: '',
      description: '',
      price: '',
      imagen_url: '',
      is_new: false
    });
    setFile(null);
    setIsEditing(false);
  };

  return (
    <div className="admin-panel">
      <h2>{isEditing ? 'Editar Producto' : 'Cargar Producto'}</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <input type="text" placeholder="Nombre" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} required />
        <input type="number" placeholder="Precio" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} required />
        <textarea placeholder="Descripción" value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} required />
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        <label>
          <input type="checkbox" checked={product.is_new} onChange={(e) => setProduct({ ...product, is_new: e.target.checked })} />
          ¿Producto nuevo?
        </label>
        <div className="form-buttons">
          <button type="submit">{isEditing ? 'Actualizar' : 'Guardar'}</button>
          {isEditing && <button type="button" className="cancel" onClick={resetForm}>Cancelar</button>}
        </div>
      </form>

      <h2>Productos Cargados</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Nuevo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.id.slice(0, 8)}...</td>
              <td>{prod.name}</td>
              <td>${prod.price}</td>
              <td><img src={prod.imagen_url} alt={prod.name} className="preview-img" /></td>
              <td>{prod.is_new ? '✅' : '❌'}</td>
              <td>
                <button onClick={() => handleEdit(prod)}>Editar</button>
                <button className="delete" onClick={() => handleDelete(prod.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
