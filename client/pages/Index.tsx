import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import vaibhav from '../images/vaibhav.jpg';

import { 
  Rocket, 
  Users, 
  Trophy, 
  Code, 
  Zap, 
  Brain,
  ChevronRight,
  ArrowRight,
  Star,
  Cog,
  TrendingUp,
  Wrench,
  Building,
  Telescope,
  Dna,
  Car
} from 'lucide-react';

const technicalClubs = [
  {
    name: 'Programming Club',
    subtitle: 'KamandPrompt',
    description: 'Dedicated to programming activities, competitions, and skill development.',
    icon: Code,
    color: 'bg-blue-500'
  },
  {
    name: 'Robotronics Club',
    subtitle: 'Robotics + Electronics',
    description: 'Working in robotics and electronics with practical circuit building.',
    icon: Cog,
    color: 'bg-green-500'
  },
  {
    name: 'Entrepreneurship Cell',
    subtitle: 'E-Cell',
    description: 'Business-oriented activities and entrepreneurship development.',
    icon: TrendingUp,
    color: 'bg-red-500'
  },
  {
    name: 'Yantrik Club',
    subtitle: 'Mechanical Engineering',
    description: 'Green energy methods and mechanical engineering projects.',
    icon: Wrench,
    color: 'bg-yellow-500'
  },
  {
    name: 'Nirmaan Club',
    subtitle: 'Civil Engineering',
    description: 'Civil engineering awareness and practical applications.',
    icon: Building,
    color: 'bg-purple-500'
  },
  {
    name: 'STAC',
    subtitle: 'Space & Astronomy',
    description: 'Space technology, astronomy, and star-gazing sessions.',
    icon: Telescope,
    color: 'bg-indigo-500'
  },
  {
    name: 'KBG',
    subtitle: 'Bioengineering Group',
    description: 'Biology meets engineering in computational and bio projects.',
    icon: Dna,
    color: 'bg-pink-500'
  },
  {
    name: 'SAE',
    subtitle: 'Automotive Engineers',
    description: 'Passionate team working on automotive engineering projects.',
    icon: Car,
    color: 'bg-orange-500'
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100 200L300 100L500 250L700 150L900 300L1100 200" stroke="url(#gradient1)" strokeWidth="1"/>
          <path d="M0 400L200 300L400 450L600 350L800 500L1000 400L1200 550" stroke="url(#gradient2)" strokeWidth="1"/>
          <path d="M150 600L350 500L550 650L750 550L950 700L1150 600" stroke="url(#gradient1)" strokeWidth="1"/>
          
          <circle cx="300" cy="100" r="3" fill="#22c55e" opacity="0.6"/>
          <circle cx="700" cy="150" r="3" fill="#0ea5e9" opacity="0.6"/>
          <circle cx="900" cy="300" r="3" fill="#22c55e" opacity="0.6"/>
          <circle cx="400" cy="450" r="3" fill="#0ea5e9" opacity="0.6"/>
          <circle cx="750" cy="550" r="3" fill="#22c55e" opacity="0.6"/>
          
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 tracking-wide">
                <span className="text-cyan-400">Science and</span>
                <br />
                <span className="text-cyan-400">Technology Council</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                SnTC is IIT Mandi's Technical Society where innovation and excellence come to play! As the vibrant 
                umbrella of our tech clubs, SnTC sparks transformative advancements across countless fields. Our dynamic 
                team of tech enthusiasts and experts are always pushing the boundaries of what's possible, turning wild ideas into cutting-edge 
                projects that revolutionize industries and improve lives around the globe.
              </p>
              

            </div>
            
            {/* XPECTO Logo/Branding Area */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-48 h-48 rounded-full border-4 border-cyan-400/30 flex items-center justify-center relative">
                  <div className="w-32 h-32 rounded-full border-2 border-cyan-400 flex items-center justify-center bg-cyan-500/10">
                    <div className="text-cyan-400 text-2xl font-bold">SnTC</div>
                  </div>
                  <div className="absolute top-4 right-4 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 left-2 w-4 h-4 bg-cyan-600 rounded-full animate-pulse delay-700"></div>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Technical Clubs Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-cyan-400">
              Technical Clubs
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mb-8 leading-relaxed">
              SnTC is a body of students advised by faculty. SnTC constitutes of eight prominent clubs each coordinated by 
              coordinators and comprises of students of similar interest. Each club is advised by a faculty advisor and a co-advisor. All 
              the clubs are open for all the students of IIT Mandi. However, a core team is formed for efficient running of the club.
            </p>

          </div>

          {/* Horizontal Scrolling Clubs */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
                {technicalClubs.map((club, index) => (
                  <div key={index} className="w-80 flex-shrink-0">
                    <div className={`${club.color} rounded-lg h-24 p-4 flex items-center justify-between relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                      <div className="absolute inset-0 opacity-20">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                          <path d="M0 50L25 25L50 50L75 25L100 50L75 75L50 50L25 75L0 50Z" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <club.icon className="w-6 h-6 text-white mb-1" />
                        <h3 className="text-white font-semibold text-sm leading-tight">
                          {club.name}
                        </h3>
                        <p className="text-white/80 text-xs">
                          {club.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-3 p-4 bg-gray-900/30 rounded-lg border border-gray-700/30">
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {club.description}
                      </p>
                      <Link 
                        to="/clubs"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-2"
                      >
                        Explore Club
                        <ChevronRight className="ml-1 w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Offerings by SnTC Section */}
      <section id="offerings" className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-cyan-400">
              Offerings by SnTC
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Organising and Managing Events',
                description: 'SnTC organizes and manages major events like Xpecto.'
              },
              {
                title: 'Project Work',
                description: 'SnTC offers and manages all the projects like URC, Cansat etc.'
              },
              {
                title: 'Hosting Services',
                description: 'Student Projects can also be hosted on SnTC Server.'
              },
              {
                title: 'Technical Induction Program',
                description: 'Aimed at introducing the participants with key technical skills.'
              }
            ].map((offering, index) => (
              <div key={index} className="bg-black/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer">
                {/* Geometric background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                    <path d="M0 50L25 25L50 50L75 25L100 50L75 75L50 50L25 75L0 50Z" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                  </svg>
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-4 leading-tight">
                    {offering.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cells @ IIT Mandi Section */}
      <section id="cells" className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-cyan-400">
              Cells @ IIT Mandi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* GDSC Cell - White Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

              <div className="flex items-center mb-6">
                <div className="flex items-center space-x-1">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg transform rotate-45"></div>
                  <div className="w-8 h-8 bg-red-500 rounded-lg transform -rotate-12"></div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-lg transform rotate-12"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-lg transform rotate-45"></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">GDSC</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Google Developer Student Clubs. Google DSCs are a program run by Google to support and empower students who are interested in technology. They provide resources and support for students to learn and apply their skills, including access to Google technologies, mentorship from Google experts, and opportunities to connect with other students and professionals in the tech industry.
              </p>


            </div>

            {/* Heuristics Cell - Black Card */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 group cursor-pointer relative overflow-hidden border border-gray-700">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-900/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

              <div className="flex items-center mb-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  H
                </div>
                <div className="ml-1 text-xl text-cyan-400">euristics</div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Heuristics</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                At Heuristics we focus on enhancing the culture of Data Science, Machine Learning at IIT Mandi. It also expands to solve complex optimization problems. It underlies the whole field of Artificial Intelligence and the computer simulation of thinking. We organize regular events, challenges and workshops.
              </p>


            </div>

            {/* CG2D Cell - Black Card */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 group cursor-pointer relative overflow-hidden border border-gray-700">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-900/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                  <span className="text-black font-bold text-lg">CG</span>
                </div>
                <div className="ml-2 text-green-400 font-bold text-xl">2D</div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">CG2D Club</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The CG2D Club is a community for digital creativity and interactive entertainment. We offer workshops, projects, and seminars on 3D modeling, animation, game design, and real-time rendering. Our programs help members create stunning visuals and immersive games.
              </p>


            </div>

            {/* S.A.I.C Cell - White Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-100 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

              <div className="flex items-center mb-6">
                <div className="w-16 h-12 bg-black rounded-lg flex items-center justify-center relative">
                  <span className="text-white font-bold text-lg">S.A.I.C</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">S.A.I.C</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Welcome to S.A.I.C (System Administration and Infosec Cell) at IIT Mandi! Our team of cyber enthusiasts excels in Capture The Flag (CTF) competitions and outsmarting hackers. We host and maintain secure websites with style and finesse. Join us to help script a future where security breaches are history!
              </p>


            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[


              {
                title: 'Achievements',
                description: 'Celebrate our victories, awards, and recognition in the tech world.',
                icon: Trophy,
                href: '/achievements',
                badge: '25+ Awards'
              },
              {
                title: 'Our Team',
                description: 'Meet the dedicated individuals driving innovation and excellence.',
                icon: Users,
                href: '/team',
                badge: 'Meet Us'
              },

            ].map((item, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <Badge variant="outline" className="text-cyan-400 border-cyan-500/30 text-xs">
                    {item.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                <Link 
                  to={item.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                >
                  Learn More
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Profile Section */}
      <section className="relative py-20 px-4 z-10" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8 md:p-12 relative overflow-hidden">
            {/* Geometric background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 400 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M50 100L100 50L150 100L200 50L250 100L300 50L350 100" stroke="url(#gradient3)" strokeWidth="1"/>
                <path d="M0 150L50 100L100 150L150 100L200 150L250 100L300 150L350 100L400 150" stroke="url(#gradient4)" strokeWidth="1"/>
                <circle cx="100" cy="50" r="2" fill="#22c55e" opacity="0.6"/>
                <circle cx="200" cy="50" r="2" fill="#0ea5e9" opacity="0.6"/>
                <circle cx="300" cy="50" r="2" fill="#22c55e" opacity="0.6"/>
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4"/>
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0.4"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
              {/* Profile Image */}
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <img
                    src={vaibhav}
                    alt="Vaibhav Kesharwani"
                    className="w-52 h-52 rounded-full object-cover border-4 border-cyan-400/30"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="md:col-span-2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
                  Vaibhav Kesharwani
                </h2>
                <p className="text-lg text-cyan-400 mb-4">
                  Technical Secretary
                </p>

                {/* Contact Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center md:justify-start">
                    <svg className="w-4 h-4 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <a href="mailto:technical_secretary@students.iitmandi.ac.in" className="text-gray-300 hover:text-cyan-400 text-lg">
                      technical_secretary@students.iitmandi.ac.in
                    </a>
                  </div>

                  {/* Social Media Links */}
                  <div className="flex items-center justify-center md:justify-start space-x-4 pt-2">
                    <a href="https://www.linkedin.com/in/born-engineer73/" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/born_engineer73/" className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-gray-800/50 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-cyan-500 rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-xs">S</span>
            </div>
            <span className="text-lg font-bold text-cyan-400">
              Science & Technical Council
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            Copyright © 2024 All Rights Reserved by SnTC, IIT Mandi
          </p>
        </div>
      </footer>
    </div>
  );
}
