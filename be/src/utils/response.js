// Function to send a success response
export function sendSuccess(res, data, message) {
  res.status(200).json({
    statusCode: 200,
    success: true,
    data,
    message,
  });
}

// Function to send an error response
export function sendError(res, message, statusCode = 500) {
  res.status(statusCode).json({
    statusCode: statusCode, 
    success: false,
    error: message,
  });
}