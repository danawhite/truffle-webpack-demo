import React, {Component} from 'react';

// const renderEvent = (event, index) => {
//     console.log(event, index);
//     return <div key={index}>{event.name}</div>
// };

export default class EventsList extends Component {
    constructor(props) {
        super(props);

        console.log(this)
    }

    renderEvent = (event, index) => {
        console.log(event)
        return (
        <div style={{margin: 10}}>
            <img key={index} src={`src/assets/images/chapelle/${event}`} height={320} width={240}/>
        </div>
        )
    }

    render() {
        const { events } = this.props;
        return (
            <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
                {events.map((event, index) => this.renderEvent(event, index))}
            </div>
        )
    }
}
