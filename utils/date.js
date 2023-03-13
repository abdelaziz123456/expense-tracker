export function getFormattedDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export function fromMilliSecToDate(date) {
  let newDate = new Date(date);
  let days = newDate.toLocaleDateString("default", { month: "2-digit" }).slice(3,5);
  let month = newDate.toLocaleDateString("default", { day: "2-digit" }).slice(0,2);
  let year = newDate.toLocaleDateString("default", { year: "numeric" }).slice(6);
  let reformattedDate = days + "/" + month + "/" + year;
  return reformattedDate;
}
