import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Search from "./components/Search"
import CompanyDetail from "./components/CompanyDetail"

class App extends React.Component {
    state = {
        result: null
    }

    crud = {
        endpoint: "https://remotive.io/api/remote-jobs",

        getAll: async query => {
            let result
            try {
                result = await fetch(this.crud.endpoint + "?search=" + query + "&limit=1")
                if (!result.ok) throw new Error("Got data in return but status.ok is false!")
                result = await result.json()
            } catch (error) {
                console.error(error)
            }
            this.setState({ result: result })
        },

        get: async name => {
            let result
            try {
                if (name === "" || name === undefined || name === null) throw new Error("name must be present")
                result = await fetch(this.crud.endpoint + "?company_name=" + name)
                if (!result.ok) throw new Error("Got data in return but status.ok is false!")
                result = await result.json()
            } catch (error) {
                console.error(error)
                return null
            }
            return await result
        }
    }

    render() {
        return (
            <Router>
                <Route path="/" exact render={routeProps => <Search {...routeProps} result={this.state.result} crud={this.crud} />} />
                <Route path="/company-details/:id" exact render={routeProps => <CompanyDetail {...routeProps} crud={this.crud} />} />
            </Router>
        )
    }
}

export default App
