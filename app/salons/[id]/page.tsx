"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { salons, services, topBarbers } from "@/data/mocks";

export default function SalonDetails() {
    const params = useParams();
    const router = useRouter();
    const id = params?.id as string;

    // Find salon details from mock data
    // In a real app, this would be a data fetch
    const salon = salons.find((s) => s.id === id);

    if (!salon) {
        return (
            <div className={styles.container}>
                <div style={{ padding: "4rem", textAlign: "center" }}>
                    <h1>Salon Not Found</h1>
                    <Link href="/" style={{ color: "var(--color-accent-blue)" }}>
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    // Filter barbers for this salon (mock logic: just show top barbers for now)
    // In real app we'd filter by salon
    const salonBarbers = topBarbers;

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <Image
                    src={salon.image}
                    alt={salon.name}
                    fill
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.overlay}>
                    <h1 className={`${styles.name} animate-fade-in`}>{salon.name}</h1>
                    <div className={styles.meta}>
                        <span>📍 {salon.address}</span>
                        <span className={styles.rating}>⭐ {salon.rating}</span>
                    </div>
                </div>
            </div>

            <div className={`${styles.content} animate-slide-up`}>
                {/* About Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>About</h2>
                    <p className={styles.description}>
                        {
                            // Use updated description if available, else fallback
                            (salon as any).description || "A premium salon experience offering the best cuts and shaves."
                        }
                    </p>
                    <div className={styles.hours}>
                        <span>🕒</span>
                        <span>{(salon as any).openingHours || "Mon-Sun: 9am - 9pm"}</span>
                    </div>
                </section>

                {/* Services Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Services</h2>
                    <div className={styles.grid}>
                        {services.map((service) => (
                            <div key={service.id} className={`${styles.serviceCard} hover-scale`}>
                                <div className={styles.serviceInfo}>
                                    <h3>{service.name}</h3>
                                    <p>{service.duration} mins • {service.description}</p>
                                </div>
                                <div className={styles.servicePrice}>₹{service.price}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Barbers Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Our Barbers</h2>
                    <div className={styles.grid} style={{ overflowX: 'auto', display: 'flex', gap: '1rem', paddingBottom: '1rem' }}>
                        {salonBarbers.map((barber) => (
                            <div
                                key={barber.id}
                                style={{
                                    minWidth: '200px',
                                    background: 'var(--color-dark-grey)',
                                    borderRadius: 'var(--radius-md)',
                                    padding: '1rem',
                                    textAlign: 'center'
                                }}
                                className="hover-lift"
                            >
                                <div style={{
                                    position: 'relative',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    margin: '0 auto 1rem'
                                }}>
                                    <Image src={barber.image} alt={barber.name} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <h3>{barber.name}</h3>
                                <div style={{ color: 'var(--color-gold)', fontSize: '0.875rem' }}>⭐ {barber.rating}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Reviews Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Reviews</h2>
                    {((salon as any).reviews || []).map((review: any) => (
                        <div key={review.id} className={styles.reviewCard}>
                            <div className={styles.reviewHeader}>
                                <span className={styles.reviewUser}>{review.user}</span>
                                <span style={{ color: 'var(--color-gold)' }}>{"★".repeat(review.rating)}</span>
                            </div>
                            <p className={styles.reviewText}>"{review.text}"</p>
                        </div>
                    ))}
                </section>
            </div>

            <Link href="/book" className={`btn-primary ${styles.bookBtn} animate-scale-in`}>
                Book Appointment
            </Link>
        </div>
    );
}
