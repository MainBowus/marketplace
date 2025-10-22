import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; // 👈 1. Import CSS Module

export default function Navbar() {
  return (
    // 2. ใช้ styles.navbar
    <nav className={styles.navbar}>
      {/* 3. ใช้ styles.navContainer */}
      <div className={styles.navContainer}>
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className={styles.logo}> {/* 👈 4. ใช้ styles.logo */}
            TreeEz
          </Link>
        </div>

        {/* Navigation Links */}
        <div className={styles.navLinks}> {/* 👈 5. ใช้ styles.navLinks */}
          <Link href="/shop" className={styles.navLink}> {/* 👈 6. ใช้ styles.navLink */}
            Shop
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          {/* คุณสามารถเพิ่มปุ่ม Login/Cart ตรงนี้ในอนาคต */}
        </div>

      </div>
    </nav>
  );
}