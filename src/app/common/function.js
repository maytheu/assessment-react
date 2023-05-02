export const timeFormat = (timeStamp) => {
  const date = new Date(timeStamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const isPM = hours >= 12;

  const offsetMinutes = date.getTimezoneOffset();
  const offsetHours = offsetMinutes / 60;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return `${(hours % 12).toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isPM ? "PM" : "AM"} GMT${
    offsetHours > 0 ? "-" : "+"
  }${Math.abs(offsetHours)}`;
};
