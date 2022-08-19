//pages/sitemap.xml.js
import { URL_BASE } from "../constants";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${posts
       .map(({ WebUrl, Title, MetaUri, Description, DestinationId, DestinationCountry, Image}) => {
         return `
       <url>
           <loc>${WebUrl}</loc>
           <PageMap xmlns="http://www.google.com/schemas/sitemap-pagemap/1.0">
                <DataObject type="document" id="hibachi">
                    <Attribute name="name">${Title}</Attribute>
                    <Attribute name="metauri">${MetaUri}</Attribute>
                    <Attribute name="description">${Description}</Attribute>
                    <Attribute name="destinationid">${DestinationId}</Attribute>
                    <Attribute name="destinationcountry">${DestinationCountry}</Attribute>
                    <Attribute name="image">${JSON.stringify(Image)}</Attribute>
                    <Attribute name="type">${WebUrl.split("/").at(-2)}</Attribute>
                </DataObject>
            </PageMap>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(`${URL_BASE}/api/sitemapurls`);
  const posts = await request.json();
  console.log(posts)
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;