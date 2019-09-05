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

export default class CustomDropDown extends React.Component<Props,State> {
    constructor(props: Props){
        super(props);
        this.state = { data: [] };
    }

    async _loadData(){
        const {fetchXML} = this.props;
        const data = await retriveRecords(fetchXML);
        this.setState({data});
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
                label="Basic uncontrolled example"
                onChange={this._onChange}
                options={data} 
                styles={dropdownStyles} 
            />
        );
    }
}