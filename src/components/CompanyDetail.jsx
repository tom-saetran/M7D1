import React from "react"
import { Card, Spinner } from "react-bootstrap"
import { withRouter } from "react-router-dom"

class CompanyDetail extends React.Component {
    state = {
        details: null
    }
    componentDidMount = async () => this.setState({ details: await this.props.crud.get(this.props.match.params.id) })

    render() {
        return this.state.details && this.state.details.jobs.length > 0 ? (
            this.state.details.jobs.map(job => (
                <Card key={job.id} className="m-3">
                    <Card.Title className="text-center py-2 border-bottom">{job.title}</Card.Title>
                    <Card.Body dangerouslySetInnerHTML={{ __html: job.description }} />
                    <a href={job.url} target={"_blank"} rel="noreferrer">
                        <Card.Title className="text-center border-top m-0 py-2">More details (Opens in an external window)</Card.Title>
                    </a>
                </Card>
            ))
        ) : this.state.details ? (
            <h1 className="text-center p-5">No jobs found for {this.props.match.params.id}</h1>
        ) : (
            <div className="text-center p-5">
                <Spinner animation="border" variant="secondary" />
            </div>
        )
    }
}

export default withRouter(CompanyDetail)
