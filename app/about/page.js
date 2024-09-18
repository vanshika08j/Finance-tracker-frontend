// app/about/page.js
import styles from './page.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>Welcome to <strong>Expense Manager</strong>, where we believe managing your finances should be simple and stress-free. Our platform is designed to help you effortlessly track your expenses and manage your users, making it easier for you to stay on top of your financial goals.</p>

      <h2 className={styles.subTitle}>What We Do</h2>
      <p className={styles.description}>At Expense Manager, we provide a user-friendly interface for managing and tracking your financial activities. Whether you're adding a new user or recording an expense, our intuitive design ensures that you can do it quickly and efficiently. Our goal is to offer a comprehensive solution that helps you keep your finances in check without any hassle.</p>

      <h2 className={styles.subTitle}>Why Choose Us?</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}><strong>Simplicity:</strong> Our platform is designed with user experience in mind, making it easy for you to add and manage expenses and users.</li>
        <li className={styles.listItem}><strong>Efficiency:</strong> Quickly access and track all your financial data in one place.</li>
        <li className={styles.listItem}><strong>Support:</strong> We're here to help you every step of the way with clear instructions and responsive support.</li>
      </ul>

      <p className={styles.description}>We’re passionate about helping you achieve financial clarity and are constantly working to improve our platform to better meet your needs.</p>
      <p className={styles.description}>Thank you for choosing Expense Manager. We’re excited to be part of your journey towards better financial management!</p>
    </div>
  );
};

export default AboutPage;
