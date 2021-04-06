<Menu attached='top' >
            <Dropdown item icon='plus' simple >
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Icon name='dropdown' />
                        <span className='text'>New Alimentaire</span>

                        <Dropdown.Menu>
                            {
                                Object.keys(groupe_alimentaires).map((item, index) => 
                                    <Dropdown.Item 
                                        key={index}
                                        name={item}
                                        onClick={handleGroupAlimentaireSelect}
                                    >
                                        {item}
                                    </Dropdown.Item>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown.Item>
                    {
                        Object.keys(selectedAliments).map( item => 
                            <Dropdown.Item>{item} ({ selectedAliments[item] })</Dropdown.Item>
                        )
                    }
                    
                    
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Menu position='right'>
                <Button animated='vertical'>
                    <Button.Content hidden>delete</Button.Content>
                    <Button.Content visible>
                        <Icon name='trash alternative' />
                    </Button.Content>
                </Button>
            </Menu.Menu>
        </Menu>