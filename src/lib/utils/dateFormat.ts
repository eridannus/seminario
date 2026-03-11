import { format } from "date-fns";
import { es } from "date-fns/locale";

const dateFormat = (
  date: Date | string,
  pattern: string = "dd MMM yyyy",
): string => {
  const dateObj = new Date(date);
  return format(dateObj, pattern, { locale: es });
};

export default dateFormat;