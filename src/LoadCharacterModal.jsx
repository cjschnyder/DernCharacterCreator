import {Component} from 'react';
import { connect } from 'react-redux';
import {loadDeck} from './store/actions'
import './style/ModalStructure.scss'
import './style/LoadCharacterModal.scss'

class LoadCharacterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }
    
    render(){
        const {
            isOpen,
            close,
            loadDeck
        } = this.props
        const {
            cards
        } = this.state
        
        return(
            <div className={`modal-wrapper ${isOpen ? 'show' : ''}`}>
                <div className='modal-body'>
                    <div className='modal-title'>
                        <h2>Load a Character</h2>
                        <div className="close-button" onClick={() => close()}>
                            <span>X</span>
                        </div>
                    </div>
                    <div className='load-deck-wrapper'>
                            {
                                
                                Object.keys(JSON.parse(JSON.stringify(localStorage))).filter(deck => !deck.includes('persist')).map(character =>
                                    <div className='load-deck'>
                                        <h3>{character}:</h3>
                                        <div 
                                            className='button' 
                                            onClick={() => {
                                                const selectedCharacter = JSON.parse(localStorage.getItem(character))
                                                loadDeck(
                                                    selectedCharacter.deck,
                                                    character,
                                                    selectedCharacter.level,
                                                    selectedCharacter.ancestry,
                                                    selectedCharacter.classOne,
                                                    selectedCharacter.classTwo,
                                                    selectedCharacter.classThree,
                                                    selectedCharacter.characterFiveSkills,
                                                    selectedCharacter.characterTenSkills
                                                );
                                                close();
                                            }}
                                        >
                                            Load
                                        </div>
                                        <div 
                                            className='button delete' 
                                            onClick={() => {
                                                localStorage.removeItem(character);
                                                close();
                                            }}
                                        >
                                            Delete
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {
    loadDeck: loadDeck
})(LoadCharacterModal);