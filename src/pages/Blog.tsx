import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Fashion Tips', 'Styling Guide', 'Trends', 'Behind the Scenes', 'Sustainability'];

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Timeless Elegance: Building a Capsule Wardrobe",
      excerpt: "Discover how to create a versatile wardrobe with quality pieces that transcend seasonal trends and serve you for years to come.",
      category: "Styling Guide",
      author: "Aria Shah",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=500&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Spring/Summer 2024: Color Trends That Define the Season",
      excerpt: "Explore the vibrant palette that's taking the fashion world by storm this season, from soft pastels to bold statement hues.",
      category: "Trends",
      author: "Maya Gupta", 
      date: "2024-01-12",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Sustainable Fashion: Our Journey Towards Ethical Production",
      excerpt: "Behind the scenes look at how Nazakat is pioneering sustainable practices without compromising on luxury and style.",
      category: "Sustainability",
      author: "Kiran Patel",
      date: "2024-01-10",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop"
    },
    {
      id: 4,
      title: "From Sketch to Runway: The Creative Process Behind Our Collections",
      excerpt: "Take an intimate look at how our design team transforms inspiration into the elegant pieces you love.",
      category: "Behind the Scenes",
      author: "Aria Shah",
      date: "2024-01-08",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=500&fit=crop"
    },
    {
      id: 5,
      title: "Mastering the Art of Layering for Every Season",
      excerpt: "Professional styling tips to help you create sophisticated, weather-appropriate looks year-round.",
      category: "Fashion Tips",
      author: "Maya Gupta",
      date: "2024-01-05",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=500&fit=crop"
    },
    {
      id: 6,
      title: "The Power of Accessories: Transforming Simple Outfits",
      excerpt: "Learn how the right accessories can elevate any look from basic to extraordinary with these expert tips.",
      category: "Styling Guide",
      author: "Aria Shah",
      date: "2024-01-03",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=500&fit=crop"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== 'All' || searchTerm);

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 lg:py-32 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
              Fashion Journal
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Insights, inspiration, and behind-the-scenes stories from the world of Nazakat
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && selectedCategory === 'All' && !searchTerm && (
          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-up">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Featured Article
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {featuredPost.category}
                    </span>
                  </div>
                  <Button className="group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-elegant">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 overflow-hidden animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          <p className="font-medium">By {post.author}</p>
                          <p className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="group">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-foreground mb-4">No Articles Found</h3>
                <p className="text-muted-foreground mb-8">
                  Try adjusting your search or filter criteria to find more articles.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest fashion insights, styling tips, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;