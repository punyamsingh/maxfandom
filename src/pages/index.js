"use client";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Client,Databases,ID,Query } from 'appwrite';
import { useState,useEffect } from 'react';
import Navbar from './components/Navbar';

const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('maxfandom');

const inter = Inter({ subsets: ['latin'] });

// const blogItems = [
//   {
//     title: 'Jason Todd: Robin Destroyed',
//     image: '/blog1-bg.jpg',
//     author: 'John Doe',
//     image: '/blog1-image.jpg',
//     slug: 'jason-todd',
//   },
//   {
//     title: 'Black Knight: Cursed Avenger',
//     image: '/blog2-bg.jpg',
//     author: 'Jane Smith',
//     image: '/blog2-image.jpg',
//     slug: 'black-knight',
//   },
//   // ... other blog items
// ];

export default function Home() {

  const [blogItems,setblogItems] = useState([]);
  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "649bfc2a05e1966040cc","649bfc37e73c9795de86",
    );

    promise.then(function (response) {
      console.log(response);
      setblogItems(response.documents);
    },function (error) {
      console.log(error);
    });
  },[]);

  // useEffect(() => {
  //   const logoContainer = document.querySelector('.logo-container');
  //   const navbar = document.querySelector('.navbar');
  //   const stickyOffset = navbar?.offsetTop + navbar?.offsetHeight;

  //   function handleScroll() {
  //     const scrollPosition = window.scrollY;
  //     const targetPosition = stickyOffset - logoContainer.offsetHeight;

  //     if (scrollPosition >= targetPosition) {
  //       logoContainer.style.top = `${navbar.offsetHeight}px`;
  //     } else {
  //       logoContainer.style.top = '0px';
  //     }
  //   }

  //   window.addEventListener('scroll',handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll',handleScroll);
  //   };
  // },[]);



  return (
    <div className={styles.body}>
      <style jsx>
        {`

        `}
      </style>
      <Head>
        <title>Max Fandom</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar className="navbar" />
      {/* <div className="container"> */}
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <div className="logo-container">
            <Image
              className={styles.logo}
              src="/logo2.png"
              alt="maxfandom logo"
              width={274}
              height={200}
              priority
            />
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.blogs}>
          <h2 color='white'>Popular Blogs</h2>
          {blogItems.map((item) => (

            <div key={item.slug} className={styles.blogItem}>
              <Link href={`/blogs/${item.slug}`} target="_blank">
                <div className={styles.blogItemImage}>
                  {/* style={{ backgroundImage: `url(${item.image})` }} */}
                  <Image src={item.image} alt={item.title} width={2000} height={0} priority={true} style={{ height: "100%",width: "100%" }} />
                </div>
              </Link>
              <div className={styles.blogItemDetails}>
                <div className={styles.blogItemTitle}>
                  {item.title}
                </div>
                <p>By {item.author}</p>
                <div className={styles.metadesc}>
                  {item.metadesc}
                </div>
                <p>Published On: {item.publish_date.slice(0,10)}</p>
                <div className={styles.readMore}>
                  <Link href={`/blogs/${item.slug}`} className={styles.readMoreButton} target="_blank">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    // </div>
  );
}
