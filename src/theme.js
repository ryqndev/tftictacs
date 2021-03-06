import {createMuiTheme} from '@material-ui/core';


const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                fontFamily: 'Quicksand'
            }
        },
        MuiCard: {
            root: {
                fontFamily: 'Quicksand',
            }
        },
        MuiCardActionArea: {
            root: {
                fontFamily: 'Quicksand'
            }
        },
        MuiCardContent: {
            root: {
                fontFamily: 'Quicksand'
            }   
        },
        MuiCardHeader: {
            title: {
                fontWeight: 'bold',
                fontSize: '20px'
            },
            content: {
                paddingRight: '50px',
                boxSizing: 'border-box'
            }
        },
        MuiFormLabel:{
            root: {
                fontFamily: 'Quicksand',
                color: 'black'
            }
        },
        MuiAppBar: {
            root: {
                fontFamily: 'Quicksand'
            },
        },
        MuiBreadcrumbs: {
            root: {
                fontFamily: 'Quicksand',
                fontWeight: 'bold'
            }
        },
        MuiListSubheader: {
            root: {
                fontFamily: 'Quicksand',
                color: 'white'
            }
        }
    },
    typography: {
        useNextVariants: true,
        body2: {
            fontFamily: 'Quicksand'
        },
        h6: {
            fontFamily: 'Quicksand'
        },
        subtitle2: {
            fontSize: '12px',
            fontFamily: 'Quicksand'
        }
    }
});

export default theme;