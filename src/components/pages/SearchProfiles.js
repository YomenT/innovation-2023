import React from "react";
import { Link } from 'react-router-dom'

class SearchProfiles extends React.Component {

    storageUserId = localStorage.getItem('userId')
    storageFirstName = localStorage.getItem('firstName')
    storageLastName = localStorage.getItem('lastName')
    storageEmail = localStorage.getItem('email')

    state = {
        userId: '',
        afterSearchUserId: '',
        firstName: '',
        lastName: '',
        email: '',
        newUserId: '',
        newFirstName: '',
        newLastName: '',
        newEmail: ''
    }

    handleChangeUserId = (event) => {
        const input = event.target.value
        this.setState({userId: input})
    }

    handleFormSubmit = (event) => {
        if (this.state.userId === this.storageUserId) {
            this.setState({afterSearchUserId: this.storageUserId})
            this.setState({firstName: this.storageFirstName})
            this.setState({lastName: this.storageLastName})
            this.setState({email: this.storageEmail})
        } else if (this.state.userId === 'Hartak4') {
            this.setState({afterSearchUserId: "Hartak4"})
            this.setState({firstName: "Harta"})
            this.setState({lastName: "Krisna"})
            this.setState({email: "krisnah@gmail.com"})
        } else if (this.state.userId === 'Fred42') {
            this.setState({afterSearchUserId: "Fred42"})
            this.setState({firstName: "Fred"})
            this.setState({lastName: "Rick"})
            this.setState({email: "fred.rick@gmail.com"})
        } else {
            alert("Unable to find patient.")
        }
        event.preventDefault()
    }

    handleEditFormSubmit = (event) => {
        localStorage.setItem('userId', this.state.newUserId)
        localStorage.setItem('firstName', this.state.newFirstName)
        localStorage.setItem('lastName', this.state.newLastName)
        localStorage.setItem('email', this.state.newEmail)
    }

    changeUserId = (event) => {
        this.setState({newUserId: event.target.value})
        this.setState({afterSearchUserId: event.target.value})
    }

    changeFirstName = (event) => {
        this.setState({newFirstName: event.target.value})
        this.setState({firstName: event.target.value})
    }

    changeLastName = (event) => {
        this.setState({newLastName: event.target.value})
        this.setState({lastName: event.target.value})
    }

    changeEmail = (event) => {
        this.setState({newEmail: event.target.value})
        this.setState({email: event.target.value})
    }

    render() {
        return (
            <div className="text-center m-5-auto">
                <div>
                    <h2>Search</h2>
                    <h5>Lookup existing registered patients</h5>
                    <form onSubmit={this.handleFormSubmit}>
                        <p>
                            <label>User ID</label><br />
                            <input type="text" onChange={this.handleChangeUserId} name="user_id" />
                        </p>
                        <p>
                            <button id="sub_btn" type="submit">Search</button>
                        </p>
                    </form>
                    <footer>
                        <p><Link to="/">Back to Homepage</Link>.</p>
                    </footer>
                    <h5 style={{ paddingTop: "50px" }}>Patient information will appear below</h5>
                </div>
                <form onSubmit={this.handleEditFormSubmit}>
                    <p>
                        <label>User ID: {this.state.afterSearchUserId}</label><br />
                        <input type="text" value={this.state.newUserId} onChange={this.changeUserId} id="user_id" name="user_id" />
                    </p>
                    <p>
                        <label>First name: {this.state.firstName}</label><br/>
                        <input type="text" value={this.state.newFirstName} onChange={this.changeFirstName} id="first_name" name="first_name" />
                    </p>
                    <p>
                        <label>Last name: {this.state.lastName}</label><br/>
                        <input type="text" value={this.state.newLastName} onChange={this.changeLastName} id="last_name" name="last_name" />
                    </p>
                    <p>
                        <label>Email address: {this.state.email}</label><br/>
                        <input type="email" value={this.state.newEmail} onChange={this.changeEmail} id="email" name="email" />
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Submit Changes</button>
                    </p>
                </form>
            </div>
        )
    }
}

export default SearchProfiles