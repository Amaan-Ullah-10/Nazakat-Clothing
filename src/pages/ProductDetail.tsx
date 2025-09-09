import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, ShoppingBag, Star, ChevronLeft, Plus, Minus, Truck, RotateCcw, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - in real app, this would come from your database
  const product = {
    id: id,
    name: "Elegant Silk Dress",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 124,
    description: "A timeless piece that embodies sophistication and grace. Crafted from premium silk with meticulous attention to detail, this dress is perfect for both formal occasions and elegant evening events.",
    features: [
      "Premium silk fabric",
      "Hand-finished seams", 
      "Breathable and comfortable",
      "Dry clean only",
      "Made with sustainable practices"
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Navy', value: '#1e3a8a' },
      { name: 'Emerald', value: '#059669' },
      { name: 'Burgundy', value: '#7c2d12' }
    ],
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1582767704016-acf5c1b0d939?w=600&h=800&fit=crop'
    ],
    inStock: true,
    stockCount: 15
  };

  const relatedProducts = [
    { id: 1, name: "Classic Blazer", price: 249, image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=400&fit=crop' },
    { id: 2, name: "Silk Scarf", price: 89, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&h=400&fit=crop' },
    { id: 3, name: "Pearl Necklace", price: 199, image: 'https://images.unsplash.com/photo-1582767704016-acf5c1b0d939?w=300&h=400&fit=crop' },
    { id: 4, name: "Leather Handbag", price: 349, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop' }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/explore" className="text-muted-foreground hover:text-primary">Shop</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                  <img
                    src={product.images[activeImage]}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`aspect-square overflow-hidden rounded-lg border-2 ${
                        activeImage === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-serif font-bold text-foreground mb-2">{product.name}</h1>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">({product.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-bold text-foreground">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                    {product.originalPrice && (
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                        Save ${product.originalPrice - product.price}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                {/* Size Selection */}
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">Size</h3>
                  <div className="flex space-x-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 border rounded-md flex items-center justify-center text-sm font-medium transition-colors ${
                          selectedSize === size
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border hover:border-primary'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">Color</h3>
                  <div className="flex space-x-2">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor === color.name ? 'border-primary' : 'border-border'
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">Quantity</h3>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 border border-border rounded-md flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                      className="w-10 h-10 border border-border rounded-md flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <span className="text-sm text-muted-foreground">
                      {product.stockCount} in stock
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Button 
                    className="w-full h-12 text-base font-medium"
                    disabled={!selectedSize || !selectedColor}
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Add to Cart - ${product.price * quantity}
                  </Button>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className="flex-1"
                    >
                      <Heart className={`w-4 h-4 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                      {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Features */}
                <div className="border-t border-border pt-6">
                  <h3 className="font-medium text-foreground mb-4">Product Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shipping Info */}
                <div className="border-t border-border pt-6 space-y-4">
                  <div className="flex items-center space-x-3 text-sm">
                    <Truck className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Free shipping on orders over $200</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <RotateCcw className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">30-day return policy</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Shield className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">1-year quality guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-foreground mb-1">{product.name}</h3>
                    <p className="text-primary font-semibold">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetail;