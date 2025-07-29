import Navbar from '@/components/Navbar';
import ParticlesBackground from '@/components/ParticlesBackground';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Cog, 
  TrendingUp, 
  Wrench, 
  Building, 
  Telescope, 
  Dna, 
  Car,
  ExternalLink,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const clubs = [
  {
    name: 'Programming Club',
    subtitle: 'KamandPrompt',
    description: 'An enthusiastic coder ? Here is the club for you. It is a club dedicated to programming related activities. It keeps you updated with all the programming related activities and competitions. It also organizes several competitions and workshops to increase coding skills. The Association for Computing and Machinery(ACM) Chapter at IIT Mandi organizes various guest lectures and tutorials from time to time.',
    icon: Code,
    website: null,
    color: 'bg-blue-500'
  },
  {
    name: 'Robotronics Club',
    subtitle: 'Robotics + Electronics',
    description: 'Robotics + Electronics = Robotronics. This club works in the field of both robotics and electronics. In electronics domain, it works on analog and digital electronics helping in developing practical skills in building and designing circuits. On the other hand in robotics it provides everything that students need to build robots : workspace , tools, supplies, money and experienced people to answer questions and help with projects.',
    icon: Cog,
    website: null,
    color: 'bg-green-500'
  },
  {
    name: 'Entrepreneurship Cell',
    subtitle: 'E-Cell',
    description: 'E-Cell is a holographic abbreviation adopted by the entrepreneurship club of IIT Mandi. It\'s an alumnus initiation and currently is the stewardship of a team of five inter-disciplinary students with the mentorship of Dr. Satvasheel Powar, churning their ideas to reach the various aspects of what lies in this "business" of reaching the society. And as the name celebrates our crazy love for subjects related to business and its disciplinaries we always strive to give a glimpse of the potions of business by conducting multifarious of events.',
    icon: TrendingUp,
    website: 'https://ecell.iitmandi.co.in/',
    color: 'bg-red-500'
  },
  {
    name: 'Yantrik Club',
    subtitle: 'Mechanical Engineering',
    description: 'As a part of the technical council of IIT Mandi, this club plays a crucial role in the field of mechanical engineering. It focuses on developing green and effective energy methods. It organizes activities like arCAD, MechFest.',
    icon: Wrench,
    website: 'https://yantrik.iitmandi.co.in/',
    color: 'bg-yellow-500'
  },
  {
    name: 'Nirmaan Club',
    subtitle: 'Civil Engineering',
    description: 'Nirmaan Club aims at creating a realization among students of the importance of Civil Engineering aspects in day to day which are often ignored by organizing events, workshops, quizzes, projects etc.',
    icon: Building,
    website: 'https://www.facebook.com/groups/802179339895110/',
    color: 'bg-purple-500'
  },
  {
    name: 'STAC',
    subtitle: 'Space Technology and Astronomy Cell',
    description: 'STAC aims at making students familiar with everything related to Astronomy, Space and Open Source development in the field of Space Technology. The club has 2 telescopes, a 12" telescope under construction, a pair of binoculars and organizes frequent star-gazing sessions and undertakes several interesting technical projects.',
    icon: Telescope,
    website: 'https://stac.iitmandi.co.in/',
    color: 'bg-indigo-500'
  },
  {
    name: 'KBG',
    subtitle: 'Kamand Bioengineering Group',
    description: 'At the juncture of biology and engineering, KBG offers exposure to a multitude of outlooks and a broad variety of topics including computational biology, genetics, neuroscience, biomechanics, biotechnology, nanotechnology, biomimetics and other associated forks diverging from the interplay of nature\'s craft and the intellectual desire to grasp it.',
    icon: Dna,
    website: 'https://www.instagram.com/kbg_iitmandi/',
    color: 'bg-pink-500'
  },
  {
    name: 'SAE',
    subtitle: 'Society of Automotive Engineers',
    description: 'SAE IIT Mandi is a enthusiastic, motivated and passionate team of engineers whose interest resides in gears, suspensions, engines, brakes etc., talking in a nutshell an automobile.',
    icon: Car,
    website: 'https://iitmandi.co.in/',
    color: 'bg-orange-500'
  },
];

export default function Clubs() {
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
          {/* Geometric Lines */}
          <path d="M100 200L300 100L500 250L700 150L900 300L1100 200" stroke="url(#gradient1)" strokeWidth="1"/>
          <path d="M0 400L200 300L400 450L600 350L800 500L1000 400L1200 550" stroke="url(#gradient2)" strokeWidth="1"/>
          <path d="M150 600L350 500L550 650L750 550L950 700L1150 600" stroke="url(#gradient1)" strokeWidth="1"/>
          
          {/* Connection nodes */}
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
      
      {/* Header Section */}
      <section className="relative pt-32 pb-16 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Link to="/">
              <Button variant="outline" size="sm" className="border-tech-500/50 text-tech-400 hover:bg-tech-500/10 mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-left max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-wide">
              <span className="text-cyan-400">
                Technical Clubs
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
              SnTC is a body of students advised by faculty. SnTC constitutes of eight prominent clubs each coordinated by 
              coordinators and comprises of students of similar interest. Each club is advised by a faculty advisor and a co-advisor. All 
              the clubs are open for all the students of IIT Mandi. However, a core team is formed for efficient running of the club.
            </p>
          </div>
        </div>
      </section>

      {/* Clubs Grid - New Style */}
      <section className="relative pb-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club, index) => (
              <div key={index} className="group cursor-pointer">
                {/* Club Card */}
                <div className={`${club.color} rounded-lg h-32 p-6 flex items-center justify-between relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                  {/* Geometric pattern overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                      <path d="M0 50L25 25L50 50L75 25L100 50L75 75L50 50L25 75L0 50Z" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                    </svg>
                  </div>
                  
                  <div className="relative z-10">
                    <club.icon className="w-8 h-8 text-white mb-2" />
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {club.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {club.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Expanded Info Panel */}
                <div className="mt-4 p-6 bg-gray-900/50 rounded-lg border border-gray-700/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
                    {club.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-tech-400 border-tech-500/30 text-xs">
                      Active Club
                    </Badge>
                    
                    {club.website ? (
                      <a
                        href={club.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                      >
                        Visit Website
                        <ExternalLink className="ml-1 w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-gray-500 text-sm">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      
    </div>
  );
}
