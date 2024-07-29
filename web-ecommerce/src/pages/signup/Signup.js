import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Signup.scss'
import { apiRequest } from '../../services/Axios';
import { setUser } from '../../redux/reducers/user/userAction';

function SignupPage() {

    const [getName,setName] = useState(null);
    const [getMobile,setMobile] = useState(null);
    const [getEmail,setEmail] = useState(null);
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
            name: getName,
            mobile: getMobile,
            email: getEmail,
            password: getPassword // you can encrypt password here
        };

        const response = await apiRequest('post', '/user/signup', params);

        if(response.resp) {
            localStorage.setItem('token', response.data.token);
            dispatch(setUser(response.data));
            navigate('/');
        } else {
            alert(response.msg);
        }
    }

    function goToLogin() {
        navigate('/login');
    }

    return (
        <div className='bg'>
            <div className='form'>
                <div className="signin-form">
                    <h2>Signup</h2>
                    <form>
                        <div className="input-group">
                            <label htmlFor="mobile">Name</label>
                            <input type="text" id="name" onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="text" id="mobile" onChange={(e)=>setMobile(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Email</label>
                            <input type="text" id="email" onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <button onClick={onSubmit}>Signup</button>
                    </form>
                    <div style={{textAlign:'right',marginTop:'3px'}}>
                        <span onClick={goToLogin} style={{color:'#ff6f61',cursor:'pointer'}}>Login</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;