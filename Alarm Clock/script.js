function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${formattedHours}:${formatTime(minutes)}:${formatTime(seconds)} ${amPm}`;
  }
  
  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }
  
  function setAlarm() {
    const hour = parseInt(document.getElementById('alarm-hour').value);
    const minute = parseInt(document.getElementById('alarm-minute').value);
    const second = parseInt(document.getElementById('alarm-second').value);
    const amPm = document.getElementById('am-pm').value;
  
    if (isNaN(hour) || isNaN(minute) || isNaN(second)) {
      alert("Please enter valid numbers for hour, minute, and second.");
      return;
    }
  
    const alarmTime = formatTime(hour) + ':' + formatTime(minute) + ':' + formatTime(second) + ' ' + amPm;
    console.log(alarmTime)
  
    const alarmsList = document.getElementById('alarms-list');
    const alarmItem = document.createElement('li');
    alarmItem.textContent = alarmTime;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      alarmItem.remove();
    };
  
    alarmItem.appendChild(deleteButton); 
    alarmsList.appendChild(alarmItem);
  }
  
  
  function checkAlarms() {
    console.log("Checking alarms...");
    const now = new Date();
    const currentHour = now.getHours() % 12 || 12;
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();
    const currentAmPm = now.getHours() >= 12 ? 'PM' : 'AM';
  
    console.log("Current Time:", currentHour, currentMinute, currentSecond, currentAmPm);
  
    const alarmsList = document.getElementById('alarms-list');
    const alarms = alarmsList.getElementsByTagName('li');
  
    for (let alarm of alarms) {
      const timeString = alarm.textContent.trim();
      const [alarmTime, alarmAmPm] = timeString.split(' ');
      const [alarmHour, alarmMinute, alarmSecond] = alarmTime.split(':').map(Number);
      const newAmPM = alarmAmPm.replace("Delete","");
  
      console.log("Alarm Time:", alarmHour, alarmMinute, alarmSecond, newAmPM);
  
      let adjustedAlarmHour = alarmHour;
      if (alarmAmPm === 'PM' && alarmHour !== 12) {
        adjustedAlarmHour += 12;
      } else if (alarmAmPm === 'AM' && alarmHour === 12) {
        adjustedAlarmHour = 0;
      }
  
      if (newAmPM === currentAmPm) {
        if (adjustedAlarmHour === currentHour && alarmMinute === currentMinute && alarmSecond === currentSecond) {
          alert('Alarm!'); 
          alarm.remove();
        }
      }
    }
  }
  
  
  
  updateTime(); 
  setInterval(updateTime, 1000); 
  setInterval(checkAlarms, 1000); 
  