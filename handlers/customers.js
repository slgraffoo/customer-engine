/**
 * Customer action handler module.
 * @module handlers/customers
 * @todo Add bunyan logging
 * @todo Needs validation and validation errors
 */

var dataStore = require('../data/store.js');
var customerModel = require('../data/model/customer.js');
var errors = require('./errors.js');

module.exports = {
  
  getAllCustomers: function () {
    console.log('Getting all customers');
    return dataStore.customers.readBatch(null);
  },
  
  getCustomerById: function (id) {
    console.log('Getting customer by id');
    if (id) {
      return dataStore.customers.read(id);
    }
    return errors.invalidData('Customer id needed for get.');
  },
  
  addCustomer: function (newData) {
    console.log('Adding customer');
    return dataStore.customers.create(newData);
  },
  
  updateCustomer: function (newCustomerData) {
    console.log('Updating customer');
    if (newCustomerData.id) {
      return dataStore.customers.update(newCustomerData);
    }
    return errors.invalidData('Customer id needed for update.');
  },
  
  deleteCustomer: function (customerId) {
    console.log('Deleting customer by id');
    if (customerId) {
      return dataStore.customers.delete(customerId);
    }
    return errors.invalidData('Customer id needed for delete.');
  },
  
  mergeCustomer: function (customer1, customer2) {
    console.log('Merge customer');
    return dataStore.customers.merge(customer1, customer2);
  }
};
