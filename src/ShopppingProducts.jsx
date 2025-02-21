import { connect } from "react-redux";
import React from "react";
import './App.css'
import { Link } from "react-router-dom";

function ShoppingProducts(props){
    
    console.log(props);
    return(
            <div className="body">   
                <h1 id="header" className="text-center position-sticky">MY-CART</h1>
                <div className="m-3 d-flex">
                    <input type="text" className="form-control w-50 d-flex align-self-center justify-content-around position-sticky top-0" placeholder="Search Products" onChange={(e)=>{props.dispatch({type:'Search',payload:e.target.value})}}/>
                    <Link to='./addcart'><h3 className="bi bi-cart position-relative"><p id="cartlogo" className="w-75 text-center position-absolute top-0 start-100 translate-middle  rounded-circle">{props.cart.length}</p></h3></Link>
                </div>
                <div className="d-flex flex-wrap m-5">
                {
                    props.searchedproducts.map((data,i)=>{
                        return (
                            <div className="border p-3 rounded" id="main">
                                <div>
                                    <img src={data.image} alt=""/>
                                </div><br />
                                <div className="m-2">
                                    <h5><b style={{color:'darkblue'}}>{data.title}</b></h5>
                                    <b>Category : {data.category}</b><br />
                                    <span className="btn btn-success">{data.rating.rate} &#9733; Rating </span>&nbsp;&nbsp;&nbsp;
                                    <span>{data.rating.count} Reviews</span><br />
                                    <b>Description</b>
                                    <div>{data.description.slice(0,100)}</div>
                                    <h4><b className="text-success"> &#8377; {data.price}</b></h4>
                                    {!data.inCart &&<button className="btn btn-warning " id="addbtns"  onClick={()=>{props.dispatch({type:'ADDCART',payload:data,index:i})}}>Add To Cart <i className="bi bi-cart"></i></button>}
                                    {data.inCart &&<button className="btn btn-primary ">Go To Cart <i className="bi bi-cart"></i></button>}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>  
    )
}

export default connect(store=>store) (ShoppingProducts)