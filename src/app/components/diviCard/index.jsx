import styles from "./diviCard.module.css";

const DiviCard = ({ children }) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  );
};

export default DiviCard;