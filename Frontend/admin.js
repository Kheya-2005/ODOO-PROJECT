<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Attendance - Admin/HR</title>
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
      <input type="search" id="searchInput" placeholder="Search employee...">
    </div>

    <div class="toolbar">
      <button class="nav-btn" id="prevDay">&lt;-</button>
      <button class="nav-btn" id="nextDay">-&gt;</button>
      <span class="date-label" id="dateLabel">22 October 2025</span>
    </div>

    <table>
      <thead>
        <tr>
          <th>Emp</th>
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

  <script src="admin.js"></script>
</body>
</html>
