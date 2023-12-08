import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4014/graphql",
  documents: [
    "src/**/queries.ts",
    "src/**/mutations.ts",
    "src/**/subscription.ts",
  ],
  generates: {
    "src/generated/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "fragment-matcher",
      ],
      config: {
        reactApolloVersion: 3,
        hooksImportFrom: "@apollo/react-hooks",
        namingConvention: {
          typeNames: "change-case-all#pascalCase",
          enumValues: "change-case-all#upperCase",
        },
      },
    },
    "src/generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write", "eslint --fix"],
  },
}

export default config
