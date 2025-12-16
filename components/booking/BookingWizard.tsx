"use client";

import { useState } from "react";
import styles from "./BookingWizard.module.css";
import { salons, services, topBarbers, timeSlots } from "@/data/mocks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ToastProvider";

type BookingState = {
    salonId: string | null;
    serviceId: string | null;
    barberId: string | null;
    date: string | null;
    time: string | null;
};

const steps = ["Salon", "Service", "Barber", "Time", "Confirm"];

export default function BookingWizard() {
    const router = useRouter();
    const { showToast } = useToast();
    const [currentStep, setCurrentStep] = useState(0);
    const [booking, setBooking] = useState<BookingState>({
        salonId: null,
        serviceId: null,
        barberId: null,
        date: null,
        time: null,
    });

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const updateBooking = (key: keyof BookingState, value: string) => {
        setBooking((prev) => ({ ...prev, [key]: value }));
        handleNext();
    };

    const handleConfirm = () => {
        showToast("Booking Confirmed! See you soon.", "success");
        setTimeout(() => {
            router.push("/profile");
        }, 1500);
    };

    const getStepContent = () => {
        switch (currentStep) {
            case 0:
                return (
                    <div className={styles.grid}>
                        {salons.map((salon) => (
                            <div
                                key={salon.id}
                                className={`${styles.card} ${booking.salonId === salon.id ? styles.selected : ""
                                    }`}
                                onClick={() => updateBooking("salonId", salon.id)}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={salon.image}
                                        alt={salon.name}
                                        fill
                                        className={styles.image}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <h3>{salon.name}</h3>
                                    <p>{salon.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 1:
                return (
                    <div className={styles.list}>
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className={`${styles.listItem} ${booking.serviceId === service.id ? styles.selected : ""
                                    }`}
                                onClick={() => updateBooking("serviceId", service.id)}
                            >
                                <div className={styles.listContent}>
                                    <h3>{service.name}</h3>
                                    <p>{service.description}</p>
                                </div>
                                <div className={styles.price}>₹{service.price}</div>
                            </div>
                        ))}
                    </div>
                );
            case 2:
                return (
                    <div className={styles.grid}>
                        {topBarbers.map((barber) => (
                            <div
                                key={barber.id}
                                className={`${styles.card} ${booking.barberId === barber.id ? styles.selected : ""
                                    }`}
                                onClick={() => updateBooking("barberId", barber.id)}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={barber.image}
                                        alt={barber.name}
                                        fill
                                        className={styles.image}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <h3>{barber.name}</h3>
                                    <p>⭐ {barber.rating}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 3:
                return (
                    <div className={styles.timeContainer}>
                        <input
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            className={styles.dateInput}
                            style={{ padding: '10px', fontSize: '16px', colorScheme: 'dark' }}
                            onChange={(e) =>
                                setBooking((prev) => ({ ...prev, date: e.target.value }))
                            }
                        />
                        <div className={styles.slots}>
                            {timeSlots.map((slot) => (
                                <button
                                    key={slot}
                                    className={`${styles.slot} ${booking.time === slot ? styles.selectedSlot : ""
                                        }`}
                                    onClick={() => updateBooking("time", slot)}
                                    disabled={!booking.date}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 4:
                const selectedSalon = salons.find((s) => s.id === booking.salonId);
                const selectedService = services.find((s) => s.id === booking.serviceId);
                const selectedBarber = topBarbers.find((b) => b.id === booking.barberId);

                return (
                    <div className={styles.summary}>
                        <h2>Booking Summary</h2>
                        <div className={styles.summaryItem}>
                            <span>Salon:</span>
                            <strong>{selectedSalon?.name}</strong>
                        </div>
                        <div className={styles.summaryItem}>
                            <span>Service:</span>
                            <strong>{selectedService?.name}</strong>
                        </div>
                        <div className={styles.summaryItem}>
                            <span>Barber:</span>
                            <strong>{selectedBarber?.name}</strong>
                        </div>
                        <div className={styles.summaryItem}>
                            <span>Date & Time:</span>
                            <strong>
                                {booking.date} at {booking.time}
                            </strong>
                        </div>
                        <div className={styles.summaryItem}>
                            <span>Total Price:</span>
                            <strong className={styles.totalPrice}>
                                ₹{selectedService?.price}
                            </strong>
                        </div>
                        <button
                            className="btn-primary"
                            style={{ width: "100%", marginTop: "2rem" }}
                            onClick={handleConfirm}
                        >
                            Confirm Booking
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.wizard}>
            <div className={styles.progress}>
                {steps.map((step, index) => (
                    <div
                        key={step}
                        className={`${styles.step} ${index <= currentStep ? styles.activeStep : ""
                            }`}
                    >
                        <div className={styles.stepNumber}>{index + 1}</div>
                        <span className={styles.stepLabel}>{step}</span>
                    </div>
                ))}
            </div>

            <div className={styles.content}>
                <h2 className={styles.stepTitle}>{steps[currentStep]}</h2>
                {getStepContent()}
            </div>

            <div className={styles.actions}>
                {currentStep > 0 && (
                    <button className={styles.backBtn} onClick={handleBack}>
                        Back
                    </button>
                )}
            </div>
        </div>
    );
}
