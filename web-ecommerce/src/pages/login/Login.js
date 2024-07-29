import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/reducers/user/userAction';
import './Login.scss'
import { apiRequest } from '../../services/Axios';

function LoginPage() {

    const [getMobile,setMobile] = useState(null);
    const [getPassword,setPassword] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let onSubmit = async (e)=> {
        e.preventDefault();

        let pattern = /[0-9]/;
        let match = pattern.test(getPassword);

        if(!match) {
            console.info('Password not matched');
            return false;
        }

        let params = {
            mobile: getMobile,
            password: getPassword // you can encrypt password here
        };
        const response = await apiRequest('post', '/user/login', params);

        console.log(response);

        if(response.resp) {
            localStorage.setItem('token', response.data.token);
            dispatch(setUser(response.data));
            navigate('/');
        } else {
            alert(response.msg);
        }
    }

    function goToSignup() {
        navigate('/signup');
    }

    return (
        <div className='bg'>
            <div className='form'>
                <div className="signin-form">
                    <h2>Sign In</h2>
                    <form>
                        <div className="input-group">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="text" id="mobile" onChange={(e)=>setMobile(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <button onClick={onSubmit}>Sign In</button>
                    </form>
                    <div style={{textAlign:'right',marginTop:'3px'}}>
                        <span onClick={goToSignup} style={{color:'#ff6f61',cursor:'pointer'}}>Signup</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;