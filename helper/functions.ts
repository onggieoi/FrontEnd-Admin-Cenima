export const VND = (money: number) => money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

export const formatDate = (date: Date) => (`${date.getUTCMonth() + 1}/${date.getDate()}/${date.getFullYear()}`)

export const formatTime = (t: number) => {
  const date = new Date(t);

  return `${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
};
