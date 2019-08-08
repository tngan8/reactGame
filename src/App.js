import React from 'react';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import images from './images.json';

class App extends React.Component {

    state = {
        images: images,
        currentScore: 0,
        topScore: 0,
        clicked: [],
        message: ''
    }


    checkClicked = ids => {
        let matchFound = false;
        this.state.clicked.map(function(id){
            if (ids === id) {
                matchFound = true;
            }
        })
        return matchFound;
    }

    shuffleCards = array =>
        array.map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1])

    handleClick = id => {
        console.log(`id: ${id}`)
        switch (this.checkClicked(id)) {
            case true:
                this.checkWinLose(true);
                break;
            case false:
                this.checkWinLose(false, id);
                break;
            default:
                break;
        }
    }

    checkWinLose = (lost, id) => {
        const { currentScore, topScore, clicked } = this.state
        const newScore = currentScore;
        if (clicked.length === 85) {
            this.setState({
                images,
                currentScore: 0,
                topScore: newScore > topScore ? newScore : topScore,
                clicked: [],
                message: 'You Win! Click image to try again.'
            });
        } else {
            const score = currentScore + 1
            this.setState({
                clicked: [...clicked, id],
                images: this.shuffleCards(images),
                currentScore: score,
                message: ''
            });
        }
        if (lost) {
            this.setState({
                images,
                currentScore: 0,
                topScore: newScore > topScore ? newScore : topScore,
                clicked: [],
                message: 'You Lose! Click image to try again.'
            });
        }
    }

    render () {
        return (
            <div className='container-fluid'>
             
               
                <div className='container'>
                    <div className='row flow-text'>
                        {this.state.images.map(image =>
                            <Cards
                                key={image.id}
                                image={image.image}
                                id={image.id}
                                handleClick={this.handleClick} />)}
                    </div>
                </div>
                {/* <Nav /> */}
                <Header
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                    message={this.state.message} />
            </div >

        );
    }
}

export default App;