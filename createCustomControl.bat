SETLOCAL
@echo off
SET PUBLISHER_NAME=scm
SET PUBLISHER_PREFIX=scm
SET buildCutomControlFolderName=buildSolution
SET outFolderName=out
SET objFolderName=obj
SET buildCutomControlFolderPath=%CD%\%buildCutomControlFolderName%
SET outFolderPath=%CD%\%outFolderName%
SET objFolderPath=%CD%\%objFolderName%
SET ROOT_FOLDER=%CD%
ECHO deleting previous build
ECHO %buildCutomControlFolderPath%
ECHO %outFolderPath%
ECHO %objFolderPath%
PAUSE
@RD /S /Q %buildCutomControlFolderPath%
@RD /S /Q %outFolderPath%
@RD /S /Q %objFolderPath%
ECHO Previous build deleted
ECHO Create new build folder
mkdir %buildCutomControlFolderPath%
ECHO build npm
PAUSE
call npm run build
ECHO run pac commands
PAUSE
cd %buildCutomControlFolderName% 
ECHO %CD%
PAUSE
call pac solution init --publisher-name %PUBLISHER_NAME% --publisher-prefix %PUBLISHER_PREFIX%
call pac solution add-reference --path %ROOT_FOLDER%
msbuild /t:restore
msbuild
ECHO PROCESS ENDED
PAUSE

ENDLOCAL
EXIT