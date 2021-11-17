import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';

function MessageView({textMessage, author}){
    return(
        <ListItem alignItems="flex-start">
            <ListItemText 
            primary={author} 
            secondary={<div>{textMessage}</div>}/>
        </ListItem>
    )
}

export default MessageView;