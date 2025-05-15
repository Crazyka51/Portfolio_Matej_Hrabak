# Component Documentation Guide

This guide explains how to document components in this project using JSDoc.

## Basic Component Documentation

Use this template for documenting components:

\`\`\`jsx
/**
 * @component ComponentName
 * @description Brief description of what the component does.
 *
 * @param {ComponentProps} props - Component props
 * @param {string} props.someProp - Description of someProp
 * @param {number} [props.optionalProp=defaultValue] - Description of optionalProp with default value
 *
 * @example
 * \`\`\`jsx
 * import { ComponentName } from '@/components/component-name'
 *
 * export default function Page() {
 *   return <ComponentName someProp="value" />
 * }
 * ```
 *
 * @returns {JSX.Element} Description of what the component renders
 */
\`\`\`

## Documenting Props

For components with many props, define a TypeScript interface and document it:

\`\`\`jsx
/**
 * Props for the ComponentName component
 * @typedef {Object} ComponentProps
 * @property {string} someProp - Description of someProp
 * @property {number} [optionalProp] - Description of optionalProp (optional)
 */
interface ComponentProps {
  someProp: string;
  optionalProp?: number;
}
\`\`\`

## Documenting Functions

For functions within components:

\`\`\`jsx
/**
 * Brief description of what the function does
 * @param {string} param1 - Description of param1
 * @param {number} param2 - Description of param2
 * @returns {boolean} Description of return value
 */
function someFunction(param1, param2) {
  // ...
}
\`\`\`

## Best Practices

1. Always include a description, params, and return value
2. Provide realistic examples
3. Document all props, even optional ones
4. Use consistent formatting
5. Update documentation when changing component behavior
