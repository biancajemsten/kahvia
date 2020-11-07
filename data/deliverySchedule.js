const deliverySchedule = (date = "2016-11-16") => ({
  deliverySchedule: [
    {
      customerName: "Cafe1",
      date: `${date}`,
      time: '10:30:00',
      zipCode: "97700",
      city: "RANUA",
    },
    {
      customerName: "Cafe2",
      date: `${date}`,
      time: "11:00:00",
      zipCode: "97700",
      city: "RANUA",
    },
    {
      customerName: "Cafe3",
      date: `${date}`,
      time: '12:30:00',
      zipCode: "97700",
      city: "RANUA",
    },
    {
      customerName: "Cafe4",
      date: `${date}`,
      time: '14:45:00',
      zipCode: "97700",
      city: "RANUA",
    },
    {
      customerName: "Cafe5",
      date: `${date}`,
      time: '16:15:00',
      zipCode: "97700",
      city: "RANUA",
    },
  ],
});

export default deliverySchedule;
