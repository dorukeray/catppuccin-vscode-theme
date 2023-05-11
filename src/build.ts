import * as fs from 'fs'
import * as path from 'path'
import template, { SchemeName } from './template'

const filePath = (variant: string, ext?: string) =>
  path.join(process.cwd(), `/catppuccin-${variant}${ext ? `-${ext}` : ''}.json`);
  

['latte', 'frappe', 'macchiato', 'mocha'].map((variant: SchemeName) => {
  const bordered = JSON.stringify(template(variant, true), null, '\t')
  const normal = JSON.stringify(template(variant, false), null, '\t')
  const darker = JSON.stringify(template(variant, false, true), null, '\t')

  fs.writeFileSync(filePath(variant), normal)
  fs.writeFileSync(filePath(variant, 'bordered'), bordered)
  fs.writeFileSync(filePath(variant, 'darker'), darker)

  console.log(`Updated ${variant}`)
})
