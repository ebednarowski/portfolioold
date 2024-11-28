import React from 'react';
import { Camera, Film, Clapperboard, Youtube, Instagram } from 'lucide-react';

const FilmPortfolio = () => {
  return (
    <div className="min-h-screen bg-sage-50 text-sage-900 font-sans">
      {/* Navigation */}
      <nav className="bg-sage-200 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-sage-800">ALEX CINEMA</h1>
          <div className="space-x-4">
            <a href="#about" className="hover:text-sage-600 transition-colors">About</a>
            <a href="#work" className="hover:text-sage-600 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-sage-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto py-20 text-center">
        <div className="bg-sage-100 rounded-lg p-10 shadow-lg">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Alex Cinema" 
            className="mx-auto rounded-full w-64 h-64 object-cover mb-6 border-4 border-sage-300"
          />
          <h2 className="text-4xl font-bold mb-4 text-sage-800">Alex Rodriguez</h2>
          <p className="text-xl text-sage-700">Film & Media Storyteller | Cinematographer | Editor</p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-sage-100 p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold mb-4 text-sage-800">About Me</h3>
            <p className="text-sage-700 mb-4">
              Passionate filmmaker with a keen eye for visual storytelling. I blend creative vision 
              with technical expertise to create compelling narratives that resonate with audiences.
            </p>
            <div className="flex space-x-4 text-sage-600">
              <Camera size={36} />
              <Film size={36} />
              <Clapperboard size={36} />
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-sage-200 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-sage-800 mb-2">Education</h4>
              <p className="text-sage-700">BFA in Film & Media Studies, Urban Creative University</p>
            </div>
            <div className="bg-sage-200 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-sage-800 mb-2">Skills</h4>
              <ul className="list-disc list-inside text-sage-700">
                <li>Cinematography</li>
                <li>Video Editing</li>
                <li>Color Grading</li>
                <li>Documentary Filmmaking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="container mx-auto py-16 px-4 bg-sage-50">
        <h3 className="text-3xl font-bold text-center mb-12 text-sage-800">Portfolio Highlights</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div 
              key={project} 
              className="bg-sage-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img 
                src={`https://via.placeholder.com/400x300`} 
                alt={`Project ${project}`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-sage-800">Project {project} Title</h4>
                <p className="text-sage-700">Brief description of the film project and its significance.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16 px-4">
        <div className="bg-sage-200 rounded-lg p-10 text-center shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-sage-800">Let's Connect</h3>
          <div className="flex justify-center space-x-8 mb-6 text-sage-700">
            <a href="#" className="hover:text-sage-900 transition-colors">
              <Youtube size={36} />
            </a>
            <a href="#" className="hover:text-sage-900 transition-colors">
              <Instagram size={36} />
            </a>
          </div>
          <p className="text-sage-800 mb-6">
            Email: alex.cinema@email.com | Phone: (555) 123-4567
          </p>
          <a 
            href="#" 
            className="bg-sage-700 text-white px-8 py-3 rounded-full hover:bg-sage-800 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-300 py-6 text-center">
        <p className="text-sage-800">© 2024 Alex Rodriguez. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FilmPortfolio />);

export default FilmPortfolio;