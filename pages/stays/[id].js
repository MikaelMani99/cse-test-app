function Page({ data }) {
    return(
        <>
            <p>
                Id: {data.TripId}
            </p>
            <p>
                Title: {data.Title}
            </p>
            <p>
                MetaUri: {data.MetaUri}
            </p>
            <p>
                Description: {data.Description}
            </p>
            <p>
                DestinationId: {data.DestinationId}
            </p>
            <p>
                DestinationCountry: {data.DestinationCountry}
            </p>
            <p>
                Image: {JSON.stringify(data.Image)}
            </p>
        </>
    );
  }
  
  // This gets called on every request
  export async function getServerSideProps(context) {
  
    const { id } = context.query
  
    const res = await fetch(`https://cse-test-app.vercel.app/api/stays?stayId=${id}`)
    const data = await res.json()
  
    // // Pass data to the page via props
    return { props: { data } }
  }
  
  export default Page