import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            random: ''
        }
    }
    render() {
        return (
            <div className="search-main" >
                <h1>Are You Not Entertained?</h1>
                    <div className="search-top">
                        <div className='search-bar'>
                            <p>Bored?  Start Typing and We Will Grab Some YouTube Vidoes for Ya!!</p>
                            <input type="text"
                                value={this.state.term}
                                onChange={event => this.onInputChange(event.target.value)}/>
                        </div>
                        <div className="btn rando">
                            <p>Or you can hit the Randomize button for some Random Goodness</p>
                            <input type="submit" value="Randomize" onClick={event => this.getValue(event.target.value)} />
                            <h2>{this.state.random}</h2>
                        </div>
                    </div>
            </div>
        );
    }
    onInputChange(term) {
        this.setState({ term });
        this.props.onSerchTermChange(term);
}
    getValue() {
        const myarray = new Array("Batman", "Superman", "Wonder woman", "You Are Not the Father", "Zombie Kid Likes Turtles", "Dallas Funny News - Lizard Jumps on News Guy", "The Colour Red", "Doomsday Clock", "Boggle", "Why did the Chicken Cross the Road", "It's Over 9000", "Grumpy Cat", "But That's None of My Business", "Be Like Bill", "Michael Buble", "Old Spice Guy", "What Does the Fox Say", "More Cowbell", "Doge", "Sailor Moon", "Flowers", "Altoids", "Jimmy in a WheelChair", "Magic Killer", "How Skateboards are Made", "Sold Out", "Mr. Roger Neighborhood", "Gumby", "Numa Numa Dance", "Lollipops", "Black Friday", "Spagetti", "House Plants", "Ghost Peppers", "Falcon Arrow", "River Boats", "Frisbees", "Squirel", "White Noise", "Air Jordan", "Teenage Dirtbag", "Sandman", "The Road Less Travelled", "Sour Dough Bread" );
        
        let random = myarray[Math.floor(Math.random() * myarray.length)];
        this.setState({ random });
        console.log(random);
        this.props.onSerchTermChange(random);
    }
}
export default SearchBar