import Page from '@components/page'
import Link from '@components/link'
import { useTheme } from 'next-themes'

const Grid = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Page title="Chvn®" description="chvn.me/">
      <h5>Current Projects.</h5>

      <div className="tb-grid tb-grid-gap-20">
        <div className="item tb-grid-sm-6 tb-grid-md-9"></div>
        <div className="item tb-grid-sm-6 tb-grid-md-3"></div>
        <div className="item tb-grid-sm-4 tb-grid-lg-10 tb-grid-xs-6"></div>
        <div className="item tb-grid-sm-8 tb-grid-lg-2 tb-grid-xs-6"></div>
        <div className="item tb-grid-sm-5 tb-grid-lg-4 tb-grid-xs-8"></div>
        <div className="item tb-grid-sm-7 tb-grid-lg-8 tb-grid-xs-4"></div>
      </div>
    </Page>
  )
}

export default Grid
