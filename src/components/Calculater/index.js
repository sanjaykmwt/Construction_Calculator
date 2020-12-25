/* Copyright (c) 2019 Dinesh Visweswaraiah.  All rights reserved.  This code shall in no way be used by any person for any reason. */
import React from 'react';
import { compose } from "recompose";
import {Typography,Button, Card,CardHeader,CardContent, Grid, Radio, FormControlLabel, RadioGroup, FormControl, Divider} from "@material-ui/core";
import { withStyles,createStyles } from '@material-ui/core/styles';
import { withRouter,Link} from "react-router-dom";
import calculator from "../../images/calculator.png"
import Select from 'react-select';
import NumberFormat from 'react-number-format';

const styles    =   (theme)=>createStyles({
  root: {
    height: '100vh',
    [theme.breakpoints.only('xs')]: {
      height: "auto",
    },
  },
  titleText :{
    color: theme.palette.primary.main,
    // fontWeight: "600",
    fontSize: "24px"
  },
  titlePrimaryText :{
    paddingTop:"10px",
    color: "#459acb",
    // fontWeight: "600",
    fontSize: "17px",
    fontWeight:700,
    float:"left"
  },
  container:{
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: 'bottom',
    height: "100%",
    alignItems: "center",
    padding: "10%",
    marginTop: "0",
  },
  card: {
      width: "35%",
      margin: "auto",
      position: "relative",
      textAlign: "center",
      top: "25%",
      height:"500px",
      // padding: "10px", 
      backgroundColor:"#f8f8f8!important", 
      // border:"solid 1px"
  },
  login_form_elem:{
    marginTop:theme.spacing(3)
  },
  form_input:{
      // marginTop:theme.spacing(2),
      marginBottom:theme.spacing(2),
      marginLeft:"45px"
  },
  register_caption:{
    color:"#50C4F2",
    marginTop:10
  },
  title:{
    padding:0,
    // borderBottom:"solid 1px",
    backgroundColor:"transparent"
  },
  headerimg:{
    display:"block",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:"auto",
    marginBottom:"auto",
    width:"40%"
  },
  grid:{
    margin:"40px"
  },
  formControlLabel:{
    marginRight:"40px"
  },
  carformControlLabel:{
    marginRight:"10px"
  },
  formControl:{
    width:"85%",
    marginRight:"40px"
  },
  carformControl:{
    width:"40%",
    marginRight:"0px"
  },
  floorformControl:{
    width:"50%",
    marginRight:"40px"
  },
  cardtitle:{
    backgroundColor:"#d27867"
  },
  cardpremiumtitle:{
    background:"rgb(116, 168, 194)"
  },
  cardsuperpremiumtitle:{
    background:"rgb(109, 177, 153)"
  },
  cardluxurytitle:{
    background:"rgb(166, 147, 194)"
  },
  cardHeader:{
    color:"white",
    fontSize:"18px",
    textAlign:"center"
  },
  cardsubHeader:{
    color:"#ffd732!important",
    fontSize:"14px",
    textAlign:"center"
  },
  cardsub2Header:{
    color:"#ffff!important",
    fontSize:"14px",
    textAlign:"center"
  },
  secondrytext:{
    color:"#B2B2B2",
    fontSize:"12px"
  },
  secondry2text:{
    color:"#B2B2B2",
    fontSize:"12px"
  },
  primarytext:{
    fontSize:"16px",
  },
  primary12text:{
    fontSize:"16px",
    textAlign:"right"
  },
  primary11text:{
    color:"#459acb",
    fontSize:"16px",
    textAlign:"right"

  },
  primary1text:{
    color:"#459acb",
    fontSize:"16px",
  },
  form_button:{
    marginTop:"25%"
  }
});

class Calculater extends React.Component {
  constructor(props){
    super(props);

    this.state   =  {
        'is_loginprog':false,
        'plot_button':'plot',
        'plot_size':null,
        'floors':{label:"Ground",value:"Ground"},
        'car_tick':'',
        'car':null,
        'estimate':false,
        'actual_buildup':'',
        'standrad_cost':null,
        'floor_cost':'',
        'floor_area':'',
        'premium_floor_cost':'',
        'super_premium_floor_cost':'',
        'luxury_floor_cost':'',
        'premium_cost':'',
        'super_premium_cost':'',
        'luxury_cost':'',
        'error':''
    }
    this.radiobuttonsize = this.radiobuttonsize.bind(this);
    this.carbuttonsize = this.carbuttonsize.bind(this)
    this.calculation = this.calculation.bind(this)
  }

