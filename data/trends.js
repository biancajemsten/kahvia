const trends = () => ({
  months: {
    January: rand(),
    February: rand(),
    March: rand(),
    April: rand(),
    May: rand(),
    June: rand(),
    July: rand(),
    August: rand(),
    September: rand(),
    October: rand(),
    November: rand(),
    December: rand(),
  },
});

const rand = () => Math.floor(Math.random() * 10);

export default trends;
