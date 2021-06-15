import React, {useEffect} from 'react';
import { Dropdown, Icon, Menu , Button, Label} from 'semantic-ui-react';

export default function GroupeAlimentaireSelect({
                            groupe_alimentaires,
                            selectedAliments, 
                            setSelectedAliments,
                            setSelectedGroupAlimentaires,
                            selectedGroupAlimentaires,
                            setCurrentlySelectedGroupAlimentaire,
                            currentlySelectedGroupAlimentaire  
                        })
{

    useEffect(() => {

        if (selectedGroupAlimentaires.length > 0) {
            setCurrentlySelectedGroupAlimentaire(selectedGroupAlimentaires[selectedGroupAlimentaires.length -1]);
            return;
        }

        resetAlimentCard() //called when selectedGroupAlimentaires is empty

    },[selectedGroupAlimentaires]);

    const handleGroupAlimentaireSelect = (e, selectedAlimentaire) => {
        if (typeof selectedAlimentaire.value === 'undefined') return;

        let numberOfOccurences = selectedGroupAlimentaires.filter(groupe_alim => groupe_alim.substring(0, (groupe_alim.indexOf("_") === -1) ? groupe_alim.length : groupe_alim.indexOf("_")) === selectedAlimentaire.value).length;
        //if this is more than zero, then it means there may be multiple groupe_alims
        //continue from here

        let selectedAlimentaireValue = (numberOfOccurences > 0) ? selectedAlimentaire.value+"_"+numberOfOccurences : selectedAlimentaire.value;
        setSelectedGroupAlimentaires([...selectedGroupAlimentaires, selectedAlimentaireValue]);
        
    }

    const handleChosenGroupAlimentaire = (e, chosenAlimentaire) => {
        setCurrentlySelectedGroupAlimentaire(chosenAlimentaire.value);
    }

    const handleAlimentaireDelete = async () => {
        
        await setSelectedGroupAlimentaires(selectedGroupAlimentaires.filter(item => item !== currentlySelectedGroupAlimentaire));
        await updateSelectedAliments(currentlySelectedGroupAlimentaire);
        
    }

    const updateSelectedAliments = async (deletedGroupAlimentaire) => {
        delete selectedAliments[deletedGroupAlimentaire];

        if (Object.keys(selectedAliments).length == 0){
            setSelectedAliments({});
        }else{
            await setSelectedAliments(selectedAliments);
        }

    }

    const resetAlimentCard = () => {
        setCurrentlySelectedGroupAlimentaire("Aucun Groupe Alimentaire Sélectionné");
    }

    return (
        <Menu attached='top' >
            <Button.Group color="blue" style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                
                <Dropdown
                    text='Ajouter un Groupe Alimentaire'
                    icon='plus'
                    labeled
                    button
                    style={{width:120}}
                    className='icon'
                    scrolling={true}
                    upward
                    search
                    header={<Dropdown.Header icon='tags' content='Ajouter Groupe Alimentaire' />}
                    options={
                        Object.keys(groupe_alimentaires).map(
                            (item, index) => (
                                {
                                    key: index,
                                    value: item,
                                    text:item,
                                    content: (
                                        <Dropdown.Item
                                          style={{height: 20}}
                                          onClick={handleGroupAlimentaireSelect}
                                          value={item}
                                          icon='food'
                                          content={item}
                                          description={<Label circular color={"grey"} >
                                          {selectedGroupAlimentaires.filter( g_alim => g_alim.substring(0, (g_alim.indexOf("_") === -1) ? g_alim.length : g_alim.indexOf("_")) === item ).length}
                                        </Label>}
                                        />
                                      )
                                }
                            )
                        )
                    }
                />
                 
                <Button.Or text={"et"} />
                <Dropdown
                    text='Choisir un Groupe Alimentaire'
                    icon='triangle down'
                    labeled
                    button
                    className='icon'
                    style={{width:150}}
                    upward
                    scrolling={true}
                    disabled={selectedGroupAlimentaires.length === 0}
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

            
            <Menu.Menu >
                <Button 
                disabled={currentlySelectedGroupAlimentaire==="Aucun Groupe Alimentaire Sélectionné"} 
                onClick={handleAlimentaireDelete} 
                icon 
                width={30}
                >
                    <Icon name='trash' size={'large'}/>
                </Button>
            </Menu.Menu>
        </Menu>
    )

}