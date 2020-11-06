const trends = () => ({
  productTrend: {
    seasonal: {
      months: {
        January: rand(0, 3),
        February: rand(2, 8),
        March: rand(1, 10),
        April: rand(4, 6),
        May: rand(4, 7),
        June: rand(6, 9),
        July: rand(6, 10),
        August: rand(8, 10),
        September: rand(6, 9),
        October: rand(3, 9),
        November: rand(3, 6),
        December: rand(7, 10),
      },
      town: {
        January: rand(0, 3),
        February: rand(2, 8),
        March: rand(1, 10),
        April: rand(4, 6),
        May: rand(4, 7),
        June: rand(6, 9),
        July: rand(6, 10),
        August: rand(8, 10),
        September: rand(6, 9),
        October: rand(3, 9),
        November: rand(3, 6),
        December: rand(7, 10),
      },
    },
  },

  locationTrend: {
    city: {
      productCode: "31",
      productName: "Vendor Whitener",
      productSubgroup: "Vending Powders",
      quantity: 1,
    },
    country: {
      productCode: "56",
      productName: "Tazza Low Lactose Hot Choco",
      productSubgroup: "Vending Powders",
      quantity: 1,
    },
    zipCode: {
      productCode: "31",
      productName: "Vendor Whitener",
      productSubgroup: "Vending Powders",
      quantity: 1,
    },
  },
});

const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default trends;
