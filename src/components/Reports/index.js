import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import DailyMoodTrackerContext from '../DailyMoodTrackerContext'

import Emojireport from './Emojireport'

import ReportGraph from './ReportGraph'

import Header from '../Header'

import './index.css'

class ReportsRoute extends Component {
  render() {
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <DailyMoodTrackerContext.Consumer>
        {value => {
          const {
            initialMonthList,
            emojiList,
            getOverallEmojiCount,
            getRequiredGraphData,
            changeGraphMonth,
            selectedGraphMonth,
          } = value

          const newEmojiList = emojiList.map(eachitem => ({
            id: eachitem.id,
            emojiName: eachitem.emojiName,
            emojiUrl: eachitem.emojiUrl,
            count: getOverallEmojiCount(eachitem.emojiName),
          }))

          const graphData = emojiList.map(eachitem => ({
            id: eachitem.id,
            emojiName: eachitem.emojiName,
            emojiUrl: eachitem.emojiUrl,
            count: getRequiredGraphData(eachitem.emojiName),
          }))

          console.log(graphData)
          console.log(newEmojiList)

          return (
            <div data-testid="reportsSection" className="reports-section">
              <Header />
              <h1 data-testid="heading1" className="heading1">
                Overall Emoji Report
              </h1>
              <ul
                data-testid="emojireportContainer"
                className="emojireport-container"
              >
                {newEmojiList.map(eachitem => (
                  <Emojireport
                    key={eachitem.id}
                    emojireportDetails={eachitem}
                  />
                ))}
              </ul>
              <div data-testid="middleSection" className="middle-section">
                <h1 data-testid="heading2" className="heading2">
                  Monthly Reports
                </h1>
                <select
                  data-testid="monthSelection"
                  className="month-selection"
                  onChange={changeGraphMonth}
                  value={selectedGraphMonth}
                >
                  {initialMonthList.map(eachitem => (
                    <option
                      key={eachitem.month}
                      data-testid="monthOption"
                      className="month-option"
                    >
                      {eachitem.monthName}
                    </option>
                  ))}
                </select>
              </div>
              <ReportGraph data={graphData} />
            </div>
          )
        }}
      </DailyMoodTrackerContext.Consumer>
    )
  }
}

export default ReportsRoute
