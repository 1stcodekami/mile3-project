// Full product interface for product page
export interface FullDetails {
    _id: string;
    images: string[]; // Array of image URLs or a more specific type if needed
    backImageUrl: string; // A single image URL

    price: number;
    slug: string;
    rating: {
        average: number;
        count: number;
    };
    sku: string;
    otherprice: number;
    stock: number;
    name: string;
    description: string;
    description1: string;
}
