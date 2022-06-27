import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Skeleton from "../../components/Skeleton";

// this was added to try and bring in citations
// https://www.contentful.com/blog/2021/04/14/rendering-linked-assets-entries-in-contentful/
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "recipe",
  });

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "recipe",
    'fields.slug': params.slug,
    
    // this was added to try and bring in citations
    // https://www.contentful.com/blog/2021/04/14/rendering-linked-assets-entries-in-contentful/
    include: 10
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: { recipe: items[0]},
    revalidate: 1
  }
}

// this was added to try and bring in citations
// https://www.contentful.com/blog/2021/04/14/rendering-linked-assets-entries-in-contentful/
const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      console.log("hey there")
      console.log(node)
      if (node.data.target.sys.contentType.sys.id === "ucsref") {
        return (
          <div className={'my-citation'}>
            I'm text in React, here's the citation name from Contentful:
            <div className="alhadaf">
              {node.data.target.fields.title}
              <style jsx>{`
                .alhadaf {
                  color: red
                }
              `}</style>
            </div>
          </div>
        )
      }
    }
  }
}

export default function RecipeDetails({ recipe }) {
  if (!recipe) return <Skeleton />

  const { featuredImage, title, cookingTime, ingredients, method } = recipe.fields;
  
  return (
    <div>
      <div className="banner">
        <Image 
          src={'https:' + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <h2>{ title }</h2>
      </div>

      <div className="info">
        <p>Takes about { cookingTime } mins to cook</p>
        <h3>Ingredients:</h3>

        {ingredients.map(ing => (
          <span key={ing}>{ ing }</span>
        ))}
      </div>

      <div className="method">
        <h3>Method:</h3>
        <div>{documentToReactComponents(method, renderOptions)}</div>
      </div>

      <style jsx>{`
        h2,h3 {
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
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
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
  )
}