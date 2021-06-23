import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import * as Icon from "react-bootstrap-icons"
import { connect } from "react-redux"
import { addJobToFavsAction, removeJobFromFavsAction } from "../actions"

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    addJobToFavs: job => dispatch(addJobToFavsAction(job)),
    removeJobFromFavs: job => dispatch(removeJobFromFavsAction(job))
})

class SearchResults extends React.Component {
    render() {
        return this.props.result && this.props.result.jobs.length > 0 ? (
            this.props.result.jobs.map((item, index) => {
                return (
                    <Card key={index} className="mt-3">
                        <Card.Header className="p-1 d-flex justify-content-between">
                            <div className="pl-3"></div>
                            <div>{item.title}</div>
                            <div>
                                {this.props.favorites.find(_item => _item.id === item.id) ? (
                                    <Icon.StarFill onClick={() => this.props.removeJobFromFavs(item)} />
                                ) : (
                                    <Icon.Star onClick={() => this.props.addJobToFavs(item)} />
                                )}
                            </div>
                        </Card.Header>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
