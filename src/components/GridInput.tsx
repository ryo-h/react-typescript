import * as React from 'react';
import { Grid, GridCellProps } from 'react-virtualized';
import { InputRow, LabeledInput } from './LabeledInput';

  // Grid data as an array of arrays
  const list = [
    ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */]
    // And so on...
  ];

class GridInput extends React.PureComponent {

  public render() {
    const rowVal = {
      label: "Num columns",
      name: "columnCount",
      onChange:this._onColumnCountChange,
      value: 2
    };
    return (
      // <Grid
      //   cellRenderer={this.cellRenderer}
      //   columnCount={list[0].length}
      //   columnWidth={200}
      //   height={300}
      //   rowCount={list.length}
      //   rowHeight={30}
      //   width={800}
      //   autoContainerWidth={true}
      //   autoWidth={true}
      // />
      <InputRow>
        <LabeledInput input={rowVal}/>
      </InputRow>
    );
  }

  private cellRenderer(cellProps: GridCellProps): React.ReactNode {
    return (
      <div
        key={cellProps.key}
        style={cellProps.style}
      >
        {list[cellProps.rowIndex][cellProps.columnIndex]}
      </div>
    );
  }

  private _onColumnCountChange(event: any) {
    const columnCount = parseInt(event.target.value, 10) || 0;

    this.setState({ columnCount });
  }
}

export default GridInput;