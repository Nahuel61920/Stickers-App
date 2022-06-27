import React, { useState }from 'react';
import styled from './AddCategory.module.css';
import PropTypes from 'prop-types';


export const AddCategory = ({setcategories}) => {

    const [input, setInput] = useState('')
    const [error, setError] = useState(false)

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(input === '') {
            setError(true)
            return
        } else {
            setcategories(categori => [input])
            setError(false)
            setInput('')
        }
    }

    setTimeout(() => {
        setError(false)
    }, 5000)

    return (
        <>
            <form onSubmit={ handleSubmit } className={styled.form}>
                <input 
                    type="text" 
                    value={input}
                    onChange={handleInput}
                    className={styled.inputSearch}
                    placeholder="Search..."
                />
            </form>
            { error ? <p className={styled.error}>El campo no puede estar vacio...</p> : ""}
        </>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}
