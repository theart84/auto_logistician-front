export const checkFormValidity = (value) => {
  return Object.values(value).every(o => !!o)
}
