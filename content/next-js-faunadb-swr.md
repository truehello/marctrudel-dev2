---
title: Pagination in Next.js with FaunaDB and graphql
description: How use pagination in NextJS with FaunaDB and useSWR
featuredImgURL: https://source.unsplash.com/featured/?space,ufo
featuredImgAlt: Nextjs FaunaDB
slug: next-js-faundadb-pagination
keywords: NextJS FaunaDB GraphQL
---

FaunaDB is  a cloud-based transactional serverless database that makes that data available via a data API. This makes it ideal for use in a NextJs JAMstack application. One of the strengths of NextJS is that it is set up for dynamically generated pages with dynamic routes. In this scenario we are going to go over what we need to do if we need to create pagination with data from FaunaDB on a dynamically generated page. 

This article assumes that FaunaDB and NextJS is already up and running. In the NextJS app there is a dynamic page in pages/pets/[id].js.

FaunaDB provides pagination through the _cursor attribute. The _cursor comes fromm the before or after properties that are returned from the grapgql query. To get the next page we pass in the after value for the cusrsor and for the previous page we need ot pass the before value in. The _size attribute lets FaunaDB know how many items to return. 

When the page initial loads it will grab the id through the useRouter hook and pass that to the useSWR hook. Clicking on the Previous or Next button will update the URL. 



```
const Pets = ({ token }) => {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = async (query) =>
    await graphQLClient(token).request(query, { id });

  const { data, error } = useSWR(
    [
      gql`
        query ListPetsByCursor($id: String) {
          allPets(_size: 8, _cursor: $id) {
            data {
              _id
              name
              age
              description
              owner {
                _id
              }
            }
            before
            after
          }
        }
      `,
      id,
    ],
    fetcher
  );

  if (error)
    return (
        <div>
          failed to load {error}
        </div>
    );


  return (
    <Layout>
      {data ? (
        <>
         <ul> 
            {data.allPets.data.map((pet) => (
            <li key={pet._id} >{pet.name}</li>
            ))}
        </ul>

        <div className="pagination">
            {data.allPets.before ? (
                <Link href="/walks/[id]" as={`${data.allPets.before}`}>        
                    Prev
                </Link>
            ) : (
                <p>&nbsp;</p>
            )}
            {data.allPets.after ? (
                <Link href={`/walks/[id]`} as={`${data.allPets.after}`}>
                    Next         
                </Link>
            ) : (
                <p>&nbsp;</p>
            )}
        </div>
         
     </>
    ) : (
        <p>No Data to display </p>
      )}
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const token = getAuthCookie(ctx.req);
  return { props: { token: token || null } };
}

export default Pets;

```

The main thing that needs to be focused on is that the new cursor id needs to get passed into the graphQL query after the URL gets changed. To do this with useSWR we need to pass the id variable with the graphQL query.  


## Credits
Thanks to [slideshowp2 on stackoverflow](https://stackoverflow.com/questions/65480752/swr-with-graphql-request-how-to-add-variables-in-swr) for helping me figure this out. 

[Multiple arguments with SWR grapgQL](https://swr.vercel.app/docs/arguments#multiple-arguments)
