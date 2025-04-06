// src/components/SkeletonLoader/SkeletonLoader.jsx
import styles from './SkeletonLoader.module.css';

const SkeletonLoader = () => (
  <div className={styles.skeletonCard}>
    <div className={styles.skeletonImage}></div>
    <div className={styles.skeletonText}></div>
    <div className={styles.skeletonPrice}></div>
  </div>
);export default SkeletonLoader;
