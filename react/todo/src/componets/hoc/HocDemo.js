import React from "react";
import List from "./List";
import WithLoading from "./WithLoading";
const ListWithLoading = WithLoading(List);

class HocDemo extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            repos : null
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        setTimeout(()=>{
            fetch(`https://api.github.com/users/hacktivist123/repos`)
                .then((json) => json.json())
                .then((repos) => {
                    this.setState({ loading: false, repos: repos });
                });
        },3000);

    }
    render() {
        return (
            <ListWithLoading
                isLoading={this.state.loading}
                repos={this.state.repos}
            />
        );
    }
}
export default HocDemo;