// app/contact/page.js
import styles from './page.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>We’re here to help and would love to hear from you! If you have any questions, feedback, or need support, feel free to reach out to us through any of the following channels:</p>

      <ul className={styles.contactList}>
        <li className={styles.contactItem}><strong>Email:</strong> <a href="mailto:support@expense-manager.com">support@expense-manager.com</a></li>
        <li className={styles.contactItem}><strong>WhatsApp:</strong> +1 (123) 456-7890</li>
        <li className={styles.contactItem}><strong>Instagram:</strong> <a href="https://www.instagram.com/expense_manager" target="_blank" rel="noopener noreferrer">@expense_manager</a></li>
        <li className={styles.contactItem}><strong>Twitter:</strong> <a href="https://twitter.com/ExpenseManager" target="_blank" rel="noopener noreferrer">@ExpenseManager</a></li>
        <li className={styles.contactItem}><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/expense-manager" target="_blank" rel="noopener noreferrer">Expense Manager</a></li>
      </ul>

      <p className={styles.description}>We aim to respond to all inquiries as quickly as possible. Don’t hesitate to get in touch with us if you have any questions or need assistance. We appreciate your feedback and look forward to hearing from you!</p>
      <p className={styles.description}><strong>Feel free to contact us anytime—we're here to help!</strong></p>
    </div>
  );
};

export default ContactPage;
