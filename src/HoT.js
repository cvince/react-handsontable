import React, {Component} from 'react';
import numbro from 'numbro';
import moment from 'moment';
import pikaday from 'pikaday';
import Zeroclipboard from 'zeroclipboard';
import Handsontable from 'handsontable';
import HotTable from 'react-handsontable';

class HoT extends Component {
      constructor(props) {
        super(props);
        this.handsontableData = [
          ['', 'Ford', 'Volvo', 'Toyota', 'Honda'],
          ['2016', 10, 11, 12, 13],
          ['2017', 20, 11, 14, 13],
          ['2018', 30, 15, 12, 13]
        ];
      }

    render() {
        return <div>
            <div>Handsontable</div>
            <HotTable root="hot" data={this.handsontableData} colHeaders={true} rowHeaders={true} width="600" height="300" stretchH="all" />
        </div>;
    }
}

export default HoT;