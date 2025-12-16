"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/", icon: "🏠" },
        { name: "Book", path: "/book", icon: "📅" },
        { name: "Offers", path: "/offers", icon: "🏷️" },
        { name: "Wallet", path: "/wallet", icon: "💰" },
        { name: "Community", path: "/community", icon: "👥" },
        { name: "Profile", path: "/profile", icon: "👤" },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoWrapper}>
                    <Image
                        src="/images/logo.jpg"
                        alt="Bro_Cutz Logo"
                        width={50}
                        height={50}
                        className={styles.logoImage}
                    />
                    <span className={styles.logoText}>Bro_Cutz</span>
                </Link>
                <ul className={styles.navLinks}>
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                className={`${styles.navItem} ${pathname === item.path ? styles.active : ""
                                    }`}
                            >
                                <span className={styles.icon}>{item.icon}</span>
                                <span className={styles.label}>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
