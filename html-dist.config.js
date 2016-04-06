import {
  script
} from 'html-dist';

export default {
  outputFile: 'dist/index.html',
  minify: false,
  head: {
    remove: 'script'
  },
  body: {
    remove: 'script',
    appends: [
      script({
        src: 'bundle.js'
      })
    ]
  }
}
