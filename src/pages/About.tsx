import React from 'react';
import { Shield, Heart, Leaf, Award } from 'lucide-react';
import Navigation from '../components/Navigation';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Quality",
      description: "We source only the finest materials and work with skilled artisans to create pieces that stand the test of time."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passionate Craftsmanship", 
      description: "Every piece is crafted with love and attention to detail, ensuring each garment tells a unique story."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Fashion",
      description: "We're committed to ethical practices and sustainable production methods that respect our planet."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Heritage Excellence",
      description: "Combining traditional techniques with contemporary design to create timeless fashion statements."
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Our Story
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nazakat represents the essence of refined elegance and sophisticated craftsmanship. 
                Born from a passion for timeless fashion, we create pieces that transcend trends and celebrate individual style.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At Nazakat, we believe fashion is more than clothing—it's self-expression, confidence, and artistry. 
                  Our mission is to create exceptional pieces that empower individuals to express their unique style 
                  while upholding the highest standards of quality and sustainability.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're dedicated to preserving traditional craftsmanship while embracing innovation, 
                  ensuring each piece reflects both heritage and contemporary sophistication.
                </p>
              </div>
              <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="aspect-[4/3] bg-gradient-luxury rounded-lg shadow-luxury"></div>
                <div className="absolute inset-4 bg-card rounded-lg shadow-elegant flex items-center justify-center">
                  <p className="text-2xl font-serif text-center text-muted-foreground italic">
                    "Elegance is the only beauty that never fades"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do, from design to delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-8 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The passionate individuals behind Nazakat's creative vision and exceptional craftsmanship
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Aria Shah", role: "Creative Director", specialty: "Fashion Design" },
                { name: "Kiran Patel", role: "Head of Production", specialty: "Quality Assurance" },
                { name: "Maya Gupta", role: "Sustainability Lead", specialty: "Ethical Fashion" }
              ].map((member, index) => (
                <div
                  key={member.name}
                  className="text-center group animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-48 h-48 mx-auto mb-6 bg-gradient-luxury rounded-full shadow-luxury group-hover:shadow-elegant transition-all duration-300"></div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.specialty}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;