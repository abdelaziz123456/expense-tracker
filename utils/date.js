export function getFormattedDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export function fromMilliSecToDate(date) {
  let newDate = new Date(date);
  let month = newDate.toLocaleDateString("default", { month: "2-digit" });
  let days = newDate.toLocaleDateString("default", { day: "2-digit" });
  let year = newDate.toLocaleDateString("default", { year: "numeric" });
  let reformattedDate = days + "-" + month + "-" + year;
  return reformattedDate;
}
