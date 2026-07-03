export function generateUniqueEmail(baseEmail: string): string {
  const timestamp = Date.now();
  return baseEmail.replace('${timestamp}', timestamp.toString());
}
