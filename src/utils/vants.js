import {
  Col,
  Row,
  Icon,
  Tab,
  Tabs,
  Divider,
  List
} from 'vant'
const vantsList = [
  Col,
  Row,
  Icon,
  Tab,
  Tabs,
  Divider,
  List
]
const appUseVant = app => {
  vantsList.map(i => {
    app.use(i)
  })
}

export default appUseVant

