import Link from 'next/link';
import styles from '../styles/ProductCard.module.css'; // 👈 1. Import CSS Module

// 💡 สร้าง Type (Interface) สำหรับข้อมูล
// (ในอนาคตควรแยกไฟล์นี้ไปที่ @/types/index.ts)
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  created_at: string;
}

export default function ProductCard({ product }: { product: Product }) {
  
  return (
    // 2. ใช้ styles.card กับ Component Link
    <Link href={`/product/${product.id}`} className={styles.card}>
      
      {/* รูปภาพ */}
      <div className={styles.imageContainer}>
        <img 
          src={product.image_url || 'https://via.placeholder.com/300x400?text=TreeEz'} 
          alt={product.name} 
          className={styles.image}
        />
      </div>

      {/* เนื้อหา */}
      <div className={styles.content}>
        <h3 className={styles.title}>
          {product.name}
        </h3>
        <p className={styles.description}>
          {product.description || "No description available."}
        </p>
        <div className={styles.price}>
          ฿{product.price.toLocaleString()}
        </div>
      </div>

    </Link>
  );
}