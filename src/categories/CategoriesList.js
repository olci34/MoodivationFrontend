import { useSelector } from "react-redux"
import ListItemLink from "../layout/ListItemLink"

export default function CategoriesList() {

    const categories = useSelector(state => state.categories)

    return (
      <div id="category-list">
      <ol>
        {categories.map((c) => (
          <ListItemLink to={`/categories/${c.id}`} ky={`categories-list-item-${c.id}`} primary={c.name} />
        ))}
      </ol>
    </div>
    )
}