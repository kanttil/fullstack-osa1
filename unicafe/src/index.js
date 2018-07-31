import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ teksti, handleClick }) =>
    <button onClick={handleClick}>{teksti}</button>

const Statistics = ({ hyva, neutraali, huono, yht }) => {
    const keskiarvo = (hyva - huono) / yht
    const ka = keskiarvo.toFixed(1)
    const positiivisia = 100 * hyva / yht
    const pos = positiivisia.toFixed(1) + " %"

    if (yht === 0) {
        return (
            <div>
                ei yhtään palautetta annettu
            </div>
        )
    }

    return (
        <table>
            <tbody>
                <Statistic teksti="hyvä" arvo={hyva} />
                <Statistic teksti="neutraali" arvo={neutraali} />
                <Statistic teksti="huono" arvo={huono} />
                <Statistic teksti="keskiarvo" arvo={ka} />
                <Statistic teksti="positiivisia" arvo={pos} />
            </tbody>
        </table>
    )
}

const Statistic = ({ teksti, arvo }) =>
    <tr>
        <td>{teksti}</td>
        <td>{arvo}</td>
    </tr>

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            yht: 0
        }
    }

    lisaaPalaute = (palaute) =>
        () => {
            this.setState({
                [palaute]: this.state[palaute] + 1,
                yht: this.state.yht + 1
            })
        }

    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <Button teksti="hyvä" handleClick={this.lisaaPalaute("hyva")} />
                <Button teksti="neutraali" handleClick={this.lisaaPalaute("neutraali")} />
                <Button teksti="huono" handleClick={this.lisaaPalaute("huono")} />
                <h1>statistiikka</h1>
                <Statistics
                    hyva={this.state.hyva}
                    neutraali={this.state.neutraali}
                    huono={this.state.huono}
                    yht={this.state.yht} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

