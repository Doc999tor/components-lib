import { default as formatDate } from '../format-date.js'
import { default as reminder } from '../reminder.js'
import AddNote from './components/add-note/add-note.jsx'
import './noteslib.styl'

const INITIAL_STATE = {
  selectedValueLable: config.translations.notes_list[0].label,
  selectedLabel: config.data.reminders_default_date_period,
  selectedValue: config.translations.notes_list[0].value,
  timeStart: config.data.reminders_default_period_amount,
  isReminderEdit: false,
  description: '',
  switch: false,
  note_id: 0,
  time: 0,
  key: 0
}

export default class Notes extends React.Component {
  state = {
    ...INITIAL_STATE,
    newEditNotes: this.props.activateNone,
    noteReplace: this.props.activateNone,
    isEditNotes: this.props.activateNone,
    show: false,
  }
  static propTypes = {
    createNewNote: PropTypes.func.isRequired,
    activateNone: PropTypes.bool.isRequired,
    hiddenNotes: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    notesData: PropTypes.array.isRequired,
    editNote: PropTypes.func.isRequired,
    rights: PropTypes.object.isRequired
  }
  backButton = () => {
    this.setState({
      ...INITIAL_STATE,
      isEditNotes: false,
      newEditNotes: false,
      noteReplace: false
    }, () => this.props.hiddenNotes())
  }
  handleIncrementTime = () => {
    this.setState(prevState => ({
      time: +prevState.time + 1
    }))
  }
  handleDecrementTime = () => {
    if (+this.state.time > 0) {
      this.setState(prevState => ({
        time: +prevState.time - 1
      }))
    }
  }
  save = () => {
    let id = Math.floor(Math.random() * 100) + 1
    let rem = this.state.switch ? reminder(this.state.time, this.state.selectedValue) : ''
    this.props.saveNote(rem, this.state.description, id && id)
    this.setState({
      isEditNotes: !this.state.isEditNotes,
      newEditNotes: !this.state.newEditNotes,
      noteReplace: !this.state.noteReplace,
      isReminderEdit: false,
      switch: false,
      time: '0',
      add_client_id: id,
      description: ''
    })
  }
  update = () => {
    let rem = this.state.switch ? reminder(this.state.time, this.state.selectedValue) : false
    this.props.editNote(rem, this.state.key, this.state.description)
    this.setState({
      noteReplace: !this.state.noteReplace,
      isEditNotes: !this.state.isEditNotes,
      isReminderEdit: false,
      switch: false,
      description: '',
      note_id: 0,
      time: '0'
    })
  }
  // checkLength (desc) {
  //   let str = ''
  //   if (desc.length > 70) {
  //     str = desc.substr(0, 70) + '...'
  //   } else {
  //     str = desc
  //   }
  //   return str
  // }
  openAddForm = () => {
    this.setState({
      isEditNotes: !this.state.isEditNotes,
      newEditNotes: !this.state.newEditNotes,
      noteReplace: !this.state.noteReplace
    }, () => this.props.hiddenNotes())
  }
  deleteNote = () => {
    this.props.deleteNote(this.state.note_id)
    this.setState(state => ({
      noteReplace: !this.state.noteReplace,
      isEditNotes: !this.state.isEditNotes,
      isReminderEdit: false,
      description: '',
      note_id: 0,
      time: '0',
      key: 0
    }))
  }
  deleteNoteReminder = () => {
    this.props.deleteNoteReminder(this.state.note_id)
    this.setState(state => ({
      noteReplace: !this.state.noteReplace,
      isEditNotes: !this.state.isEditNotes,
      isReminderEdit: false,
      description: '',
      note_id: 0,
      time: '0',
      key: 0
    }))
  }
  replace = (i, key) => {
    this.setState({
      noteReplace: !this.state.noteReplace,
      isEditNotes: !this.state.isEditNotes,
      description: i.text,
      isReminderEdit: i.reminder_date && true,
      note_id: i.id,
      switch: i.reminder_date && true,
      add_client_id: i.id,
      key
    })
  }

