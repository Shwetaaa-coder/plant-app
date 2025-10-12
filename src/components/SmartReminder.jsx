// import React, { useState } from 'react';
// import './SmartReminder.css'; // Optional: move styles here or use styled-components

// const SmartReminder = () => {
//   const [isCompleted, setIsCompleted] = useState(false);
//   const [snoozed, setSnoozed] = useState(false);

//   const markAsDone = () => {
//     setIsCompleted(true);
//   };

//   const remindLater = () => {
//     setSnoozed(true);
//     setTimeout(() => {
//       setSnoozed(false); // Reset after mock delay
//     }, 3600000); // 1 hour
//   };

//   if (isCompleted) {
//     return (
//       <div className="notification-card">
//         <div className="notification-header">✅ Task Completed</div>
//         <div className="notification-body">
//           Great job! Your basil is happy and hydrated.
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="notification-card">
//       <div className="notification-header">🌿 Basil – Time to Water!</div>
//       <div className="notification-body">
//         It’s a warm, dry day—your basil needs a drink.<br />
//         <span className="urgency-badge">⚠️ High Urgency</span>
//         <div className="weather-info">🌡️ Forecast: 88°F & sunny</div>
//       </div>
//       <div className="notification-actions">
//         <button className="btn btn-done" onClick={markAsDone}>
//           ✅ Mark as Done
//         </button>
//         <button className="btn btn-later" onClick={remindLater}>
//           🔁 Remind Me Later
//         </button>
//       </div>
//       {snoozed && (
//         <div className="weather-info">⏰ We'll remind you again in 1 hour.</div>
//       )}
//     </div>
//   );
// };

// export default SmartReminder;


import React, { useState } from 'react';
import './SmartReminder.css'; // Optional: move styles here or use styled-components

const reminders = [
  { id: 1, plant: 'Basil', task: 'Time to Water!', urgency: 'High', weather: '🌡️ Forecast: 88°F & sunny' },
  { id: 2, plant: 'Aloe Vera', task: 'Needs a bit of sunshine', urgency: 'Medium', weather: '🌡️ Forecast: 75°F & partly cloudy' },
  { id: 3, plant: 'Snake Plant', task: 'No watering needed today', urgency: 'Low', weather: '🌡️ Forecast: 70°F & clear skies' },
  { id: 4, plant: 'Monstera', task: 'Mist leaves for humidity', urgency: 'Medium', weather: '🌡️ Forecast: 77°F & humid' },
  { id: 5, plant: 'Peace Lily', task: 'Time to check soil moisture', urgency: 'High', weather: '🌡️ Forecast: 85°F & light rain' },
];

const SmartReminder = () => {
  const [currentReminderIndex, setCurrentReminderIndex] = useState(0); // Track the index of the current reminder
  const [isCompleted, setIsCompleted] = useState(false);
  const [snoozed, setSnoozed] = useState(false);

  const currentReminder = reminders[currentReminderIndex];

  const markAsDone = () => {
    setIsCompleted(true);
  };

  const remindLater = () => {
    setSnoozed(true);
    setTimeout(() => {
      setSnoozed(false); // Reset after mock delay
    }, 3600000); // 1 hour
  };

  const nextReminder = () => {
    const nextIndex = (currentReminderIndex + 1) % reminders.length;
    setCurrentReminderIndex(nextIndex); // Go to the next reminder
    setIsCompleted(false); // Reset completion state
  };

  if (isCompleted) {
    return (
      <div className="notification-card">
        <div className="notification-header">✅ Task Completed</div>
        <div className="notification-body">
          Great job! Your {currentReminder.plant} is happy and hydrated.
        </div>
        <button className="btn btn-next" onClick={nextReminder}>
          ⏩ Next Reminder
        </button>
      </div>
    );
  }

  return (
    <div className="notification-card">
      <div className="notification-header">🌿 {currentReminder.plant} – {currentReminder.task}</div>
      <div className="notification-body">
        It’s a warm, dry day—your {currentReminder.plant} needs attention.<br />
        <span className="urgency-badge">⚠️ {currentReminder.urgency} Urgency</span>
        <div className="weather-info">{currentReminder.weather}</div>
      </div>
      <div className="notification-actions">
        <button className="btn btn-done" onClick={markAsDone}>
          ✅ Mark as Done
        </button>
        <button className="btn btn-later" onClick={remindLater}>
          🔁 Remind Me Later
        </button>
      </div>
      {snoozed && (
        <div className="weather-info">⏰ We'll remind you again in 1 hour.</div>
      )}
    </div>
  );
};

export default SmartReminder;
