import React from 'react';

const Footer = () => {
  return (
    <div className=" text-white py-12 border-t-8 border-primary" style={{background : '#55565A'}}>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div>
          <ul className='font-extralight'>
            <li className='mb-2 hover:underline'><a href="/">Inicio</a></li>
            <li className='mb-2 hover:underline'><a href="/contacto">Contacto</a></li>
            <li className='mb-2 hover:underline'><a href="/preguntas-frecuentes">Preguntas Frecuentes</a></li>
            <li className='mb-2 hover:underline'><a href="/aviso-de-privacidad">Aviso de Privacidad</a></li>
            <li className='mb-2 hover:underline'><a href="/terminos-y-condiciones">Términos y Condiciones</a></li>
            <li className='mb-2'>© 2023 Nicté Club</li>
          </ul>
        </div>
        
        <div className="">
          <div>
            <p className='font-extralight'>fpacheco@ipachdev.com</p>
          </div>
          <div className='flex items-end w-full'>
            <a
                href="https://www.facebook.com/OlaKiPach"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                className="w-6 h-6 text-white hover:text-primary transition-colors duration-300"
                src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_facebook-512.png"
                alt="Facebook"
                />
            </a>
            <a
                href="https://www.instagram.com/nicteclub/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                className="w-6 h-6 text-white hover:text-primary transition-colors duration-300"
                src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Instagram-512.png"
                alt="Instagram"
                />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
