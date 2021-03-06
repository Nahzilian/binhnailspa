import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    list: {
      width: 280,
    },
    fullList: {
      width: 'auto',
    },
  });

export default function Navbar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
            <ListItem button key={"Binh's Nail and Spa"}>
                <ListItemText primary={"Binh's Nail and Spa"} />
                <ListItemIcon><CloseIcon onClick = {toggleDrawer('left', false)}/></ListItemIcon>
            </ListItem>
          {['Direction', 'Service', 'Testimonials', 'Contact','BOOK ONLINE'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    return (
        <div>
            <React.Fragment key={'left'}>
              <Button onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
              <Drawer anchor={'left'} open={state['left']}>
                {list('left')}
              </Drawer>
            </React.Fragment>
        </div>
      );
}
