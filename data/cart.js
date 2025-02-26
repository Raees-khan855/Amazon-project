export const cart=[]



export function addtocart(productId){
    let matchingItem;
    cart.forEach((cartitem)=>{
     if(productId===cartitem.productId){
      matchingItem=cartitem;
     }
    })
    if(matchingItem){
      matchingItem.quantity+=1;
    }else{
      cart.push({
        productId:productId,
        quantity:1
      })
    }
  }
export function updatecartquantity(){
    let cartquantity=0;
   cart.forEach((cartitem)=>{
  cartquantity+=cartitem.quantity
   });
  document.querySelector('.js-cart-quantity').innerHTML=cartquantity
  }
  
  cart.forEach((cartItem)=>{
  const productId=cartItem.productId
  
  let matchingProduct;
  
  products.forEach((products)=>{
    if(products.productId===productId)
        matchingProduct=products
  })
  });
   
  