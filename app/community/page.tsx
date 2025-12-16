"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { communityPosts } from "@/data/mocks";
import styles from "./page.module.css";
import { useToast } from "@/components/ToastProvider";

export default function Community() {
    const { showToast } = useToast();
    const [posts, setPosts] = useState(communityPosts);

    const handleLike = (id: string) => {
        setPosts(posts.map(post => {
            if (post.id === id) {
                return { ...post, likes: post.likes + 1 }; // Simple toggle simulation
            }
            return post;
        }));
    };

    const handleShare = () => {
        showToast("Link copied to clipboard!", "info");
    };

    return (
        <div className={styles.container}>
            <h1 className={`${styles.title} animate-fade-in`}>Community Feed</h1>
            <div className={`${styles.feed} animate-slide-up`}>
                {posts.map((post) => (
                    <div key={post.id} className={styles.post}>
                        <div className={styles.postHeader}>
                            <div className={styles.avatarWrapper}>
                                <Image
                                    src={post.avatar}
                                    alt={post.user}
                                    fill
                                    className={styles.avatar}
                                />
                            </div>
                            <div className={styles.userInfo}>
                                <span className={styles.userName}>{post.user}</span>
                                <span className={styles.timeAgo}>{post.timeAgo}</span>
                            </div>
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={post.image}
                                alt="Post content"
                                fill
                                className={styles.postImage}
                            />
                        </div>
                        <div className={styles.postContent}>
                            <div className={styles.actions}>
                                <button className={styles.actionBtn} onClick={() => handleLike(post.id)}>
                                    ❤️ {post.likes}
                                </button>
                                <button className={styles.actionBtn}>💬 {post.comments}</button>
                                <button className={styles.actionBtn} onClick={handleShare}>
                                    ↗️ Share
                                </button>
                            </div>
                            <p className={styles.caption}>
                                <span className={styles.captionUser}>{post.user}</span>{" "}
                                {post.caption}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <button className={`${styles.fab} animate-scale-in`}>+</button>
        </div>
    );
}
