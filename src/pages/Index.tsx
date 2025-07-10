
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Users, Target, Zap, Dumbbell, Apple, Trophy, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-fitness-dark via-slate-900 to-fitness-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-0 border-b border-fitness-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-fitness-red" />
              <span className="text-2xl font-poppins font-bold gradient-text">FitForge</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-fitness-teal transition-colors">Features</a>
              <a href="#workouts" className="text-muted-foreground hover:text-fitness-teal transition-colors">Workouts</a>
              <a href="#nutrition" className="text-muted-foreground hover:text-fitness-teal transition-colors">Nutrition</a>
              <Link to="/login" className="text-muted-foreground hover:text-fitness-teal transition-colors">Login</Link>
              <Link to="/register">
                <Button className="btn-primary">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
              <span className="gradient-text block">Fitness Journey with Raja</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience revolutionary 3D workout visualization, personalized nutrition plans, 
              and AI-powered fitness guidance. Your body transformation starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/register">
                <Button className="btn-primary text-lg px-8 py-4">
                  <Play className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="outline" className="text-lg px-8 py-4 border-fitness-border hover:bg-fitness-card">
                <Target className="mr-2 h-5 w-5" />
                View Demo
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
            <div className="glass-card p-6 animate-fade-in-scale">
              <div className="text-3xl font-bold text-fitness-red mb-2">50K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="glass-card p-6 animate-fade-in-scale" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-fitness-teal mb-2">1M+</div>
              <div className="text-muted-foreground">Workouts Completed</div>
            </div>
            <div className="glass-card p-6 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-fitness-red mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold mb-6 gradient-text">Revolutionary Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology meets fitness expertise to deliver an unparalleled training experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-fitness-red to-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-4">3D Workout Visualization</h3>
              <p className="text-muted-foreground leading-relaxed">
                Interactive 3D models showing proper form with muscle group highlighting and movement analysis
              </p>
            </div>

            <div className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-fitness-teal to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Apple className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Smart Nutrition Planning</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI-powered meal plans tailored to your goals, dietary preferences, and fitness routine
              </p>
            </div>

            <div className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-fitness-red to-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Progress Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive analytics and progress visualization to keep you motivated and on track
              </p>
            </div>

            <div className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-fitness-teal to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Community Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with like-minded fitness enthusiasts and certified trainers for motivation
              </p>
            </div>

            <div className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-fitness-red to-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Personalized Programs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Custom workout plans adapted to your fitness level, goals, and available equipment
              </p>
            </div>

            <div className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-fitness-teal to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Secure & Private</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise-grade security protecting your personal data and fitness information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-poppins font-bold mb-6 gradient-text">Ready to Transform?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already transformed their fitness journey with FitForge
            </p>
            <Link to="/register">
              <Button className="btn-primary text-lg px-12 py-4 pulse-glow">
                Start Your Journey Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-fitness-border py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Dumbbell className="h-6 w-6 text-fitness-red" />
            <span className="text-xl font-poppins font-bold gradient-text">FitForge</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Transforming fitness through innovation and technology
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-fitness-teal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-fitness-teal transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-fitness-teal transition-colors">Support</a>
            <a href="#" className="hover:text-fitness-teal transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
