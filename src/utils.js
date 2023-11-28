import { parse, format } from 'fecha';

export function formatDate(dateString) {
  if (!dateString) {
    return 'Present';
  }
  const date = parse(dateString, 'YYYY-MM-DD');
  if (!date) {
    return '';
  }
  return format(date, 'MMMM YYYY');
}
