<Carousel 
                  showArrows={true}
                  showThumbs={false}
                  statusFormatter={()=> ""}
                  renderIndicator={()=><></>}
                  selectedItem={currentAlimentIndex}
                  onChange={(index) => setCurrentAlimentIndex(index)}
                  
              >
              {
                Object.keys(aliment_options).map((_objkey, index) => (
                  <AlimentCard 
                    key={index}
                    groupe_alimentaire={(_objkey != null) ? _objkey : ""}
                    aliment_options={aliment_options[_objkey]}
                    nutrientCompo={spreadsheetCompo}
                    setSelectedAliments={setSelectedAliments}
                    selectedAliments={selectedAliments}
                    aliment_images={aliment_images}
                  />
                )
                )
              }
             </Carousel>

              <Pagination pages={[...Array(11).keys()]}
                      activePage={currentAlimentIndex}
                      onClick={setCurrentAlimentIndex}
                      groupe_alimentaires={Object.keys(aliment_options)}
                />