import { createBoard } from '@wixc3/react-board';
import { Products } from '../../../components/products/products'; // Adjust the import path as needed

// Define the Product type locally if it's not imported
interface Product {
    title: string;
    description: string;
    imageSrc: string[];
    videoSrc: string;
}

// Sample data for the Products component
const mockProductsData: Product[] = [
    {
        title: 'ArNcert',
        description: 'An AR mobile phone application based on NCERT Syllabus.',
        imageSrc: [
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
        ],
        videoSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
        title: 'VR Headset (Standalone)',
        description: '250 immersive 3D experience videos based on NCERT syllabus.',
        imageSrc: [
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
        ],
        videoSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
        title: 'AR Interactive Charts',
        description:
            'AR Interactive Charts mobile phone app which allows users to scan interactive charts.',
        imageSrc: [
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
        ],
        videoSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
        title: 'Interactive Talking Pen Charts',
        description:
            'AR Interactive Charts mobile phone app which allows users to scan interactive charts.',
        imageSrc: [
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
        ],
        videoSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
];

export default createBoard({
    name: 'Products',
    Board: () => <Products products={mockProductsData} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
