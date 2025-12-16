"use client";

import Image from "next/image";
import { offers } from "@/data/mocks";
import styles from "./page.module.css";
import { useToast } from "@/components/ToastProvider";

export default function Offers() {
    const { showToast } = useToast();

    const handleClaim = (title: string) => {
        showToast(`Offer "${title}" claimed!`, "success");
    };

    return (
        <div className={styles.container}>
            <h1 className={`${styles.title} animate-fade-in`}>Exclusive Offers</h1>
            <div className={`${styles.grid} animate-slide-up`}>
                {offers.map((offer) => (
                    <div key={offer.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={offer.image}
                                alt={offer.title}
                                fill
                                className={styles.image}
                            />
                            <div className={styles.discountBadge}>{offer.discount}</div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <h2 className={styles.offerTitle}>{offer.title}</h2>
                                <span className={styles.salonName}>{offer.salon}</span>
                            </div>
                            <p className={styles.description}>{offer.description}</p>
                            <div className={styles.footer}>
                                <span className={styles.validity}>Valid until: {offer.validUntil}</span>
                                <button className={styles.claimBtn} onClick={() => handleClaim(offer.title)}>
                                    Claim Offer
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
