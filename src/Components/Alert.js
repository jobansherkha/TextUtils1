import React from 'react'

function Alert(props) {

    // writing a function to captalize the first character of a word 
    const Captalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);


    }


  return (
   props.alert&& <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}  role="alert">
    <strong>{Captalize(props.alert.type)}</strong> {props.alert.message}
    <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  
  )
}

export default Alert