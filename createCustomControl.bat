SETLOCAL
@echo off
SET buildCutomControlFolderName=buildSolution
SET outFolderName=out
SET objFolderName=obj
SET buildCutomControlFolderPath=%CD%\%buildCutomControlFolderName%
SET outFolderPath=%CD%\%outFolderName%
SET objFolderPath=%CD%\%objFolderName%
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

PAUSE

ENDLOCAL
EXIT