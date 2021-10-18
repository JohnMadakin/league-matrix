const SuccessResponse = require('../../helpers/successResponse');
const BadRequestResponse = require('../../helpers/badRequestResponse');
const echoService = require('../../services/matrices/echo');
const flattenService = require('../../services/matrices/flatten');
const invertService = require('../../services/matrices/invert');
const sumService = require('../../services/matrices/sum');
const multiplyService = require('../../services/matrices/multiply');

function echo(req, res) {
  try {
    const result =  echoService(req.body.data);

    new SuccessResponse('Success', result, 200).send(res);
  } catch (error) {
    new BadRequestResponse(error.message).send(res);
  }
}


function flatten(req, res) {
  try {
    const result =  flattenService(req.body.data);
    new SuccessResponse('Success', result, 200).send(res);
  } catch (error) {
    new BadRequestResponse(error.message).send(res);
  }
}


function invert(req, res) {
  try {
    const result =  invertService(req.body.data);
    new SuccessResponse('Success', result, 200).send(res);
  } catch (error) {
    new BadRequestResponse(error.message).send(res);
  }
}


function multiply(req, res) {
  try {
    const result =  multiplyService(req.body.data);
    new SuccessResponse('Success', result, 200).send(res);
  } catch (error) {
    new BadRequestResponse(error.message).send(res);
  }
}


function sum(req, res) {
  try {
    const result =  sumService(req.body.data);
    new SuccessResponse('Success', result, 200).send(res);
  } catch (error) {
    new BadRequestResponse(error.message).send(res);
  }
}


module.exports = { echo, sum, multiply, flatten, invert };
