
export const getValueList = () => {
    const data = localStorage.getItem('values');
    const values = JSON.parse(data);
    return values;
}
  
export const setValueList = value => {
    const data = localStorage.getItem('values') ? JSON.parse(localStorage.getItem('values')) : [];
    let values = data.concat(value);
    localStorage.setItem('values', JSON.stringify(values))
}

export const deleteValue = id => {
    const data = localStorage.getItem('values') ? JSON.parse(localStorage.getItem('values')) : [];
    const values = data.filter((item) => item.id !== id)
    localStorage.setItem('values', JSON.stringify(values))
}


