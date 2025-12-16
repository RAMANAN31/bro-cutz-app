"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import { bookings } from "@/data/mocks";
import { useToast } from "@/components/ToastProvider";

export default function BookingDetail() {
    const params = useParams();
    const router = useRouter();
    const { showToast } = useToast();
    const id = params?.id as string;

    const booking = bookings.find((b) => b.id === id);

    if (!booking) {
        return <div className={styles.container}>Booking not found</div>;
    }

    const handleCancel = () => {
        if (confirm("Are you sure you want to cancel this appointment?")) {
            showToast("Appointment cancelled successfully", "info");
            router.push("/profile");
        }
    };

    const handleBookAgain = () => {
        router.push("/book");
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Booking Details</h1>
            </div>

            <div className={`${styles.receipt} animate-slide-up`}>
                <div className={`${styles.statusBanner} ${booking.status === "Upcoming" ? styles.statusUpcoming : styles.statusCompleted}`}>
                    {booking.status}
                </div>
                <div className={styles.receiptContent}>
                    <div className={styles.salonInfo}>
                        <div className={styles.salonImageWrapper}>
                            <Image src={booking.salonImage} alt={booking.salonName} fill className={styles.salonImage} />
                        </div>
                        <div className={styles.salonDetails}>
                            <h2>{booking.salonName}</h2>
                            <p>{booking.salonAddress}</p>
                        </div>
                    </div>

                    <div className={styles.details}>
                        <div className={styles.row}>
                            <span className={styles.label}>Service</span>
                            <span className={styles.value}>{booking.service}</span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.label}>Barber</span>
                            <span className={styles.value}>{booking.barber}</span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.label}>Date</span>
                            <span className={styles.value}>{booking.date}</span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.label}>Time</span>
                            <span className={styles.value}>{booking.time}</span>
                        </div>
                        <div className={styles.totalRow}>
                            <span className={styles.totalLabel}>Total Amount</span>
                            <span className={styles.totalValue}>₹{booking.price}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.actions}>
                {booking.status === "Upcoming" ? (
                    <button className={styles.cancelBtn} onClick={handleCancel}>
                        Cancel Appointment
                    </button>
                ) : (
                    <button className={`btn-primary ${styles.bookAgainBtn}`} onClick={handleBookAgain}>
                        Book Again
                    </button>
                )}
            </div>
        </div>
    );
}
