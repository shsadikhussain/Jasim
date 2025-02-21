import { connect } from "react-redux";
import React from "react";
import './App.css'
import { Link } from "react-router-dom";




function AddCarts(props){
    let Bill = props.cart.reduce((a,b)=>{
        return a+(b.price*b.count)
    },0)
    const handleDelete = (cartItems)=>{
        props.dispatch({type:'Dec',payload:cartItems})
    }
    return(
        <div className="m-4">
            <div>
                <h1>Shopping Cart ( {props.cart.length} )</h1>
                <hr />
            </div>
            <div className="w-70 p-5 d-flex justify-content-between">
                    <div>
                        {
                            props.cart.map((cartItems,i)=>{
                                console.log(cartItems);
                                return(
                                    <>
                                        <div className="p-3 d-flex flex-wrap">
                                            <div>
                                              <img src={cartItems.image} width='80px' className="m-1"  />
                                            </div>
                                            <div className="p-3">
                                                <h4>{cartItems.title}</h4>
                                                <b>Price : &#8377; {cartItems.price}</b><br />
                                                <span><b>Quantity : </b></span>
                                                <button className="btn btn-danger" disabled={cartItems.count===1}  onClick={()=>{handleDelete(cartItems)}}>-</button>
                                                <span><b> {cartItems.count} </b></span>
                                                <button className="btn btn-success" onClick={()=>{props.dispatch({type:'Inc',payload:cartItems})}}>+</button>
                                            </div>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;<button className="btn btn-danger" onClick={()=>{props.dispatch({type:'Delete',index:i,payload:cartItems})}}>Delete</button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;<button className="btn btn-info" onClick={()=>{props.dispatch({type:'saveLater'})}}>Save Later</button>
                                        <hr />
                                    </>
                                )
                            })
                        }
                        {props.cart.length>0 && <div className="d-flex justify-content-between">
                            <div>
                                <img src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" alt="" width='100px' />
                            </div>
                            <div>
                                <h2>Sub-Total : &#8377; {Bill}</h2>
                            </div>
                        </div>}
                    </div>

                    {props.cart.length>0&&<div className="p-2" id='pricebox'>
                        {props.addCart && <section className="p-3  position-sticky top-0">
                            <h4 className="text-center">TOTAL PRICE</h4><br />
                            <h6 className="text-success">&#x2713;Your order is eligible for FREE Delivery.</h6>
                            <h4>Subtotal ( {props.cart.length} ) : <b className="text-danger"> &#8377; {Bill} </b></h4>
                            <button className="btn btn-warning form-control">Proceed to Buy</button>
                        </section>}
                    </div>}
            </div>
            {!props.cart.length>0 &&
            <div className="text-center text-danger">
                <h1 style={{fontSize:'100px'}}>Oooops...!</h1>
                <h1><i className="bi bi-exclamation-circle" style={{fontSize:'200px'}}></i></h1><br />
                {/* <h1 style={{fontSize:'100px',color:'darkgoldenrod'}}>MY-CART is EMPTY</h1><br /> */}
                <Link to='/'><button className="btn btn-primary p-3 w-25 hov">Continue Shopping</button></Link>
            </div>}
        </div>
    )
}

export default connect(store=>store)(AddCarts)