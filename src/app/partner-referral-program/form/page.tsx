'use client'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"


export default function form() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data: any) => console.log(data)

    const [reference, setReference] = useState([{
        name: '', number: ''
    }])
    const [partner, setPartner] = useState({
        name: '', number: ''
    })

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >

                <input
                    placeholder='name'
                    {...register("name", { required: 'name is required' })}
                    aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name?.type === "required" && (
                    <p role="alert">name is required</p>
                )}

                <input placeholder='number'

                    {...register("number", { required: "number is required", maxLength: 10, pattern: /^[0-9]{10}$/i })}
                    aria-invalid={errors.number ? "true" : "false"}
                />
                {errors.number?.type === "required" && (
                    <p role="alert">number is required</p>
                )}
                {errors.number?.type === "invalid" && (
                    <p role="alert">number is invalid</p>
                )}
                <br />
                {
                    reference.map((ref, i) => (
                        <div key={i}>
                            <input
                                placeholder='ref name'
                                {...register("ref_name", { required: true })}
                                aria-invalid={errors.name ? "true" : "false"}
                            />
                            {errors.ref_name?.type === "required" && (
                                <p role="alert">name is required</p>
                            )}

                            <input
                                placeholder='ref num'
                                {...register("ref_number", { required: "number is required" })}
                                aria-invalid={errors.number ? "true" : "false"}
                            />
                            {errors.ref_number?.type === "required" && (
                                <p role="alert">number is required</p>
                            )}

                            <br />

                        </div>
                    ))
                }



                <button>add ref</button>
                <br />
                <input type="submit" />
            </form>

        </div >
    )
}
