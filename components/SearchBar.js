import { useState, useEffect } from "react";
import styles from '../styles/SearchBar.module.css';

export default function SearchBar() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        fetchAPIData();
    }, [searchString]);

    function fetchAPIData() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(products => {
                const filtered = products.filter(product =>
                    product.title.toLowerCase().includes(searchString.toLowerCase())
                );

                const currentFilter = filtered.map((product, index) => (
                    <div className={styles.productCard} key={index}>
                        <p className={styles.productPrice}>${product.price}</p>
                        <img className={styles.productImage} src={product.image} alt={product.title} />
                        <p className={styles.productTitle}>{product.title}</p>
                    </div>
                ));
                setFilteredProducts(currentFilter);
            });
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search products"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
            />
            <div className={styles.productGrid}>{filteredProducts}</div>
        </div>
    );
}
