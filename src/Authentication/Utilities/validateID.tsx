export function isValidSouthAfricanID(id: string): boolean {
  if (!/^\d{13}$/.test(id)) return false;

  const digits: number[] = id.split('').map(Number);
  let sum = 0;

  for (let i = 0; i < 12; i += 2) {
    sum += digits[i];
  }

  let evenDigits = '';
  for (let i = 1; i < 12; i += 2) {
    evenDigits += digits[i];
  }

  const evenProduct = (parseInt(evenDigits, 10) * 2).toString();
  for (const char of evenProduct) {
    sum += parseInt(char, 10);
  }
  const checkDigit = (10 - (sum % 10)) % 10;

  return checkDigit === digits[12];
}
