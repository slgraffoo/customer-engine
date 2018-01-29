/**
 * Version 1 customer REST endpoints.
 * @module routes/v1Customers
 * @todo Add bunyan logging
 * @todo Needs validation and validation errors
 */

var express = require('express');
var router = express.Router();
var customerHandler = require('../handlers/customers.js');

/* Get all customers */
// TODO - add paging parameters
router.get('/', function(req, res, next) {
  var data = customerHandler.getAllCustomers();
  res.set('Content-Type', 'application/json');
  res.status(200).json(data);
});

/* Update one or more customers, as indicated by the data. */ 
router.put('/', function(req, res, next) {
  req.accepts('application/json');
  var incoming = req.body;
  if (Array.isArray(incoming)) {
    console.log('Array: ' + incoming);
    var data = [];
    for(var i=0; i < incoming.length; i++) {
        // TODO - validate data
        data.push(customerHandler.updateCustomer(incoming[i]));
    }
    res.set('Content-Type', 'application/json');
    res.status(200).json(data);
    
  } else {
    console.log('Not array: ' + incoming);
    var err = errors.invalidData('Expected array of customers');
    res.set('Content-Type', 'application/json');
    res.status(err.code).json(err.message);
  }
});

/* Add one or more new customers. */
router.post('/', function(req, res, next) {
  req.accepts('application/json');
  // TODO - validate data
  res.set('Content-Type', 'application/json');
  var incoming = req.body;
  if (Array.isArray(incoming)) {
    console.log('Array: ' + JSON.stringify(incoming));
    var data = [];
    for(var i=0; i < incoming.length; i++) {
        // TODO - validate data
        data.push(customerHandler.addCustomer(incoming[i]));
    }
    res.set('Content-Type', 'application/json');
    res.status(201).json(data);
    
  } else {
    console.log('Not array: ' + incoming);
    var err = errors.invalidData('Expected array of customers');
    res.set('Content-Type', 'application/json');
    res.status(err.code).json(err.message);
  }
});

/* Find customers by tags */
router.get('/search', function (req, res) {
  // TODO - validate data
  // TODO - Get data and pass to handler
  res.set('Content-Type', 'application/json');
  res.status(200).json({ content: 'todo' });
});

/* Get a specific customer by id */
router.get('/:customerId', function(req, res, next) {
  // TODO - validate data
  var data = customerHandler.getCustomerById(req.params.customerId);
  res.set('Content-Type', 'application/json');
  res.status(200).json(data);
});

/* Updates a specific customer by id */
router.put('/:customerId', function(req, res, next) {
  req.accepts('application/json');
  var incoming = req.body;
  // TODO - validate data
  incoming['id'] = req.params.customerId;
  var data = customerHandler.updateCustomer(incoming);
  res.set('Content-Type', 'application/json');
  res.status(200).json(data);
});

/* Delete a specific customer by id */
router.delete('/:customerId', function(req, res, next) {
  // TODO - validate data
  customerHandler.deleteCustomer(req.params.customerId);
  res.set('Content-Type', 'application/json');
  res.status(200).json({ content: 'success' });
});

module.exports = router;
