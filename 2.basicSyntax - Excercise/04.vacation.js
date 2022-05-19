function vacation(input) {
  const numPeople = Number(input[0]);
  const type = input[1];
  const dayOfWeek = input[2];

  let price = 0;
  let discount = 0;

  if (type === "Students") {
    switch (dayOfWeek) {
      case "Friday":
        price = numPeople * 8.45;
        break;
      case "Saturday":
        price = numPeople * 9.8;
        break;
      case "Sunday":
        price = numPeople * 10.46;
        break;
    }
    if (numPeople >= 30) {
      discount = price * 0.15;
      price = price - discount;
    }
  } else if (type === "Business") {
    switch (dayOfWeek) {
      case "Friday":
        price = numPeople * 10.9;
        break;
      case "Saturday":
        price = numPeople * 15.6;
        break;
      case "Sunday":
        price = numPeople * 16;
        break;
    }
    if (numPeople >= 100) {
      if (dayOfWeek === "Friday") {
        discount = 10 * 10.9;
      } else if (dayOfWeek === "Saturday") {
        discount = 10 * 15.6;
      } else if (dayOfWeek === "Sunday") {
        discount = 10 * 16;
      }
      price = price - discount;
    }
  } else if (type === "Regular") {
    switch (dayOfWeek) {
      case "Friday":
        price = numPeople * 15;
        break;
      case "Saturday":
        price = numPeople * 20;
        break;
      case "Sunday":
        price = numPeople * 22.5;
        break;
    }
    if (numPeople >= 10 && numPeople <= 20) {
      discount = price * 0.05;
      price = price - discount;
    }
  }

  console.log(`Total price: ${price.toFixed(2)}`);
}
vacation([40, "Regular", "Saturday"]);
