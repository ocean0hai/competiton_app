import {Navigate} from 'react-router-dom'
import Login from '../pages/login/login'
import Admin from '../pages/admin'
import Judge from '../pages/judge'
import Users from '../pages/users'


import CompetitionMessage from '../pages/users/competitionmessage'
import Recordlist from '../pages/users/recordlist'
import Scoreboard from '../pages/users/scoreboard'
import Signup from '../pages/users/signup'
import Usermessage from '../pages/users/usermessage'
import Manageusers from '../pages/admin/manageusers'

import Create from '../pages/admin/create'
import Managecompetition from '../pages/admin/managecompetition'
import Competitors from '../pages/admin/competitors'

import Judgemessage from '../pages/judge/judgemessage'
import Writescore from '../pages/judge/writescore'
import Competitionrules from '../pages/judge/competitionrules'


export default[
    {
        path:'/login',
        element:<Login />
    },
   {
    path:'/users',
    element:<Users />,
    children:[
      {
        path:'competitionmessage',
        element:<CompetitionMessage />
      },
      {
        path:'recordlist',
        element:<Recordlist />
      },
      {
        path:'scoreboard',

        element:<Scoreboard />
      },
      {
        path:'signup',
        element:<Signup />
      },
      {
        path:'usermessage',
        element:<Usermessage />
      }
    ]
   },
   {
    path:'/judge',
    element:<Judge />,
    children:[
        {
          path:'competitonrules',
          element:<Competitionrules />
        },
        {
          path:'judgemessage',
          element:<Judgemessage />
        },
        {
          path:'writescore',
          element:<Writescore />
        }
    ]
   },
   {
    path:'/admin',
    element:<Admin />,
    children:[
      {
        path:'manageusers',
        element:<Manageusers />
      },
      {
        path:'competitors',
        element:<Competitors />
      },{
        path:'create',
        element:<Create />
      },
      {
        path:'managecompetition',
        element:<Managecompetition />
      }
    ]
   },
   {
    path:'/',
    element:<Navigate to='/login' />
   }
]
