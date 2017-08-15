import React, { Component } from 'react';

import EventsList from './EventsList';

export default class EventsContainer extends Component {
    state = {
        events: [
            '0815-chappelle-special-guest.png',
            '0817-chappelle-chance.png',
            '0818-chappelle-trevornoah.png',
            '0819-chappelle-donaldglover.png',
            '0820-chappelle-lauryn.png',
            '0822-chappelle-solange.png',
            '0823-chappelle-mosdef.png',
            '0824-chappelle-aliwong.png'
        ]
    };

    static propTypes = {};

    static defaultProps = {};

    componentWillMount = () => {

    };

    componentDidMount = () => {
        // this.getEvents().then(events => {
        //     this.setState({
        //         events
        //     }, () => console.log(events))
        // })
    };

    getEvents = () => {
        // return ChappelleShows;
    };

    render() {
        const { events } = this.state;
        return <EventsList events={events}/>
    }
}