  radiobuttonsize(e){
    if(e.target.value === 'plot'){
      if(e.target.checked){
      this.setState({'plot_button':'plot'})
      }
    }
    if(e.target.value === 'Size_Area'){
      if(e.target.checked){
      this.setState({'plot_button':'Size_Area'})
      }
    }
  }
  carbuttonsize(e){
      if(e.target.checked){
        this.setState({'car_tick':'car_selected'})
      }
  }

  calculation(){
    var plot_size=this.state.plot_size
    if(plot_size===null || plot_size===undefined || plot_size.length==0){
      this.setState({'error':"Please select plot size and Area"})
      return
    }

    var floor = this.state.floors;
    // if(floor===null || floor===undefined || floor.length==0){
    //   this.setState({'error':"Please select plot size and floor"})
    //   return
    // }
    var fcost = null;
    var fpremiumcost = null;
    var fsuperpremiumcost = null;
    var fluxurycost = null;
    var ifloor_area = null;
    if(floor!==null){
      if(floor.value==="1 Floor"){
        fcost=960*1700
        fpremiumcost=960*2300;
        fsuperpremiumcost=960*2500
        fluxurycost=960*2700
        ifloor_area=960
      }
      if(floor.value==="2 Floors"){
        fcost=(960*1700)*2
        fpremiumcost=960*2300*2;
        fsuperpremiumcost=960*2500*2
        fluxurycost=960*2700*2
        ifloor_area=960*2
      }
      if(floor.value==="3 Floors"){
        fcost=(960*1700)*3
        fpremiumcost=960*2300*3;
        fsuperpremiumcost=960*2500*3
        fluxurycost=960*2700*3
        ifloor_area=960*3
      }
      this.setState({
        'floor_cost':fcost,
        'premium_floor_cost':fpremiumcost,
        'super_premium_floor_cost':fsuperpremiumcost,
        'luxury_floor_cost':fluxurycost,
        'floor_area':ifloor_area,

      })
    }

    var car = this.state.car_tick;
    var num_car = this.state.car;
    if(car!==null&&num_car!==null){
      let iactual_area = plot_size.value - (135*num_car.value)
      let iicost = iactual_area*1700
      let iprecost = iactual_area*2300
      let ipresupercost = iactual_area*2500
      let iluxurycost = iactual_area*2700
      this.setState({
        'actual_buildup':iactual_area,
        'standrad_cost':iicost,
        'premium_cost':iprecost,
        'super_premium_cost':ipresupercost,
        'luxury_cost':iluxurycost,
      })
    }else{
      let actual_area = plot_size.value
      let icost = plot_size.value*1700
      let iprecost = actual_area*2300
      let ipresupercost = actual_area*2500
      let iluxurycost = actual_area*2700
      this.setState({
        'actual_buildup':actual_area,
        'standrad_cost':icost,
        'premium_cost':iprecost,
        'super_premium_cost':ipresupercost,
        'luxury_cost':iluxurycost,
      })
    }
    this.setState({'estimate':true})
  }




