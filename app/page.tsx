"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  BarChart3,
  Package,
  Users,
  ShoppingCart,
  TrendingUp,
  Container,
  CheckCircle,
  Moon,
  Sun,
  Menu,
  X,
  Star,
  ArrowRight,
  Zap,
  Globe,
  Monitor,
  MessageCircle,
} from "lucide-react"

export default function HisabGharLanding() {
  const [isDark, setIsDark] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/fareedjaved203/inventory-desktop/releases/latest')
        const data = await response.json()
        
        if (data.assets && data.assets.length > 0) {
          setDownloadUrl(data.assets[0].browser_download_url)
        }
      } catch (error) {
        console.error('Failed to fetch release data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLatestRelease()
  }, [])

  const handleDownload = () => {
    if (downloadUrl) {
      window.open(downloadUrl, '_blank')
    }
  }

  const features = [
    {
      icon: Package,
      title: "Product Management",
      description: "Add, edit, and organize your inventory with ease",
    },
    {
      icon: TrendingUp,
      title: "Sales Tracking",
      description: "Monitor sales performance and trends in real-time",
    },
    {
      icon: Users,
      title: "Vendor Management",
      description: "Manage supplier relationships efficiently",
    },
    {
      icon: ShoppingCart,
      title: "Bulk Purchasing",
      description: "Handle large inventory orders seamlessly",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights and comprehensive reports",
    },
    {
      icon: Container,
      title: "Single Container Deployment",
      description: "Easy installation and setup process",
    },
  ]

  const benefits = [
    "Reduce inventory management time by 70%",
    "Real-time stock alerts prevent stockouts",
    "Automated reports save hours of manual work",
    "Streamlined vendor management improves relationships",
  ]

  return (
    <div className={`min-h-screen w-full overflow-x-hidden bg-background text-foreground ${isDark ? "dark" : ""}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 min-w-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-primary truncate">Hisab Ghar</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                Features
              </a>
              <a
                href="#download"
                className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                Download
              </a>
              <a
                href="#support"
                className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                Support
              </a>
              <Button variant="outline" size="sm" onClick={toggleTheme}>
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>

            <div className="md:hidden flex items-center space-x-2 flex-shrink-0">
              <Button variant="outline" size="sm" onClick={toggleTheme}>
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border">
            <div className="px-3 py-4 space-y-3">
              <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#download" className="block text-muted-foreground hover:text-foreground transition-colors">
                Download
              </a>
              <a href="#support" className="block text-muted-foreground hover:text-foreground transition-colors">
                Support
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-3 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5 lg:pt-32">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 text-xs sm:text-sm">
                <Zap className="w-3 h-3 mr-1 flex-shrink-0" />
                <span className="truncate">Complete Inventory Solution</span>
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                Hisab Ghar
              </h1>
              <div className="mb-4">
                <Badge variant="outline" className="text-xs sm:text-sm bg-primary/10 border-primary/20">
                  <Monitor className="w-3 h-3 mr-1 flex-shrink-0" />
                  <span className="truncate">Desktop App & Web Version</span>
                </Badge>
              </div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 text-pretty leading-relaxed">
                Streamline your business with our all-in-one solution featuring product management, sales tracking, and
                analytics. Access from desktop or web browser.
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-sm sm:text-base cursor-pointer lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto"
                  onClick={handleDownload}
                  disabled={isLoading || !downloadUrl}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                  <span className="truncate">
                    {isLoading ? 'Loading...' : 'Start 7-Day Free Trial'}
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 bg-transparent w-full sm:w-auto"
                >
                  <span className="truncate">Try Web Version</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
                </Button>
              </div>
            </div>

            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-8 border border-border shadow-2xl">
                <img
                  src="/modern-inventory-management-dashboard-interface-wi.jpg"
                  alt="Hisab Ghar Dashboard Interface"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-balance leading-tight">
              Powerful Features for Your Business
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Everything you need to manage your inventory efficiently in one comprehensive solution
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 text-balance leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-muted/30">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
                Built with Modern Technology
              </h2>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3">
                  <Monitor className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Available as desktop app and web application
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Automatic database setup and migration
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Desktop installer handles everything automatically
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Container className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Containerized for reliable deployment
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-border">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 leading-tight">
                Business Benefits
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-background to-secondary/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty">
            Start your 7-day free trial today and experience the power of comprehensive inventory management
          </p>

          <Card className="bg-card/50 backdrop-blur-sm border-border p-6 sm:p-8 mb-8">
            <div className="flex flex-col items-center space-y-6">
              <Button
                size="lg"
                className="text-base sm:text-lg cursor-pointer lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 bg-primary hover:bg-primary/90 w-full max-w-sm sm:max-w-md lg:max-w-lg min-h-[3rem] sm:min-h-[3.5rem] lg:min-h-[4rem]"
                onClick={handleDownload}
                disabled={isLoading || !downloadUrl}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-center leading-tight">
                  {isLoading ? 'Loading...' : 'Start 7-Day Free Trial'}
                </span>
              </Button>

              <div className="text-center space-y-2">
                <p className="text-base sm:text-lg font-semibold">Available Platforms</p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Desktop: Windows 10+ | macOS 10.15+ | Linux
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">Web: All modern browsers</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Desktop file size: ~150MB</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty">
              See what our customers have to say about Hisab Ghar
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 text-pretty">
                    "Hisab Ghar has revolutionized how we manage our inventory. The analytics dashboard provides
                    incredible insights."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-sm sm:text-base text-primary font-semibold">U{i}</span>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-semibold">Business Owner</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Retail Company</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="support" className="bg-muted/50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-primary">Hisab Ghar</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 text-pretty">
                Complete inventory management solution for modern businesses. Available as desktop application and web
                platform.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2">
                <a
                  href="#features"
                  className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
                <a
                  href="#download"
                  className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  Download
                </a>
                <a
                  href="#"
                  className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  System Requirements
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  Community
                </a>
                <a
                  href="#"
                  className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bug Reports
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © 2025 Hisab Ghar. All rights reserved. Built with modern technology for reliable inventory management.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/923142740270"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </div>
  )
}
