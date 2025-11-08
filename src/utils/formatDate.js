// * функция форматирования времения
const formatDate = (date) => {
  const options = {
    year: '2-digit',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }
  return new Intl.DateTimeFormat('ru', options)
    .format(new Date(date));
}

export default formatDate;
