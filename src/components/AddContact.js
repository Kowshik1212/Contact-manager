import React from 'react'

class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    }
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory");
            return;
        }
        this.props.settingEnteredInputsInState(this.state);
        this.setState({ name: "", email: "" });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.add}>
                    <label>Name:</label>
                    <input type="text" id="name" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }}></input>
                    <label>Email:</label>
                    <input type="text" id="email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }}></input>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact