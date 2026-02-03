import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandCarousel from "./components/BrandCarousel";
import { Menu, X, ArrowRight, ChevronRight, Star, Users, TrendingUp, Award, Mail, Phone, MapPin, Megaphone, BarChart3, Lightbulb, Video, Zap, Instagram, Linkedin } from "lucide-react";

const Header = ({ currentPage, setCurrentPage, scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => setCurrentPage("home")} className="flex items-center gap-2">
          {/* Logo Image - Replace with your logo */}
          {/* <img src="/images/logo.png" alt="NexusAgency" className="h-8" /> */}
          {/* <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            NexusAgency
          </span> */}
          <img
            src="/logo/CFFlogo.svg"
            alt="NexusAgency Logo"
            className="h-30 md:h-34 w-auto"
          />

        </button>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {['Home', 'Services', 'Work', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => setCurrentPage(item.toLowerCase())}
              className={`hover:text-purple-600 transition-colors ${currentPage === item.toLowerCase() ? 'text-purple-600' : 'text-gray-700'}`}
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setCurrentPage("contact")}
          className="hidden md:block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all"
        >
          Get Started
        </button>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {['Home', 'Services', 'Work', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => { setCurrentPage(item.toLowerCase()); setMobileMenuOpen(false); }}
                  className="text-left py-2 hover:text-purple-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>
        )}

      </AnimatePresence>

    </header>
  );
};

const Home = ({ setCurrentPage }) => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
        {/* Optional: Background Image */}
        {/* <div className="absolute inset-0">
          <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" />
        </div> */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
              🚀 Trusted by 100+ Brands
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Turn Your Brand Into A
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Growth Machine</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Data-driven marketing strategies that deliver real results. From influencer campaigns to performance ads, we scale businesses with precision and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage("contact")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Start Your Project <ArrowRight size={20} />
              </button>
              <button
                onClick={() => setCurrentPage("work")}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all"
              >
                View Our Work
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "200M+", label: "Impressions" },
              { value: "₹10CR+", label: "Revenue Generated" },
              { value: "98%", label: "Client Retention" },
              { value: "10+", label: "Industry Awards" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}

          </motion.div>

        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive marketing solutions tailored to your business goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: "Influencer Marketing",
                desc: "Connect with authentic voices that resonate with your audience and drive conversions",
                color: "purple"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Social Media Growth",
                desc: "Build engaged communities and create content that stops the scroll",
                color: "blue"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Performance Marketing",
                desc: "ROI-focused campaigns on Meta, Google, and TikTok that scale profitably",
                color: "pink"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-100"
                onClick={() => setCurrentPage("services")}
              >
                <div className={`text-${service.color}-600 mb-4`}>{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:gap-3 transition-all">
                  Learn More <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Carousel Section */}
      <BrandCarousel />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Brand?</h2>
          <p className="text-xl mb-8 opacity-90">Let's create a marketing strategy that delivers real, measurable results</p>
          <button
            onClick={() => setCurrentPage("contact")}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            Book a Free Consultation <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
};

