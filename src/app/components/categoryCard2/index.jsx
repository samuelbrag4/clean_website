import React from "react";
import Link from "next/link";
import styles from "./categoryCard2.module.css";

const CategoryCard2 = ({ title, count, link }) => {
  return (
      <div className={styles.card}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.count}>{count}</span>
        </div>
        <Link href={link} className={styles.link}>
          Ver Produtos
        </Link>
      </div>
  );
};

export default CategoryCard2;
