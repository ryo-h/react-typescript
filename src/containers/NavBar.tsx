import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { IRootState } from '../modules/Reducer';

interface IOwnProps { // NavBarに実際表示する情報は外から与える
  data: Array<{
    display: string;
    path: string;
  }>;
}

const mapStateToProps = (state: IRootState, ownProps: IOwnProps) => {
  return {
    items: ownProps.data.map((e) => {
      return {
        disabled: state.router.location == null
          ? false
          : state.router.location.pathname === e.path, // stateからrouterの状態がとれる
        display: e.display,
        to: e.path,
      };
    }),
  };
};

interface IProps {
  items: Array<{
    display: string;
    to: string;
    disabled: boolean;
  }>;
}

const component: React.SFC<IProps> = (props: IProps) => {
  return (
    <ul>
      {
        props.items.map((e) => {
          return (
            <li key={e.display}>
              {
                e.disabled
                  ? e.display
                  : <Link to={e.to}>{e.display}</Link>
              }
            </li>
          );
        })
      }
    </ul>
  );
};

export default connect(mapStateToProps)(component);

// class App extends React.Component {
//   public render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.tsx</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
