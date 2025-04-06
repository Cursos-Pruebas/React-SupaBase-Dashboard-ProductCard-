// src/components/ProductCard/ProductCard.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import styles from './ProductCard.module.css';

const ProductCard = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single();

      if (!error) setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <div>Cargando...</div>;
  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className={styles.productCard}>
      {product.is_new && <span className={styles.badge}>Nuevo</span>}
      <h2 className={styles.productTitle}>{product.name}</h2>
      <img 
        src={product.imagen_url} 
        alt={product.name}
        className={styles.productImage}
      />
      <p className={styles.description}>{product.description}</p>
      <div className={styles.pricing}>
        <span className={styles.currentPrice}>${product.price}</span>
      </div>
      <button className={styles.addButton}>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;