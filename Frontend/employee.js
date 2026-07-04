<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Attendance - Employee</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="app-card">
    <div class="topbar">
      <div class="logo">Company Logo</div>
      <nav>
        <a href="#">Employees</a>
        <a href="#" class="active">Attendance</a>
        <a href="#">Time Off</a>
      </nav>
      <div class="dot"></div>
      <div class="avatar"></div>
    </div>

    <div class="toolbar">
      <h2>Attendance</h2>
    </div>

    <div class="toolbar">
      <button class="nav-btn" id="prevMonth">&lt;-</button>
      <button class="nav-btn" id="nextMonth">-&gt;</button>
      <span class="date-label" id="monthLabel">October 2025</span>
      <div style="flex:1"></div>
      <div class="stat-pill">Days Present<b id="daysPresent">-</b></div>
      <div class="stat-pill">Leaves Count<b id="leavesCount">-</b></div>
      <div class="stat-pill">Total Working Days<b id="totalWorkingDays">-</b></div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Work Hours</th>
          <th>Extra Hours</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody id="attendanceBody">
        <tr class="loading-row"><td colspan="6">Loading...</td></tr>
      </tbody>
    </table>
  </div>

  <script src="employee.js"></script>
</body>
</html>
