import Link from 'next/link';
import { Leaf, Search, Truck } from 'lucide-react';
import styles from '../styles/Home.module.css'; // 👈 1. Import CSS Module


export default function HomePage() {
  return (
    <main>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to TreeEz
          </h1>
          <p className={styles.heroSubtitle}>
            Discover a place where nature lovers and quality growers meet.
          </p>
          <Link href="/shop" className={styles.heroButton}>
            Start Shopping
          </Link>
        </div>
      </section>

      {/* 2. ส่วนข้อมูลเกี่ยวกับเว็บ (Why Choose Us) */}
      <section className={styles.features}>
        <div className="container"> {/* 👈 ใช้ .container จาก globals.css */}
          <h2 className={styles.featuresTitle}>
            Why Shop With Us?
          </h2>
          <p className={styles.featuresSubtitle}>
            TreeEz isn't just a marketplace; it's a community. We connect you directly with passionate sellers...
          </p>
          
          <div className={styles.featureGrid}>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIconWrapper}>
                <Leaf className={styles.featureIcon} />
              </div>
              <h3>Quality First</h3>
              <p>Every plant is sourced from trusted sellers...</p>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIconWrapper}>
                <Search className={styles.featureIcon} />
              </div>
              <h3>Find Your Match</h3>
              <p>With easy search and categories, finding your perfect plant is simple.</p>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIconWrapper}>
                <Truck className={styles.featureIcon} />
              </div>
              <h3>Secure Delivery</h3>
              <p>We ensure your new green friend arrives at your doorstep...</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. (Optional) ส่วน Call to Action (ใช้ซ้ำได้) */}
      <section className={styles.features} style={{backgroundColor: 'var(--color-white)'}}>
        <div className="container">
           <h2 className={styles.featuresTitle}>
            Ready to Find Your Green Companion?
          </h2>
           <Link href="/shop" className={styles.heroButton}>
            Browse All Plants
          </Link>
        </div>
      </section>

    </main>
  );
}