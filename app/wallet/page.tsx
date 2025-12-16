"use client";

import { currentUser, walletTransactions } from "../../data/mocks";
import styles from "./page.module.css";

export default function WalletPage() {
    const handleAddMoney = () => {
        alert("Simulating Payment Gateway...\n\n(In real app: Opens Stripe/Razorpay)");
    };

    const handlePay = () => {
        alert("Scan QR Code or Enter Salon ID to Pay");
    };

    const handleRedeem = () => {
        alert(`You have ${currentUser.rewardPoints} points!\n\nRedeem for:\n- ₹500 Discount (500 pts)\n- Free Hair Product (1000 pts)`);
    };

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Bro_Cutz Wallet</h1>

            <div className={styles.balanceCard}>
                <div className={styles.balanceSection}>
                    <span className={styles.balanceLabel}>Current Balance</span>
                    <h2 className={styles.balanceAmount}>₹{currentUser.walletBalance.toFixed(2)}</h2>
                </div>
                <div className={styles.pointsSection}>
                    <span className={styles.pointsLabel}>Reward Points</span>
                    <span className={styles.pointsValue}>{currentUser.rewardPoints} 🪙</span>
                </div>
            </div>

            <div className={styles.actions}>
                <button className={styles.actionBtn} onClick={handleAddMoney}>
                    <span className={styles.actionIcon}>➕</span>
                    Add Money
                </button>
                <button className={styles.actionBtn} onClick={handlePay}>
                    <span className={styles.actionIcon}>💸</span>
                    Pay Now
                </button>
                <button className={styles.actionBtn} onClick={handleRedeem}>
                    <span className={styles.actionIcon}>🎁</span>
                    Redeem Points
                </button>
            </div>

            <div className={styles.historySection}>
                <h3 className={styles.sectionTitle}>Transaction History</h3>
                <div className={styles.transactionList}>
                    {walletTransactions.map((tx) => (
                        <div key={tx.id} className={styles.transactionItem}>
                            <div className={styles.txIcon}>
                                {tx.type === "credit" ? "⬇️" : tx.type === "debit" ? "⬆️" : "🎁"}
                            </div>
                            <div className={styles.txDetails}>
                                <p className={styles.txDesc}>{tx.description}</p>
                                <span className={styles.txDate}>{tx.date} • {tx.time}</span>
                            </div>
                            <div className={`${styles.txAmount} ${tx.type === "credit"
                                    ? styles.credit
                                    : tx.type === "debit"
                                        ? styles.debit
                                        : styles.reward
                                }`}>
                                {tx.type === "credit" ? "+" : tx.type === "debit" ? "-" : "+"}
                                {tx.type === "reward" ? `${tx.points} pts` : `₹${tx.amount?.toFixed(2)}`}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
