export function validateDate(date: string): boolean {
    return new Date(date) >= new Date();
}