import React, { useState, useEffect, useRef } from 'react';
import styles from './products.module.scss';

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
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        if (activeProduct !== null) {
            intervalRef.current = window.setInterval(() => {
                setCurrentImageIndex(prevIndex => {
                    const product = products[activeProduct];
                    return (prevIndex + 1) % product.imageSrc.length;
                });
            }, 3000);

            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }
    }, [activeProduct, products]);

    useEffect(() => {
        if (sliderRef.current && activeProduct !== null) {
            const slider = sliderRef.current;
            const product = products[activeProduct];
            const scrollAmount = (slider.scrollWidth / product.imageSrc.length) * currentImageIndex;
            slider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }, [currentImageIndex, activeProduct, products]);

    const handleProductClick = (index: number) => {
        setActiveProduct(index);
        setCurrentImageIndex(0); // Reset image index when a product is selected
    };

    const handleOverlayClick = () => {
        setActiveProduct(null);
    };

    const handleArrowClick = (direction: 'left' | 'right') => {
        if (activeProduct !== null) {
            setCurrentImageIndex(prevIndex => {
                const product = products[activeProduct];
                if (direction === 'left') {
                    return (prevIndex - 1 + product.imageSrc.length) % product.imageSrc.length;
                } else {
                    return (prevIndex + 1) % product.imageSrc.length;
                }
            });
        }
    };

    return (
        <div className={styles.productsContainer}>
            {products.map((product, index) => (
                <div 
                    className={`${styles.productCard} ${activeProduct === index ? styles.noHover : ''}`}
                    key={index}
                >
                    <div className={styles.imageSlider} ref={sliderRef}>
                        {product.imageSrc.map((src, imgIndex) => (
                            <div
                                key={imgIndex}
                                className={styles.sliderImage}
                            >
                                <img src={src} alt={`Product ${index} - ${imgIndex}`} />
                            </div>
                        ))}
                        {activeProduct !== null && (
                            <>
                                <button
                                    className={styles.arrowLeft}
                                    onClick={() => handleArrowClick('left')}
                                >
                                    &#8249;
                                </button>
                                <button
                                    className={styles.arrowRight}
                                    onClick={() => handleArrowClick('right')}
                                >
                                    &#8250;
                                </button>
                            </>
                        )}
                    </div>
                    <div className={styles.productContent}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <button onClick={() => handleProductClick(index)}>Play Video</button>
                    </div>
                    {activeProduct === index && (
                        <div className={styles.videoOverlay} onClick={handleOverlayClick}>
                            <div className={styles.videoWrapper}>
                                <iframe
                                    src={products[index].videoSrc}
                                    title={`Video for ${product.title}`}
                                    frameBorder="0"
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
