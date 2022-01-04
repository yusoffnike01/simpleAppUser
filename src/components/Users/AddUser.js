import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser=props=>{

  const [EnteredUsername, setEnteredUsername]= useState('');
  const [EnteredAge, setEnteredAge]= useState('');
   const[error, setError]=useState()

  const addUserHandler=(event)=>{
    event.preventDefault();
    
    if(EnteredUsername.trim().length===0 || EnteredAge.trim().length===0)
    {
      setError({
        title: 'Null',
        message:'Please enter valid name and age(non-empty values) '
      })
      return;
    }  
    if(+EnteredAge<0)
    {
      setError({
        title: 'Invalid Age',
        message: 'Please enter valid name and age(non-empty values) '
      })
      return 
    }
    props.onAddUser(EnteredUsername,EnteredAge);
    setEnteredUsername('');
    setEnteredAge('');

  };

  const usernameChangeHandler=(event)=>{
    setEnteredUsername(event.target.value);

  }

  const ageChangeHandler=event=>{
    setEnteredAge(event.target.value);
  }

  const ErrorChangeHandler=()=>
  {
    console.log('test');
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message= {error.message} onConfirm={ErrorChangeHandler}/>}  
  <Card className={classes.input}>
  <form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input id="username" type="text" value={EnteredUsername} onChange={usernameChangeHandler}></input>
    <label htmlFor="age">Age(Years)</label>
    <input id= 'age' type='number' value={EnteredAge}onChange={ageChangeHandler}/>
    <Button type="submit"> Add User</Button>
  </form>
  </Card>
    </div>
  )
}

export default AddUser;