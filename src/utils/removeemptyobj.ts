export default function removeemptyobj(obj) {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([key, value]) => value != null && value !== '')
      .map(([k, v]) => [k, v === Object(v) ? removeemptyobj(v) : v])
  );
}
