const urlPattern = /^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,6})([/\w@ .-]*)*\/?$/;

export function validateURL(value: string): string | null {
  if (!urlPattern.test(value)) {
    return 'Value must be a valid URL with "http" or "https"';
  }
  return null;
}
