import {Component} from 'react'
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'
import EmojiItem from '../EmojiItem'
import DateItem from '../DateItem'
import DailyMoodTrackerContext from '../DailyMoodTrackerContext'

import './index.css'

class HomeRoute extends Component {
  render() {
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/login" />
    }
    /*  ///////////////////////////////////////////////////////////////////////////////////////////////////////// */

    return (
      <DailyMoodTrackerContext.Consumer>
        {value => {
          const {
            initialDaysList,
            initialMonthList,
            emojiList,
            addEmojitoList,
            selectedDay,
            selectedMonth,
            selectedEmoji,
            changeEmoji,
            onclickEmojiActive,
            activeEmoji,
            onClickRightArrow,
            onClickLeftArrow,
            changeDay,
            dayWiseCount,
          } = value

          /*  ///////////////////////////////////////////////////////////////////////////////////////////////////////// */

          const selectedMonthList = initialMonthList[selectedMonth]

          const {monthName, dates} = selectedMonthList

          console.log(dayWiseCount)

          /*  ///////////////////////////////////////////////////////////////////////////////////////////////////////// */

          return (
            <div data-testid="homeBackground" className="home-background">
              <Header />
              <h1 data-testid="heading" className="heading">
                Moods in a Month
              </h1>
              <div
                data-testid="calenderContainer"
                className="calender-container"
              >
                <div data-testid="calender" className="calender">
                  <div data-testid="monthSelector" className="month-selector">
                    <button
                      data-testid="arrowButton"
                      className="arrow-button"
                      type="button"
                      onClick={onClickLeftArrow}
                      aria-label="Previous"
                    >
                      <SlArrowLeft
                        data-testid="arrowIcons"
                        className="arrow-icons"
                      />
                    </button>
                    <h2 data-testid="monthName" className="month-name">
                      {monthName}
                    </h2>
                    <button
                      data-testid="arrowButton"
                      className="arrow-button"
                      type="button"
                      aria-label="Next"
                      onClick={onClickRightArrow}
                    >
                      <SlArrowRight
                        data-testid="arrowIcons"
                        className="arrow-icons "
                      />
                    </button>
                  </div>

                  <ul data-testid="datesList" className="dates-list">
                    {initialDaysList.map(eachItem => (
                      <li
                        key={eachItem.id}
                        data-testid="dateItem"
                        className="date-item weekday"
                      >
                        <p className="date"> {eachItem.day}</p>
                      </li>
                    ))}
                  </ul>
                  <ul data-testid="datesList" className="dates-list">
                    {dates.map(eachItem => (
                      <DateItem
                        key={eachItem.id}
                        DateItemDetails={eachItem}
                        addEmojitoDate={addEmojitoList}
                      />
                    ))}
                  </ul>
                </div>
                <div data-testid="subContainer" className="sub-container">
                  <ul data-testid="moodsContainer" className="moods-container">
                    {emojiList.map(eachItem => (
                      <EmojiItem
                        key={eachItem.id}
                        emojiItemDetails={eachItem}
                        onclickEmoji={onclickEmojiActive}
                        isActive={eachItem.id === activeEmoji}
                      />
                    ))}
                  </ul>
                  <div
                    data-testid="setDateContainer"
                    className="setDate-container"
                  >
                    <div
                      data-testid="selectionContainer"
                      className="selection-container"
                    >
                      <select
                        data-testid="selectObject"
                        className="select-object"
                        onChange={changeEmoji}
                        value={selectedEmoji}
                      >
                        {emojiList.map(eachItem => (
                          <option
                            data-testid="optionItem"
                            className="option-item"
                            key={eachItem.id}
                            value={eachItem.emojiName}
                          >
                            {eachItem.emojiName}
                          </option>
                        ))}
                      </select>

                      <select
                        data-testid="selectObject"
                        className="select-object"
                        onChange={changeDay}
                        value={selectedDay}
                      >
                        {initialDaysList.map(eachItem => (
                          <option
                            data-testid="optionItem"
                            className="option-item"
                            key={eachItem.id}
                            value={eachItem.dayNumber}
                          >
                            {eachItem.day}
                          </option>
                        ))}
                      </select>
                    </div>
                    <h1 data-testid="showCount" className="show-count">
                      {dayWiseCount}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </DailyMoodTrackerContext.Consumer>
    )
  }
}

export default HomeRoute
