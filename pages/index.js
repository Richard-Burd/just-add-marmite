import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";
import DropdownBox from "../components/DropdownBox";
import StyledModularComponent from "../components/StyledModularComponent";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: res.items,
      revalidate: 1,
    },
  };
}

export default function Recipes({ recipes }) {
  console.log(recipes[0].fields.slug);
  return (
    <>
      <div className="recipe-list">
        {recipes.map(function (recipe) {
          if (!recipe.fields.slug.startsWith("cheesy")) {
            return <RecipeCard key={recipe.sys.id} recipe={recipe} />;
          }
        })}

        <style jsx>{`
          .recipe-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px 60px;
          }
        `}</style>
      </div>
      <StyledModularComponent />
      <br></br>
      <DropdownBox />
    </>
  );
}

/*
import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: res.items,
      revalidate: 1,
    }
  }

}

export default function Recipes({ recipes }) {
  console.log(recipes);
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  )
}
*/
