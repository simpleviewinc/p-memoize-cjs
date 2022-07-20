import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

const EXTENSIONS = [
    ".ts"
]

export default {
    input: "lib/index.ts",
    output: {
        file: pkg.main,
        format: "cjs",
        exports: "named"
    },
    plugins: [
        nodeResolve({ extensions: EXTENSIONS }),
        typescript()
    ]
}