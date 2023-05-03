const sec = 1000,
  min = sec * 60,
  hour = min * 60,
  day = hour * 24;

const getCountDown = (endTime) => {
  const end = new Date(endTime).getTime();
  const current = new Date().getTime();
  const remaining = end - current;

  const dd = Math.floor(remaining / day);
  const hh = Math.floor((remaining % day) / hour);
  const mm = Math.floor((remaining % hour) / min);
  const ss = Math.floor((remaining % min) / sec);

  return { dd, hh, mm, ss }
}

export default getCountDown;