const jwt = require("jsonwebtoken");
const User = require('../../models/user/User');
const { authenticateDB } = require('../../connection/mysql');

exports.login = async (req, res) => { 
    
    let params = req.body;
    let user = await User.findOne({where: {mobile: params.mobile, password: params.password}});

    if(user == null) {
        res.send({
            status: 500,
            resp: 0,
            msg: 'User not found'
        });
    } else {

        let token = jwt.sign({ name:user.name,mobile:user.name}, process.env.JWT_SECRET_KEY, { expiresIn: 60 });

        res.send({
            status: 200,
            resp: 1,
            data: {
                name: user.name,
                mobile: user.mobile,
                email: user.email,
                token: token
            },
            msg: 'User loggedIn Successfully'
        });
    }
}

exports.signup = async (req, res) => { 
    let params = req.body;
    let user = await User.create(params);
    if(user == null) {
        res.send({
            status: 500,
            resp: 0,
            msg: 'Internal server error'
        });
    } else {

        let token = jwt.sign({ data: {name:user.name,mobile:user.name}}, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 60 });

        res.send({
            status: 200,
            resp: 1,
            data: {
                name: user.name,
                mobile: user.mobile,
                email: user.email,
                token: token
            },
            msg: 'User created Successfully'
        });
    }
}
