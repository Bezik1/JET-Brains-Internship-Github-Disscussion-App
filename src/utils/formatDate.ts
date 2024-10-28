export const formatDate = (dateString: string): string =>{
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        throw new Error("Invalid date format");
    }

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };

    return date.toLocaleString('en-EN', options);
}