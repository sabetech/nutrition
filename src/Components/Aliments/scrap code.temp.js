<CardHeader
              className={classes.card}
              avatar={
                (groupe_alimentaire == null) ? (
                  <Skeleton animation="wave" variant="circle" width={40} height={40} />
                )
                :
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {groupe_alimentaire != null ? groupe_alimentaire[0]: ""}
                </Avatar>
              }
              title={<Typography variant="h5" color="primary" component="p">
        {groupe_alimentaire.charAt(0).toUpperCase() + groupe_alimentaire.replace(/_/g,' ').slice(1)}
              </Typography>}
              
            />


<TableContainer component={Paper} style={{display:'none'}}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell><strong>Le Nutriment</strong></TableCell>
                        <TableCell align="right"><strong>Value</strong></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        nutrientCompo.aliments_data_nutrient_ref
                          [nutrientCompo.aliments_data_nutrient_ref.findIndex
                            (
                              (element) => aliment === Object.keys(element)[0]
                            )][aliment].les_nutrients.map((item) => 
                              (
                          <TableRow key={item.id}>
                              <TableCell component="th" scope="row">
                                {item.nutrient}
                              </TableCell>

                              <TableCell align="right">
                                {(Number.parseFloat(item.value)  * Number.parseFloat(txtPortion)).toFixed(2)}
                              </TableCell>
                          </TableRow>
                          )
                        )
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
                