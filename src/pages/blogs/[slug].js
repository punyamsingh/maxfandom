"use client"
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Client,Databases,Query } from 'appwrite';
import { useState,useEffect } from 'react';
import styles from '@/styles/Home.module.css';

const client = new Client();
const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('maxfandom');

const BlogPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [blogItem,setBlogItem] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await databases.listDocuments(
                    '649bfc2a05e1966040cc',
                    '649bfc37e73c9795de86',
                    [Query.equal('slug',slug)],
                );

                if (response.documents.length > 0) {
                    setBlogItem(response.documents[0]);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchBlogData();
    },[slug]);

    if (!blogItem) {
        return <div>Loading...</div>;
    }

    const { title,content,image } = blogItem;

    return (
        <div>
            {/* <h1 style={{font:"50px"}}>{title}</h1>
            <div className={styles.blogItemImage}>
                <Image src={image} alt={title} width={500} height={500} priority={true} />
            </div> */}
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    );
};

export default BlogPage;
