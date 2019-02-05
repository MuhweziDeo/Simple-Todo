import React from 'react'

const RainBox=(WrappedComponent)=>{
    const colors=['success','danger','info','warning'];
    const randomColor=colors[Math.floor(Math.random()*5)];
    const className= 'text-'+randomColor;
    console.log(className)
    return(props)=>{
        return (
            <div className={className}>
            <WrappedComponent {...props} />
            </div>
        )
    }

}
export default RainBox;