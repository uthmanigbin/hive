import React, { Component } from "react";
import { Slider, styled, Typography, FormControl, Select, MenuItem, InputBase, ToggleButtonGroup, ToggleButton } from "@mui/material";

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

class AboutMe extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            location: 10,
            study: 10,
            major: 10,
            other: '',
        }
    }
    
    onLocationChangeHandler = (e) => {
        this.setState({
            location: e.target.value
        })
    }
    
    onStudyChangeHandler = (e) => {
        this.setState({
            study: e.target.value
        })
    }
    
    onMajorChangeHandler = (e) => {
        this.setState({
            major: e.target.value
        })
    }
    
    onOtherChangeHandler = (e) => {
        this.setState({
            other: e.target.value
        })
    }

    render() {
        return(
            <div className="Preferences">
                <h2 className="yellow" style={{textAlign: "left"}}><b>My info</b></h2>
                <h3 style={{marginRight: '8em', fontFamily: 'Tahoma'}}>Accomontation</h3>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                    value={this.state.location}
                    onChange={this.onLocationChangeHandler}
                    inputProps={{ 'aria-label': 'Without label' }}
                    input={<StyledMultipleSelect />}
                    >
                    <MenuItem value={10}>Tallinn, Estonia</MenuItem>
                    <MenuItem value={20}>Tartu, Estonia</MenuItem>
                    <MenuItem value={30}>Pärnu, Estonia</MenuItem>
                    <MenuItem value={40}>Narva, Estonia</MenuItem>
                    </Select>
                </FormControl>
                <h3 style={{marginRight: '8em', fontFamily: 'Tahoma'}}>Place of Study</h3>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                    value={this.state.study}
                    onChange={this.onStudyChangeHandler}
                    inputProps={{ 'aria-label': 'Without label' }}
                    input={<StyledMultipleSelect />}
                    >
                    <MenuItem value={10}>Taltech</MenuItem>
                    <MenuItem value={20}>Voco</MenuItem>
                    <MenuItem value={30}>Tartu University</MenuItem>
                    <MenuItem value={40}>Code Jõhvi</MenuItem>
                    </Select>
                </FormControl>
                <h3 style={{marginRight: '12em', fontFamily: 'Tahoma'}}>Major</h3>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                    value={this.state.major}
                    onChange={this.onMajorChangeHandler}
                    inputProps={{ 'aria-label': 'Without label' }}
                    input={<StyledMultipleSelect />}
                    >
                    <MenuItem value={10}>Crossmedia</MenuItem>
                    <MenuItem value={20}>IT development</MenuItem>
                    <MenuItem value={30}>Standard Marketing</MenuItem>
                    <MenuItem value={40}>Java Based Software Developer</MenuItem>
                    </Select>
                </FormControl>
                <h3 style={{marginRight: '12em', fontFamily: 'Tahoma'}}>Other</h3>
                <input onChange={this.onOtherChangeHandler} placeholder="Write more about yourself" className="yellowInputForm" /> 
            </div>
        )
    }
}

export default AboutMe;