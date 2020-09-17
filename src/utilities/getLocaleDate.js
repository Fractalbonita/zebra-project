export function getLocaleDate(date) {
  if (date === null) {
    return '';
  }

  const parseDate = date === +date ? date : Date.parse(date);

  if (isNaN(parseDate)) {
    return '';
  }

  return new Date(parseDate).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
