import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: [0, 0, 0, 0, 0, 0]
        }
    }

    next = () =>
        this.setState({
            selected: Math.floor(Math.random() * anecdotes.length)
        })

    vote = () => {
        const kopio = [...this.state.votes]
        kopio[this.state.selected] += 1

        return (
            this.setState({
                votes: kopio
            })
        )
    }

    render() {
        const maxVotes = Math.max(...this.state.votes)
        const maxIndex = this.state.votes.indexOf(maxVotes)

        return (
            <div>
                {this.props.anecdotes[this.state.selected]}
                <br />
                has {this.state.votes[this.state.selected]} votes
                <br />
                <button onClick={this.vote}>vote</button>
                <button onClick={this.next}>next anecdote</button>
                <h1>anecdote with most votes:</h1>
                {this.props.anecdotes[maxIndex]}
                <br />
                has {maxVotes} votes
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)