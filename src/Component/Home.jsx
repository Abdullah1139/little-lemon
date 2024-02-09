import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/context";

function Home() {
  const [data, setData] = useState([
    {
      id: 1,
      pic:'image/i1.jpg',
      title:'Burger',
      desp:'An eligent slim core i9 10th Generation',
      price:'50000',
      link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
  },
  {
      id: 2,
      pic:'image/i2.jpg',
      title:'Dell Laptop',
      desp:'An eligent slim core i9 10th Generation',
      price:'50000',
      link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
  },
  {
      pic:'image/i3.jpg',
      title:'Biryani',
      desp:'Special Biryani of  Karachi',
      price:'5000',
      link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
  },
  {
      id: 3,        
      pic:'image/i4.jpg',
      title:'Burger',
      desp:'Fully Loaded Burger',
      price:'5000',
      link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
  },
  {
      id:4,        
      pic:'image/i5.jpg',
      title:'Dell Laptop',
      desp:'An eligent slim core i9 10th Generation',
      price:'50000',
      link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
  },
  {
      id:5,        
      pic:'image/i6.jpg',
      title:'Dell Laptop',
      desp:'An eligent slim core i9 10th Generation',
      price:'50000',
      link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
  },
  {
      id:6,
      pic:'image/i7.jpg',
      title:'Dell Laptop',
      desp:'An eligent slim core i9 10th Generation',
      price:'50000',
      link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
  },
  {
    id:7,
    pic:'image/i8.jpg',
    title:'Dell Laptop',
    desp:'An eligent slim core i9 10th Generation',
    price:'50000',
    link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
},
{   id:8,
    pic:'image/i9.jpg',
    title:'Dell Laptop',
    desp:'An eligent slim core i9 10th Generation',
    price:'50000',
    link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
}
  ]);
  const addProduct = (newProduct) => {
    // Update 'data' to include the new product
    setData((prevData) => [...prevData, newProduct]);

    // For demonstration purposes, I'm logging the new product here
    console.log("New Product Added:", newProduct);
  };
    const navigate=useNavigate();
    const handleAddProduct=()=>{
        navigate('addproduct')
    }
    const Globalstate=useContext(CartContext)
    console.log(Globalstate)
    const dispatch=Globalstate.dispatch;
    return (
      
         <div className="container mt-5" style={{marginTop:"200px"}}>
  <div className="row" >
    {data.map((item, index) => {
      item.quantity=1;
    return(
      <div key={index} className="col-md-4 mb-3">
        <div className="card" style={{ background: "#3F6342", height: "100%" }}>
  <img
    className="card-img-top"
    src={item.pic}
    alt={item.title}
    style={{ maxWidth: "340px", height: "300px", margin: "10px", borderRadius:"50%" }} // Inline CSS for the image
  />
  <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
    <div>
      <h4 className="card-title" style={{ color: "#fff" }}>{item.title}</h4>
      <p className="card-text" style={{ color: "#fff" }}>{item.desp}</p>
    </div>
    <div>
      <h4 style={{ color: "#fff" }}>{item.price}</h4>
      <button
        className="btn btn-primary"
        style={{ background: "yellow", color: "black" }}
        onClick={() => dispatch({ type: 'Add', payload: item })}
      >
        Order Now
      </button>
    </div>
  </div>
</div>


      </div>
    )}
    )}
  </div>
  {/* <AddProduct addProduct={addProduct} /> */}

</div>
      
    )
  }
  
  export default Home;
  

