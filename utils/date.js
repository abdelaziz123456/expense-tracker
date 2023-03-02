export function getFormattedDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export function fromMilliSecToDate(date) {
  let newDate = new Date(date)
  let fullDate=newDate.toLocaleDateString ()
  let month=fullDate.slice(0,2)
  let days=fullDate.slice(3,5)
  let year=`20${fullDate.slice(6)}`
  let reformattedDate=year+'-'+month+'-'+days;
  return new Date(reformattedDate) 
}
