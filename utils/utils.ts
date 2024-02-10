export const validateString = (value: unknown, maxLength: number) => {
    return !(!value || typeof value !== 'string' || value.length > maxLength);
}

export const getErrorMassage = (error: unknown): string => {
    let massage: string;

    if (error instanceof Error) {
        massage = error.message
    } else if (error && typeof error === 'object' && "message" in error) {
        massage = String(error.message)
    } else if (typeof error ==='string') {
        massage = error;
    } else {
        massage = "something went wrong";
    }

    return massage;
}