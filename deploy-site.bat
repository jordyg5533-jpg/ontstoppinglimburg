@echo off
REM Deploy ontstoppinglimburg.be naar Vercel.
REM Eerste keer: npx vercel  (koppelt het project)
REM Daarna:      deploy-site.bat
call npx vercel --prod
pause
