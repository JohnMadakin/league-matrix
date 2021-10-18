const csvToArray = require('../utils/csvToArray');

function handleFileUpload(req, res, next) {
  const validMimeTypes = ['application/octet-stream', 'text/csv'];
  if(!validMimeTypes.includes(req.file.mimetype) || !req.file.originalname.endsWith('.csv')) {
    throw new Error('Invalid file type.')
  }

  const csvFile = req.file.buffer.toString('utf-8');
  const arr = csvToArray(csvFile);
  
  req.body = {
    data: arr,
  }

  return next();
}

module.exports = handleFileUpload;
