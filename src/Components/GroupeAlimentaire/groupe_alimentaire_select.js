import React from 'react';
import { Dropdown, Icon, Menu , Button, Label} from 'semantic-ui-react';

export default function GroupeAlimentaireSelect({
                            groupe_alimentaires, 
                            selectedAliments, 
                            setSelectedGroupAlimentaires,
                            selectedGroupAlimentaires,
                            setCurrentlySelectedGroupAlimentaire    
                        })
{

    const handleGroupAlimentaireSelect = (e, selectedAlimentaire) => {
        setSelectedGroupAlimentaires([...selectedGroupAlimentaires, selectedAlimentaire.value]);
    }

    const handleChosenGroupAlimentaire = (e, chosenAlimentaire) => {
        setCurrentlySelectedGroupAlimentaire(chosenAlimentaire.value);
    }

    return (
        <Menu attached='top' >
            <Button.Group color='teal'>
                
                <Dropdown
                    text='Ajouter'
                    icon='triangle down'
                    labeled
                    button
                    className='icon'
                >
                    <Dropdown.Menu>

                        <Dropdown.Header icon='tags' content='Ajouter Groupe Alimentaire' />
                        {
                            Object.keys(groupe_alimentaires).map(
                                (item) => <Dropdown.Item 
                                                onClick={handleGroupAlimentaireSelect}
                                                value={item}
                                                icon={"food"}
                                                content={item}
                                />
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
                <Button.Or />
                <Dropdown
                    text='Choisir'
                    icon='plus'
                    labeled
                    button
                    className='icon'
                    closeOnChange
                >
                    <Dropdown.Menu>

                        <Dropdown.Header icon='tags' content='Choisir Groupe Alimentaire' />
                        {
                            selectedGroupAlimentaires.map(
                                (item) => <Dropdown.Item 
                                            value={item}
                                            content={item}
                                            onClick={handleChosenGroupAlimentaire}/>
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
                
            </Button.Group>


            <Menu.Menu position='right'>
                <Button animated='vertical' color={"red"}>
                    <Button.Content hidden>Delete</Button.Content>
                    <Button.Content visible>
                        <Icon name='trash alternative' />
                    </Button.Content>
                </Button>
            </Menu.Menu>
        </Menu>
    )

}