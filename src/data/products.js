const products = [
  // Men's Clothing
  {
    id: 1,
    name: "Men's Classic Fit T-Shirt",
    category: "men",
    price: 1899,
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A comfortable, classic fit t-shirt made from 100% cotton.",
    rating: 4.5,
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Gray"]
  },
  {
    id: 2,
    name: "Men's Slim Fit Jeans",
    category: "men",
    price: 3799,
    image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Stylish slim fit jeans with a modern look and comfortable stretch fabric.",
    rating: 4.3,
    inStock: true,
    sizes: ["30x32", "32x32", "34x32", "36x32", "38x32"],
    colors: ["Blue", "Black", "Gray"]
  },
  {
    id: 3,
    name: "Men's Casual Button-Down Shirt",
    category: "men",
    price: 2999,
    image: "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A versatile button-down shirt perfect for casual or semi-formal occasions.",
    rating: 4.7,
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Light Blue", "Pink"]
  },
  {
    id: 4,
    name: "Men's Hooded Sweatshirt",
    category: "men",
    price: 2599,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A warm and comfortable hooded sweatshirt for casual wear.",
    rating: 4.2,
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy", "Green"]
  },
  {
    id: 5,
    name: "Men's Formal Blazer",
    category: "men",
    price: 6799,
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "An elegant formal blazer for professional and special occasions.",
    rating: 4.8,
    inStock: true,
    sizes: ["38R", "40R", "42R", "44R", "46R"],
    colors: ["Navy", "Black", "Gray"]
  },
  {
    id: 6,
    name: "Men's Athletic Shorts",
    category: "men",
    price: 2299,
    image: "https://images.unsplash.com/photo-1562886877-aaaa5c0b3986?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Lightweight athletic shorts perfect for workouts and casual wear.",
    rating: 4.4,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Blue", "Red"]
  },
  {
    id: 13,
    name: "Men's Leather Jacket",
    category: "men",
    price: 8999,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Premium leather jacket with a classic design, perfect for cool weather.",
    rating: 4.9,
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Brown", "Tan"]
  },
  {
    id: 14,
    name: "Men's Polo Shirt",
    category: "men",
    price: 2499,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Classic polo shirt made from breathable cotton piqué fabric.",
    rating: 4.6,
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "White", "Black", "Green", "Red"]
  },
  {
    id: 15,
    name: "Men's Winter Coat",
    category: "men",
    price: 7499,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Insulated winter coat with water-resistant exterior and warm lining.",
    rating: 4.7,
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Olive"]
  },
  {
    id: 16,
    name: "Men's Chino Pants",
    category: "men",
    price: 3499,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Versatile chino pants suitable for casual and semi-formal occasions.",
    rating: 4.5,
    inStock: true,
    sizes: ["30x32", "32x32", "34x32", "36x32", "38x32"],
    colors: ["Khaki", "Navy", "Olive", "Gray"]
  },

  // Women's Clothing
  {
    id: 7,
    name: "Women's Casual Blouse",
    category: "women",
    price: 2499,
    image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A stylish and comfortable blouse for everyday wear.",
    rating: 4.6,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Pink", "Blue"]
  },
  {
    id: 8,
    name: "Women's Skinny Jeans",
    category: "women",
    price: 4199,
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Classic skinny jeans with a flattering fit and stretch fabric.",
    rating: 4.5,
    inStock: true,
    sizes: ["24", "26", "28", "30", "32"],
    colors: ["Blue", "Black", "Gray", "White"]
  },
  {
    id: 9,
    name: "Women's Summer Dress",
    category: "women",
    price: 3499,
    image: "/woman's summer dress/sofia-VBZ3aYIbgc0-unsplash.jpg",
    description: "A light and flowy summer dress perfect for warm weather.",
    rating: 4.7,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral", "Blue", "Red", "Yellow"]
  },
  {
    id: 10,
    name: "Women's Cardigan Sweater",
    category: "women",
    price: 2999,
    image: "https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A cozy cardigan sweater for layering in any season.",
    rating: 4.4,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Gray", "Beige", "Black", "Navy"]
  },
  {
    id: 11,
    name: "Women's Yoga Pants",
    category: "women",
    price: 2799,
    image: "/woman's yoga pants/pexels-elly-fairytale-3822350.jpg",
    description: "Comfortable and stretchy yoga pants for workouts or casual wear.",
    rating: 4.3,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy", "Purple"]
  },
  {
    id: 12,
    name: "Women's Formal Blazer",
    category: "women",
    price: 5999,
    image: "https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A tailored blazer perfect for professional settings and formal occasions.",
    rating: 4.8,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray", "White"]
  },
  {
    id: 17,
    name: "Women's Maxi Dress",
    category: "women",
    price: 4299,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Elegant floor-length maxi dress perfect for special occasions.",
    rating: 4.8,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy", "Emerald"]
  },
  {
    id: 18,
    name: "Women's Leather Handbag",
    category: "women",
    price: 5499,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Premium leather handbag with multiple compartments and elegant design.",
    rating: 4.9,
    inStock: true,
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Tan", "Red"]
  },
  {
    id: 19,
    name: "Women's Winter Coat",
    category: "women",
    price: 6999,
    image: "https://images.unsplash.com/photo-1548624313-0396c75f8e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Warm and stylish winter coat with faux fur trim and insulated lining.",
    rating: 4.7,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Camel", "Red"]
  },
  {
    id: 20,
    name: "Women's Ankle Boots",
    category: "women",
    price: 4799,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Stylish ankle boots with comfortable heel and durable construction.",
    rating: 4.6,
    inStock: true,
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["Black", "Brown", "Tan"]
  }
];

export default products; 