import { URL_BASE } from "../../constants";
function Page({ data }) {
    return(
        <>
            <p>
                Id: {data.Id}
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
                DestinationCountryCode: {data.DestinationCountryCode}
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
  
    const res = await fetch(`${URL_BASE}/api/vps?vpId=${id}`)
    const data = await res.json()
  
    // // Pass data to the page via props
    return { props: { data } }
  }
  
  export default Page