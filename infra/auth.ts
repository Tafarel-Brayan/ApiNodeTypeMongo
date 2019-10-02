import * as jwt from 'jsonwebtoken';
import Configs from './configs';

class Auth{

    validate(req, res, next){

        var token = req.headers['x-access-token'];

        if(token){

            jwt.verify(token, Configs.secret, (err, decoded) => {

                if(err){
                    return res.status(403).send({
                        success: false,
                        message: '403 - token inválido'
                    });
                }else{

                    next();

                }

            })

        }else{

            return res.status(401).send({
                success: false,
                message: '401 - sem autoriazação'
            });

        }

    }

}

export default new Auth();