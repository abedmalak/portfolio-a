import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Media from '../public/assets/projects/media.png'
import Gym from '../public/assets/projects/gymguide.png'
import Ecom from '../public/assets/projects/ecommerce.png'
import CMS from '../public/assets/projects/capstone.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#3b5998]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

        <ProjectItem
            title='Inventory Management System'
            backgroundImg={CMS}
            projectUrl='/inventory'
            tech='MERN stack'

          />
          <ProjectItem
            title='Ecommerce'
            backgroundImg={Ecom}
            projectUrl='/ecommerce'
            tech='Next JS'
          />
          <ProjectItem
            title='Social Media App'
            backgroundImg={Media}
            projectUrl='/media'
            tech='MERN stack'

          />
          <ProjectItem
            title='Exercise Guide Website'
            backgroundImg={Gym}
            projectUrl='/gymguide'
            tech='React JS'

          />

        
        </div>
      </div>
    </div>
  );
};

export default Projects;