  render(){
        const {classes}   =   this.props;
        var state = this.state;
        console.log("ttttttttttttt",state)
        var plot_sizeOption=[{label:"30x40",value:900},{label:"30x50",value:1125},{label:"40x60",value:1920}]
        var floorOption=[{label:"Ground",value:"Ground"},{label:"Ground+1",value:"1 Floor"},{label:"Ground+2",value:"2 Floors"},{label:"Ground+3",value:"3 Floors"}]
        var carOption=[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3}]
        var updatecost = state.floor_cost+state.standrad_cost;
        var updatepremium=state.premium_floor_cost+state.premium_cost;
        var updatesuperpremium=state.super_premium_floor_cost+state.super_premium_cost;
        var updateluxury=state.luxury_floor_cost+state.luxury_cost;
        var actualBuildup = state.actual_buildup+state.floor_area
        console.log("eeee",)
        return  (
          <div>
            <div className={classes.container}>
              <Card className={classes.card}>
                <CardHeader 
                  className={classes.title} 
                  avatar={<img src={calculator} alt="logo" className={classes.headerimg}></img>}
                  title={
                      <div>
                        <Typography color={'primary'} variant={'h5'} className={classes.titlePrimaryText} >
                            Bengaluru Construction Cost Estimator
                          </Typography>
                      </div>
                  }
                >
                </CardHeader>
                <CardContent className={classes.formContainer}>
                  <div className={classes.login_form_elem}>
                    {state.error.length!=0 && <Typography color="secondary">{state.error}</Typography>}
                    <div className={classes.form_input}>
                    <RadioGroup row aria-label="position" name="position" defaultValue={state.plot_button} onChange={this.radiobuttonsize}>
                      <FormControlLabel className={classes.formControlLabel} value="plot" control={<Radio color="primary" />} label="Plot Size" />
                      <FormControlLabel className={classes.formControlLabel} value="Size_Area" control={<Radio color="primary" />} label="Size Area" />
                    </RadioGroup>
                    </div>
                    <div className={classes.form_input}>
                      <FormControl variant="outlined" className={classes.formControl}>
                        <Select
                          id="plot"
                          value={state.plot_size}
                          placeholder={"Select"}
                          // isSearchable={true}
                          components={{IndicatorSeparator:() => null }}
                          // isClearable={true}
                          onChange={(value)=>{
                              this.setState({'plot_size':value,estimate:false,error:''})
                          }}
                    
                          options={plot_sizeOption}
                        />
                      </FormControl>
                    </div>
                    <div className={classes.form_input}>
                      <div style={{display:"flex"}}>
                        <Typography style={{marginRight:"20px"}}>Floors</Typography>
                        <FormControl variant="outlined" className={classes.floorformControl}>
                          <Select
                            id="plot"
                            value={state.floors}
                            placeholder={"Select"}
                            // isSearchable={true}
                            components={{IndicatorSeparator:() => null }}
                            // isClearable={true}
                            onChange={(value)=>{
                                this.setState({'floors':value,estimate:false})
                            }}
                      
                            options={floorOption}
                          />
                        </FormControl>
                      </div>
                    </div>
                    <div className={classes.form_input}>
                    <div style={{display:"flex"}}>
                      <RadioGroup row aria-label="position" name="position" defaultValue={state.car_tick} onChange={this.carbuttonsize}>
                        <FormControlLabel className={classes.carformControlLabel} value="car_tick" control={<Radio color="primary"/>} label="Car Parking" />
                      </RadioGroup>
                        {state.car_tick!==null && state.car_tick==="car_selected" && <FormControl variant="outlined" className={classes.carformControl}>
                            <Select
                              id="car"
                              value={state.car}
                              placeholder={"Select"}
                              // isSearchable={true}
                              components={{IndicatorSeparator:() => null }}
                              // isClearable={true}
                              onChange={(value)=>{
                                  this.setState({'car':value,estimate:false})
                              }}
                        
                              options={carOption}
                            />
                        </FormControl>}
                    </div>
                    </div>
                      <div className={classes.form_button}>
                        <Button variant="contained" style={{backgroundColor:"#79b552",color:"#ffff",textTransform:"none",width:"75%"}} onClick={this.calculation}>
                            Estimate now
                        </Button>
                      </div>
                    </div>
                </CardContent>
              </Card>
            </div>
            {state.estimate && <div className={classes.grid}>
              <Grid container>
                <Grid item lg={3} md={3} xs={3} sm={3}>
                  <Card style={{marginRight:"20px"}}>
                    <CardHeader 
                      className={classes.cardtitle} 
                      title={
                          <div>
                            <Typography className={classes.cardHeader} variant={'h5'}>
                                STANDARD
                              </Typography>
                          </div>
                      }
                      subheader={
                        <React.Fragment>
                          <div>
                            <Typography className={classes.cardsubHeader} variant={'h5'}>
                                1700/ sqft
                              </Typography>
                              
                          </div>
                          <div>
                              <Typography className={classes.cardsub2Header} variant={'h5'}>
                                view package details {">"}
                              </Typography>
                          </div>
                        </React.Fragment>
                      }
                    >
                    </CardHeader>
                    <CardContent>
                      <div>
                        <Grid container>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primarytext}>Ground Floor</Typography>
                          </Grid>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary12text}>
                              <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={state.standrad_cost}/>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            Total buildup({state.plot_size.value} Sqft.)
                        </Typography>
                        {state.car_tick==="car_selected" &&<Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                          (-) Car Projection({state.car==null?"":135*state.car.value} Sqft.)
                        </Typography>}
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            = Actual buildup({state.actual_buildup} Sqft.)
                        </Typography>
                      </div>
                      {state.floors.value!=="Ground"&&<div style={{marginTop:"20px"}}>
                        <Grid container>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primarytext}>{state.floors.value}</Typography>
                          </Grid>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary12text}>
                              <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={state.floor_cost}/>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                          1 Floor buildup area ( 960 Sqft) =
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                          <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={960*1700}/>
                        </Typography>
                        {(state.floors.value=="2 Floors" || state.floors.value=="3 Floors") &&<div>
                          <Typography variant="body2" color="textSecondary" className={classes.secondry2text} component="p">
                            2 Floor buildup area ( 960 Sqft) =
                          </Typography>
                          <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={960*1700}/>
                          </Typography>
                        </div>}
                        {state.floors.value=="3 Floors" && <div>
                          <Typography variant="body2" color="textSecondary" className={classes.secondry2text} component="p">
                            3 Floor buildup area ( 960 Sqft) =
                          </Typography>
                          <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={960*1700}/>
                          </Typography>
                        </div>}
                      </div>}
                      <div>
                        {state.floors.value!=="Ground"&&<Divider style={{marginTop:"10px",marginBottom:"10px"}}></Divider>}
                        <Grid container>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary1text}>Total Cost</Typography>
                          </Grid>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary11text}>
                              <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={updatecost}/>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            Total Buildup Area :{actualBuildup}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            = Cost Calculated @ ₹1700/Sqft.
                        </Typography>
                      </div>

                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={3} md={3} xs={3} sm={3}>
                  <Card style={{marginRight:"20px"}}>
                    <CardHeader 
                      className={classes.cardpremiumtitle} 
                      title={
                          <div>
                            <Typography className={classes.cardHeader} variant={'h5'}>
                                PREMIUM
                              </Typography>
                          </div>
                      }
                      subheader={
                        <React.Fragment>
                          <div>
                            <Typography className={classes.cardsubHeader} variant={'h5'}>
                                2300/ sqft
                              </Typography>
                              
                          </div>
                          <div>
                              <Typography className={classes.cardsub2Header} variant={'h5'}>
                                view package details {">"}
                              </Typography>
                          </div>
                        </React.Fragment>
                      }
                    >
                    </CardHeader>
                    <CardContent>
                      <div>
                        <Grid container>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primarytext}>Ground Floor</Typography>
                          </Grid>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary12text}>
                              <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={state.premium_cost}/>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            Total buildup({state.plot_size.value} Sqft.)
                        </Typography>
                        {state.car_tick==="car_selected" &&<Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                          (-) Car Projection({state.car==null?"":135*state.car.value} Sqft.)
                        </Typography>}
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            = Actual buildup({state.actual_buildup} Sqft.)
                        </Typography>
                      </div>
                      {state.floors.value!=="Ground"&&<div style={{marginTop:"20px"}}>
                        <Grid container>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primarytext}>{state.floors.value}</Typography>
                          </Grid>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary12text}>
                              <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={state.premium_floor_cost}/>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                          1 Floor buildup area ( 960 Sqft) =
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                          <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={960*2300}/>
                        </Typography>
                        {(state.floors.value=="2 Floors" || state.floors.value=="3 Floors") &&<div>
                          <Typography variant="body2" color="textSecondary" className={classes.secondry2text} component="p">
                            2 Floor buildup area ( 960 Sqft) =
                          </Typography>
                          <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={960*2300}/>
                          </Typography>
                        </div>}
                        {state.floors.value=="3 Floors" && <div>
                          <Typography variant="body2" color="textSecondary" className={classes.secondry2text} component="p">
                            3 Floor buildup area ( 960 Sqft) =
                          </Typography>
                          <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={960*2300}/>
                          </Typography>
                        </div>}
                      </div>}
                      <div>
                        {state.floors.value!=="Ground"&&<Divider style={{marginTop:"10px",marginBottom:"10px"}}></Divider>}
                        <Grid container>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary1text}>Total Cost</Typography>
                          </Grid>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary11text}>
                              <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={updatepremium}/>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            Total Buildup Area :{actualBuildup}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            = Cost Calculated @ ₹2300/Sqft.
                        </Typography>
                      </div>

                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={3} md={3} xs={3} sm={3}>
                  <Card style={{marginRight:"20px"}}>
                    <CardHeader 
                      className={classes.cardsuperpremiumtitle} 
                      title={
                          <div>
                            <Typography className={classes.cardHeader} variant={'h5'}>
                                SUPER PREMIUM
                              </Typography>
                          </div>
                      }
                      subheader={
                        <React.Fragment>
                          <div>
                            <Typography className={classes.cardsubHeader} variant={'h5'}>
                                2500/ sqft
                              </Typography>
                              
                          </div>
                          <div>
                              <Typography className={classes.cardsub2Header} variant={'h5'}>
                                view package details {">"}
                              </Typography>
                          </div>
                        </React.Fragment>
                      }
                    >
                    </CardHeader>
                    <CardContent>
                      <div>
                        <Grid container>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primarytext}>Ground Floor</Typography>
                          </Grid>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary12text}>
                              <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={state.super_premium_cost}/>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            Total buildup({state.plot_size.value} Sqft.)
                        </Typography>
                        {state.car_tick==="car_selected" &&<Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                          (-) Car Projection({state.car==null?"":135*state.car.value} Sqft.)
                        </Typography>}
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            = Actual buildup({state.actual_buildup} Sqft.)
                        </Typography>
                      </div>
                      {state.floors.value!=="Ground"&&<div style={{marginTop:"20px"}}>
                        <Grid container>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primarytext}>{state.floors.value}</Typography>
                          </Grid>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary12text}>
                              <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={state.super_premium_floor_cost}/>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                          1 Floor buildup area ( 960 Sqft) =
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                          <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={960*2500}/>
                        </Typography>
                        {(state.floors.value=="2 Floors" || state.floors.value=="3 Floors") &&<div>
                          <Typography variant="body2" color="textSecondary" className={classes.secondry2text} component="p">
                            2 Floor buildup area ( 960 Sqft) =
                          </Typography>
                          <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={960*2500}/>
                          </Typography>
                        </div>}
                        {state.floors.value=="3 Floors" && <div>
                          <Typography variant="body2" color="textSecondary" className={classes.secondry2text} component="p">
                            3 Floor buildup area ( 960 Sqft) =
                          </Typography>
                          <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={960*2500}/>
                          </Typography>
                        </div>}
                      </div>}
                      <div>
                        {state.floors.value!=="Ground"&&<Divider style={{marginTop:"10px",marginBottom:"10px"}}></Divider>}
                        <Grid container>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary1text}>Total Cost</Typography>
                          </Grid>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary11text}>
                              <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={updatesuperpremium}/>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            Total Buildup Area :{actualBuildup}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            = Cost Calculated @ ₹2500/Sqft.
                        </Typography>
                      </div>

                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={3} md={3} xs={3} sm={3}>
                  <Card >
                    <CardHeader 
                      className={classes.cardluxurytitle} 
                      title={
                          <div>
                            <Typography className={classes.cardHeader} variant={'h5'}>
                                LUXURY
                              </Typography>
                          </div>
                      }
                      subheader={
                        <React.Fragment>
                          <div>
                            <Typography className={classes.cardsubHeader} variant={'h5'}>
                                2700/ sqft
                              </Typography>
                              
                          </div>
                          <div>
                              <Typography className={classes.cardsub2Header} variant={'h5'}>
                                view package details {">"}
                              </Typography>
                          </div>
                        </React.Fragment>
                      }
                    >
                    </CardHeader>
                    <CardContent>
                      <div>
                        <Grid container>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primarytext}>Ground Floor</Typography>
                          </Grid>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary12text}>
                              <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={state.luxury_cost}/>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            Total buildup({state.plot_size.value} Sqft.)
                        </Typography>
                        {state.car_tick==="car_selected" &&<Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                          (-) Car Projection({state.car==null?"":135*state.car.value} Sqft.)
                        </Typography>}
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            = Actual buildup({state.actual_buildup} Sqft.)
                        </Typography>
                      </div>
                      {state.floors.value!=="Ground"&&<div style={{marginTop:"20px"}}>
                        <Grid container>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primarytext}>{state.floors.value}</Typography>
                          </Grid>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary12text}>
                              <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={state.luxury_floor_cost}/>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                          1 Floor buildup area ( 960 Sqft) =
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                          <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={960*2700}/>
                        </Typography>
                        {(state.floors.value=="2 Floors" || state.floors.value=="3 Floors") &&<div>
                          <Typography variant="body2" color="textSecondary" className={classes.secondry2text} component="p">
                            2 Floor buildup area ( 960 Sqft) =
                          </Typography>
                          <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={960*2700}/>
                          </Typography>
                        </div>}
                        {state.floors.value=="3 Floors" && <div>
                          <Typography variant="body2" color="textSecondary" className={classes.secondry2text} component="p">
                            3 Floor buildup area ( 960 Sqft) =
                          </Typography>
                          <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={960*2700}/>
                          </Typography>
                        </div>}
                      </div>}
                      <div>
                        {state.floors.value!=="Ground"&&<Divider style={{marginTop:"10px",marginBottom:"10px"}}></Divider>}
                        <Grid container>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary1text}>Total Cost</Typography>
                          </Grid>
                          <Grid item lg={6}>
                            <Typography variant={'h5'} className={classes.primary11text}>
                              <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={updateluxury}/>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            Total Buildup Area :{actualBuildup}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.secondrytext} component="p">
                            = Cost Calculated @ ₹2700/Sqft.
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>}
          </div>
        )
    }
}

// export default compose(
//   withRouter,
//   withStyles(styles)
// )(Calculater)

export default compose(
  withRouter,
  withStyles(styles)
)(Calculater)