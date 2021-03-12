const baseUrl = 'https://cdn.contentful.com/spaces/'
const contentUrl = `${baseUrl}${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT_ID}\
/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}&content_type=`
export { contentUrl }
