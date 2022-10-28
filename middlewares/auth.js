export default (req, res, next) => {
    if (req.session.auth !== true) {
        res.status(403).send('Forbidden by middleware');
        return;
    }
    next();
}