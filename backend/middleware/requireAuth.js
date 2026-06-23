const requireAuth = (req, res, next) => {
    //verify authentication

    const {authentication} = req.headers

    if(!authentication){
        return res.status(401).json({error:"Authentication token required"})
    }
}