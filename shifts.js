function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  return Math.round((hours-8<0 ? hours : 8) * rate) + (hours >= 8 ? Math.round((hours-8) * (rate*1.5)): 0);
}

module.exports = { isValidShift, calculatePay };
