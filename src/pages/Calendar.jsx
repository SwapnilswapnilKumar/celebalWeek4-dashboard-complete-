import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { Box, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import { Header } from '../components';
import { scheduleData } from '../data/dummy'; 

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs('2021-01-10'));

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />

      <Box mb={4}>
        <Typography variant="subtitle1" gutterBottom>
          Select Date:
        </Typography>
        <DatePicker
          value={currentDate}
          onChange={handleDateChange}
          slotProps={{ textField: { fullWidth: true, size: 'small' } }}
        />
      </Box>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        }}
        height="650px"
        events={scheduleData}
        initialDate={currentDate ? currentDate.format('YYYY-MM-DD') : undefined}
        selectable={true}
        editable={true}
        dateClick={(info) => setCurrentDate(dayjs(info.date))}
        eventContent={(eventInfo) => (
          <Box
            sx={{
              backgroundColor: eventInfo.event.backgroundColor,
              color: 'white',
              padding: '2px 6px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {eventInfo.event.title}
          </Box>
        )}
      />
    </div>
  );
};

export default Calendar;
