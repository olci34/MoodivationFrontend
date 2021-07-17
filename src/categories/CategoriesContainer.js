import { Switch, Route } from "react-router"
import CategoriesList from "./CategoriesList"
import Category from "./Category"

export default function CategoriesContainer() {

    return (
      <Switch>
          <Route exact path="/categories">
              <CategoriesList />
          </Route>
          <Route path="/categories/:id" >
              <Category />
          </Route>
          {/* <Route path="/categories/new">
              <CategoryForm />
          </Route> */}
      </Switch>
    )
}