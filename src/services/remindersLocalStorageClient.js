export function saveReminders(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function fetchReminders(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
  }
}
