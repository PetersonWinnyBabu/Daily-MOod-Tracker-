import React from 'react'

const DailyMoodTrackerContext = React.createContext({
  initialDaysList: [],
  initialMonthList: [],
  emojisList: [],
  addEmojitoList: () => {},
  selectedDate: '',
  selectedMonth: '',
  selectedEmoji: {},
  selectedGraphMonth: '',
  changeEmoji: () => {},
  activeEmoji: '',
  onclickActiveEmoji: () => {},
  onClickRightArrow: () => {},
  onClickLeftArrow: () => {},
  getOverallEmojiCount: () => {},
  getRequiredGraphData: () => {},
  changeGraphMonth: () => {},
  changeDay: () => {},
  dayWiseCount: '',
})

export default DailyMoodTrackerContext
