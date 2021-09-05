const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")
const visitWithParents = require('unist-util-visit-parents')

module.exports = ( defaultProps, pluginOptions) => {
  console.log('Default props')
  console.log(defaultProps)
  const { markdownAST, reporter } = defaultProps
  const { cloudName } = pluginOptions
  if (!cloudName) {
    reporter.warn(`Missing Cloudinary's cloud name in the plugin options`)
  } else {
    const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload/`
    // TO DO: Set default breakpoints
    const fallbackSrcSetBreakpoints = [300, 600, 680, 1360]
    // TO DO: Find a way to set fallback width
    const fallbackWidth = 680
  
    function generateSrcset(fileName, srcSetBreakpoins) {
      const widthSet = srcSetBreakpoins ? srcSetBreakpoins: fallbackSrcSetBreakpoints
      return widthSet.map(width => `${getSrc(fileName, width)} ${width}w`).join(', ')
    }
    function getSrc(file, width) {
      return `${baseUrl}q_auto,f_auto,w_${width ? width : fallbackWidth}/${file}`
    }
    const generateImagesAndUpdateNode = function(
      node,
      overWrites = {}
    ) {
      const { url, alt } = node
      const matchFileNamePattern = /(?<=res.cloudinary.com.+\/image\/upload\/).+/g
      const fileName = url.match(matchFileNamePattern)[0]
      let imgTag = `
        <img
          class="cloudinary-image"
          src="${getSrc(fileName)}"
          srcset="${generateSrcset(fileName)}"
          sizes="(max-width: ${fallbackWidth}px) 100vw, ${fallbackWidth}px"
          alt="${alt}"
        />
      `.trim()
      let rawHtml = `
      <span class="cloudinary-resp-image-wrapper">${imgTag}</span>
      `.trim()
      return rawHtml
    }
    visitWithParents(markdownAST, [`image`, `imageReference`], (node, ancestors) => {
      console.log({node})
      console.log({ ancestors})
      const rawHtml = generateImagesAndUpdateNode(node, {})
      node.type = `html`
      node.children = undefined
      node.value = rawHtml
      // const inLink = ancestors.some(findParentLinks)
      // markdownImageNodes.push({ node, inLink })
    })
  }
    return markdownAST
  }