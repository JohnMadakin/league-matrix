function convertCSVToArray(str, delimiter = ",") {
  if(!str || typeof str !== 'string') {
    throw new Error('Invalid csv inputs');
  }
  const rows = str.slice().split("\n");
  return rows.map((row) => {
    const values = row.split(delimiter);
    return values.reduce((acc, val, index) => {
      acc.push(values[index]);
      return acc;
    }, []);
  });
}

module.exports = convertCSVToArray;
