// package : Babel Node + Typescript minus TS Node
// https://dev.to/tylim88/babel-node-typescript-minus-ts-node-efa
module.exports = {
    presets: [
        '@babel/preset-typescript',
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
}