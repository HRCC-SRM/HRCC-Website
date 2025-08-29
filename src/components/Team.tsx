import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  socials?: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
    website?: string;
    websiteLabel?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, socials }) => (
  <div className="group relative overflow-hidden rounded-lg bg-gray-900 p-6 transition-all duration-300 hover:scale-105">
    <div className="relative h-64 w-full overflow-hidden rounded-md">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-gray-300">{role}</p>
          {socials && (
            <div className="mt-2 flex flex-wrap gap-3">
              {socials.website && (
                <a href={socials.website} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400" title={socials.websiteLabel || 'Website'}>
                  <span className="sr-only">Website</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              )}
              {socials.linkedin && (
                <a href={`https://linkedin.com/in/${socials.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400" title="LinkedIn">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
              {socials.github && (
                <a href={`https://github.com/${socials.github}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400" title="GitHub">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C20.565 20.115 24 16.379 24 12.017 24 6.484 19.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {socials.instagram && (
                <a href={`https://instagram.com/${socials.instagram}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500" title="Instagram">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
              {socials.twitter && (
                <a href={`https://twitter.com/${socials.twitter}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400" title="Twitter">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Team: React.FC = () => {
  const founders = [
    {
      name: 'Abhiraj Bhowmick',
      role: 'Founder',
      image: '/team/abhiraj.jpg',
      socials: {
        twitter: 'rainboestrykr',
        instagram: 'abhiraj.fr',
        linkedin: 'abhiraj-bhowmick',
        github: 'rainboestrykr',
        website: 'https://abhiraj.co',
        websiteLabel: 'website/abhiraj'
      }
    },
    {
      name: 'Yashi Ghosh',
      role: 'Founder',
      image: '/team/yashi.jpg',
      socials: {
        instagram: 'yashi.ghosh',
        linkedin: 'yashi-ghosh-2005m',
        github: 'yashighosh',
        website: 'http://google.com',
        websiteLabel: 'website/yashighosh'
      }
    },
    {
      name: 'Arnav Puggal',
      role: 'Founder',
      image: '/team/puggal.jpeg',
      socials: {
        instagram: 'arnav_puggal',
        linkedin: 'arnav-puggal-ab72b5247',
        github: '12asascoder',
        website: 'https://new-portfolio-website-rosy.vercel.app/',
        websiteLabel: 'website/arnavpuggal'
      }
    },
    {
      name: 'Tanvi Kabi',
      role: 'Founder',
      image: '/team/tanvi.jpeg',
      socials: {
        instagram: 'tanvikabi',
        linkedin: 'tanvi-kabi-44582b364',
        website: 'https://google.com',
        websiteLabel: 'website/tanvikabi'
      }
    }
  ];

  const technicalLeads = [
    {
      name: 'Technical Lead 1',
      role: 'Technical Lead',
      image: '/img/team/tech_lead1.jpg',
      socials: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Technical Lead 2',
      role: 'Technical Lead',
      image: '/img/team/tech_lead2.jpg',
      socials: {
        linkedin: '#',
        github: '#'
      }
    }
  ];

  const corporateLeads = [
    {
      name: 'Corporate Lead 1',
      role: 'Corporate Lead',
      image: '/img/team/corp_lead1.jpg',
      socials: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Corporate Lead 2',
      role: 'Corporate Lead',
      image: '/img/team/corp_lead2.jpg',
      socials: {
        linkedin: '#',
        github: '#'
      }
    }
  ];

  const creativeLeads = [
    {
      name: 'Creative Lead 1',
      role: 'Creative Lead',
      image: '/img/team/creative_lead1.jpg',
      socials: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Creative Lead 2',
      role: 'Creative Lead',
      image: '/img/team/creative_lead2.jpg',
      socials: {
        linkedin: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="team" className="bg-black py-20 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="special-font mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Our <span className="text-green-600">Team</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Meet the brilliant minds behind Hacker Rank Tech Circle
          </p>
        </div>

        {/* Founders */}
        <div className="mb-20">
          <h3 className="mb-8 text-2xl font-bold md:text-3xl">Founding Team</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {founders.map((member, index) => (
              <TeamMember key={`founder-${index}`} {...member} />
            ))}
          </div>
        </div>

        {/* Technical Leads */}
        <div className="mb-20">
          <h3 className="mb-8 text-2xl font-bold md:text-3xl">Technical Team</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {technicalLeads.map((lead, index) => (
              <TeamMember key={`tech-lead-${index}`} {...lead} />
            ))}
          </div>
        </div>

        {/* Corporate Leads */}
        <div className="mb-20">
          <h3 className="mb-8 text-2xl font-bold md:text-3xl">Corporate Team</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {corporateLeads.map((lead, index) => (
              <TeamMember key={`corp-lead-${index}`} {...lead} />
            ))}
          </div>
        </div>

        {/* Creative Leads */}
        <div>
          <h3 className="mb-8 text-2xl font-bold md:text-3xl">Creative Team</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {creativeLeads.map((lead, index) => (
              <TeamMember key={`creative-lead-${index}`} {...lead} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
