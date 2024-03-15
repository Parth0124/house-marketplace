import { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg"
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {

  const [showPassword, setShowPassword]=useState(false)
  const [formData, setFormData]= useState({
    email:'',
    password:''
  })

  const {email,password}= formData

  return (
    <div>
      <h1>Sign In</h1>
    </div>
  )
}

export default SignIn
