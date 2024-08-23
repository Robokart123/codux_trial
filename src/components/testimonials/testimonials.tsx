import React from 'react';
import styles from './testimonials.module.scss';

interface Testimonial {
    name: string;
    designation: string;
    feedback: string;
    imageSrc: string;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
    return (
        <section className={styles.testimonialsSection}>
            <h2 className={styles.title}>What Our Clients Say</h2>
            <div className={styles.testimonialsContainer}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={styles.testimonialCard}>
                        <div className={styles.imageContainer}>
                            <img src={testimonial.imageSrc} alt={testimonial.name} className={styles.image} />
                        </div>
                        <h3 className={styles.name}>{testimonial.name}</h3>
                        <p className={styles.designation}>{testimonial.designation}</p>
                        <p className={styles.feedback}>"{testimonial.feedback}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
