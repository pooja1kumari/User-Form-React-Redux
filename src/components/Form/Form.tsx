import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "../../layout/Container";
import { Box, Button, Grid } from "@material-ui/core";
import useStyles , { BoxView } from "./useStyles";

import FirstName from "./FirstName";
import LastName from "./LastName";
import Email from "./Email";
import MobilePhone from "./MobilePhone";

import { Field, reduxForm } from 'redux-form'
import { createTextMask , createNumberMask } from 'redux-form-input-masks';
import validationForm from '../../store/User/Form/validationForm'
import Layout from '../Common/Input/layout'
import { useSelector } from "react-redux";

let Form = (props: any) => {
  const classes = useStyles();
  const { handleSubmit , reset , handleCancel} = props
  const store = useSelector((state: any) => state.user);
  
  return (
    <Container >
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <Box {...BoxView}>
              <Field name="firstName"  component={FirstName} type="text"  />
              <Field name="lastName"  component={LastName} type="text"  />
            </Box>
            <Box {...BoxView}>
              <Field name="email"  component={Email} type="text"  />
            </Box>
            <Box {...BoxView}>
              <Field name="mobile_phone"  component={MobilePhone} type="text"  />
            </Box>
            <Box {...BoxView}>
              { store.edit.create_date && <Layout>
                <Box pr={1} >
                  <Button  type={'submit'} variant="outlined" color="primary" >
                    Edit
                  </Button>
                </Box>
                <Box >
                  <Button  onClick={handleCancel} variant="outlined" color="secondary" >
                    Cancel
                  </Button>
                </Box>
              </Layout>
              }
              {!store.edit.create_date && <Layout>
                <Box pr={1} >
                  <Button  type={'submit'} variant="outlined" color="primary" >
                    Submit
                  </Button>
                </Box>
                <Box >
                  <Button  onClick={()=>{
                    props.handleCancel()
                  }} variant="outlined" color="secondary" >
                    Undo
                  </Button>
                </Box>
              </Layout>}
            </Box>
          </form>
        </Grid>
      </Paper>
    </Container>
  );
};

Form = reduxForm({
  form: 'user',
  enableReinitialize: true,
  validate: validationForm,
})
(Form)


export default Form;
