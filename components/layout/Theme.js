import css from 'next/css'
import my_theme from '../../data/theme'

const theme = my_theme

const _tag = css({
  color: theme.colors.text,
  fontWeight: '700',
  transition: 'all 0.4s 0.2s ease-in-out',
  borderRadius: '5px',
  padding: '1px 3px 1px 3px',
  backgroundColor: theme.colors.trans_primary,
  textDecoration: 'none',
  ':hover': {
    transform: 'scale(1.05, 1.4)',
    transitionDelay: '0s',
    transitionDuration: '0.2s',
    backgroundColor: theme.colors.primary,
  }
})

const _button = css({
  background: theme.colors.white,
  color: theme.colors.primary,
})

const _verticalMenu = {
  component: css({
    display: 'inline-block',
    margin: '20px 30px',
    transformOrigin: 'left top',
    transform: 'rotate(270deg) translateX(-100%)',
    textTransform: 'uppercase',
    zIndex: '1',
    textDecoration: 'none',
    '@media(max-width: 640px)': { margin: '10px 10px' }
  }),
  link: css({
    margin: '0 10px 0 0',
    fontSize: '140%',
    textDecoration: 'none',
    color: theme.colors.black,
    ':hover': { textDecoration: 'line-through' },
    '@media(max-width: 640px)': { fontSize: '100%' }
  })
}

const _centeredBox = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
})

export { theme, _tag, _button, _verticalMenu, _centeredBox }
