import react, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log("Welcome Foo!", newUser);
    }


    return (
        <form onSubmit = {createUser}>
            <div>
                <label>First Name: </label>
                <input type="text"
                    name = "firstName"
                    value = {firstName}
                    onChange={(e)=> setFirst(e.target.value)} 
                />
                {
                    firstName.length < 1 ?
                    <span>First Name must be at least 2 characters or more.</span>
                    : null
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text"
                    name = "lastName"
                    value = {lastName}
                    onChange={(e)=> setLast(e.target.value)} />
                {
                    lastName.length < 1 ?
                    <span>Last Name must be at least 2 characters or more.</span>
                    : null
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" 
                name = "email"
                value = {email}
                onChange={(e)=> setEmail(e.target.value)} />
                {
                   email.length < 5 ?
                   <span>Email must be at least 5 characters or more.</span>
                   : null 
                }
            </div>
            <div>
                <label>Password: </label>
                <input 
                type="text" 
                name = "email"
                value = {password}
                onChange={(e)=> setPassword(e.target.value)} />
                {
                    password.length < 8 ?
                    <span>Password must be at least 8 characters or more.</span>
                    : null 
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" 
                name = "confirmPassword"
                value = {confirmPassword}
                onChange={(e)=> setConfirmPassword(e.target.value)} />
                {
                     password != confirmPassword ?
                     <span>Password must match!</span>
                     : null 
                }
            </div>
        </form>
        
    );
};

export default UserForm;