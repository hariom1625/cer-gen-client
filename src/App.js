import React from 'react';
import axios from 'axios';
import {saveAs} from 'file-saver';
import './App.css';

class App extends React.Component {
state = {
name: ' ',
error : ''
}

handleChange = ({target : {value,name} }) => this.setState({ [name] :value })

createAndDownloadPdf = () => {

axios.post('/create-pdf', this.state)
.then(() => axios.get('fetch-pdf', { responseType: 'blob'}))
.then((res) => {
const pdfBlob = new Blob([res.data], {type: 'application/pdf' });

saveAs(pdfBlob,'newPdf.pdf');
})
}
render() {

  return (
    <div className="App">
          <div class="ui corner labeled input">
            <input type="text" placeholder="Name" name = "name" required="required" onChange={this.handleChange} />
            <div class="ui corner label">
              <i class="asterisk icon"></i>
            </div>

          </div>
          <button onClick={this.createAndDownloadPdf}>
          Download Certificate

          </button>


    </div>
  );
}
}

export default App;
