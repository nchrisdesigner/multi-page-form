import React, { useState } from 'react'
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';

function Form() {

   const [page, setPage] = useState(0);
   const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
    nationality: "",
    other: ""
   });

   const FormTitles = ['Sign Up','Personal Info','Other']; 

   const PageDisplay = () => {
    if(page === 0){
        return <SignUpInfo formData={formData} setFormData={setFormData} />;
    }
    if(page === 1){
        return <PersonalInfo formData={formData} setFormData={setFormData} />
    }
    if(page === 2){
        return <OtherInfo formData={formData} setFormData={setFormData} />
    }
   }

   const handleSubmit = () => {
    setFormData( () => {
        return {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            userName: "",
            nationality: "",
            other: ""
            }
    });
    setPage(0);
    alert("Form Submitted")
   }
    
  return (
    <div className='form'>
        <div className='progressbar'>
            <div style={{width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"}}></div>
        </div>
        <div className='form-container'>
            <div className="header">
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className="body">
                {PageDisplay()}
            </div>
            <div className="footer">
                <button disabled={page === 0} onClick={() => setPage((curPage) => curPage - 1)} >Prev</button>
                <button  onClick={ () => {
                    if (page === FormTitles.length - 1){
                        handleSubmit();
                    }
                    else{
                        setPage((curPage) => curPage + 1)
                    }

                    }
                    
                }>
                    {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Form
