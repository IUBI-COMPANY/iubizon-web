export const isValidVisitDate = (dateString: string): boolean => {
  if (!dateString) return false;

  const [year, month, day] = dateString.split("-").map(Number);

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  if (year > currentYear) return true;
  if (year < currentYear) return false;

  if (month > currentMonth) return true;
  if (month < currentMonth) return false;

  return day >= currentDay;
};

export const isValidVisitTime = (
  timeString: string,
  dateString?: string,
): boolean => {
  if (!timeString) return false;

  const [hours, minutes] = timeString.split(":").map(Number);

  if (hours < 8 || hours >= 17) {
    return false;
  }

  if (dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    const selectedDate = new Date(year, month - 1, day);
    const today = new Date();

    selectedDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (selectedDate.getTime() === today.getTime()) {
      const now = new Date();
      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();

      if (currentHours >= 17) {
        return false;
      }

      if (currentHours < 8) {
        return true;
      }

      if (
        hours < currentHours ||
        (hours === currentHours && minutes <= currentMinutes)
      ) {
        return false;
      }

      if (hours >= 17) {
        return false;
      }
    }
  }

  return true;
};
