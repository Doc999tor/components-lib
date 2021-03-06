import { default as Select } from '../../../Select/Select.jsx'
import { default as Switch } from '../../../Switch/Switch.jsx'
import './add-note.styl'

export default class AddNote extends React.Component {
  state = {}
  static propTypes = {
    setDescription: PropTypes.func.isRequired,
    handleIncrementTime: PropTypes.func.isRequired,
    handleDecrementTime: PropTypes.func.isRequired,
    setDurationValues: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    activateSwitch: PropTypes.func.isRequired,
    cancelSearch: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    selectedValueLable: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    selectedValue: PropTypes.string.isRequired,
    isReminderEdit: PropTypes.bool.isRequired,
    delete: PropTypes.bool.isRequired,
    noteReplace: PropTypes.bool.isRequired,
    switch: PropTypes.bool.isRequired
  }

  componentDidMount = () => {
    if (this.props.reminderDate && this.props.switch) {
      const now = moment().format('YYYY-MM-DD HH:mm')
      const end = moment(this.props.reminderDate).format('YYYY-MM-DD HH:mm')
      const diff = moment(end).diff(moment(now), 'minutes')
      if (diff > 45 && diff < 1560) {
        if (diff > 45 && diff < 100) return this.props.setDurationValues(1, 'hours')
        return this.props.setDurationValues(moment(end).diff(moment(now), 'hours'), 'hours')
      } else if (diff >= 8640 && diff <= 42480) {
        if (diff >= 8640 && diff <= 9360) return this.props.setDurationValues(moment(end).diff(moment(now), 'days'), 'days')
        if (diff > 9360 && diff <= 10800) return this.props.setDurationValues(1, 'weeks')
        return this.props.setDurationValues(moment(end).diff(moment(now), 'weeks'), 'weeks')
      } else if (diff > 42480 && diff <= 525600) {
        if (diff > 42480 && diff < 43920) return this.props.setDurationValues(1, 'months')
        return this.props.setDurationValues(moment(end).diff(moment(now), 'months'), 'months')
      } else {
        return this.props.setDurationValues(moment(end).diff(moment(now), 'days'), 'days')
      }
    }
  }

  render () {
    return (
      <div className='edit-note'>
        <div className='edit-note-dody'>
          <span className='one-note'>{config.translations.notes.title}</span>
          <div className='description'>
            <textarea autoFocus className='description-area'
              type='text'
              rows='3'
              value={this.props.description}
              onChange={e => this.props.setDescription(e.target.value)}
              placeholder={config.translations.notes.placeholder} />
            <div className='cancel-search'>
              {this.props.description && <img onClick={this.props.cancelSearch} className='search-img' src={`${config.urls.media}x-circle.svg`} />}
            </div>
          </div>
          <div className='reminder'>
            <div className='reminder-wrap'>
              <div className='on-set-reminder'>
                <div className='set-reminder'>
                  <div className={'img-wrap'}>
                    <img src={config.urls.media + 'bell.svg'} />
                  </div>
                  <span>{config.translations.notes.reminder_label}</span>
                </div>
                <Switch on={this.props.switch} onClick={this.props.activateSwitch} />
              </div>
              {this.props.isReminderEdit && <div className='reminder-time'>
                <div className='input-wrap'>
                  <span className='reminder-in'>{config.translations.notes.in_label}</span>
                  <div className='ink' onClick={this.props.handleIncrementTime}><img src={`${config.urls.media}plus.svg`} /></div>
                  <input
                    className='count-input total-input'
                    type='number'
                    onChange={this.props.handleChangeNoteInput}
                    onBlur={this.props.handleBlurNoteInput}
                    value={this.props.time}
                  />
                  <div className='ink' onClick={this.props.handleDecrementTime}><img src={`${config.urls.media}minus.svg`} /></div>
                </div>
                <div className='select-wrap' onClick={this.props.letsScroll}>
                  <Select
                    value={this.props.selectedValue}
                    name={this.props.selectedValueLable}
                    onChange={e => this.props.setSelectValues(e.value, e.label)}
                    options={config.translations.notes_list}
                  />
                </div>
              </div>}
            </div>
          </div>
        </div>
        <div className='actions-note'>
          {this.props.delete && <button
            className='delete'
            onClick={this.props.deleteNote}>
            <div className={'img-wrap' + (!this.props.loaderDel ? '' : ' spin')}>{!this.props.loaderDel
              ? <img src={config.urls.media + 'trash-debts.svg'} />
              : <svg className='img_delete'>
                <use xlinkHref={config.urls.media + 'sprite.svg#refresh'} />
              </svg>}
            </div>
            {config.translations.notes.del_btn}
          </button>}
          <button
            className='save'
            onClick={this.props.noteReplace && this.props.description.length > 0 && this.props.submit}>
            <div className={'img-wrap' + (!this.props.loader ? '' : ' spin')}>{!this.props.loader
              ? <svg className='img_apply'>
                <use xlinkHref={config.urls.media + 'sprite.svg#apply'} />
              </svg>
              : <svg className='img_refresh'>
                <use xlinkHref={config.urls.media + 'sprite.svg#refresh'} />
              </svg>}
            </div>
            {config.translations.notes.success_btn}
          </button>
        </div>
      </div>
    )
  }
}
