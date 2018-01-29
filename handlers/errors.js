

module.exports = {

  notFound: function(msg) {
    // TODO provide default message if not provided
    return {
      code: 404,
      message: 'NotFound: ' + msg
    }
  },
  invalidData: function(msg) {
    return {
      code: 500,
      message: 'InvalidData: ' + msg
    }
  }
  // noContent 204?
}