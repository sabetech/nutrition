import React from 'react';
import { Dropdown, Icon, Menu , Button, Label} from 'semantic-ui-react';

export default function GroupeAlimentaireSelect({
                            groupe_alimentaires,
                            selectedAliments, 
                            setSelectedGroupAlimentaires,
                            selectedGroupAlimentaires,
                            setCurrentlySelectedGroupAlimentaire,
                            currentlySelectedGroupAlimentaire  
                        })
{

    const handleGroupAlimentaireSelect = (e, selectedAlimentaire) => {
        let numberOfOccurences = selectedGroupAlimentaires.filter(groupe_alim => groupe_alim.substring(0, (groupe_alim.indexOf("_") === -1) ? groupe_alim.length : groupe_alim.indexOf("_")) === selectedAlimentaire.value).length;
        //if this is more than zero, then it means there may be multiple groupe_alims
        //continue from here

        let selectedAlimentaireValue = (numberOfOccurences > 0) ? selectedAlimentaire.value+"_"+numberOfOccurences : selectedAlimentaire.value;
        setSelectedGroupAlimentaires([...selectedGroupAlimentaires, selectedAlimentaireValue]);
        
    }

    const handleChosenGroupAlimentaire = (e, chosenAlimentaire) => {
        setCurrentlySelectedGroupAlimentaire(chosenAlimentaire.value);
    }

    const handleAlimentaireDelete = () => {
        console.log(currentlySelectedGroupAlimentaire);
        //delete from selectedGroupAlimentaires using splice
        //setSelectedGroupAlimentaires(selectedGroupAlimentaires.filter(item => item !== currentlySelectedGroupAlimentaire));
        
        //remove from selectedAliment if possible
    }

    return (
        <Menu attached='top' >
            <Button.Group color='teal'>
                
                <Dropdown
                    text='Ajouter'
                    icon='plus'
                    labeled
                    button
                    className='icon'
                >
                    <Dropdown.Menu>

                        <Dropdown.Header icon='tags' content='Ajouter Groupe Alimentaire' />
                        {
                            Object.keys(groupe_alimentaires).map(
                                (item, index) => <Dropdown.Item
                                                key={index} 
                                                onClick={handleGroupAlimentaireSelect}
                                                value={item}
                                                icon={"food"}
                                                content={item}
                                                description={<Label circular color={"grey"} >
                                                {selectedGroupAlimentaires.filter( g_alim => g_alim.substring(0, (g_alim.indexOf("_") === -1) ? g_alim.length : g_alim.indexOf("_")) === item ).length}
                                              </Label>}
                                />
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
                <Button.Or />
                <Dropdown
                    text='Choisir'
                    icon='triangle down'
                    labeled
                    button
                    className='icon'
                >
                    <Dropdown.Menu >

                        <Dropdown.Header icon='tags' content='Choisir Groupe Alimentaire' />
                        {
                            selectedGroupAlimentaires.map(
                                (item, index) => <Dropdown.Item 
                                            key={index}
                                            value={item}
                                            content={item}
                                            onClick={handleChosenGroupAlimentaire}
                                            description={
                                                <Label circular empty color={Object.keys(selectedAliments).includes(item)?"green":"grey"}  />
                                                }
                                            
                                            />
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
                
            </Button.Group>

            
            <Menu.Menu position='right'>
                <Button animated='vertical' color={"red"} disabled={currentlySelectedGroupAlimentaire==="Aucun Groupe Alimentaire Sélectionné"}>
                    <Button.Content hidden onClick={handleAlimentaireDelete}>Delete</Button.Content>
                    <Button.Content visible>
                        <Icon name='trash alternate' />
                    </Button.Content>
                </Button>
            </Menu.Menu>
        </Menu>
    )

}