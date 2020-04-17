module.exports = {
  coverageDirectory: './__coverage__',
  rootDir: '.',
  roots: ['src'],
  moduleFileExtensions: ['js'],
  collectCoverageFrom: [
    'src/@(components|util|styles)/**/*.{js,jsx}',
    '!src/@(components|util|styles)/**/index.{js,jsx}',
    '!src/@(components|util|styles)/**/*.story.{js,jsx}',
    '!**/node_modules/**',
  ],
  moduleNameMapper: { 
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>src/helpers/assetsTransformer.js", "\\.(css|less)$": "<rootDir>src/helpers/assetsTransformer.js"
  },
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
