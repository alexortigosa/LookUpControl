import * as React from 'react';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import {retriveRecords} from '../domain/domain';

export interface Props {
    fetchXML : string
}

export interface State {
    data: Array<any>;
    selectedItem?: { key: string | number | undefined };
}
  
const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 300 }
};

const options: IDropdownOption[] = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' }
  ];

export default class CustomDropDown extends React.Component<Props,State> {
    constructor(props: Props){
        super(props);
        this.state = { data: [] };
    }

    async _loadData(){
        const {fetchXML} = this.props;
        //const data = await retriveRecords(fetchXML);
        //this.setState({data});
    }

    componentDidUpdate(){
        this._loadData();
    }

    private _onChange = (event: React.FormEvent<HTMLDivElement>, item: any): void => {
        console.log(`Selection change: ${item.text} ${item.selected ? 'selected' : 'unselected'}`);
        this.setState({ selectedItem: item });
      };

    public render () {
        const {data} = this.state;
        return (
            <Dropdown 
                placeholder="Select an option" 
                onChange={this._onChange}
                options={options} 
                styles={dropdownStyles} 
            />
        );
    }
}