  componentWillMount = () => { if (!Array.isArray(config.data.notes)) config.data.notes = [] }

  setSelectValues = (value, label) => this.setState({selectedValue: value, selectedValueLable: label})
  setDescription = value => this.setState({description: value})
  cancelSearch = () => this.setState({description: ''})
  activateSwitch = () => this.setState({switch: !this.state.switch, isReminderEdit: !this.state.isReminderEdit})

  showFullNote = (i, id) => {
    let a = document.getElementById(id)
    a.classList.toggle('full-note')
  }
  render () {
    return (
      <div id='notes'>
        {(this.state.isEditNotes || this.props.notesData.length > 0) && <div className='note-header'>
          <span className='head-span'>{config.translations.notes.title}</span>
          {this.state.isEditNotes && <button className='back' onClick={this.backButton}>
            <img src={config.urls.media + 'arrow-left.svg'} />
            {config.translations.notes.back_label_btn}
          </button>}
        </div>}
        <div className='note-body' style={{'max-height': (config.notes_height_limit * 56)}}>
          {this.props.notesData.map(i => (
            this.state.note_id === i.id
              ? <AddNote
                customers={this.props.customers}
                deleteNoteReminder={this.deleteNoteReminder}
                setDescription={this.setDescription}
                description={this.state.description}
                handleIncrementTime={this.handleIncrementTime}
                handleDecrementTime={this.handleDecrementTime}
                cancelSearch={this.cancelSearch}
                selectedValue={this.state.selectedValue}
                selectedValueLable={this.state.selectedValueLable}
                switch={this.state.switch}
                time={this.state.time}
                setSelectValues={this.setSelectValues}
                isReminderEdit={this.state.isReminderEdit}
                activateSwitch={this.activateSwitch}
                noteReplace={this.state.noteReplace}
                delete
                deleteNote={this.deleteNote}
                submit={this.update}
              />
              : <div key={i.id} className='note-list '>
                <div className='left-side'>
                  <div className='date'>
                    <span className='notes-list-date'>{formatDate(i.date)}</span>
                    <div className={i.reminder_date ? 'notes-list-reminder' : 'hidden'}>
                      <img src={config.urls.media + 'ic_notifications_active.svg'} />
                    </div>
                  </div>
                  <p className={'notes-list-desc ' + (i.reminder_date ? 'rem_true' : 'rem_false')}
                    onClick={this.props.flag ? () => this.showFullNote(i, i.id) : () => {}}
                    id={i.id}>
                    {i.text}
                  </p>
                </div>
                <div className='right-side'>
                  <img src={config.urls.media + 'ic_edit_stroke.svg'}
                    onClick={this.props.flag ? () => this.replace(i, i.id) : () => {}}
                  />
                </div>
              </div>
          ))}
        </div>
        {this.state.newEditNotes && this.state.isEditNotes && 
        <AddNote
          customers={this.props.customers}
          deleteNoteReminder={this.deleteNoteReminder}
          setDescription={this.setDescription}
          description={this.state.description}
          handleIncrementTime={this.handleIncrementTime}
          handleDecrementTime={this.handleDecrementTime}
          cancelSearch={this.cancelSearch}
          selectedValue={this.state.selectedValue}
          selectedValueLable={this.state.selectedValueLable}
          switch={this.state.switch}
          time={this.state.time}
          setSelectValues={this.setSelectValues}
          isReminderEdit={this.state.isReminderEdit}
          activateSwitch={this.activateSwitch}
          noteReplace={this.state.noteReplace}
          note_id={this.state.note_id}
          submit={this.save}
        />}
        <div className={'note-footer ' + ((this.state.isEditNotes || this.state.noteReplace || this.props.notesData.length > 0) ? 'bot-border' : 'top-border')} onClick={this.openAddForm}>
          <label>{config.translations.notes.add_note_label}</label>
          <img src={config.urls.media + 'c_add_stroke.svg'} />
        </div>
      </div>
    )
  }
}
