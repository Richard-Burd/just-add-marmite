import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Skeleton from "../../components/Skeleton";
import Reference from "../../components/Reference";
import References from "../../components/References";

// no longer needed because after 7/6/2022 when Chris Bloom and I
// relocated the renderOptions inside the rendered component
import { useEffect } from "react";

// this was added to try and bring in citations
// https://www.contentful.com/blog/2021/04/14/rendering-linked-assets-entries-in-contentful/
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "recipe", // this key & value are both from Contentful
  });

  const paths = res.items.map((item) => {
    const slug = item?.fields?.slug || "";
    return {
      params: { slug },
    };
  });

  return {
    paths,

    // https://youtu.be/V4SVNleMitE
    // if false, you get 404 page.
    // if true, you render RecipeDetails page with new Contentful data.
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });

  // if a recipe does not exist, the user is taken to the <Skeleton /> fallback page.
  // the fallback page then re-runs this getStaticProps function to try and get the
  // "items" data again using the slug. the "items" here is an array, so if it got
  // the data, it will have a length of 1; if not, then it doesn't exist.
  // the user would then need to be redirected to the homepage
  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { recipe: items[0] },
    revalidate: 2, // Next.js will check Contentful for changes every 2 seconds
  };
}

// this stores the list of references so we can display them at the bottom of the page
let referenceList = []; // NOTE: this appears even on recipes with no references until you do a refresh

// this was added to try and bring in citations
// https://www.contentful.com/blog/2021/04/14/rendering-linked-assets-entries-in-contentful/

export default function RecipeDetails({ recipe }) {
  const refs = (recipe?.fields?.method?.content || [])
    .filter((item) => item.nodeType === "embedded-entry-block")
    .map((item) => item.data.target.fields.title)
    .sort();

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const myRefName = node.data?.target?.fields?.title;
        if (node.data?.target.sys.contentType.sys.id === "ucsref") {
          //referenceList.push(myRefName); Deleted with Chris Bloom on 7/6/2022

          // I need a hook that will sort all of these first, then render them
          // blow on line 86.
          // referenceList.sort(); Deleted with Chris Bloom on 7/6/2022

          return (
            <>
              <Reference myRefName={myRefName} />
              <div>
                I'm this order displayed:&nbsp;
                <a href={`#ref-${refs.indexOf(myRefName) + 1}`}>
                  [{refs.indexOf(myRefName) + 1}]
                </a>
              </div>
              <div className={"my-citation"}>
                I'm text in React, here's the citation name from Contentful:
                <div className={"alhadaf"}>
                  {node.data?.target?.fields?.title}
                </div>
                <style jsx>{`
                  .my-citation {
                    color: blue;
                  }
                  .alhadaf {
                    color: red;
                  }
                `}</style>
              </div>
            </>
          );
        }
      },
    },
  };

  // this deletes the current list of references every time the component is rendered
  // useEffect(() => {
  //   // without it, the references would keep stacking up
  //   referenceList = [];
  // }, [referenceList]);

  // https://youtu.be/V4SVNleMitE?t=206
  // if no page exists in the current build to handle a new item created in Contentful,
  // display the Skeleton component as a fallback until Next.js can build the ne new Contentful item.
  if (!recipe) return <Skeleton />;

  const { featuredImage, title, cookingTime, ingredients, method } =
    recipe.fields;

  return (
    <div>
      <div className="banner">
        <Image
          src={"https:" + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <h2>{title}</h2>
      </div>

      <div className="info">
        <p>Takes about {cookingTime} mins to cook</p>
        <h3>Ingredients:</h3>

        {ingredients.map((ingredients) => (
          <span key={ingredients}>{ingredients}</span>
        ))}
      </div>

      <div className="method">
        <h3>Method:</h3>
        <div>{documentToReactComponents(method, renderOptions)}</div>
      </div>

      <References referenceList={refs} />

      <style jsx>{`
        h2,
        h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
    </div>
  );
}
