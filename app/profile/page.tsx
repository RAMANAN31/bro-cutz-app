"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useToast } from "@/components/ToastProvider";

import { bookings, currentUser } from "@/data/mocks";
import Link from "next/link";

export default function Profile() {
    const router = useRouter();
    const { showToast } = useToast();

    // State for editing
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState(currentUser);
    const [tempData, setTempData] = useState(currentUser);

    const handleEdit = () => {
        setTempData(userData);
        setIsEditing(true);
    };

    const handleSave = () => {
        setUserData(tempData);
        setIsEditing(false);
        showToast("Profile updated successfully!", "success");
        // In a real app, we would make an API call here
    };

    const handleCancel = () => {
        setTempData(userData);
        setIsEditing(false);
    };

    const handleLogout = () => {
        if (confirm("Are you sure you want to log out?")) {
            showToast("Logged out successfully", "info");
            router.push("/");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.avatarWrapper}>
                    <Image
                        src={userData.avatar}
                        alt={userData.name}
                        fill
                        className={styles.avatar}
                    />
                </div>

                {isEditing ? (
                    <div style={{ width: '100%', maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                        <input
                            className={styles.editInput}
                            value={tempData.name}
                            onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
                            placeholder="Name"
                        />
                        <input
                            className={styles.editInput}
                            value={tempData.email}
                            onChange={(e) => setTempData({ ...tempData, email: e.target.value })}
                            placeholder="Email"
                        />
                        <input
                            className={styles.editInput}
                            value={tempData.phone}
                            onChange={(e) => setTempData({ ...tempData, phone: e.target.value })}
                            placeholder="Phone"
                        />
                        <div className={styles.editActions}>
                            <button className={styles.saveBtn} onClick={handleSave}>Save</button>
                            <button className={styles.cancelBtn} onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <h1 className={styles.name}>{userData.name}</h1>
                        <p className={styles.contact}>{userData.email}</p>
                        <p className={styles.contact}>{userData.phone}</p>
                        <button className={styles.editBtn} onClick={handleEdit}>Edit Profile</button>
                    </>
                )}
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>My Bookings</h2>
                <div className={styles.list}>
                    {bookings.slice(0, 3).map((booking) => (
                        <Link key={booking.id} href={`/bookings/${booking.id}`} className={styles.bookingCard}>
                            <div className={styles.bookingInfo}>
                                <h3 className={styles.bookingSalon}>{booking.salonName}</h3>
                                <p className={styles.bookingService}>{booking.service}</p>
                                <p className={styles.bookingDate}>{booking.date} • {booking.time}</p>
                            </div>
                            <span
                                className={`${styles.status} ${booking.status === "Upcoming"
                                    ? styles.statusUpcoming
                                    : styles.statusCompleted
                                    }`}
                            >
                                {booking.status}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Settings</h2>
                <div className={styles.list}>
                    <button className={styles.settingItem}>Notifications</button>
                    <button className={styles.settingItem}>Privacy & Security</button>
                    <button className={styles.settingItem}>Help & Support</button>
                    <button
                        className={`${styles.settingItem} ${styles.logout}`}
                        onClick={handleLogout}
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}
