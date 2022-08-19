import React, { useContext } from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import {
  Divider,
  Drawer,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { mainContext } from '../../../Contexts/MainContext'

import DashboardIcon from '@material-ui/icons/Dashboard'
import WorkIcon from '@material-ui/icons/Work'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import CancelIcon from '@material-ui/icons/Cancel'

const HomeDrawers = () => {
  const { open, handleDrawerClose } = useContext(mainContext)
  return (
    <Drawer
      variant='persistent'
      anchor='left'
      open={open}
      style={{
        width: 240,
        height: '100%',
      }}
    >
      <div
        style={{
          backgroundColor: '#3C4B64',
          color: '#FFFFFF',
          width: 240,
          height: '100%',
        }}
      >
        <Grid container style={{ padding: 10 }}>
          <Grid
            item
            xs={8}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingLeft: 10,
            }}
          >
            {/* <Typography variant="h6"></Typography> */}
            <img
              src='/Extra-green-logo-01.png'
              // className={classes.image}
              width={120}
              height={80}
              alt='Logo'
            />
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <div>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon style={{ color: 'white', fontSize: 20 }} />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <Divider />
        <List style={{ backgroundColor: '#3C4B64' }}>
          <ListItem button component={RouterLink} to='/Admin/Home'>
            <ListItemIcon>
              <DashboardIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
          <ListItem button component={RouterLink} to='/Admin/Home/OrderDetails'>
            <ListItemIcon>
              <WorkIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText>Order Details</ListItemText>
          </ListItem>
          <ListItem
            button
            component={RouterLink}
            to='/Admin/Home/CompleteOrder'
          >
            <ListItemIcon>
              <AssignmentTurnedInIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText>Complete Order</ListItemText>
          </ListItem>
          <ListItem
            button
            component={RouterLink}
            to='/Admin/Home/RejectedOrder'
          >
            <ListItemIcon>
              <CancelIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText>Rejected Order</ListItemText>
          </ListItem>
        </List>
        <Divider />
      </div>
    </Drawer>
  )
}

export default HomeDrawers
