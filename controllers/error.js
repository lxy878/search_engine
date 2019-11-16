
exports.getError404 = (req, res, next)=>{
    res.render('error', {
        title: '404 Error',
        message:'404 Error: Page Not Found'
    });
}


exports.getErrorInvalidInput = (req, res, next)=>{
    res.render('error', {
        title: 'Input Error', 
        message: 'Input Error: Invalid Input'
    });
}