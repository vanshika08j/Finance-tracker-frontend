// app/page.js
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div>
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroText}>
            <h1>Welcome to Your Expense Manager</h1>
            <p>Efficiently manage your expenses with ease and clarity.</p>
            <a href="/users/add" className={styles.button}>Add User</a>
            <a href="/expenses/add" className={styles.button}>Add Expense</a>
          </div>
        </section>
        <section className={styles.featuresSection}>
          <div className={styles.featureCard}>
            <img src="/assets/feature-image-1.jpg" alt="Feature 1" />
            <a href="/users/list"className={styles.headtext} >
            <h3>Manage Users</h3></a>
            <p>Keep track of your expenses and categorize them easily.</p>
          </div>
          <div className={styles.featureCard}>
            <img src="/assets/feature-image-3.jpg" alt="Feature 2" />
            <a href="/expenses/list" className={styles.headtext}>
            <h3>Track Expenses</h3></a>
            <p>Efficiently manage and view users within the system.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
