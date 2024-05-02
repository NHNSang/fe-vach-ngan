export const formatCurrency = (amount) => {
    return Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}
// export const formatCurrency = (amount) => {
//     return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
// }