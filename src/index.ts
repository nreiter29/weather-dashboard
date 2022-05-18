import { extendTheme, theme as base } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Mark Pro, ${base.fonts.heading}',
    body: 'Mark Pro, ${base.fonts.body}',
  },
})

export default theme
