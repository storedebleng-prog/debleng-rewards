
// DEBLENG REWARDS
// Pengaturan dasar aplikasi

const APP_CONFIG = {
    name: "DEBLENG REWARDS",
    referralReward: 1000,
    minimumWithdrawal: 10000,
    minimumReferral: 10,
    currency: "IDR"
};

// Format angka menjadi Rupiah
function formatRupiah(amount) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(amount);
}

// Menghitung hadiah referral
function calculateReferral(totalFriends) {
    return totalFriends * APP_CONFIG.referralReward;
}

// Memeriksa minimal penarikan
function canWithdraw(balance) {
    return balance >= APP_CONFIG.minimumWithdrawal;
}

console.log("DEBLENG REWARDS berhasil dimuat!");
console.log("Hadiah referral:", formatRupiah(1000));
console.log("Minimal penarikan:", formatRupiah(10000));
