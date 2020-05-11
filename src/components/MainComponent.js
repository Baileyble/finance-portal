import React, {Component} from "react";
import Header from "./HeaderComponent";
import TransactionTable from "./TransactionTableComponent";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
    }

    componentDidMount() {
        fetch("https://financialwebapinew.azurewebsites.net/api/Transactions/GetTransactions")
            .then(res => res.json())
            .then(
                (result) => {
                    // if we get data back successfully
                    this.setState({
                        transactions: result
                    });
                },
                (error) => {
                    // if the call fails
                    alert(error)
                    this.setState({
                        error
                    });
                }
            )

    }

    render() {
        return (
            <>
                <Header />
                <TransactionTable transactions={this.state.transactions} />
            </>
        )
    }


}

export default Main