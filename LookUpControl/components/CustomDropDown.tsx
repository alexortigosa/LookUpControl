import * as React from 'react';
import { TagPicker, IBasePicker, ITag } from 'office-ui-fabric-react/lib/Pickers';
import {retriveRecords} from '../domain/domain';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

const rootClass = mergeStyles({
  maxWidth: 500
});

export interface Props {
    fetchXML : string
}
  


export default class CustomDropDown extends React.Component<Props> {
    constructor(props: Props){
        super(props);
        this.state = { isPickerDisabled: false , data: []};
    }

    public render () {
        return (
            <TagPicker
                onResolveSuggestions={this._onFilterChanged}
                getTextFromItem={this._getTextFromItem}
                pickerSuggestionsProps={{
                    suggestionsHeaderText: 'Duplicados sugeridos',
                    noResultsFoundText: 'Registros no encontrados'
                }}
                itemLimit={1}
                inputProps={{
                    onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
                    onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
                    'aria-label': 'Tag Picker'
                }}
        />
        );
    }


    private _getTextFromItem(item: ITag): string {
        return item.name;
      }
    
      private _onFilterChanged = (filterText: string): Promise<ITag[]> => {
        const {fetchXML} = this.props;
        return retriveRecords(fetchXML,filterText).then((data) => data.map((item: ITag) => ({ key: item, name: item }),(error:any) => console.log(error)));
      };
    
}