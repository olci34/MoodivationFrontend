import { useParams, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function Category() {
  const categoryID = useParams();
  const categories = useSelector((state) => state.categories);
  const category = categories.find((w) => w.id === parseInt(categoryID.id));
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <ul>
        {category.words.map((w) => (
          <li>
              <Link to={`/words/${w.id}`}>{Object.values(w.title)[0]}</Link>
          </li>
        ))}
      </ul>
      <Button variant="contained" onClick={() => console.log("delete category")}>
        Delete
      </Button>
    </div>
  );
}
