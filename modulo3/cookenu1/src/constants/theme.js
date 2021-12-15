import {createMuiTheme} from '@material-ui/core/styles'
import {primaryCollor, neutraCollor} from './colors'

const theme = createMuiTheme ({
    palette: {
        primary: {
            main: primaryCollor,
            contrastText: "white"
        },
        text: {
            primary: neutraCollor
        }
    }
    
})

export default theme 