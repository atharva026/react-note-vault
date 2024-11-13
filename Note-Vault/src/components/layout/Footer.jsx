import React from 'react';

function Footer({linkedinLink, githubLink}) {
  return (
    <footer id="footer" style={{ backgroundColor: '#262626' }} className="text-white py-4">
      <div className="container mx-auto">
        <p className="text-center text-lg">Made by <a href={linkedinLink} target="_blank" className='underline'>Atharva Mane</a> -
          <a href={githubLink} target="_blank" className="text-white hover:text-gray-400 pl-2"><i className="fab fa-github"></i></a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;