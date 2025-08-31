import { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import gsap from "gsap";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  github,
  linkedin,
  instagram,
  twitter,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;
    
    gsap.to(cardRef.current, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: "power1.out"
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    
    gsap.to(cardRef.current, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.out"
    });
    setIsHovered(false);
  };

  const socialLinks = [
    { icon: FaGithub, url: github, label: "GitHub" },
    { icon: FaLinkedin, url: linkedin, label: "LinkedIn" },
    { icon: FaInstagram, url: instagram, label: "Instagram" },
    { icon: FaTwitter, url: twitter, label: "Twitter" },
  ].filter(link => link.url);

  return (
    <div
      ref={cardRef}
      className="group relative h-[420px] w-full max-w-[280px] cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent blur-xl transition-all duration-500 group-hover:blur-2xl group-hover:from-white/10"></div>
      
      {/* Main Card */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-sm transition-all duration-500 group-hover:border-white/20 group-hover:bg-black/90">
        
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="special-font mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#05C770]">
            {name}
          </h3>
          <p className="mb-4 text-sm text-gray-300 transition-colors duration-300 group-hover:text-[#DBFFC2]">
            {role}
          </p>
          
          {/* Social Links - Only in content area */}
          {socialLinks.length > 0 && (
            <div className="flex justify-center gap-2 relative z-20">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-all duration-300 hover:bg-[#05C770] hover:text-black relative z-30"
                  aria-label={label}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Subtle Animated Border */}
        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-white/20 to-white/10 bg-clip-border opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      </div>
    </div>
  );
};

const Team = () => {
  const founders = [
    {
      name: "Abhiraj Bhowmick",
      role: "Founder",
      image: "/team/abhiraj.jpg",
      github: "https://github.com/rainboestrykr",
      linkedin: "https://linkedin.com/in/abhiraj-bhowmick",
      twitter: "https://twitter.com/rainboestrykr",
      instagram: "https://instagram.com/abhiraj.fr",
    },
    {
      name: "Yashi Ghosh",
      role: "Founder",
      image: "/team/yashi.jpg",
      github: "https://github.com/yashighosh",
      linkedin: "https://linkedin.com/in/yashi-ghosh-2005m",
      instagram: "https://instagram.com/yashi.ghosh",
    },
    {
      name: "Tanvi Kabi",
      role: "Founder",
      image: "/team/tanvi.jpeg",
      linkedin: "https://linkedin.com/in/tanvi-kabi-44582b364",
      instagram: "https://instagram.com/tanvikabi",
    },
    {
      name: "Arnav Puggal",
      role: "Founder",
      image: "/team/puggal.jpeg",
      github: "https://github.com/12asascoder",
      linkedin: "https://linkedin.com/in/arnav-puggal-ab72b5247",
      instagram: "https://instagram.com/arnav_puggal",
    },
  ];

  const technicalLeads = [
    {
      name: "Anik Das",
      role: "Technical Lead",
      image: "/team/anik.jpg",
      github: "https://github.com/anik-das",
      linkedin: "https://linkedin.com/in/anik-das",
    },
    {
      name: "Pratyush Srivastava",
      role: "Technical Lead",
      image: "/team/pratyush.jpg",
      github: "https://github.com/pratyush-srivastava",
      linkedin: "https://linkedin.com/in/pratyush-srivastava",
    },
  ];

  const creativeLeads = [
    {
      name: "Shagun Upman",
      role: "Creative Lead",
      image: "/team/shagun.jpg",
      linkedin: "https://linkedin.com/in/shagun-upman",
      instagram: "https://instagram.com/shagun.upman",
    },
    {
      name: "Aarushi Sarkar",
      role: "Creative Lead",
      image: "/team/aarushi.jpeg",
      linkedin: "https://linkedin.com/in/aarushi-sarkar",
      github: "https://github.com/aarushi-sarkar",
    },
  ];

  const corporateLeads = [
    {
      name: "Ayush Kumar",
      role: "Corporate Lead",
      image: "/team/ayush.jpg",
      linkedin: "https://linkedin.com/in/ayush-kumar",
      github: "https://github.com/ayush-kumar",
    },
    {
      name: "Amrita Hariharan",
      role: "Corporate Lead",
      image: "/team/amrita.jpg",
      linkedin: "https://linkedin.com/in/amrita-hariharan",
      github: "https://github.com/amrita-hariharan",
    },
  ];

  return (
    <section id="team" className="relative min-h-screen w-screen bg-black py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#05C770] via-transparent to-[#DBFFC2]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(5,199,112,0.1),transparent_50%)]"></div>
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Founders Section */}
        <div className="mb-24 text-center">
          <p className="font-general text-xs uppercase tracking-widest text-gray-400 mb-4">
            Meet Our Team
          </p>
          <h2 className="special-font mb-8 text-4xl font-black md:text-5xl lg:text-6xl text-white" style={{ textTransform: 'none', fontVariant: 'normal', fontFeatureSettings: '"case" off' }}>
            The Founders of <span className="bg-gradient-to-r from-[#05C770] to-[#DBFFC2] bg-clip-text text-transparent">HRCC SRM</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {founders.map((member, index) => (
              <TeamMember key={`founder-${index}`} {...member} />
            ))}
          </div>
        </div>

        {/* Domain Leads Section */}
        <div className="mb-24 text-center">
          <p className="font-general text-xs uppercase tracking-widest text-gray-400 mb-4">
            Domain Leadership
          </p>
          <h2 className="special-font mb-16 text-4xl font-black md:text-5xl lg:text-6xl text-white" style={{ textTransform: 'none', fontVariant: 'normal', fontFeatureSettings: '"case" off' }}>
            Our <span className="bg-gradient-to-r from-[#DBFFC2] to-[#05C770] bg-clip-text text-transparent">Domain Leads</span>
          </h2>

          {/* Technical Leads */}
          <div className="mb-20">
            <h3 className="special-font mb-12 text-3xl font-black md:text-4xl text-white" style={{ textTransform: 'none', fontVariant: 'normal', fontFeatureSettings: '"case" off' }}>
              <span className="bg-gradient-to-r from-[#DBFFC2] to-[#05C770] bg-clip-text text-transparent">
                Technical
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {technicalLeads.map((lead, index) => (
                <TeamMember key={`tech-lead-${index}`} {...lead} />
              ))}
            </div>
          </div>

          {/* Creative Leads */}
          <div className="mb-20">
            <h3 className="special-font mb-12 text-3xl font-black md:text-4xl text-white" style={{ textTransform: 'none', fontVariant: 'normal', fontFeatureSettings: '"case" off' }}>
              <span className="bg-gradient-to-r from-[#05C770] to-[#DBFFC2] bg-clip-text text-transparent">
                Creatives
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {creativeLeads.map((lead, index) => (
                <TeamMember key={`creative-lead-${index}`} {...lead} />
              ))}
            </div>
          </div>

          {/* Corporate Leads */}
          <div>
            <h3 className="special-font mb-12 text-3xl font-black md:text-4xl text-white" style={{ textTransform: 'none', fontVariant: 'normal', fontFeatureSettings: '"case" off' }}>
              <span className="bg-gradient-to-r from-[#05C770] to-[#DBFFC2] bg-clip-text text-transparent">
                Corporate
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {corporateLeads.map((lead, index) => (
                <TeamMember key={`corp-lead-${index}`} {...lead} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
