import React, { ChangeEvent, Component } from 'react';

class SimpleForm extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            name: '',
        };
    }

    handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nom soumis : ${this.state.name}`);
    }

    render() {
        return (
            <div>
                <h1>Formulaire Simple en React</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nom :
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                    </label>
                    <button type="submit">Soumettre</button>
                </form>
            </div>
        );
    }
}

export default SimpleForm;
