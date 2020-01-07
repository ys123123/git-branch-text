import React from 'react'

import { Switch,Route,Redirect } from 'react-router-dom'

const index = (props) => {
  const routes = props.routes.filter(v=>v.component)
  const redirect = props.routes.filter(v=>v.redirect)
  return (
    <Switch>
      {
        routes.map((item,index)=>{
          return (
            <Route
              key={index}
              path={item.path}
              render={props=>{
                return <item.component {...props} routes={item.children} />
              }}
            />
          )
        })
      }
      {
        redirect.map((item,index) => {
          return <Redirect key={index} to={item.redirect} />
        })
      }
    </Switch>
  )
}

export default index
