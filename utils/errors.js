export const raiseValidationError = (error) => {
  console.log("Validation Error !!");
  const customError = new Error(error.details[0].message.replaceAll('"', ""));
  customError.statusCode = 422;
  throw customError;
};

export const passError = (error, next) => {
  console.log("passError !!");
  if (!error.statusCode) {
    error.statusCode = 500;
    error.message = "Something went wrong please try again!";
  }
  next(error);
};

export const errorMiddlerWare = (error, _req, res, _next) => {
  if (error.statusCode) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }
  return res.status(500).json({
    success: false,
    message: "Something went wrong please try again!",
  });
};
