import React, { useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import styles from './products.module.scss';
import { Arrow } from '../arrow/arrow'; // Ensure you have this component correctly set up

interface Product {
    title: string;
    description: string;
    imageSrc: string[];
    videoSrc: string;
}

interface ProductsProps {
    products: Product[];
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
    const [activeProduct, setActiveProduct] = useState<number | null>(null);

    return (
        <div className={styles.productsContainer}>
            {products.map((product, index) => (
                <div
                    className={`${styles.productCard} ${activeProduct === index ? styles.noHover : ''}`}
                    key={index}
                >
                    <div className={styles.productContent}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <button onClick={() => setActiveProduct(index)}>Play Video</button>
                    </div>
                    <div className={styles.imageSlider}>
                        <ScrollMenu>
                            {product.imageSrc.map((src, imgIndex) => (
                                <div key={imgIndex} className={styles.sliderImage}>
                                    <img src={src} alt={`Product ${index} - ${imgIndex}`} />
                                </div>
                            ))}
                        </ScrollMenu>
                        <Arrow direction="left" />
                        <Arrow direction="right" />
                    </div>
                    {activeProduct === index && (
                        <div className={styles.videoOverlay} onClick={() => setActiveProduct(null)}>
                            <div className={styles.videoWrapper}>
                                <iframe
                                    src={product.videoSrc}
                                    title={`Video for ${product.title}`}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
