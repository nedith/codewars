// Solution 1
function rentalCarCost(d) {
  let cost = 40;
  let total;
  if (d >= 7) {
    return (total = cost * d - 50);
  } else if (d >= 3) {
    return (total = cost * d - 20);
  } else {
    return (total = cost * d);
  }
}

// Solution 2
function baseCost(days, rate) {
  return days * rate;
}

function discountRate(days) {
  if (days >= 7) {
    return 50;
  } else if (days >= 3) {
    return 20;
  } else {
    return 0;
  }
}

function rentalCarCost(days) {
  return baseCost(days, 40) - discountRate(days);
}
