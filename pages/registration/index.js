import React from 'react';
import { useForm } from "react-hook-form";

const Registration = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input 
                        ref={register}
                        name='name'
                        type='text'
                        id='name'
                    />
                </div>

                <div>
                    <label htmlFor='docType'>Document type</label>
                    <input 
                        ref={register}
                        name='docType'
                        type='text'
                        id='docType'
                    />
                </div>

                <div>
                    <label htmlFor='document'>Document</label>
                    <input 
                        ref={register}
                        name='document'
                        type='text'
                        id='document'
                    />
                </div>

                <div>
                    <label htmlFor='regionId'>Region ID</label>
                    <input 
                        ref={register}
                        name='regionId'
                        type='text'
                        id='regionId'
                    />
                </div>

                <div>
                    <label htmlFor='address'>Address</label>
                    <input 
                        ref={register}
                        name='address'
                        type='text'
                        id='address'
                    />
                </div>

                <div>
                    <label htmlFor='recruterName'>Recruter Name</label>
                    <input 
                        ref={register}
                        name='recruterName'
                        type='text'
                        id='recruterName'
                    />
                </div>

                <div>
                    <label htmlFor='email'>Email</label>
                    <input 
                        ref={register}
                        name='email'
                        type='email'
                        id='email'
                    />
                </div>

                <div>
                    <label htmlFor='document'>Username</label>
                    <input 
                        ref={register}
                        name='username'
                        type='text'
                        id='username'
                    />
                </div>

                <div>
                    <label htmlFor='document'>Password</label>
                    <input 
                        ref={register}
                        name='password'
                        type='password'
                        id='password'
                    />
                </div>

                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default Registration;