const Services = () => {
  const services = [
    {
      title: "Influencer Marketing",
      desc: "Partner with the right creators to amplify your message",
      icon: <Megaphone className="w-8 h-8" />,
      features: ["Creator Partnerships", "Campaign Management", "Content Strategy", "ROI Tracking"]
    },
    {
      title: "Social Media Management",
      desc: "Build and engage your community across all platforms",
      icon: <Users className="w-8 h-8" />,
      features: ["Content Creation", "Community Management", "Analytics & Reporting", "Brand Voice Development"]
    },
    {
      title: "Performance Marketing",
      desc: "Drive measurable results with data-driven paid campaigns",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Meta & Google Ads", "Conversion Optimization", "Retargeting Campaigns", "A/B Testing"]
    },
    {
      title: "Content Production",
      desc: "High-quality content that tells your brand story",
      icon: <Video className="w-8 h-8" />,
      features: ["Video Production", "Photography", "Graphic Design", "Copywriting"]
    },
    {
      title: "Brand Strategy",
      desc: "Define and refine your brand identity",
      icon: <Lightbulb className="w-8 h-8" />,
      features: ["Brand Positioning", "Market Research", "Competitor Analysis", "Growth Roadmap"]
    },
    {
      title: "Ads Production",
      desc: "High-impact advertising content creation and optimization",
      icon: <Zap className="w-8 h-8" />,
      features: ["Ad Creative Design", "Campaign Production", "A/B Testing Optimization", "Performance Analytics"]
    }
  ];

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full-stack marketing solutions designed to accelerate your growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 text-white">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

const Work = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Performance Marketing for D2C Brands",
      icon: "📊",
      industries: ["E-Commerce", "Food & Beverages", "Kids Toys", "Bottles & Tumblers", "Card & Party Games"],
      metrics: [
        { label: "AOV Increase", value: "40%", description: "Through bundles & product recommendations" },
        { label: "Returning Customer Rate", value: "30%", description: "Via cohort analysis & WhatsApp marketing" },
        { label: "Ad Spend", value: "₹7 Cr+", description: "Managed across multiple channels" },
        { label: "Revenue Generated", value: "₹30 Cr+", description: "Direct attributed revenue" },
        { label: "Average ROAS", value: "4X", description: "Consistent across all campaigns" }
      ],
      strategies: [
        { title: "Bundle & Product Recommendations", desc: "Increased AOV by 40% through intelligent bundling" },
        { title: "Cohort Analysis", desc: "Identified customer segments for targeted marketing" },
        { title: "WhatsApp Retention Marketing", desc: "Improved returning customer rate by 30%" },
        { title: "Retention Marketing (Bitespeed)", desc: "Advanced customer lifecycle management" }
      ],
      tools: [
        { name: "Meta Ads", icon: "📱" },
        { name: "Google Ads", icon: "🔍" },
        { name: "WhatsApp (Bitespeed)", icon: "💬" },
        { name: "Amazon Ads", icon: "🛒" },
        { name: "Klaviyo", icon: "📧" }
      ],
      dashboards: [
        "dashboard-1.png",
        "dashboard-2.png",
        "dashboard-3.png",
        "dashboard-4.png",
        "dashboard-5.png"
      ],
      trustFactors: [
        "Real-time performance tracking",
        "Transparent reporting",
        "Dedicated account management",
        "Monthly strategy reviews"
      ]
    },
    {
      id: 2,
      title: "Social Media Management",
      icon: "📱",
      industries: ["Fashion", "Beauty", "Lifestyle", "Tech", "Wellness"],
      metrics: [
        { label: "Engagement Rate", value: "8.5%", description: "Average across all platforms" },
        { label: "Follower Growth", value: "150k+", description: "Organic growth in 6 months" },
        { label: "Content Posts", value: "1000+", description: "Strategic posts created" },
        { label: "Community Growth", value: "300%", description: "Engaged community size increase" },
        { label: "Reach Increase", value: "5M+", description: "Monthly organic reach" }
      ],
      strategies: [
        { title: "Content Strategy & Planning", desc: "Data-driven content calendar with trending topics" },
        { title: "Community Management", desc: "Active engagement and relationship building" },
        { title: "Analytics & Optimization", desc: "Continuous performance monitoring and improvements" },
        { title: "Influencer Collaborations", desc: "Strategic partnerships to expand reach" }
      ],
      tools: [
        { name: "Meta Business Suite", icon: "📘" },
        { name: "TikTok Ads", icon: "🎵" },
        { name: "Sprout Social", icon: "📊" },
        { name: "Canva", icon: "🎨" },
        { name: "Buffer", icon: "📅" }
      ],
      dashboards: [
        "social-dashboard-1.png",
        "social-dashboard-2.png",
        "social-dashboard-3.png",
        "social-dashboard-4.png",
        "social-dashboard-5.png"
      ],
      trustFactors: [
        "Authentic community building",
        "Consistent brand voice",
        "Real engagement, not vanity metrics",
        "Personalized strategy for each platform"
      ]
    },
    {
      id: 3,
      title: "Influencer Marketing",
      icon: "⭐",
      industries: ["FMCG", "Consumer Goods", "Health & Beauty", "Fashion", "Electronics"],
      metrics: [
        { label: "Influencer Network", value: "500+", description: "Creators across all tiers" },
        { label: "Campaign Reach", value: "50M+", description: "Total impressions per campaign" },
        { label: "Engagement Rate", value: "6.2%", description: "Average across creator posts" },
        { label: "UGC Content", value: "1000+", description: "User-generated content pieces" },
        { label: "ROI", value: "8X", description: "Average return on investment" }
      ],
      strategies: [
        { title: "Micro & Macro Influencer Partnerships", desc: "Strategic mix for maximum reach and authenticity" },
        { title: "UGC (User Generated Content)", desc: "Authentic content from real users" },
        { title: "Campaign Management & Tracking", desc: "End-to-end campaign execution with full reporting" },
        { title: "Performance-Based Collaborations", desc: "Results-driven influencer partnerships" }
      ],
      tools: [
        { name: "Creator IQ", icon: "🔍" },
        { name: "AspireIQ", icon: "⭐" },
        { name: "HypeAuditor", icon: "📈" },
        { name: "Linkin.bio", icon: "🔗" },
        { name: "Grin", icon: "💰" }
      ],
      dashboards: [
        "influencer-dashboard-1.png",
        "influencer-dashboard-2.png",
        "influencer-dashboard-3.png",
        "influencer-dashboard-4.png",
        "influencer-dashboard-5.png"
      ],
      trustFactors: [
        "Vetted creator networks",
        "Authentic partnerships only",
        "Transparent performance metrics",
        "Long-term relationship building"
      ]
    }
  ];

  return (
    <main className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Impact</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real campaigns. See how we've transformed brands across diverse industries.
          </p>
        </motion.div>

        {/* Case Studies - Each Service */}
        {caseStudies.map((study, studyIdx) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: studyIdx * 0.2 }}
            className="mb-24"
          >
            {/* Service Section Header Card */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200 mb-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="text-6xl">{study.icon}</div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{study.title}</h2>
                  <p className="text-gray-600 text-lg">Delivered exceptional results across multiple verticals</p>
                </div>
              </div>

              {/* Industries */}
              <div>
                <p className="text-sm font-semibold text-purple-600 mb-3">Industries We Serve:</p>
                <div className="flex flex-wrap gap-3">
                  {study.industries.map((industry, i) => (
                    <span key={i} className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
              {study.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-500">{metric.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Strategies */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200 mb-12">
              <h3 className="text-3xl font-bold mb-8">Our Strategies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {study.strategies.map((strategy, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-white text-xl">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{strategy.title}</h4>
                      <p className="text-sm text-gray-600">{strategy.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Real Dashboard Results */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200 mb-12">
              <h3 className="text-3xl font-bold mb-8">Real Dashboard Results</h3>
              <p className="text-gray-600 mb-8">Live performance metrics from our actual campaigns</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {study.dashboards.map((dashboard, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 via-blue-200 to-pink-200 aspect-square"
                  >
                    {/* Placeholder - Replace with actual dashboard images */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📊</div>
                        <p className="text-white text-xs font-semibold">{dashboard}</p>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Upload: {dashboard}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200 mb-12">
              <h3 className="text-3xl font-bold mb-8">Tools & Platforms We Use</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {study.tools.map((tool, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all"
                  >
                    <div className="text-5xl mb-3">{tool.icon}</div>
                    <p className="font-semibold text-gray-900 text-center text-sm">{tool.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trust Factors */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-12">
              <h3 className="text-3xl font-bold mb-8">Why Brands Trust Us</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {study.trustFactors.map((factor, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">✓</span>
                    </div>
                    <p className="text-lg">{factor}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Section Divider */}
            {studyIdx < caseStudies.length - 1 && (
              <div className="my-12 border-t-2 border-gray-200"></div>
            )}
          </motion.div>
        ))}

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center bg-white rounded-3xl p-12 shadow-lg border border-gray-200"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a custom marketing strategy that delivers measurable results for your business
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2">
            Start Your Case Study <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </main>
  );
};

const About = () => {
  const team = [
    { name: "Sarah Chen", role: "Founder & CEO", specialty: "Growth Strategy", image: "sarah.jpg" },
    { name: "Marcus Rodriguez", role: "Creative Director", specialty: "Brand & Content", image: "marcus.jpg" },
    { name: "Aisha Patel", role: "Head of Performance", specialty: "Paid Media", image: "aisha.jpg" },
    { name: "Jake Morrison", role: "Influencer Lead", specialty: "Creator Partnerships", image: "jake.jpg" }
  ];

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of marketers, creators, and strategists obsessed with driving growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2018, NexusAgency was built on a simple belief: marketing should be measurable, authentic, and profitable.
            </p>
            <p className="text-gray-600 mb-4">
              We've grown from a small team of three to a powerhouse agency working with Fortune 500 brands and fast-growing startups alike.
            </p>
            <p className="text-gray-600">
              Our approach combines data-driven strategy with creative storytelling to deliver campaigns that don't just look good—they drive real business results.
            </p>
          </div>
          <div className="h-96 rounded-3xl overflow-hidden">
            {/* Replace with actual team photo */}
            {/* <img 
              src="/images/about-team.jpg" 
              alt="Our Team" 
              className="w-full h-full object-cover"
            /> */}
            {/* Placeholder - remove when you add real image */}
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-400"></div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Meet The Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden group-hover:scale-105 transition-transform">
                  {/* Replace with actual team member photos */}
                  {/* <img 
                    src={`/images/team/${member.image}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  /> */}
                  {/* Placeholder - remove when you add real images */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-300 to-blue-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-purple-600 font-medium mb-1">{member.role}</p>
                <p className="text-sm text-gray-500">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <main className="pt-32 pb-24 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Talk Growth</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take your marketing to the next level? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-3xl shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none"
              />
              <textarea
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <a href="mailto:barkha@creativeff.com" className="text-gray-600 hover:text-purple-600 transition-colors">barkha@creativeff.com</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600">9899747039</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-pink-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-600">Sector 45, Noida, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            NexusAgency
          </h3>
          <p className="text-gray-400 text-sm">
            Growth-first marketing agency helping brands scale profitably
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">Influencer Marketing</li>
            <li className="hover:text-white cursor-pointer transition-colors">Social Media</li>
            <li className="hover:text-white cursor-pointer transition-colors">Performance Marketing</li>
            <li className="hover:text-white cursor-pointer transition-colors">Content Production</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-white cursor-pointer transition-colors">Our Work</li>
            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/creativefolksfelix_cff?igsh=YXAwdmp2MG12b2tm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/creative-folks-felix/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>© 2026 NexusAgency. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // if (typeof window !== 'undefined') {
  //   window.addEventListener('scroll', () => {
  //     setScrolled(window.scrollY > 50);
  //   });
  // }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} scrolled={scrolled} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
          {currentPage === "services" && <Services />}
          {currentPage === "work" && <Work />}
          {currentPage === "about" && <About />}
          {currentPage === "contact" && <Contact />}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}