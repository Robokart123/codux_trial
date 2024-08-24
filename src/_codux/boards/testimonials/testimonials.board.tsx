import { createBoard } from '@wixc3/react-board';
import { Testimonials } from '../../../components/testimonials/testimonials';

// Adjust the mock data to include all required properties
const mockTestimonials = [
    {
        name: 'John Doe',
        designation: 'Software Engineer',
        feedback: 'This service is fantastic! It exceeded all my expectations.',
        imageSrc: 'https://via.placeholder.com/150' // Replace with an actual image URL or path
    },
    {
        name: 'Jane Smith',
        designation: 'Product Manager',
        feedback: 'Highly recommend! The quality of work is top-notch.',
        imageSrc: 'https://via.placeholder.com/150' // Replace with an actual image URL or path
    },
    {
        name: 'Alice Johnson',
        designation: 'UX Designer',
        feedback: 'Great experience! Professional and timely service.',
        imageSrc: 'https://via.placeholder.com/150' // Replace with an actual image URL or path
    },
];

export default createBoard({
    name: 'Testimonials',
    Board: () => <Testimonials testimonials={mockTestimonials} />,
    isSnippet: true,
});
