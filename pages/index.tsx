import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import  Head  from 'next/head';


const Home: NextPage = () => {
  return (
    <div className='bg-green-500'>
      <Head>
          <title>Home | gestion de proyectos</title>
      </Head>
      <p>Hola mundo Te amo Laura</p>
      <Link href='admin/usuarios'>
        <a className='cursor-pointer'>Ir a admin usuarios</a>
        
      </Link>
      <div>
        <i className="fas fa-home"></i>
        </div>
      </div>
  )
}

export default Home
