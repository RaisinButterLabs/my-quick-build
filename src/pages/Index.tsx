import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Shield, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, rgba(23, 25, 35, 0.9), rgba(23, 25, 35, 0.95)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Transform your ideas into reality with our powerful platform. 
              Simple, fast, and built for the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="hero" size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="lg">
                Check this out
              </Button>
            </div>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed, built with modern technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 group hover:scale-105">
              <div className="mb-6 inline-flex p-3 rounded-lg gradient-primary">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
                Lightning Fast
              </h3>
              <p className="text-muted-foreground">
                Experience blazing-fast performance with our optimized infrastructure
              </p>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 group hover:scale-105">
              <div className="mb-6 inline-flex p-3 rounded-lg gradient-secondary">
                <Shield className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
                Secure & Reliable
              </h3>
              <p className="text-muted-foreground">
                Bank-level security with 99.9% uptime guarantee for peace of mind
              </p>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 group hover:scale-105">
              <div className="mb-6 inline-flex p-3 rounded-lg gradient-primary">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
                Easy to Use
              </h3>
              <p className="text-muted-foreground">
                Intuitive interface designed to get you started in minutes, not hours
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-accent/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied users and transform your workflow today
            </p>
            <div className="pt-4">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
