import React from "react"
import { Container, Button, Form, InputGroup, FormControl } from "react-bootstrap"
import * as Icon from "react-bootstrap-icons"
import SearchResults from "./SearchResults"

class Search extends React.Component {
    state = {
        search: ""
    }

    search = async e => {
        e.preventDefault()
        await this.props.crud.getAll(this.state.search)
    }

    render() {
        return (
            <Container>
                <Form className="pt-3" onSubmit={this.search}>
                    <InputGroup>
                        <FormControl placeholder="Search..." value={this.state.search} onChange={e => this.setState({ search: e.target.value })} />
                        <InputGroup.Append>
                            <Button type="submit">
                                <Icon.Search />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>

                <SearchResults result={this.props.result} />
            </Container>
        )
    }
}

export default Search
