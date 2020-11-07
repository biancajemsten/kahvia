const trends = () => ({
  productTrend: {
    seasonal: {
      months: 
       [
        rand(0, 3),
        rand(2, 8),
        rand(1, 10),
        rand(4, 6),
        rand(4, 7),
        rand(6, 9),
        rand(6, 10),
        rand(8, 10),
        rand(6, 9),
        rand(3, 9),
        rand(3, 6),
        rand(7, 10),
      ],
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
