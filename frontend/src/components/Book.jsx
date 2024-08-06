import React from 'react'
function Book({book,onDelete,onUpdate}){
 
    return (
      <div className='container d-inline my-5 bg-info-subtle' style={{width:225}}>
          
            <img  className='image' src='images/book-cover.avif'alt='image'style={{height:200,objectFit:"cover",width:200,borderTopLeftRadius:8,borderTopRightRadius:8}} />
          
          <div  className='conatiner fst-italic my-3 '>
            <p className='book-title fw-semibold'>{book.title}</p>
            <p className='book-about'>{book.about}</p>
            <p className='book-price fw-semibold'><img src='images/currency-rupee.svg'/>{book.price}</p>
            <button className='btn btn-danger mx-3' onClick={()=> onDelete(book.id)}>Delete</button>
            <button className='btn btn-warning ' onClick={()=> onUpdate(book.id)}>Update</button>
          </div>
       </div>
    
    );
}

export default Book;