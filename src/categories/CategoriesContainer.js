import { Switch, Route } from "react-router"

export default function CategoriesContainer() {

    return (
      <Switch>
          <Route exact path="/categories">
              <CategoryList />
          </Route>
          <Route path="/categories/:id" >
              <Category />
          </Route>
          <Route path="/categories/new">
              <CategoryForm />
          </Route>
      </Switch>
    )
}