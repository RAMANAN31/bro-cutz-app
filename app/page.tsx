"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { salons, trendingStyles, topBarbers } from "@/data/mocks";
import styles from "./page.module.css";

const FILTERS = ["All", "Top Rated", "Nearest", "Price: Low"];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSalons = useMemo(() => {
    let result = salons;

    // Search Filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.address.toLowerCase().includes(query)
      );
    }

    // Category Filter
    if (activeFilter === "Top Rated") {
      result = result.filter((s) => s.rating >= 4.7);
    }
    // "Nearest" and "Price: Low" would require geolocation/price averages in a real app
    // For now we'll just mock it or leave as is since we don't have that data in the top-level salon object easily accessible for sorting without more complexity

    return result;
  }, [searchQuery, activeFilter]);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={`${styles.hero} animate-fade-in`}>
        <div className={styles.heroLogoWrapper}>
          <Image
            src="/images/logo_hero.jpg"
            alt="Bro_Cutz Hero Logo"
            width={120}
            height={120}
            className={styles.heroLogo}
            priority
          />
        </div>
        <h1 className={styles.title}>
          Bro<span className={styles.scissors}>✂️</span>Cutz
        </h1>
        <p className={styles.tagline}>Your All-in-One Grooming Companion</p>
        <Link href="/book" className="btn-primary animate-scale-in">
          Book Now
        </Link>
      </section>

      {/* Featured Salons */}
      <section className={`${styles.section} animate-slide-up`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>Featured Salons</h2>
          <Link href="/book" className={styles.seeAll}>
            See All
          </Link>
        </div>

        {/* Search & Filter */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search salons..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className={styles.filterChips}>
            {FILTERS.map(filter => (
              <button
                key={filter}
                className={`${styles.chip} ${activeFilter === filter ? styles.activeChip : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.cardGrid}>
          {filteredSalons.map((salon) => (
            <Link key={salon.id} href={`/salons/${salon.id}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={salon.image}
                  alt={salon.name}
                  fill
                  className={styles.cardImage}
                />
                <div className={styles.rating}>⭐ {salon.rating}</div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{salon.name}</h3>
                <p className={styles.cardSubtitle}>{salon.address}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Styles */}
      <section className={`${styles.section} animate-slide-up`} style={{ animationDelay: "0.2s" }}>
        <h2 className={styles.heading}>Trending Styles</h2>
        <div className={styles.horizontalScroll}>
          {trendingStyles.map((style) => (
            <div key={style.id} className={styles.styleCard}>
              <div className={styles.styleImageWrapper}>
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.styleContent}>
                <span className={styles.styleName}>{style.name}</span>
                <span className={styles.likes}>❤️ {style.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Barbers */}
      <section className={`${styles.section} animate-slide-up`} style={{ animationDelay: "0.4s" }}>
        <h2 className={styles.heading}>Top Rated Barbers</h2>
        <div className={styles.list}>
          {topBarbers.map((barber) => (
            <div key={barber.id} className={styles.listItem}>
              <div className={styles.avatarWrapper}>
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  className={styles.avatar}
                />
              </div>
              <div className={styles.listContent}>
                <h3 className={styles.listTitle}>{barber.name}</h3>
                <p className={styles.listSubtitle}>{barber.salon}</p>
              </div>
              <div className={styles.listRating}>⭐ {barber.rating}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
