// 生成链接
const glob = require('glob')
const path = require('path')
const fs = require('fs')

const links = []

glob.sync('./src/pages/**/index.html').forEach((entry) => {
  const href = entry.replace('./src/', './')
  const name = href.split('/')[2]
  links.push(`<div><a href="${href}" target="_blank">${name}</a></div>`)
})

fs.writeFileSync('a.txt', links.join('\n'))
