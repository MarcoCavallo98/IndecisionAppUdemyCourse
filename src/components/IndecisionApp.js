import React, {Component} from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import ModalOption from './ModalOption';

class IndecisionApp extends Component {

    state = {
        selectedOption: undefined,
        error: undefined,
        options: []
    }

    componentDidMount = () => {
        const options_saved = JSON.parse(localStorage.getItem("options"));
        if(options_saved)
            this.setState(() => ({options: options_saved}));
    }

    componentDidUpdate = () => {
        localStorage.setItem("options", JSON.stringify(this.state.options));
    }

    componentWillUnmount = () => {
        localStorage.clear();
    }

    chooseOption = () => {
        const optNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[optNum];
        this.setState(() => ({selectedOption: option}));
    }

    removeAllOptions = () => this.setState(() => ({options: []}));

    removeOption = (optNum) => {
        this.setState((prevState) => ({options:prevState.options.filter((elem, index) => index != optNum)}));
    }

    setError = (msg) => this.setState(() => ({error: msg}));

    addOption = (e) => {
        e.preventDefault();
        this.setError(undefined);
        const newOpt = e.target.elements.newOpt.value;
        if(this.state.options.indexOf(newOpt) >= 0)
            this.setError("This option already exists");
        else if(!newOpt)
            this.setError("Insert a valid option");
        else{
            this.setState((prevState) => ({options: prevState.options.concat([newOpt])}));
            e.target.elements.newOpt.value = '';
        }
    }

    closeModal = () => this.setState(() => ({selectedOption: undefined}));

    render = () => (
        <div>
            <Header />
            <div className="container--main">
                <Action 
                    disabled={this.state.options.length === 0}
                    chooseOption={this.chooseOption} 
                />
                <Options 
                    disabled={this.state.options.length === 0}
                    options={this.state.options} 
                    removeOption={this.removeOption}
                    removeAllOptions={this.removeAllOptions}
                />
                <div>
                    {this.state.error && <p className="error">{this.state.error}</p>}
                    <AddOption
                        addOption={this.addOption}
                    />
                </div>
            </div>
            <ModalOption 
                selectedOption={this.state.selectedOption}
                closeModal={this.closeModal}
            />
        </div>
    );

}

export default IndecisionApp;