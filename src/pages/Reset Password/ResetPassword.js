import React, { useState } from 'react'
import { useParams } from 'react-router';
import axiosInstance from '../../utils/apis';
import "./ResetPassword.css"
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const ResetPassword = () => {
    const navigate = useNavigate();
    const defaultValues = {
        password: "",
        confirmPassword: "",
    }

    const [newPassword, setNewPassword] = useState(defaultValues);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setNewPassword({ ...newPassword, [name]: value })
    }

    const token = useParams();

    const resetpassword = (updatedPassword) => {
        const id = toast.loading("Please wait...");
        const resetPassEndpoint = `/api/resetpassword/${token["token"]}/`
        setTimeout(()=>{
            axiosInstance.put(resetPassEndpoint, updatedPassword)
            .then((response) => {
                toast.update(id, { render: "Password changed successfully", type: "success", isLoading: false, autoClose:3000 })
                navigate("/login")
            })
            .catch((error) => {
                toast.update(id, { render: error.response.data.error, type: "error", isLoading: false, autoClose:3000 })
                setNewPassword(defaultValues)
            })
        },1000)
        
    }

    const submitNewPassword = (e) => {
        e.preventDefault();
        resetpassword(newPassword);
    }


    return (
        <>
            <div className="container p-sm-4 p-3 border border-1 resetPassContainer shadow-lg forget text-light">
                <div className="fw-1 resetpass text-center mb-4">Reset Password</div>
                <form action="" onSubmit={submitNewPassword}>
                    <div className="my-3">
                        <label className="form-label">New Password</label>
                        <input type="password" className="form-control input-style" name='password' onChange={handleChange} value={newPassword.password}/>
                    </div>
                    <div className="my-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control input-style" name='confirmPassword' onChange={handleChange} value={newPassword.confirmPassword}/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 my-3 btn1 btn2">Reset Password</button>
                </form>
            </div>
        </>
    )
}

export default ResetPassword