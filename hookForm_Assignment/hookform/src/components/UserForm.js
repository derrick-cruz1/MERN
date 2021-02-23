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
                <input type="text" onChange={(e)=> setFirst(e.target.value)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e)=> setLast(e.target.value)} />
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e)=> setConfirmPassword(e.target.value)} />
            </div>
            <p>Your form data:</p>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </form>
        
    );
};

export default UserForm;