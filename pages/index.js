import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";
import UCSDropdownBox from "../components/UCSDropdownBox";
import StyledModularComponent from "../components/StyledModularComponent";
import HodgePodge from "../components/HodgePodge";
import UCSDisclosure from "../components/UCSDisclosure";
import FramerMotionTest from "../components/FramerMotionTest";
import UCSFMDropdown from "../components/UCSFMDropdown";

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
      <HodgePodge />
      <UCSDropdownBox
        title={`Why the name "Urban Cruise Ship?"`}
        description={
          <>
            <p className="pb-4">
              This comes from the concept of taking something that works well
              now, due to good design, and applying that elsewhere to solve
              problems. E.g. urban problems could be reduced if cities were
              designed more like cruise ships: attractive and enjoyable, but
              compact and with all residents' needs met within walking distance.
            </p>
            <p className="pb-4">
              This is a classic application of design-approach transfer. Urban
              Cruise Ship also explores other topics where this might work well.{" "}
            </p>
            <p>
              Like a real ship, Urban Cruise Ship is navigational. Its crew
              takes visitors to numerous ports of entry into different ways of
              solving problems.{" "}
            </p>
          </>
        }
      />
      <br></br>
      <UCSDisclosure />
      <br></br>
      <FramerMotionTest />
      <br></br>
      <UCSFMDropdown />
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
