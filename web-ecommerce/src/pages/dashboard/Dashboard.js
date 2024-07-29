import React,{useEffect, useState} from 'react';
import './Dashboard.scss';
import { apiRequest } from '../../services/Axios';

const Dashboard = () => {

    const [productListData,setProductListData] = useState([]);

    useEffect(()=>{
        getProductList();
    },[]);

    async function getProductList() {
        try {
            const response = await apiRequest('get', '/product/getProductList');
            if(response.resp) {
                setProductListData(response.data.records);
            } else {
                console.log(response.msg);
            }
        } 
        catch {
            console.log('Something went wrong.');
        }        
    }

    return (
        <>
            <div className="container-fluid">
                <div className='row mb-3 mt-4'>
                    {
                        productListData.map((product,index)=>(
                            <div className="col-md-3" key={index}>
                                <div className="card card-01">
                                    <img className="card-img-top" height={'250'} src={product.imageUrl} alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title">{product.name}</h4>
                                        <p className="card-text">{product.price}</p>
                                        <div className='d-flex justify-content-around'>   
                                            <button className='btn btn-primary text-uppercase card-btn'>Cart</button>&nbsp;&nbsp;
                                            <button className='btn btn-primary text-uppercase card-btn'>Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Dashboard;