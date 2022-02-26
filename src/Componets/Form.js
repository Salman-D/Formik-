import React from "react";
import {useFormik} from 'formik'

function Form(){

    const fk = useFormik({
        initialValues : {name :"",email :"", Phone:""},
        validate :(value)=>{
            let error = {}

            if(!value.name){
                error.name = "Enter name "
            }
            
            else if(value.name.length<6){
                error.name = "NAME MUST GRAETER THEN 5 "
            }

           else  if(!value.email){
                error.email = "Enter Email "
            }

            else  if(!value.Phone.length<5){
                error.Phone = "Bigger Then 5 numbers "
            }
            
            return error
        }
        ,
        onSubmit : (data)=>{
           console.log(data)
        },
    })

   

    return(
        <>
        <div className="container-fluid bg-primary f-white" style={{textAlign:"center"}}>
            <div className="conatiner bg-success">Form</div>
            <form onSubmit={fk.handleSubmit} onReset={fk.handleReset}>

                <label className="mx-2">User Name</label>

                <input type="text" id="name"  onChange={fk.handleChange} />

                <br/>
                    {fk.errors.name ? <div style={{color:'red',fontSize:40}}>{fk.errors.name}</div> : <div></div>}
                <br/>
                <label>Email</label>
                <input type="email" id="email" onChange={fk.handleChange}  />
                
                <br/>
                    {fk.errors.email ? <div style={{color:'red',fontSize:40}}>{fk.errors.email}</div> : <div></div>}
                <br/>
                <label>Number</label>

                <input type="number" id="number" onChange={fk.handleChange}  />
                    
                <br/>
                    {fk.errors.Phone ? <div style={{color:'red',fontSize:40}}>{fk.errors.Phone}</div> : <div></div>}
                <br/>

                <br/>
                <input type="submit"/>
                {/* <input type="reset" /> */}

            </form>
        </div>
        </>
    )
}

export default Form