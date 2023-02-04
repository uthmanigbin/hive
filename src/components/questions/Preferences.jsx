import { Slider, styled, Typography, FormControl, Select, MenuItem, InputBase, ToggleButtonGroup, ToggleButton } from "@mui/material";
import React, { Component } from "react";

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const DarkOrangeSlider = styled(Slider)({
    color: "#4A3630",
    '& .MuiSlider-thumb': {
        height: 32,
        width: 32,
        backgroundColor: '#4A3630',
        border: '3px solid #7BA399',
        boxShadow: iOSBoxShadow,
        '&:focus, &:hover, &.Mui-active': {
          boxShadow:
            '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
          // Reset on touch devices, it doesn't add specificity
        },
      },
    '& .MuiSlider-rail': {
        color: "#FDAD35",
        height: 6,
    },
});

const StyledMultipleSelect = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
      },
      '& .MuiInputBase-input': {
        borderRadius: 16,
        width: '18em',
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        textAlign: 'left',
        padding: '20px 48px 20px 24px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
          borderRadius: 4,
          borderColor: '#80bdff',
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
      },
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {    
      marginBottom: '2em',
      padding: '1.5em',
      border: 0,
      '&.Mui-disabled': {
        border: 3,
      },
      '&.Mui-selected': {
        backgroundColor: '#4A3630',
        color: 'white',
      },
      '&:not(:first-of-type), &:not(:last-of-type)': {
        borderRadius: 0,
        border: '1px solid black',
    },
      '&:first-of-type': {
        borderRadius: theme.shape.borderRadius,
        border: '1px solid black',
        borderRight: 'none',
        borderRadius: '16px 0 0 16px',
      },
      '&:last-of-type': {
        borderRadius: '0 16px 16px 0',
      },
    },
  }));

class Preferences extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            accomondation: 10,
            age: 20,
            budget: 500,
            gender: 'Girls',
        }
    }

    onAgeChangeHandler = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    onBudgetChangeHandler = (e) => {
        this.setState({
            budget: e.target.value
        })
    }

    onAccomodationChangeHandler = (e) => {
        this.setState({
            accomondation: e.target.value
        })
    }

    onHelpChangeHandler = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

    render() {
        return(
            <div className="Preferences">
                <h2 className="yellow" style={{textAlign: "left"}}><b>Preferences</b></h2>
                <h3 style={{marginRight: '8em', fontFamily: 'Tahoma'}}>Accommodation</h3>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                    value={this.state.accomondation}
                    onChange={this.onAccomodationChangeHandler}
                    inputProps={{ 'aria-label': 'Without label' }}
                    input={<StyledMultipleSelect />}
                    >
                    <MenuItem value={10}>Needs Accommodation</MenuItem>
                    <MenuItem value={20}>Has Accommodation</MenuItem>
                    </Select>
                </FormControl>
                <div style={{display: 'flex',  marginTop: "2em", width: '100%'}}>
                    <Typography style={{textAlign: 'left', fontSize: 'large'}}><b>Age</b></Typography>
                    <Typography style={{marginLeft: '0.5em', alignSelf: 'end'}}>17 - 32</Typography>
                </div>
                <DarkOrangeSlider valueLabelDisplay="auto" min={17} max={32} getAriaLabel={(index) => (index === 0 ? 17 : 32)} defaultValue={[20, 30]}/>
                
                <div style={{display: 'flex',  marginTop: "2em", width: '100%'}}>
                    <Typography style={{textAlign: 'left', fontSize: 'large'}}><b>Budget</b></Typography>
                    <Typography style={{marginLeft: '0.5em', alignSelf: 'end'}}>100 - 500 €</Typography>
                </div>
                <DarkOrangeSlider valueLabelDisplay="auto" min={100} max={500} getAriaLabel={(index) => (index === 0 ? 100 : 500)} defaultValue={[250, 400]} />

                <h4 style={{marginRight: '6em',marginTop: '1em', fontFamily: 'Tahoma'}}>I'm Okay with</h4>
                <StyledToggleButtonGroup
                    color="primary"
                    value={this.state.gender}
                    exclusive
                    onChange={this.onHelpChangeHandler}
                    aria-label="Platform"
                    >
                    <ToggleButton value="web">Girls</ToggleButton>
                    <ToggleButton value="android">Boys</ToggleButton>
                    <ToggleButton value="ios">Both</ToggleButton>
                </StyledToggleButtonGroup>
            </div>
        )
    }
}

export default Preferences;