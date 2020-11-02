import React, { useState } from 'react'



const List = (props) => {
    const [items, setItems] = useState([{message:"Learn React", checked: false}]);



    const submitHandler = (e) => {
        e.preventDefault();
        setItems([...items, {message: e.target.item.value, checked: false}])
        e.target.item.value = "";
    }
    const changeHandler = (e,i) => {
        
        if(e.target.checked){
            var newVal = {message: items[i].message, checked: true}
            if(i != items.length-1){
                setItems([...items.splice(0,i), newVal].concat(items.splice(i+1)))
            }
            else {
                setItems([...items.splice(0,i), newVal])
            }
        }
        else {
            var newVal = {message: items[i].message, checked: false}
            if(i != items.length-1){
                setItems([...items.splice(0,i), newVal].concat(items.splice(i+1)))
            }
            else {
                setItems([...items.splice(0,i), newVal])
            }
        }
    }

    const deleteHandler = (e, i) => {
        if(i != items.length-1){
            setItems([...items.splice(0,i)].concat(items.splice(i+1)))
        }
        else {
            setItems([...items.splice(0,i)])
        }
    }

    return (
        <>
            <form action="" onSubmit={submitHandler}>
                <input type="text" id="item"/>
                <input type="submit"/>
            </form>
            {
            items.map( (item, i) => {
                return <div>
                    <input type="checkbox" name={i} onChange={(e)=> changeHandler(e,i)} />
                    {
                        item.checked ? <label htmlFor={i}><s>{item.message}</s></label> : <label htmlFor={i}>{item.message}</label>
                    }
                    <button onClick={(e) => deleteHandler(e, i)}>Delete</button>
                </div> 
            })
            }
        </>
    )
}

export default List;