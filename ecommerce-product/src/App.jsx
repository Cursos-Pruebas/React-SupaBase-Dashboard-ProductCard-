import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from './components/productcard/ProductCard';
import AdminPanel from './components/AdminPanel/AdminPanel';
import { supabase } from './lib/supabaseClient';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) console.error('Error al traer productos:', error);
      else setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: '2rem' }}>
              <h2>Productos</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {products.map((prod) => (
                  <ProductCard key={prod.id} productId={prod.id} />
                ))}
              </div>
            </div>
          }
        />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
