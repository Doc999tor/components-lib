import './ProceduresList.styl'

export default class ProceduresList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categoryList: this.getGroup(props.data),
      serviceList: props.data,
      isOpenCategory: false,
      search: ''
    }
  }
  getGroup = a => {
    let o = {}
    a.forEach(i => { o[i.category.id] = { ...i.category, count: o[i.category.id] ? o[i.category.id].count + 1 : 1 } })
    return Object.values(o)
  }
  search = e => {
    if (e !== '') {
      this.setState({search: e, categoryList: this.state.categoryList.filter(i => i.name.includes(e) || (i.category && i.category.name.includes(e)))})
    } else {
      this.setState({search: e, categoryList: this.getGroup(this.props.data)})
    }
  }
  next = id => {
    this.setState({isOpenCategory: true, serviceList: this.state.serviceList.filter(i => i.category.id === id)})
  }
  render () {
    return (
      <div id='procedures_list'>
        <div className='search-wrap'>
          <span className='search-icon'><img src={config.urls.media + 'search.png'} /></span>
          <input type='text' value={this.state.search} onChange={e => this.search(e.target.value)} placeholder={config.translations.serch_proc} />
        </div>
        {!this.state.isOpenCategory && this.state.categoryList.map(i => <div className='category' onClick={() => this.next(i.id)}>
          <h1>{i.name}</h1><h1>({i.count})</h1>
          <div className='icon_wrap'><img src={config.urls.media + 'arrow-punch.png'} /></div>
        </div>)}
        {this.state.isOpenCategory && this.state.serviceList.map(i => <div className='service'>
          <div className='add_wrap'>
            <img src={config.urls.media + 'add.svg'} />
          </div>
          <div className='color' style={{backgroundColor: i.color}} />
          <h1 className='name'>{i.name}</h1>
          <h1 className='duration'>{i.duration + 'mm'}</h1>
          <h1 className='price'>{i.price + config.data.currency}</h1>
        </div>)}
      </div>
    )
  }
}
ProceduresList.propTypes = {
  // onChange: PropTypes.func,
  // disabled: PropTypes.bool,
  // value: PropTypes.string,
  data: PropTypes.arr
}
ProceduresList.defaultProps = {
  // onChange: () => {},
  // disabled: false,
  // value: '',
  data: []
}
