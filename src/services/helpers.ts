export const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 9);
    const day = date.getDate();
    
    const month = date.toLocaleString('default', { month: 'short' });
    return `${day} ${month}`;
};