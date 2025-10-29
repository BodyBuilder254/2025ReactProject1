
import React, {useState} from "react";
function MyComponent(){

    const [name, setName] = useState("BodyBuilder254");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function hndleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePayment(event){
        setPayment(event.target.value);
    }

    function handleShipping(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={hndleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea onChange={handleCommentChange} placeholder="Add delivery instructions" />
            <p>Comment: {comment}</p>

            <select placeholder="Payment" onChange={handlePayment}>
                <option value="">Select Payment Option</option>
                <option value="Mpesa">Mpesa</option>
                <option value="Airtel Money">Airtel Money</option>
                <option value="Equity Bank">Equity Bank</option>
                <option value="PayPal">PayPal</option>
                <option value="Bitcoin">Bitcoin</option>
            </select>
            <p>Payment: {payment}</p>

            <input type="radio"  value="Pick Up" checked = {shipping === "Pick Up"} onChange={handleShipping} name="shipping"/>
            <label >Pick Up</label><br/>

            <input type="radio"  value="Delivery" checked = {shipping === "Delivery"} onChange={handleShipping} name="shipping"/>
            <label >Delivery</label>

            <p>Shipping: {shipping}</p>
        </div>
    );
}
export default MyComponent;
