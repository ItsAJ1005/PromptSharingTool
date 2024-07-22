"use client";

import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setProviders();
    }, [])

  return (
    <nav className='flex-between mb-16 w-full pt-3'>
     <Link href="/" className='flex gap-2 flwx-center'>
        <Image 
            width={30}
            height={30}
            className='object-contain'
            src="/assets/images/logo.svg"
            alt="Get your Prompts Logo"
        />
     </Link>

     {/* Mobile Nav */}
     <div className='sm:flex hidden'>

        { isUserLoggedIn? (

            <div className='flex gap-3 md:gap-5'>
                <Link href="/create-prompt" className='black_btn'>
                    Create Post
                </Link>

                <button typr="button" onClick={signOut} className='outline_btn'> Sign Out</button>

                <Link href="/profile">
                    <Image
                        src='/assets/images/logo.svg'
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='profile'

                    />
                </Link>
            </div>

            
        ) : (
            <>
                {providers && Object.values(providers).map((provider) => (
                    <button
                        type='button'
                        className='black_btn'
                        key={provider.name}
                        onClick={ () => signIn(procider.id)}
                    >
                        Sign In
                    </button>
                ))}
            </>
        ) }
     </div>
    </nav>
  )
}

export default Nav
