export const errorHandler = (error, req, res, next) => {
    console.error(err.stack);

    const statusCode = err.status || 500;
    const message = err.message || "Internal server error";

    res.status(statusCode).json({ 
        status: 'error',
        message,
        ...(process.env.NODE_ENV === 'developement' && { stack: err.stack }),
    });
};
