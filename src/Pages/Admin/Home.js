import React from 'react'
import { compose } from 'redux'
import { withFirebase } from '../../UsersComponents/Firebase'
import { withAuthorization } from '../../UsersComponents/Session'
import * as ROLES from '../../UsersComponents/constants/roles'
import AdminTable from '../../Tables/Admin/DashboardTables/AdminTable'
import { Container } from '@material-ui/core'

const Home = () => {
  console.log('get')
  return (
    <div>
      <Container maxWidth='lg' disableGutters fixed>
        <AdminTable />
      </Container>
    </div>
  )
}

const condition = (authUser) => {
  console.log(authUser)
  return authUser && !!authUser.roles[ROLES.ADMIN]
}
export default compose(withAuthorization(condition), withFirebase)(Home)
// export default Home
