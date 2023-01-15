import React from 'react'

function SignUpInfo({formData, setFormData}) {
  return (
    <div className='sign-up-container'>
      <input type="email" placeholder='Email...' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value}) } />
      <input type="password" placeholder='Password...' value={formData.password} onChange={ (e) => setFormData({...formData, password: e.target.value})} />
    </div>
  )
}

export default SignUpInfo
