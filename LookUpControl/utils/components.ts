import * as React from 'react';
import CustomDropDown from '../components/CustomDropDown';

export function generateDropDownComponent(fetchXML:string) : React.ReactElement{
    return React.createElement(
        CustomDropDown,
        {fetchXML}
      );
}