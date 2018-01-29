/**
 * Data storage actions. 
 * @module data/store
 * @todo Add bunyan logging
 * @todo Needs validation and validation errors
 * @todo Merge needs implementation.
 */

// Note: we don't have a real database, so we aren't compensating for 
// connectivity issues or id collisions. We also haven't allowed for startup 
// storage options or backups/load.

// Note: not a fan of going into handlers for this. Refactor?
var errors = require('../handlers/errors.js');

var data = {
  customers: {}
};

function createNewId() {
  return Object.keys(data.customers).length + 1;
}
module.exports = { 
  
  customers: {
    
    create: function (object) {
      console.log('Creating object record');
      var dbObject = Object.assign({}, object);
      dbObject['id'] = createNewId();
      data.customers[dbObject.id] = dbObject;
      return Object.assign({}, dbObject);
    },
    
    read: function (id) {
      console.log('Getting all objects');
      if (Object.keys(data.customers).includes(id)) {
        // return copy 
        return Object.assign({}, data.customers[id]);
      }
      return errors.notFound('Id (' + id + ') not found in data store');
    },
    
    readBatch: function (idList) {
      console.log('Getting all objects');
      var customers = [];
      if (idList && Array.isArray(idList)) {
        // Find each id in the list and return the copy
        Object.keys(data.customers).forEach(function(key, index) {
          if (idList.includes(key)) {
            customers.push(Object.assign({}, data.customers[key]));
          } else {
            return errors.notFound('Id (' + key + ') not found in data store');
          }
        });
      } else {
        // Return all, copied
        Object.keys(data.customers).forEach(function(key, index) {
          customers.push(Object.assign({}, data.customers[key]));
        });
      }
      return customers;
    },
    
    update: function (object) {
      console.log('Updating object by id');
      // Note there is no locking
      if (Object.keys(data.customers).includes(object.id)) {
        var newObject = Object.assign({}, data.customers[object.id]);
        Object.keys(object).forEach(function(key, index) {
          newObject[key] = object[key];
        });
        data.customers[object.id] = newObject;
        return Object.assign({}, newObject);
      } 
      return errors.notFound('Id (' + key + ') not found in data store');
    },
    
    delete: function (id) {
      // Note, we aren't checking for id first. 
      // Delete doesn't care and we aren't scoping this
      // to return errors if it doesn't exist.
      console.log('Deleting object');
      delete data.customers[id]
    },
    
    merge: function (object1, object2) {
      console.log('Merge object - todo');
    }
  }
};
