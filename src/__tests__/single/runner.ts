import path from 'path'
import { runner } from '../..'
import Logger from '../../logger'

/*
ts-node "/private/tmp/hygen/src/__tests__/single/runner.ts" mygen cmd3 --name peter --message 'This is a short message.' --longwords 'long words'
*/


const defaultTemplates = path.join(__dirname, 'templates')
/*
runner(process.argv.slice(2), {
  templates: defaultTemplates,
  cwd: process.cwd(),
  logger: new Logger(console.log.bind(console)),
  createPrompter: () => require('enquirer'),
  exec: (action, body) => {
    const opts = body && body.length > 0 ? { input: body } : {}
    return require('execa').shell(action, opts)
  },
  debug: !!process.env.DEBUG
})
*/

/*
console.log('running');

runner(process.argv.slice(2), {
  templates: defaultTemplates,
  cwd: process.cwd(),
  logger: new Logger(console.log.bind(console)),
  createPrompter: () => require('enquirer'),
  exec: (action, body) => {
    console.log(action);
    console.log(body);
    
    const opts = body && body.length > 0 ? { input: body } : {}


    //return require('execa').shell(action, opts)
  },
  debug: !!process.env.DEBUG
})
*/

const p = runner(process.argv.slice(2), {
  templates: defaultTemplates,
  cwd: process.cwd(),
  logger: new Logger(console.log.bind(console)),
  createPrompter: () => require('enquirer'),
  debug: !!process.env.DEBUG,
})

p.then(console.log)
