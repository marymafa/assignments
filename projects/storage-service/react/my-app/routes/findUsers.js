import passport from 'passport';

module.export = app => {
    app.get('/users'.req, res, next => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            if (err) {
                console.log(err);
            }
            if (infor !== undefined) {
                console.log(info.message);
                res.send(info.message);
            } else {
                console.log('user found in db from route');
                res.status(200).send({
                    auth: true,
                    email: user.email,
                    password: user.password,
                    message: 'user found in db'
                })
            }
        })(req, res, next)
    })
}