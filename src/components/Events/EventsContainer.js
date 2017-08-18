import React, { Component } from 'react';

import Rodal from 'rodal';
import Select from 'react-select'


import EventsList from './EventsList';

import './rodal.css';
import './react-select.css';

const quantityOptions = [
    {value: 1, label: 1},
    {value: 2, label: 2},
    {value:3, label: 3},
    {value: 4, label: 4},
    {value:5, label: 5},
    {value: 6, label: 6},
    {value: 7, label: 7},
    {value: 8, label: 8}
];

const styles = {
    modal: {
        height: 800,
        width: 600,
        background: 'steelblue'
    },
    header: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end'
    },
    eventImage: {
        height: 170,
        width: 200
    },
    buyInfoContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'grey',
        borderRadius: 10
    },
    purchaseBtn: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'green',
        borderRadius: 4,
        height: 42,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    }
}

export default class EventsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [
                {name: 'Stubhub', img:'stubhub.jpg'},
                {name: 'Chance', img: '0817-chappelle-chance.png'},
                {name: 'Trevor', img: '0818-chappelle-trevornoah.png'},
                {name: 'Donald', img: '0819-chappelle-donaldglover.png'},
                {name: 'Lauryn', img: '0820-chappelle-lauryn.png'},
                {name: 'Solange', img: '0822-chappelle-solange.png'},
                {name: 'Yasiin', img: '0823-chappelle-mosdef.png'},
                {name: 'Yasiin', img: '0823-chappelle-mosdef.png'},
                {name: 'Yasiin', img: '0823-chappelle-mosdef.png'},
                {name: 'Ali', img: '0824-chappelle-aliwong.png'}
            ],
            showModal: false,
            selectedEvent: {},
            selectedAccount: '',
            quantity: 0,
        };
    }

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

    openModal = (event, account) => {
        console.log('openModal', event, account);
        const { selectedEvent, selectedAccount } = this.state;
        this.setState({
            showModal: true,
            selectedEvent: event,
            selectedAccount: account
        }, () => console.log(selectedEvent, selectedAccount))
    };

    handleCloseModal = () => {
        this.setState({
            showModal: false
        })
    };

    handleQuantitySelect = (value) => {
        console.log(value);
        this.setState({
            quantity: value
        })
    };

    handlePurchase = () => {
        const {
            quantity,
            selectedEvent,
            selectedAccount
        } = this.state;

        const { onPurchase } = this.props;

        console.log(quantity, selectedEvent, selectedAccount);

        onPurchase(selectedEvent, selectedAccount, quantity);

        this.handleCloseModal()
    };

    render() {
        const {
            events,
            showModal,
            selectedEvent,
            quantity
        } = this.state;

        const { accounts } = this.props;

        return (
            <div>
                <EventsList events={events}
                            accounts={accounts}
                            handleOpenModal={this.openModal}/>
                <Rodal
                    style={styles.modal}
                    visible={showModal}
                    animation="slideUp"
                    onClose={this.handleCloseModal}>
                    <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                        <div style={styles.eventDetails}>
                            <div>{selectedEvent.name}</div>
                        </div>
                        <div style={{display: 'flex', flex: 1}}>
                            <img style={styles.eventImage}
                                 src={`src/assets/images/chapelle/${selectedEvent.img}`}/>
                            <div style={styles.buyInfoContainer}>
                                <div>
                                    <div>Quantity:</div>
                                </div>
                                <Select
                                    name="form-field-name"
                                    value={quantity}
                                    options={quantityOptions}
                                    onChange={this.handleQuantitySelect}
                                    style={{width: 200}}
                                />
                            </div>
                        </div>
                        <div style={styles.purchaseBtn} onClick={this.handlePurchase}>Purchase</div>
                    </div>
                </Rodal>
            </div>

        )
    }
}
