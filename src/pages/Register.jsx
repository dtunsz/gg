import { useState } from "react";
import useFetch from "../utils/UseFetch";


function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    const {data, setData, error, refetch} = useFetch("/api/register","POST",formData)
    const handleRegister = async(e) => {
        e.preventDefault()
        console.log("Clicked")
        const boo = await refetch();
        console.log(data, error, boo, 'na data')
        return loginUser();
    }
    const loginUser = () => {
        if (data?.errors) {
            console.log("User has issues");
        }
    }
return(
    <div>
        <div><h1>Create an account</h1></div>
        <form onSubmit={handleRegister}>
            <div>
                <input type="text" placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
                <input type="email" placeholder="Enter email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}  />
            </div>

            <div>
                <input type="password" placeholder=" Enter password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})}/>
            </div>

            <div>
                <input type="password" placeholder="Confirm password" value={formData.password_confirmation} onChange={e => setFormData({...formData, password_confirmation: e.target.value})} />
            </div>
            <button type="submit">Register</button>
        </form>
        <div>
            {/* {error && error.errors.email[0]} */}
            {data && data.errors.email[0]}
        </div>
    </div>
)
}

export default Register;