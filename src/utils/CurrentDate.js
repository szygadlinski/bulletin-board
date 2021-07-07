export const currentDate = date => {
  const month = String(date.getMonth() + 1).padStart(2, 0);
  const day = String(date.getDate()).padStart(2, 0);
  const year = date.getFullYear();
  const hour = String(date.getHours()).padStart(2, 0);
  const minute = String(date.getMinutes()).padStart(2, 0);
  return `${month}.${day}.${year} ${hour}:${minute}`;
};
