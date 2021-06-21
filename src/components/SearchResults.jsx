import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

class SearchResults extends React.Component {
    render() {
        return this.props.result && this.props.result.jobs.length > 0 ? (
            this.props.result.jobs.map((item, index) => {
                return (
                    <Card className="mt-3">
                        <Card.Header className="text-center p-1">{item.title}</Card.Header>
                        <Card.Body className="text-center p-1">{item.candidate_required_location}</Card.Body>
                        <Link to={`./company-details/${item.company_name}`}>
                            <Card.Footer className="text-center p-1">{item.company_name}</Card.Footer>
                        </Link>
                    </Card>
                )
            })
        ) : this.props.result ? (
            <h1 className="text-center p-5">No results found</h1>
        ) : null
    }
}

export default SearchResults
