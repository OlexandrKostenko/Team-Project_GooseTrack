import { endOfMonth, endOfWeek, startOfMonth, startOfToday, isSameDay, addDays, addMonths } from 'date-fns';
import { startOfWeek } from 'date-fns';
import { CalendarTools } from '../../components/CalendarTools/CalendarTools';
import { useState } from 'react';
import { ChoosedMonth } from '../../components/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from '../../components/ChoosedDay/ChoosedDay';

export default function CalendarPage () {
  const [askDay, setAskDay] = useState(startOfToday());
  const [isChoosedMonth, setIsChoosedMonth] = useState(true);

  const startMonth = startOfMonth(askDay);
  const startDay = startOfWeek(startMonth, { weekStartsOn: 1 });
  const endMonth = endOfMonth(askDay);
  const endDay = endOfWeek(endMonth, { weekStartsOn: 1 })
  const firstDayOfNextMonth = addDays(endDay, 1);
  const firstDayOFWeek = startOfWeek(askDay, {weekStartsOn: 1});
  const lastDayOfWeek = endOfWeek(askDay, {weekStartsOn: 1});
  const startNextWeek = addDays(lastDayOfWeek, 1);
  
  let calendar = [];
  let weekCalendar = [];
  let day = startDay;
  let weekDay = firstDayOFWeek;
  while (!isSameDay(day, firstDayOfNextMonth)) {
  calendar.push(day);
  day = addDays(day, 1);
  };

  while (!isSameDay(weekDay, startNextWeek)){
    weekCalendar.push(weekDay);
    weekDay = addDays(weekDay, 1);
  }

  const changeAskDay = (value) => {
    if(!isChoosedMonth) {weekCalendar = [];
      return setAskDay(addDays(askDay, value));}
    
  
  if (isChoosedMonth) {
    return setAskDay(addMonths(askDay, value));
  } } 


  const toogleChooseMonth = () => {
    setIsChoosedMonth(prev => !prev);
  };


  return (
     <>
     <CalendarTools calendar={calendar} changeAskDay={changeAskDay} isChoosedMonth={isChoosedMonth} askDay={askDay} toogleChooseMonth={toogleChooseMonth}/>
     {isChoosedMonth ? <ChoosedMonth calendar={calendar} askDay={askDay}/> : <ChoosedDay weekCalendar={weekCalendar}/>}
     </> 
  );
};

