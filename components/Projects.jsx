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
            title='Sultan Steel | Trading Website'
            backgroundImg={Ecom}
            projectUrl='/ecommerce'
            tech='Next JS'
          />
          <ProjectItem
            title='Mediapp'
            backgroundImg={Media}
            projectUrl='/media'
            tech='React JS'

          />
          <ProjectItem
            title='Gym Guide'
            backgroundImg={Gym}
            projectUrl='/gymguide'
            tech='React JS'

          />
           <ProjectItem
            title='CMS'
            backgroundImg={CMS}
            projectUrl='/'
            tech='Next JS'

          />
        
        </div>
      </div>
    </div>
  );
};

export default Projects;
