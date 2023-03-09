import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default class SignUpPage extends React.Component {

    state = {
        userId: '',
        firstName: '',
        lastName: '',
        email: ''
    }

    handleChangeUserId = (event) => {
        const input = event.target.value
        this.setState({userId: input})
    }

    handleChangeFirstName = (event) => {
        const input = event.target.value
        this.setState({firstName: input})
    }

    handleChangeLastName = (event) => {
        const input = event.target.value
        this.setState({lastName: input})
    }

    handleChangeEmail = (event) => {
        const input = event.target.value
        this.setState({email: input})
    }

    handleFormSubmit = () => {
        localStorage.setItem('userId', this.state.userId)
        localStorage.setItem('firstName', this.state.firstName)
        localStorage.setItem('lastName', this.state.lastName)
        localStorage.setItem('email', this.state.email)

        localStorage.setItem('userId2', "Fred42")
        localStorage.setItem('firstName2', "Fred")
        localStorage.setItem('lastName2', "Rick")
        localStorage.setItem('email2', "fred.rick@gmail.com")

        localStorage.setItem('userId3', "HartaK4")
        localStorage.setItem('firstName3', "Harta")
        localStorage.setItem('lastName3', "Krisna")
        localStorage.setItem('email3', 'krisnah@gmail.com')
    }

    render() {
        return (
            <div className="text-center m-5-auto">
                <h2>Join us</h2>
                <h5>Patient Registration</h5>
                <form action="/home" onSubmit={this.handleFormSubmit}>
                    <div>
                        <p>
                            <label>User ID</label><br />
                            <input type="text" value={this.state.userId} onChange={this.handleChangeUserId} id="user_id" name="user_id" />
                        </p>
                    </div>
                    <p>
                        <label>First name</label><br/>
                        <input type="text" value={this.state.firstName} onChange={this.handleChangeFirstName} id="first_name" name="first_name" />
                    </p>
                    <div>
                        <div>
                            <p>
                                <label>Last name</label><br/>
                                <input type="text" value={this.state.lastName} onChange={this.handleChangeLastName} id="last_name" name="last_name" />
                            </p>
                        </div>
                    </div>
                    <p>
                        <label>Email address</label><br/>
                        <input type="email" value={this.state.email} onChange={this.handleChangeEmail} id="email" name="email" />
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Register</button>
                    </p>
                </form>
                <footer>
                    <p><Link to="/">Back to Homepage</Link>.</p>
                </footer>
            </div>
        )
    }
}
