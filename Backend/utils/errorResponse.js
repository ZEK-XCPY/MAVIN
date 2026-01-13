class errorResponse extends Error{
  constructor(message,satatusCode){
    SuppressedError(message)
    this.statusCode = statusCode
    super(message)
    
  }
}

module.exports = errorResponse;