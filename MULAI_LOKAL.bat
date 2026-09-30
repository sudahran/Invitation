@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8000/admin.html
  py -m http.server 8000 --bind 127.0.0.1
) else (
  where python >nul 2>nul
  if errorlevel 1 (
    echo Python belum terpasang. Buka admin.html langsung atau gunakan GitHub Pages.
  ) else (
    start "" http://localhost:8000/admin.html
    python -m http.server 8000 --bind 127.0.0.1
  )
)
pause
