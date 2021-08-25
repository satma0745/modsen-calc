import { connect } from 'react-redux'

import { RootState } from '@redux/store'
import { addNonNumeric, addNumeric, changeSign, clearAll, clearEntry, inputSelector } from '@redux/reducers/input'
import { addRecord, historySelector } from '@redux/reducers/history'
import { appearanceSelector } from '@redux/reducers/appearance'

import Calculator from './WithErrorBoundary'

const mapStateToProps = (state: RootState) => ({
  input: inputSelector(state),
  history: historySelector(state),
  showHistory: appearanceSelector(state).showHistory,
})

const mapDispatchToProps = {
  addRecord,
  clearAll,
  clearEntry,
  changeSign,
  addNumeric,
  addNonNumeric,
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
